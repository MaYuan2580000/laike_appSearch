<template>
    <section class="goodsConent">
        <section class="mainConent">
        <section class="goodsImageBox">
            <section class="goodsIconTop">
                <div class="IconLeft" @click="gotoBack">
                    <i class="iconfont icon-fanhui"></i>
                </div>
                <div class="IconRight">
                    <i class="iconfont icon-gouwuche"></i>
                    <i class="iconfont icon-icon_share fenxiang"></i>
                </div>
            </section>
             <section class="goodTopImage">
                 <img :src="objone.imgurl" alt="">
             </section>
             <section class="goodTopTitle">
                 <p class="priceStyle">￥<span>{{objone.price}}</span></p>
                 <p>{{objone.product_title}}</p>
             </section>
        </section>
       <section class="Securities">
           <p>领劵</p>
           <p><i class="iconfont icon-jiantouyou"></i></p>
       </section>
          <section class="Securities">
           <p>选择商品价格</p>
           <p><i class="iconfont icon-jiantouyou"></i></p>
       </section>
         <section class="Securities">
           <p>用户评价 (1) </p>
           <p><i class="iconfont icon-jiantouyou"></i></p>
       </section>
         <section class="Securitiess">
              <div class="detailedTop">
                  <div class="detailedLeft">
                      <img src="../assets/images/sssd_03.png" alt="">
                      <span>来客推</span>
                  </div>
                  <div class="detailedRight">
                      <button>进店逛逛</button>
                  </div>
              </div>
              <div class="detaileDbottom">
                  <div>
                      <p>11</p>
                      <p>在售商品</p>
                  </div>
                  <div>
                      <p>99</p>
                      <p>已售</p>
                  </div>
                  <div> 
                      <p>9</p>
                      <p>关注人数</p>
                      </div>
              </div>
       </section>
         <section class="Securities">
           <p>商品详情</p>
       </section>
         <section class="Securities">
           <p>选择商品价格</p>
           <p><i class="iconfont icon-jiantouyou"></i></p>
       </section>
       <footer class="footerPotion">
           <div class="iconLeftt">
               <div class="titleMain">
                 <p><i class="iconfont icon-icon_kefu"></i></p>
                <p>客服</p></div>
                <div class="titleMain">
                 <p><i class="iconfont icon-shoucang" ></i></p>
                <p>收藏</p></div>
           </div>
           <div class="goodCar">
                加入购物车
           </div>
           <div class="goodGoumai">
               立即购买
           </div>
       </footer>
       </section>
    </section>
</template>

<script>
export default {
  data() {
    return {
        objone:this.$route.query.id
    };
  },
  created(){
      console.log(this.objone)
  },
  methods: {
    gotoBack() {
      this.$router.go(-1);
    }
  }
};
</script>

<style lang="less" scoped>
.goodsConent {
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  background: #f6f6f6;
  .mainConent {
    flex: 1;
    overflow: auto;
  }
  .goodsImageBox {
    height: 29rem;
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

        i {
          font-size: 1.6rem;
          display: inline-block;
          margin-top: 0.75rem;
          color: #7f7f7f;
          padding-right: 0.8rem;
          float: right;
        }
      }
    }
    .goodTopImage {
      width: 100%;
      height: 68%;
      img {
        height: 14.4rem;
      }
    }
    .goodTopTitle {
      height: 5rem;
      text-align: left;
      padding-left: 1rem;
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
        width: 30%;
        img {
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
