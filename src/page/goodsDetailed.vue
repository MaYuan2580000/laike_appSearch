<template>
  <section class="goodsConent">
    <section class="mainConent">
      <section class="goodsImageBox">
        <section class="goodsIconTop">
          <div class="IconLeft" @click="gotoBack">
            <i class="iconfont icon-fanhui"></i>
          </div>
          <div class="IconRight">
            <i class="iconfont icon-icon_share fenxiang"></i>
            <i class="iconfont icon-gouwuche" @click="pageShopCar"></i>
            <transition name="shop_cart">
              <span
                v-if="addShow"
                v-show="this.$store.state.count.length>0"
              >{{this.$store.state.count.length}}</span>
            </transition>
          </div>
        </section>
        <section class="ode">
      
                <div class="loadingStyle" v-if="loding">图片加载中
                    <van-loading type="spinner"  class="lodonggg"/>
                </div>
       
          <section v-if="swiper">
            <section class="goodTopImage">
              <van-swipe :autoplay="3000" :show-indicators="false">
                <van-swipe-item v-for="(image, index) in detailedList.img_arr" :key="index">
                  <img :src="image" />
                </van-swipe-item>
              </van-swipe>
            </section>
            <section class="goodTopTitle">
              <p class="priceStyle">
                ￥
                <span>{{detailedList.price}}</span>
              </p>
              <p>{{detailedList.name}}</p>
            </section>
          </section>
        </section>
      </section>

      <section class="Securities">
        <p @click="showJuan">领劵</p>
        <p>
          <i class="iconfont icon-jiantouyou"></i>
        </p>
        <van-popup v-model="showd" position="bottom" :style="{ height: '60%'}">
          <section class="couponMain">
            <section class="couponTop">
              <div class="couponMiddle">
                <span>优惠劵</span>
              </div>
              <div class="couponRight">
                <i class="iconfont icon-guanbi" @click="counButton"></i>
              </div>
            </section>
            <section class="couponConent">
              <section class="couponItem" v-for="(item,index) in couponListNeww" :key="index">
                <div class="leftPart">
                  <p class="mony">
                    <span class="fuhao">￥</span>
                    {{item.isActive=='包邮'? item.isActive:item.money}}
                  </p>
                  <p class="payLine">{{item.limit}}</p>
                </div>
                <div class="splitLine"></div>
                <div class="rightPart">
                  <p class="limit">{{item.name}}</p>
                  <p class="limitDate">{{item.start_time}}-{{item.end_time}}</p>
                  <button class="toReceive">{{item.point}}</button>
                </div>
              </section>
            </section>
          </section>
        </van-popup>
      </section>

      <section class="Securities">
        <p @click="showPopup">选择商品价格</p>

        <p>
          <i class="iconfont icon-jiantouyou"></i>
        </p>
        <van-popup v-model="shows" position="bottom" :style="{ height: '70%',overflow:'none'}">
          <section class="popupMain">
            <div class="popupTop">
              <div class="popuTopLeft">
                <img :src="skuBeanList.imgurl" alt />
              </div>
              <div class="popuTopMiddle">
                <p style="color:red">￥{{skuBeanList.price}}</p>
                <p>库存{{skuBeanList.count}}</p>
              </div>
              <div class="popuTopRight">
                <i class="iconfont icon-guanbi" @click="iconfonts"></i>
              </div>
            </div>
            <div class="popupMiddle" v-for="(item,index) in data.attrList" :key="index">
              <p>{{item.attrName}}</p>
              <ul>
                <li
                  v-for="(item,index) in data.skuBeanList"
                  :key="index"
                  @click="tabList(index)"
                  :class="{active:activeIndex == index}"
                >{{item.name}}</li>
              </ul>
            </div>
            <div class="xian"></div>
            <div class="popupBottom">
              <div>
                <span>购买数量</span>
              </div>
              <div class="divSpan">
                <span @click="jian">-</span>
                <span>{{num}}</span>
                <span @click="num++">+</span>
              </div>
            </div>
          </section>
          <button class="buttonQueren" @click="buttonBtn">确认</button>
        </van-popup>
      </section>

      <section class="Securities" @click="evaluate">
        <p>用户评价 (1)</p>
        <p>
          <i class="iconfont icon-jiantouyou"></i>
        </p>
      </section>
      <section class="Securitiess">
        <div class="detailedTop">
          <div class="detailedLeft">
            <img :src="shop_list.shop_logo" alt />
            <span>{{shop_list.shop_name}}</span>
          </div>
          <div class="detailedRight">
            <button>进店逛逛</button>
          </div>
        </div>
        <div class="detaileDbottom">
          <div>
            <p>{{shop_list.quantity_on_sale}}</p>
            <p>在售商品</p>
          </div>
          <div>
            <p>{{shop_list.quantity_sold}}</p>
            <p>已售</p>
          </div>
          <div>
            <p>{{shop_list.collection_num}}</p>
            <p>关注人数</p>
          </div>
        </div>
      </section>
      <section class="Securitiest">
        <p>商品详情</p>
        <section class="dellaiImage">
          <van-image-preview v-model="imageShow" :images="detailedImage"></van-image-preview>
          <ul>
            <li class="conent" @click="imageClickd" v-html="this.imageS" ref="res"></li>
          </ul>
        </section>
      </section>
      <section class="Securities">
        <p>选择商品价格</p>
        <p>
          <i class="iconfont icon-jiantouyou"></i>
        </p>
      </section>

      <footer class="footerPotion">
        <div class="iconLeftt">
          <div class="titleMain">
            <p>
              <i class="iconfont icon-icon_kefu"></i>
            </p>
            <p>客服</p>
          </div>
          <div class="titleMain">
            <p>
              <i class="iconfont icon-shoucang"></i>
            </p>
            <p>收藏</p>
          </div>
        </div>
        <div class="goodCar" @click="showPopup">加入购物车</div>
        <div class="goodGoumai">立即购买</div>
      </footer>
    </section>
  </section>
