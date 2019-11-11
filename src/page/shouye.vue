<template>
  <section class="page_shouConent">
    <Header leftArrow border fixed>
      <img :src="this.logo" alt slot="headerLeft" class="imgs" />
      <div slot="headerTitle" class="box">
        <i class="iconfont icon-icon-"></i>
        <input type="text" placeholder="请输入您想要的商品" class="inputStyle" @focus="serach" />
      </div>
      <i class="iconfont icon-xinxi iconStyle" slot="headerRight"></i>
    </Header>

    <section class="scrollMain">
      <section class="bannerSwiper">
        <van-swipe :autoplay="3000">
          <van-swipe-item v-for="(item, index) in images" :key="index">
            <img :src="item.image" />
          </van-swipe-item>
        </van-swipe>
      </section>
      <center>
        <section class="tabTitle">
          <div v-for="(item,index) in plugin_arr" :key="index" @click="tabList">
            <img :src="item.image" alt />
            <p>{{item.name}}</p>
          </div>
        </section>
      </center>
      <section class="tabConent">
        <center>
          <ul class="ulStyle">
            <li
              class="goods_li"
              v-for="(item,index) in list2"
              :key="index"
              :class="{active:activeIndex == index}"
              @click="goTab(index)"
            >
              <span>
                {{item.pname}}
                <div class="goods_li_border"></div>
              </span>
            </li>
          </ul>
          <section class="tabMain">
            <div v-for="(item,index) in list" :key="index" @click="goodsDetClick(index)">
              <img :src="item.imgurl" alt />
              <p class="van-ellipsis pTitle">{{item.product_title}}</p>
              <p class="pStyle">￥{{item.price}}</p>
            </div>
          </section>
        </center>
        <!-- <van-tabs v-model="active">
            <van-tab :title="item.pname" v-for="(item,index) in list2" style="background:red"   :key="index" @click="goTo(index)">
                  <section class="tabMain">
                        <div v-for="(item,index) in list" :key="index">
                            <img :src="item.imgurl" alt="">
                            <p class="van-ellipsis pTitle">{{item.product_title}}</p>
                            <p class="pStyle">￥{{item.price}}</p>
                        </div>
                 
                  </section>
            </van-tab>
         
        </van-tabs>-->
      </section>
      <section class="mainConet">
        <!-- <div class="top-tip">
                    <span class="refresh-hook">{{pulldownMsg}}</span>
        </div>-->
        <div class="mainConentTop">
          <p class="pOddstyle" style="font-size:1rem">
            猜你喜欢
            <span class="spanStyle">精选人气商品,为您推荐</span>
          </p>
        </div>
        <div
          class="mainConetLeft"
          v-for="(item,index) in list3"
          :key="index"
          @click="goodsDetailed(index)"
        >
          <div class="imgStyle">
            <center>
              <img v-lazy="item.imgurl" alt />
            </center>
          </div>
          <div class="titleMain">
            <p>{{item.product_title}}</p>
            <p class="pStylee">￥{{item.price}}</p>
            <p style="podd">
              月销量：{{item.volume}}件
              <i class="iconfont icon-MoreoptionsVertical flotRight"></i>
            </p>
          </div>
        </div>
      </section>
    </section>
  
    <!-- <div class="alert-hook" :style="{display: alertHook}">刷新成功</div> -->
    <TabBar></TabBar>
  </section>
</template>

<script>
import { Swipe, SwipeItem, Tab, Tabs } from "vant";
import axios from "axios";
import { getHomeData } from "../api/home.js";
import TabBar from "../components/tabBar.vue";
import Header from "../components/header.vue";
import BScroll from "better-scroll";

export default {
  data() {
    return {
      images: [], //图片渲染的数组
      logo: "", //logo
      plugin_arr: [], //标题
      active: 0,
      list2: [], //tab,
      list: [], //tab里面的数据
      list3: [], //main里面的数据
      activeIndex: 0
    };
  },
  components: {
    [Swipe.name]: Swipe, //引入第三方库轮播
    [SwipeItem.name]: SwipeItem, //引入第三方库轮播
    // [Tab.name]: Tab,
    // [Tabs.name]: Tabs,
    TabBar,
    Header
  },
  created() {
    this.getList();
    // var i=300;
    // setTimeout(function(){
    //   for(var i=0;i<10;i++){
    //         i+=i;
    //         console.log(i)
    //   }
    // },i)

  },
  
  methods: {
    getList() {
      getHomeData()
        .then(res => {
          //   console.log(res)
          this.images = res.data.data.banner; //循环banner轮播图
          this.logo = res.data.data.logo; //获取data里面的logo图片
          this.plugin_arr = res.data.data.plugin_arr; //获取拼团里面的数据
          this.list2 = res.data.data.list2; //获取tab里面的数据
          this.list = res.data.data.list2[0].list; //获取tab里面list的数据
          this.list3 = res.data.data.list3; //获取内容区域的数据
        })
        .catch(err => {
          console.log("err");
        });
    },
    refreshalert() {
      //刷新成功提示
      this.alertHook = "block";
      setTimeout(() => {
        this.alertHook = "none";
      }, 1000);
    },
    goTab(index) {
      this.activeIndex = index;
      // console.log(this.list = this.list2[index].list)
      this.list = this.list2[index].list;
    },
    goodsDetailed(index) {
      // console.log(index)
      const that = this;
      var listLength = that.list3[index];
      // goodsDetailed(listLength.id).then(res => {
      //   localStorage.setItem("res", JSON.stringify(res));
      // });
      // console.log(listLength)
      this.$router.push({
        path: "/goodsDetailed",
        query: { pro_id: listLength.id }
      });
    },
    goodsDetClick(index) {
      const that = this;
      var listStyle = that.list[index];
      this.$router.push({
        path: "/goodsDetailed",
        query: { pro_id: listStyle.id }
      });
    },
    //获取焦点是跳转页面
    serach() {
      this.$router.push({ path: "/serachpage" });
    },
    tabList(){
      this.$router.push({ path: "/Assemble" });
    }
  }
};
</script>

