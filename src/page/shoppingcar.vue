<template>
    <div class="shopcar">
        <Header title="购物车" >
          <span slot="headerRight">编辑</span>
        </Header>
       <body>

       <ul>
      <li>
        <div class="boxs">
          <div class="shop-name">
            <div class="img1">
              <img
               ref="spcheck"
                src="https://xiaochengxu.laiketui.com/V2.4/H5/static/img/xuanzehui2x.png"
              />
            </div>
            <div class="img2">
              <img src="https://xiaochengxu.laiketui.com/V2.4/H5/static/img/store.png" />
            </div>
            <p>来客推</p>
            <div class="img3">
              <img src="https://xiaochengxu.laiketui.com/V2.4/H5/static/img/jiantou2x.png" />
            </div>
          </div>
          <div class="shujus" v-for="(item,index) in data" :key="index">
            <!-- 单个商品 -->
            <img
              src="https://xiaochengxu.laiketui.com/V2.4/H5/static/img/xuanzehui2x.png"
              style="width: 18px; height: 18px; margin-right: 13px;"
              ref="Multiple"
              @click="ImageClick(index)"
            />
            <div style="margin: 0px 19px;">
              <img :src="item.skuBeanList.imgurl" class="goods_img" />
            </div>
            <div class="goods_right">
              <div>
                <!-- <p class="order_p_name" style="font-size: 15px;">{{value.data.name}}</p> -->
                <div class="goodDetail">
                  <div>{{item.skuBeanList.name}}</div>
                  <img
                    src="https://xiaochengxu.laiketui.com/V2.4/H5/static/img/jianX.png"
                    class="img_X"
                  />
                </div>
              </div>
              <div class="goods_bottom">
                <p style="color: black;">
                  <span style="font-size: 14px; color: rgb(2, 2, 2);">￥</span>
                  <span style="font-size: 15px;">{{item.skuBeanList.price}}</span>
                  <span ref="subTotal">{{item.skuBeanList.price * item.num}}</span>
                </p>
                <div class="goods_mun">
                  <span style="border-right: 1px solid rgb(221, 221, 221);">
                    <img src="https://xiaochengxu.laiketui.com/V2.4/H5/static/img/jianhui2x.png" 
                    @click="poPuShList(index)"/>
                    
                  </span>
                  <span class="mun1">{{item.num}}</span>
                  <span style="border-left: 1px solid rgb(221, 221, 221);">
                    <img src="https://xiaochengxu.laiketui.com/V2.4/H5/static/img/add+2x.png"
                     @click="poPSList(index)"
                     />
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </li>
    </ul>
            <section class="mainConet">
              <section class="page-shopCarMain">
               <i class="iconfont icon-tubiaozhizuomoban"></i>
               <p>购物车是空的</p>
               <span>去逛逛</span>
              </section>
                  <section class="page-tuijian">
            <div class="discover_left">
                <i></i>
            </div>
            <div>为您推荐</div>
            <div class="discover_right">
                <i></i>
            </div>
        </section>
               
                 <div class="mainConetLeft" v-for="(item,index) in liList" :key="index">
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
       </body>
      <div class="bottom" style="height: 54px; margin-bottom: 55px;">
    <div @click="checkeds" class="bottom_left">
      <img
        src="https://xiaochengxu.laiketui.com/V2.4/H5/static/img/xuanzehui2x.png"
        class="quan_img"
        ref="checkeds"
      />
      <span>全选</span>
    </div>
    <div  class="bottom_right">
      <span style="color: rgb(2, 2, 2);">
        合计：
        <span style="color: red;">￥{{sumSum}}</span>
      </span>
      <div style="font-size: 16px;">去支付{{numNum}}</div>
    </div>
  </div>
      
    
       <TabBar></TabBar>
        <!-- 
        <section class="page-tuijian">
            <div class="discover_left">
                <i></i>
            </div>
            <div>为您推荐</div>
            <div class="discover_right">
                <i></i>
            </div>
        </section> -->
    
    </div>
</template>

