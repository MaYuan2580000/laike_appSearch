<template>
    <section class="classifyConent">
        <!-- <section class="classifyTop">
            <P>全部分类</P>
        </section> -->
        <Header title="全部分类"></Header>
        <!-- <van-loading size="24px" vertical>加载中...</van-loading> -->
        <section class="classifyMain">
            <div class="mainLeft">
                <ul>
                    <li v-for="(item,index) in ListTitle" :key="index"
                    :class="{active:activeIndex == index}"
                     @click="goTab(index)"
                    >
                        <span>{{item.cate_name}}</span>
                        <center><div class="goods_li_border"></div></center>
                    </li>
             
                </ul>
            </div>
            <div class="mainRight">
                <div v-for="(item,index) in children" :key="index">
                    <center><img :src="item.picture" alt="">
                     <p>{{item.name}}</p>
                    </center>
                </div>
              
            </div>
        </section>
        
    </section>
</template>

<script>
import Header from "../components/header";
import { getclassify } from "../api/home.js";
import { Loading  } from "vant";
export default {
  data() {
    return {
      ListTitle: [],
      children:[],
      activeIndex: 0,
    };
  },
  components:{
      Header,
      [Loading.name]: Loading ,
  },
  created() {
    getclassify()
      .then(res => {
          console.log(res)
        this.ListTitle = res.data.List;
        // console.log(this.children= res.data.List[0].children)
        this.children= res.data.List[0].children
        
      })
      .catch(err => {
        console.log("err");
      });
  },
  methods: {
    goTab(index) {
   
       this.activeIndex = index;
        // console.log(this.children = this.List[index].children)
       this.children = this.ListTitle[index].children
      
    }
    }
};
</script>

<style lang="less" scoped>
.classifyConent {
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  .classifyTop {
    height: 3rem;
    border-bottom: 1px solid #f3f3f3;
    line-height: 3rem;
    font-weight: 700;
  }
  .classifyMain {
    flex: 1;
    display: flex;
    .mainLeft {
      width: 30%;
      height: 35.5rem;
      border-right: 1px solid #f3f3f3;
      ul li {
        height: 45px;
        line-height: 56px;
      }
    }
    .mainRight {
      width: 68%;
      text-align: left;
      div {
        width: 33.3%;
        float: left;
        margin-top: 1rem;
        img {
            width: 5rem;
            height: 5rem;
          margin-bottom: 0.5rem;
        }
        p{
            font-size: 0.8rem;
        }
      }
    }
    .active {
      color: #505050;
      font-weight: 700;
      .goods_li_border {
        height: 2px;
        background-color: #2b2b2b;
        width: 15px;
        transform: translateX(-40%);
        margin-left: 0.8rem;
        margin-top: -0.8rem;
      }
    }
  }
}
</style>
