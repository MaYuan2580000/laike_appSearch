<template>
  <div class="page-category">
    <Header title="全部分类"  leftArrow border fixed></Header>
    <div class="category-block">
      <div class="left-wrapper">
        <ul>
          <li
            class="menu-item"
            v-for="(item,index) in cateList"
            :key="index"
            @click="currentMenu(index)"
            :class="{current: currentIndex === index  ? true : false}"
          >
            <span>{{item.cate_name}}</span>
          </li>
        </ul>
      </div>
 
      <div class="right-wrapper">
        <ul>
          <li v-for="(goods,index) in cateList" :key="index" ref="itemList">
            <div class="category-title">
              <h4>{{goods.cate_name}}</h4>
            </div>
            <ul class="goods-items">
              <li v-for="(item, index1) in goods.children" :key="index1">
                <img :src="item.picture" alt />
                <span>{{item.name}}</span>
              </li>
            </ul>
          </li>
        </ul>
      </div>
    </div>
    <tab-bar></tab-bar>
  </div>
</template>

<script>
import TabBar from "../components/tabBar.vue";
import Header from "../components/header";
import BScroll from "better-scroll";
import { getclassify } from "../api/home.js";
export default {
  name: "Category",
  components: {
    TabBar,
    Header
  },
  data() {
    return {
      cateList: [], // 分类数据集合
      scrollY: 0, // 右侧页面滚动的位置，通过触发BScroll中提供的onScroll方法
      listHeight: [] // 记录右侧商品的li的高度
    };
  },
  computed: {
    //利用vue中的计算属性computed实时计算，对listHeight遍历，返回当前的左边left-wrapper的li
    //对应的index，从而让其显示高亮的属性.current
    currentIndex() {
      const { listHeight, scrollY } = this;
      for (let i = 0; i < listHeight.length; i++) {
        if (this.scrollY >= listHeight[i] && this.scrollY < listHeight[i + 1]) {
          return i;
        }
      }
      //默认情况下是返回第一个元素
      return 0;
    }
  },
  created() {
    // 调用接口
    getclassify()
      .then(res => {
        this.cateList = res.data.List;
        // nextTick 异步更新dom元素
        this.$nextTick(() => {
          this.initBScroll();
          this.initHeightList();
        });
      })
      .catch(err => {
        console.log(err);
      });
  },
  methods: {
    initBScroll() {
      // 初始化左边滚动列表
      this.leftBscroll = new BScroll(".left-wrapper", {
        click: true //滑动列表默认是没有点击的，必须加上这个才能触发左侧的点击事件
      });

      // 初始化左边滚动列表
      this.rightBscroll = new BScroll(".right-wrapper", {
        click: true,
        probeType: 3 //设置实时监听滚动的位置的效果的属性
      });

      // 右侧滚动时记录滚动位置scrollY
      this.rightBscroll.on("scroll", pos => {
        this.scrollY = Math.abs(pos.y);
      });
    },
    //将右侧的.right-wrapper里面的每个li的高度进行累加，存放到数组listHeight里面
    initHeightList() {
      // 默认第一个元素的高度是0
      let height = 0;
      this.listHeight.push(height);
      // 获取所有的dom元素li标签
      const lis = this.$refs.itemList;
      for (let i = 0; i < lis.length; i++) {
        //通过原生DOM中的js获取到li的高度，并且累加
        height = height + lis[i].clientHeight;
        this.listHeight.push(height);
      }
    },
    // 左侧点击时滚动事件
    currentMenu(index) {
      //根据左侧的index找到右侧的dom元素
      const el = this.$refs.itemList[index];
      this.rightBscroll.scrollToElement(el, 300);
      // scrollToElement(要滚动的dom元素，滚动的时间)滚动到指定的元素，
    }
  }
};
</script>

<style lang="less" scoped>
.page-category {
  width: 100%;
  height: 100%;
  background-color: #f5f5f5;
  overflow: hidden;

  .category-block {
    display: flex;
    position: absolute;
    top: 44px;
    bottom: 50px;
    width: 100%;
    overflow: auto;
     margin-top: 0.5rem;
    .left-wrapper {
      background-color: #f3f5f7;
      width: 80px;
      flex: 0 0 80px;
      .menu-item {
        width: 100%;
        height: 60px;
        position: relative;
        display: flex;
        justify-content: center;
        align-items: center;
        font-family: lighter;
        color: #666;

        &.current {
          background: #fff;
          color: rgb(2, 2, 2);
          font-weight: 600;

          &::before {
            content: "";
            background-color: #e02e24;
            width: 4px;
            height: 30px;
            position: absolute;
            left: 0;
          }
        }
      }
    }

    .right-wrapper {
      flex: 1;
      background: #fff;
      .category-title {
        display: flex;
        flex-direction: row;
        padding: 0 10px;
        height: 40px;
        align-items: center;
        justify-content: space-between;
        background-color: #f3f5f7;
      }

      .goods-items {
        display: flex;
        flex-wrap: wrap;

        li {
          display: flex;
          flex-direction: column;
          width: 33.3%;
          padding: 15px 0;
          justify-content: center;
          align-items: center;

          img {
            width: 75px;
            height: 75px;
            margin-bottom: 10px;
          }

          span {
            color: #151516;
            font-size: 13px;
          }
        }
      }
    }
  }
}
</style>