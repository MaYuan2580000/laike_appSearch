<template>
     <section class="page_shouConent">
         <section class="page_top van-hairline--bottom">
             <div class="topLeft">
                 <img :src="this.logo" alt="">
             </div>
             <div class="topMiddle">
                 <i class="iconfont icon-icon-"></i>
                 <input type="text" placeholder="搜索您想要的商品">
             </div>
             <div class="topRight">
                 <i class="iconfont icon-xinxi"></i>
             </div>
         </section>
         <section class="scrollMain">
         <section class="bannerSwiper">
             <van-swipe :autoplay="3000">
                <van-swipe-item v-for="(item, index) in images" :key="index">
                    <img :src="item.image" />
                </van-swipe-item>
                </van-swipe>
         </section>
         <center><section class="tabTitle">
                     <div v-for="(item,index) in plugin_arr" :key="index">
                         <img :src="item.image" alt="">
                         <p>{{item.name}}</p>
                     </div>
                   
         </section></center>       
         <section class="tabConent">
            <center> <ul class="ulStyle">
                 <li class="goods_li" v-for="(item,index) in list2" :key="index"
                    :class="{active:activeIndex == index}"
                    @click="goTab(index)"
                   
                   >
                     <span>{{item.pname}}
                         <div class="goods_li_border"></div>
                     </span>
                 </li>
        
             </ul>
                <section class="tabMain">
                        <div v-for="(item,index) in list" :key="index">
                            <img :src="item.imgurl" alt="">
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
         
            </van-tabs> -->
         </section>
             <section class="mainConet">
                 <div class="mainConentTop">
                       <p class="pOddstyle" style="font-size:1rem">猜你喜欢<span class="spanStyle" >精选人气商品,为您推荐</span></p>
                 </div>
                 <div class="mainConetLeft" v-for="(item,index) in list3" :key="index" @click="goodsDetailed(item)">
                     <div class="imgStyle">
                          <center><img :src="item.imgurl" alt=""></center>
                     </div>
                      <div class="titleMain">
                           <p>{{item.product_title}}</p>
                       <p  class="pStylee">￥{{item.price}}</p>
                       <p style="podd">月销量：{{item.volume}}件 <i class="iconfont icon-MoreoptionsVertical flotRight"></i></p>
                      </div>
                      
                 </div>
             </section>
         </section>
     </section>
</template>

<script>
import { Swipe, SwipeItem, Tab, Tabs } from "vant";
import axios from "axios";
import { getHomeData } from "../api/home.js";
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
      activeIndex: 0,
    
    };
  },
  components: {
    [Swipe.name]: Swipe, //引入第三方库轮播
    [SwipeItem.name]: SwipeItem, //引入第三方库轮播
    // [Tab.name]: Tab,
    // [Tabs.name]: Tabs
  },
  created() {
    getHomeData()
      .then(res => {
        //   console.log(res)
        this.images = res.data.data.banner; //循环banner轮播图
        this.logo = res.data.data.logo;//获取data里面的logo图片
        this.plugin_arr = res.data.data.plugin_arr; //获取拼团里面的数据
        this.list2 = res.data.data.list2;//获取tab里面的数据
        this.list = res.data.data.list2[0].list;//获取tab里面list的数据
        this.list3 = res.data.data.list3;//获取内容区域的数据
      })
      .catch(err => {
        console.log("err");
      });
  },

  methods: {
    goTab(index) {
       this.activeIndex = index;
        console.log(this.list = this.list2[index].list)
       this.list = this.list2[index].list
      
    },
    goodsDetailed(id){
      // console.log(id)
        this.$router.push({path:'/Home/goodsDetailed',query:{id:id}})
    }
  }
};
</script>

<style lang="less" scoped>
.page_shouConent {
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  background: #eeeeee;
  .page_top {
    z-index: 99999;
    width: 100%;
    height: 2.5rem;
    position: fixed;
    top: 0;
    left: 0;
    display: flex;
    background: #fff;
    .topLeft {
      width: 22%;

      img {
        width: 4rem;
        margin-top: 0.7rem;
      }
    }
    .topMiddle {
      width: 63%;
      position: relative;
      input {
        width: 95%;
        height: 1.7rem;
        margin-top: 0.3rem;
        background: #f4f4f4;
        outline: none;
        border: none;
        font-size: 0.27rem;
        text-indent: 1.8rem;
      }
      i {
        position: absolute;
        font-size: 1.3rem;
        top: 0.5rem;
        left: 0.7rem;
      }
    }
    .topRight {
      width: 15%;

      i {
        font-size: 1.7rem;
        display: inline-block;
        margin-top: 0.3rem;
      }
    }
  }
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