</template>

<script>
import { goodsDetailed, couponList } from "../api/home.js";
import { Swipe, SwipeItem, Popup, ImagePreview, Toast, Loading } from "vant";

export default {
  data() {
    return {
      // objone:this.$route.query.id
      detailedList: [],
      shop_list: [],
      skuBeanList: [], //弹框里面的数据
      shows: false, //商品规格
      showd: false, //优惠劵
      data: [],
      activeIndex: 0, //选中时的变量,
      couponListNeww: [], //优惠劵渲染数据
      isActive: "",
      imageS: [],
      imageShow: false,
      attrList: [], //套装名称
      detailedImage: [], //详情页图片预览
      num: 1, //加减,
      addShow: false,
      vuexFalse: true,
      pid: [],
      loding: true,
      swiper: false
      // showw:false
    };
  },
  components: {
    [Swipe.name]: Swipe, //引入第三方库轮播
    [SwipeItem.name]: SwipeItem, //引入第三方库轮播
    [Popup.name]: Popup, //引入第三方底部弹出
    [ImagePreview.name]: ImagePreview, //引入第三方图片放大
    [Toast.name]: Toast, //提示框信息
    [Loading.name]: Loading
  },
  created() {
    // console.log(this.$route.query.pro_id);
    const that = this;
    var pro_id = this.$route.query.pro_id;
    goodsDetailed(pro_id)
      .then(res => {
        this.loding = false;
        this.swiper = true;
        this.data = res.data.data;
        this.detailedList = res.data.data.pro;
        this.pid = res.data.data.pro.pro_id;
        this.shop_list = res.data.data.shop_list;
        this.skuBeanList = res.data.data.skuBeanList[0];
        this.imageS = res.data.data.pro.content;
        this.attrList = res.data.data.attrList;
      })
      .catch(err => {
        console.log(err);
      });
  },
  methods: {
    //减事件
    jian() {
      this.num > 1 ? this.num-- : Toast("最少一件商品");
    },
    //优惠劵接口的函数

    //加入购物弹出框的tab事件
    tabList(index) {
      this.activeIndex = index;
      this.skuBeanList = this.data.skuBeanList[index];
    },
    //返回上一级
    gotoBack() {
      this.$router.push("/");
    },
    //点击弹出底部遮罩
    showPopup() {
      this.shows = true;
    },
    iconfonts() {
      this.shows = false;
    },
    //点击icon图标关闭遮罩
    counButton() {
      this.showd = false;
    },
    //点券的遮罩
    showJuan() {
      var pro_id = this.$route.query.pro_id;
      this.showd = true;
      couponList(pro_id)
        .then(res => {
          this.couponListNeww = res.data.list;
        })
        .catch(err => {
          console.log(err);
        });
    },
    del() {
      this.showd = false;
    },

    buttonBtn() {
      // console.log(this.skuBeanList.cid);
      this.shows = false;
      const newArr = {
        data: this.newArr,
        num: this.num,
        skuBeanList: this.skuBeanList,
        pro_id: this.$route.query.pro_id
      };
      let store = this.$store.state.count; //获取vuex的数据
      // this.shows != this.shows;
      let mutAticveList = this.$store; //添加数据
      if (this.skuBeanList.count != 0) {
        //因为数组默认为空的时候循环不了的
        if (store.length == 0) {
          mutAticveList.commit("JOSN_LIST", newArr);
        } else {
          //数组中有数据要循环判断
          for (let i = 0; i < store.length; i++) {
            //判断id和规格id是否相等
            if (
              store[i].pro_id == newArr.pro_id &&
              store[i].skuBeanList.cid == newArr.skuBeanList.cid
            ) {
              store[i].num += newArr.num;
              mutAticveList.commit("ADD_FES", store);
              this.vuexFalse = false;
              console.log("数据一样");
            }
          }
          // this.vuexFalse = true;
          if (this.vuexFalse) {
            mutAticveList.commit("JOSN_LIST", newArr);
          }
        }
      } else {
        Toast("没有此商品类型");
      }

      console.log(this.$store.state.count);
      // console.log(this.$store.state.count,'++++++')
      this.addShow = true;
      // 添加类名的方法没有动画结束的时机,这里我直接写了一个定时器,时机和动画时间一致,在图片移动到购物车位置时隐藏
      setTimeout(() => {
        // this.addShow = false
      }, 1000);
    },
    //预览图片点击事件
    imageClickd() {
      var imgeList = this.$refs.res.getElementsByTagName("img");
      for (var i = 0; i < imgeList.length; i++) {
        if (this.detailedImage.length != imgeList.length) {
          this.detailedImage.push(imgeList[i].src);
        }
      }

      this.imageShow = true;
    },
    //跳转购物车页面
    pageShopCar() {
      this.$router.push({ path: "/shoppingCar" });
    },
    //跳转到用户评价页面
    evaluate() {
      var pid = this.pid;
      console.log(pid);
      this.$router.push({ path: "/evaluate", query: { pid } });
    }
  }
};
</script>