<script>
import Header from "../components/header";
import TabBar from "../components/tabBar.vue";
import { Checkbox, Toast } from "vant";
import { tuijian } from "../api/home.js";
export default {
  data() {
    return {
      quanxuan: true, //全选
      checked:
        "https://xiaochengxu.laiketui.com/V2.4/H5/static/img/xuanzehei2x.png", //选中
      checkedFalse:
        "https://xiaochengxu.laiketui.com/V2.4/H5/static/img/xuanzehui2x.png", //没选中
      data: [], //全部的数据,
      checkList: 0,
      sumSum: 0, //总价
      numNum: 0, //总数
      bianji: true, //编辑按钮
      liList: []
    };
  },
  components: {
    Header,
    TabBar,
    [Toast.name]: Toast
  },
  created() {
    let Vuex = this.$store.state.count;
    // data
    this.data = Vuex;
    tuijian().then(res => {
      console.log(res);
      if (this.liList.length != 2) {
        for (let i = 0; i < 2; i++) {
          let Ranmod = Math.floor(Math.random() * res.data.list.length);
          this.liList.push(res.data.list[Ranmod]);
        }
      }
    });
  },

  methods: {
    login() {
      this.$router.push({ path: "/login" });
    },
    btn() {
      console.log(111);
    },
    checkeds() {
      let checkeds = this.$refs.checkeds; //全选按钮
      let spcheck = this.$refs.Multiple; //商品选中
      console.log(spcheck);
      if (checkeds.src == this.checkedFalse) {
        checkeds.src = this.checked;
        for (let i = 0; i < spcheck.length; i++) {
          spcheck[i].src = this.checked;
        }
        this.checkList = spcheck.length;
      } else {
        checkeds.src = this.checkedFalse;
        for (let i = 0; i < spcheck.length; i++) {
          spcheck[i].src = this.checkedFalse;
        }
        this.checkList = 0;
      }

      this.getListPrice();
    },
    //点击图片点击事件
    ImageClick(index) {
      // console.log(index);
      // debugger;
      let numm = this.$refs.subTotal[index]; //获取当前小计
      let spcheck = this.$refs.Multiple[index]; //单选框按钮
      let checkeds = this.$refs.checkeds; //全选按钮
      if (spcheck.src == this.checked) {
        spcheck.src = this.checkedFalse;
        this.checkList--;
      } else {
        spcheck.src = this.checked;
        this.checkList++;
      }
      // console.log(this.checkList);
      if (this.checkList == this.$refs.Multiple.length) {
        checkeds.src = this.checked;
        console.log(111);
      } else {
        console.log("000");
        checkeds.src = this.checkedFalse;
      }
      this.getListPrice();
    },
    //加事件
    poPSList(index) {
      // console.log(index)
      let dataList = this.data[index];
      let numNum = this.data[index].num++;
      let Vuex = this.$store;
      Vuex.commit("ADD_FES", data);
      this.getListPrice();
    },
    //减事件
    poPuShList(index) {
      let Vuex = this.$store;
      if (this.data[index].num > 1) {
        this.data[index].num--;
        Vuex.commit("ADD_FES", store);
      } else {
        Toast("商品最少一件");
      }
      this.getListPrice();
    },
    //商品总价
    getListPrice() {
      let Multiple = this.$refs.Multiple;
      let sumOrr = 0;
      let numOrr = 0;
      let subTotal = this.$refs.subTotal;
      for (let i = 0; i < Multiple.length; i++) {
        if (Multiple[i].src == this.checked) {
          sumOrr += parseInt(subTotal[i].innerHTML);
          numOrr += parseInt(this.data[i].num);
        }
      }
      this.sumSum = sumOrr.toFixed(2);
      this.numNum = numOrr;
    }
  }
};
</script>