<style lang="less" scoped>
.inputStyle {
  height: 1.5rem;
  border: none;
  outline: nonel;
  background: #f4f4f4;
  font-size: 0.3rem;
  width: 90%;
  text-indent: 30px;
}
.imgs {
  width: 85%;
}
.iconStyle {
  font-size: 22px;
}
.box {
  position: relative;
  i {
    position: absolute;
    font-size: 20px;
    left: 0.9rem;
    top: 0.05rem;
  }
}
.top-tip {
  position: absolute;
  top: 0%;
  left: 0;
  z-index: 1;
  width: 100%;
  height: 40px;
  line-height: 40px;
  text-align: center;
  color: #555;
}
.alert-hook {
  display: block;
  position: fixed;
  top: 62px;
  left: 0;
  z-index: 2;
  width: 100%;
  height: 35px;
  line-height: 35px;
  text-align: center;
  color: #fff;
  font-size: 12px;
  background: rgba(7, 17, 27, 0.5);
}
.page_shouConent {
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  background: #eeeeee;

  .bannerSwiper {
    width: 100%;
    height: 14rem;
    img {
      width: 100%;
      height: 14rem;
    }
  }
  .tabTitle {
    width: 90%;
    height: 5.8rem;
    position: relative;
    top: -0.5rem;
    display: flex;
    box-shadow: 0 0 2px 2px #dddddd;

    div {
      width: 20%;
      background: #ffffff;
      color: #494949;
      font-size: 0.8rem;
      font-weight: 700;

      img {
        width: 3rem;
        margin-top: 0.8rem;
        margin-bottom: 0.5rem;
      }
    }
  }
  .tabConent {
    height: 11.2rem;
    background: #fff;
    position: relative;
    width: 100%;
    overflow: scroll;
    .ulStyle {
      width: 525px;
      height: 40px;
      display: flex;
    }
    .goods_li {
      height: 40px;
      float: left;
      width: 75px;
      line-height: 40px;
    }

    .active {
      color: #505050;
      font-weight: 700;
      .goods_li_border {
        height: 2px;
        background-color: #2b2b2b;
        width: 15px;
        transform: translateX(-50%);
        margin-left: 0.8rem;
      }
    }
    .tabMain::-webkit-scrollbar {
      width: 0px;
    }
    .tabConent::-webkit-scrollbar {
      width: 0px;
    }
    .tabMain {
      display: flex;
      overflow-x: auto;
      div {
        width: 33.3%;
        font-size: 0.5rem;
        img {
          width: 4rem;
          height: 4rem;
          margin-top: 1rem;
        }
        .pStyle {
          margin-right: 1.5rem;
          color: #ff0000;
          margin-top: 0.3rem;
          font-weight: 700;
          margin-bottom: 0.5rem;
        }
        .pTitle {
          padding-left: 1rem;
          padding-top: 0.7rem;
        }
      }
    }
  }
  .scrollMain {
    flex: 1;
    overflow: auto;
  }
  .mainConet {
    height: auto;
    overflow: hidden;
    position: relative;
    background: #ffffff;
    margin-top: 0.5rem;
    .mainConentTop {
      height: 2rem;
      text-align: left;
      line-height: 2rem;
      .pOddstyle {
        padding-left: 0.5rem;
        margin-top: 0.3rem;
        font-weight: 700;
        color: #020202;
        .spanStyle {
          display: inline-block;
          padding-left: 0.8rem;
          font-size: 0.2rem;
          color: #9d9d9d;
        }
      }
    }
    .mainConetLeft {
      width: 50%;
      background: #ffffff;
      float: left;
      text-align: left;
      .flotRight {
        float: right;
        padding-right: 2rem;
        margin-top: -0.2rem;
      }
      .imgStyle {
        width: 100%;
        height: 8rem;
      }
      .titleMain {
        height: 5rem;
        .pStylee {
          color: #ff0000;
          font-weight: 700;
        }
      }
      img {
        width: 70%;
        margin-top: 0.8rem;
        height: 7rem;
      }
      p {
        font-size: 0.8rem;
        padding-top: 0.5rem;
        padding-left: 1rem;
      }
    }
  }
}
</style>