<style>
.conent img {
  max-width: 100%;
  max-height: 100%;
}
</style>
<style lang="less" scoped>
.ode{
  position: relative;
.loadingStyle{
   width: 100px;
   height: 90px;
   background: rgba(0, 0, 0, 0.5);
   position:absolute;
   left: 140px;
   top: 70px;
   z-index: 9999;
   color: #f4f4f4;
   font-size: 14px;
   line-height: 70px;
   .lodonggg{
       position: absolute;
       left: 35px;
       top: 30px;
       
   }
}
}
.shop_cart-enter-active {
  transition: all 1s ease-out;
}
.shop_cart-enter {
  opacity: 0;
  transform: scale(0.5);
  transform: translateY(500px);
}
.divSpan {
  span {
    display: inline-block;
    width: 20px;
    height: 30px;
  }
}
.Securitiest {
  width: 100%;
  height: 100%;
  background: #fff;
  text-align: left;
  p {
    padding: 12px;
  }
  .dellaiImage {
    width: 100%;
    height: 100%;
    overflow: auto;
  }
}
.goodsConent {
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  background: #f6f6f6;
  .buttonQueren {
    width: 100%;
    border: none;
    background: #000;
    height: 3rem;
    color: #fff;
    position: fixed;
    bottom: 0;
  }
  .xian {
    width: 90%;
    height: 1px;
    background: #dddddd;
    margin: 0 auto;
    margin-top: 60px;
  }
  .popupMain {
    height: 18rem;
    background: #ffffff;
    .popupMiddle {
      width: 90%;
      margin: 0 auto;

      ul li {
        width: 50px;
        height: 20px;
        border: 1px solid #dddddd;
        text-align: center;
        line-height: 20px;
        font-size: 12px;
        margin-top: 15px;
        float: left;
        margin-left: 10px;
      }
      .active {
        background: #020202;
        color: #fff;
      }
      p {
        padding-top: 10px;
      }
    }
    .popupBottom {
      width: 90%;
      margin: 0 auto;
      height: 50px;
      border-bottom: 1px solid #dddddd;
      line-height: 50px;
      display: flex;
      justify-content: space-between;

      input {
        outline: none;
        border: none;
        width: 30px;
        height: 20px;
        text-align: center;
      }
    }
    .popupTop {
      width: 90%;
      height: 6.5rem;
      border-bottom: 1px solid #dddddd;
      margin: 0 auto;
      position: relative;
      display: flex;

      .popuTopLeft {
        flex: 0.7;

        img {
          width: 90px;
          height: 85px;
          border: 1px solid #dddddd;
          margin-top: 8px;
        }
      }
      .popuTopMiddle {
        flex: 2;
        p {
          padding-top: 15px;
          padding-left: 25px;
        }
      }
      .popuTopRight {
        i {
          font-size: 26px;
          display: inline-block;
          margin-top: 10px;
          margin-right: 20px;
        }
      }
    }
  }
  .mainConent {
    flex: 1;
    overflow: auto;
  }
  .goodsImageBox {
    height: 31rem;
    background: #fff;
    margin-bottom: 0.5rem;
    .goodsIconTop {
      height: 3rem;
      display: flex;
      justify-content: space-between;
      .IconLeft {
        width: 20%;

        i {
          font-size: 1.6rem;
          display: inline-block;
          margin-top: 0.75rem;
        }
      }
      .IconRight {
        width: 30%;
        position: relative;
        i {
          font-size: 1.6rem;
          display: inline-block;
          margin-top: 0.75rem;
          color: #7f7f7f;
          padding-right: 0.8rem;
          float: right;
        }
        span {
          position: absolute;
          top: 10px;
          left: 50px;
          width: 15px;
          height: 15px;
          background: red;
          border-radius: 10px;
          line-height: 15px;
          color: #fff;
          font-size: 10px;
          z-index: 9999;
        }
      }
    }
    .goodTopImage {
      width: 100%;
      height: 72%;
      img {
        width: 100%;
        height: 350px;
      }
    }
    .goodTopTitle {
      height: 5rem;
      text-align: left;
      padding-left: 1rem;
      margin-top: 14px;
      .priceStyle {
        color: #ff0000;
        padding-top: 0.8rem;
        padding-bottom: 1rem;
        span {
          font-size: 1.3rem;
        }
      }
    }
  }

  .Securities {
    height: 3rem;
    background: #fff;
    text-align: left;
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 0.5rem;

    .couponMain {
      width: 100%;
      height: 100%;
      background: #f4f4f4;
      .couponTop {
        width: 100%;
        height: 50px;
        background: #fff;
        display: flex;
        align-items: center;
        text-align: center;
        .couponMiddle {
          flex: 9;
          color: #020202;
          font-weight: 700;
        }
        .couponRight {
          flex: 0.5;
          i {
            display: inline-block;
            padding-right: 10px;
            font-size: 25px;
          }
        }
      }
      .couponConent {
        margin-top: 14px;
        overflow-x: hidden;
        overflow-y: scroll;
        height: 300px;
        .couponItem {
          width: 347px;
          height: 86px;
          background: #fff;
          margin: 10px auto 0 auto;
          display: flex;
          border-radius: 4px;
        }
        .leftPart {
          flex: 1;
          flex-shrink: 0;
          width: 101px;
          color: #f33;
          .mony {
            font-size: 20px;
            text-align: center;
            margin: 20px 0 auto;
            .fuhao {
              font-size: 14px;
            }
          }
          .payLine {
            font-size: 12px;
            font-weight: 400;
            text-align: center;
            margin: 8px 0 0 8px;
          }
        }
        .splitLine {
          position: relative;
          flex: 0 0 0;
          border-left: 1px dashed #ddd;
          margin: 0 5px 0 0;
          background: #fff;
        }
        .rightPart {
          position: relative;
          width: 238px;
          .limit {
            font-size: 15px;
            font-weight: 700;
            margin: 16px 0 0 9px;
          }
          .limitDate {
            font-size: 12px;
            margin: 21px 0 0 9px;
          }
          .toReceive {
            position: absolute;
            right: 15px;
            bottom: 16px;
            width: 72px;
            height: 25px;
            line-height: 25px;
            border-radius: 15px;
            font-size: 12px;
            color: #fff;
            border: none;
            background: #ff7a7a;
          }
        }
      }
    }
    p {
      padding-left: 0.8rem;
      i {
        padding-right: 0.8rem;
        font-size: 1.5rem;
      }
    }
  }
  .Securitiess {
    height: 7rem;
    background: #fff;
    text-align: left;
    margin-bottom: 0.3rem;
    .detaileDbottom {
      height: 4rem;
      display: flex;
      text-align: center;

      div {
        width: 33.3%;
        height: 4rem;

        border-right: 1px solid #dddddd;
        p {
          padding-top: 0.5rem;
        }
      }
    }
    .detailedTop {
      height: 3rem;
      display: flex;
      justify-content: space-between;
      line-height: 3rem;

      .detailedLeft {
        width: 50%;
        display: flex;
        margin-top: 10px;
        img {
          max-width: 100%;
          max-height: 100%;

          margin-left: 0.8rem;
        }
        span {
          display: inline-block;
          padding-left: 0.5rem;
        }
      }
      .detailedRight {
        width: 50%;
        button {
          width: 40%;
          float: right;
          height: 2.2rem;
          margin-top: 0.2rem;
          line-height: 2rem;
          margin-right: 0.5rem;
          border-radius: 20px;
          background: #000;
          border: none;
          font-size: 0.8rem;
          color: #fff;
          margin-top: 0.5rem;
        }
      }
    }
  }
  .footerPotion {
    width: 100%;
    height: 3.5rem;
    position: fixed;
    bottom: 0;
    display: flex;
    justify-content: space-between;
    align-items: center;
    background: #fff;
    div {
      width: 33.3%;
      height: 3.5rem;
      text-align: left;
    }
    .iconLeftt {
      display: flex;
    }
    .titleMain {
      padding-left: 1.2rem;
      margin-top: 0.1rem;
      i {
        font-size: 1.5rem;
      }
      p {
        font-size: 0.7rem;
        padding-top: 0.3rem;
        padding-bottom: 0.2rem;
      }
    }
    .goodCar {
      background: #454336;
      line-height: 3.5rem;
      text-align: center;
      color: #fff;
    }
    .goodGoumai {
      background: #202020;
      line-height: 3.5rem;
      text-align: center;
      color: #fff;
    }
  }
}
</style>