<style lang="less" scoped>
.shopcar {
  width: 100vw;
  height: 100vh;
  display: flex;
  flex-direction: column;
  body {
    flex: 1;
    overflow: auto;
    background-color: #f8f8f8;
    .shop-name {
      height: 44px;
      border-top: 1px solid #e6e6e6;
      border-bottom: 1px solid #e6e6e6;
      align-items: center;
      display: flex;
      background-color: #fff;
      p {
        color: #666;
      }
      .img1 {
        width: 18px;
        height: 18px;
        margin: 0 16px;
      }
      .img2 {
        width: 18px;
        height: 16px;
        margin-right: 6px;
      }
      .img3 {
        width: 8px;
        height: 14px;
        position: relative;
        top: -2px;
        left: 8px;
      }
      img {
        width: 100%;
        height: 100%;
      }
    }
  }
  .boxs {
    width: 100%;
    height: auto;
  }
  .shujus {
    background-color: #fff;
    padding: 16px;
    font-size: 13px;
    color: #020202;
    align-items: center;
    border-bottom: 1px solid #eee;
    display: flex;
    .order_p_name {
      margin-bottom: 11px;
      width: 100%;
      display: -webkit-box;
      -webkit-box-orient: vertical;
      -webkit-line-clamp: 1;
      overflow: hidden;
    }
    .goodDetail {
      color: #9d9d9d;
      margin-top: 9px;
      height: 22px;
      width: 85px;
      padding: 0 11px;
      background-color: #f8f8f8;
      display: flex;
      align-items: center;
      justify-content: space-between;
      box-sizing: border-box;

      div {
        width: 77px;
        margin-right: 5px;
        white-space: nowrap;
        -o-text-overflow: ellipsis;
        text-overflow: ellipsis;
        overflow: hidden;
        color: #9d9d9d;
        font-size: 12px;
        // font-size: 13px;
      }
      .img_X {
        width: 13px;
        height: 7px;
        margin-left: 0.5px;
      }
    }
    .goods_right {
      width: 64%;
    }
    .goods_bottom {
      display: flex;
      align-items: center;
      text-align: center;
      position: relative;
      margin-top: 11px;
    }
    .goods_mun {
      position: absolute;
      display: flex;
      align-items: center;
      text-align: center;
      color: #9d9d9d;
      background-color: #f8f8f8;
      right: 0;
      height: 25px;
      width: 93px;
      border: 1px solid #ddd;
      border-radius: 4px;
      span {
        align-items: center;
        display: flex;
        justify-content: center;
      }
      img {
        width: 8px;
        height: 8px;
        padding: 5px;
      }
      .mun1 {
        flex: 1;
      }
    }
  }
  .goods_img {
    width: 82px;
    height: 82px;
  }
  .bottom {
    display: flex;
    align-items: center;
    position: relative;
    .quan_img {
      margin: -3px 6px 0 16px;
      vertical-align: middle;
    }
    .bottom_right {
      position: absolute;
      right: 0;
      top: 0;
      display: flex;
      align-items: center;
      div {
        width: 132px;
        color: #fff;
        background-color: #020202;
        height: 54px;
        text-align: center;
        line-height: 54px;
        margin-left: 27px;
        border-top: 1px solid #ccc;
        border-bottom: 1px solid #eee;
        -webkit-box-sizing: content-box;
        box-sizing: content-box;
      }
    }

    .quan_img {
      width: 18px;
      height: 18px;
    }
  }
}
.shopcar::-webkit-scrollbar {
  display: none;
}
.mainConet {
  height: auto;
  overflow: hidden;
  position: relative;
  background: #ffffff;
  margin-top: 0.5rem;
  .page-shopCarMain {
    text-align: center;
    font-size: 15px;
    color: #9d9d9d;
    background-color: #fff;
    padding: 20px 0;
    i {
      font-size: 50px;
    }
    p {
      margin-top: 10px;
      margin-bottom: 20px;
    }
    span {
      border: 1px solid #242424;
      border-radius: 2px;
      width: 110px;
      height: 35px;
      display: flex;
      align-items: center;
      justify-content: center;
      margin: 0 auto;
    }
  }
  .page-tuijian {
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 15px 0;
    .discover_left {
      border-bottom: 1px solid #9d9d9d;
      position: relative;
      width: 35px;
      margin-right: 10px;
      i {
        width: 5px;
        height: 5px;
        border-radius: 50%;
        background-color: #9d9d9d;
        position: absolute;
        bottom: -3px;
        right: 0;
      }
    }
    .discover_right {
      border-bottom: 1px solid #9d9d9d;
      position: relative;
      width: 35px;
      margin-left: 10px;
      i {
        width: 5px;
        height: 5px;
        border-radius: 50%;
        background-color: #9d9d9d;
        position: absolute;
        bottom: -3px;
        left: 0;
      }
    }
  }

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
</style>
