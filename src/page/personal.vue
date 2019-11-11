<template>
    <div class="page_personalMain">
          <section class="personalHeader">
                <div class="HeaderLeft">
                     <i class="iconfont icon-geren3"></i>
                   
                </div>
                <div class="HeaderRight">
                     <div class="loginBtn" @click="login">登录/注册</div>
                </div>
          </section>
             <section class="personalHeader" v-if="token">
                <div class="HeaderLeft">
                     <i class="iconfont icon-geren3"></i>
                   
                </div>
                <div class="HeaderRight">
                     <div class="loginBtn" @click="login">登录/注册</div>
                </div>
          </section>
          <section class="orderList">
              <div class="orderTop">
                  <p>我的订单</p>
                  <div class="oderRight">
                      <span>查看全部</span>
                      <i class="iconfont icon-jiantouyou"></i>
                  </div>
              </div>
              <ul class="order_two">
                  <li>
                      <div class="position_quan">
                          <img src="https://xiaochengxu.laiketui.com/static/img/dfk.png" alt="">
                      </div>
                      <p>待付款</p>
                  </li>
                     <li>
                      <div class="position_quan">
                          <img src="https://xiaochengxu.laiketui.com/static/img/dfh.png" alt="">
                      </div>
                      <p>待发货</p>
                  </li>
                     <li>
                      <div class="position_quan">
                          <img src="https://xiaochengxu.laiketui.com/static/img/dsh.png" alt="">
                      </div>
                      <p>待收货</p>
                  </li>
                     <li>
                      <div class="position_quan">
                          <img src="https://xiaochengxu.laiketui.com/static/img/dpj.png" alt="">
                      </div>
                      <p>待评价</p>
                  </li>
                     <li>
                      <div class="position_quan">
                          <img src="https://xiaochengxu.laiketui.com/static/img/tksh.png" alt="">
                      </div>
                      <p>退款/售后</p>
                  </li>
              </ul>
          </section>

          <section class="my_data3">
               <div class="my_data">
                   <img src="https://xiaochengxu.laiketui.com/V2.4/images/icon/yhqBg.png" alt="">
                   <div class="data3_in">
                        <div>
                             <p class="dataNum">0</p>
                             <p>优惠劵</p>
                        </div>
                   </div>
               </div>
                <div class="my_data">
                   <img src="https://xiaochengxu.laiketui.com/V2.4/images/icon/qbBg.png" alt="">
                   <div class="data3_in">
                        <div>
                             <p class="dataNum">￥0.00</p>
                             <p>钱包</p>
                        </div>
                   </div>
               </div>
                <div class="my_data">
                   <img src="https://xiaochengxu.laiketui.com/V2.4/images/icon/jfBg.png" alt="">
                   <div class="data3_in">
                        <div>
                             <p class="dataNum">0</p>
                             <p>积分</p>
                        </div>
                   </div>
               </div>
          </section>
          <ul class="list_ul">
              <li @click="gojiazai">
                  <div>
                      <img src="https://xiaochengxu.laiketui.com/static/img/myGroup.png" alt="">
                      <p>我的拼团</p>
                  </div>
              </li>
               <li>
                  <div>
                      <img src="https://xiaochengxu.laiketui.com/static/img/mddp.png" alt="">
                      <p>我的店铺</p>
                  </div>
              </li>
               <li>
                  <div>
                      <img src="https://xiaochengxu.laiketui.com/static/img/kan3x.png" alt="">
                      <p>我的砍价</p>
                  </div>
              </li>
               <li>
                  <div>
                      <img src="https://xiaochengxu.laiketui.com/static/img/wdsc.png" alt="">
                      <p>我的收藏</p>
                  </div>
              </li>
               <li>
                  <div>
                      <img src="https://xiaochengxu.laiketui.com/static/img/jp_my.png" alt="">
                      <p>我的竞拍</p>
                  </div>
              </li>
               <li>
                  <div>
                      <img src="https://xiaochengxu.laiketui.com/static/img/fx_centerIcon.png" alt="">
                      <p>分销中心</p>
                  </div>
              </li>
                <li>
                  <div>
                      <img src="https://xiaochengxu.laiketui.com/static/img/shdz.png" alt="">
                      <p>收货地址</p>
                  </div>
              </li>
                <li>
                  <div>
                      <img src="https://xiaochengxu.laiketui.com/static/img/xx.png" alt="">
                      <p>消息</p>
                  </div>
              </li>
                <li>
                  <div>
                      <img src="https://xiaochengxu.laiketui.com/static/img/mdkf.png" alt="">
                      <p>客服</p>
                  </div>
              </li>
                <li>
                  <div>
                      <img src="https://xiaochengxu.laiketui.com/static/img/gywm.png" alt="">
                      <p>关于我们</p>
                  </div>
              </li>
                <li>
                  <div>
                      <img src="https://xiaochengxu.laiketui.com/static/img/sz.png" alt="">
                      <p>设置</p>
                  </div>
              </li>
          </ul>
          <section class="title">
              <div style="position: relative;">
                  <img src="https://xiaochengxu.laiketui.com/static/img/storeLogo.png" alt="">
                  来客推提供技术支持
              </div>
              <p>www.laiketui.com</p>
          </section>
          <TabBar/>
    </div>
</template>

<script>
import TabBar from "../components/tabBar.vue";
import { getCookie } from "../utlis/auth.js";
export default {
  data() {
    return {
       token:false
    };
  },
  components: {
    TabBar
  }, 

  created(){


    //   var username = 
    //   console.log(username)
  },
  methods:{
      login(){
          this.$router.push({path:'/login'})
      }, 
      gojiazai(){
        this.$router.push({path:'/jiazai'})
      }
  }
};
</script>

<style lang="less" scoped>
.page_personalMain {
  width: 100%;
  height: 100%;
  display: flex;
  background: #dddddd;
  flex-direction: column;
  .personalHeader {
    height: 70px;
    background: #fff;
    display: flex;
    align-items: center;
    text-align: left;
    &::after {
      content: "";
      position: absolute;
      top: 70px;
      left: 0;
      background: #ddd;
      height: 8px;
      width: 100%;
    }
    .HeaderLeft {
      flex: 3;
      display: flex;
      align-items: center;
      i {
        font-size: 45px;
        margin-left: 20px;
        color: #dddddd;
      }
      span {
        display: inline-block;
        padding-left: 10px;
      }
    }
    .HeaderRight {
      flex: 1;
      .loginBtn {
        background: linear-gradient(#ff7272, #f44);
        color: #fff;
        font-size: 14px;
        border-top-left-radius: 16px;
        border-bottom-left-radius: 16px;
        height: 32px;
        padding: 0 10px;
        display: flex;
        align-items: center;
        justify-content: center;
      }
    }
  }
  .orderList {
    height: 120px;
    background: #fff;
    margin-bottom: 8px;
    .order_two {
      margin-top: 10px;
      display: flex;
      justify-content: space-around;
      align-items: center;
      font-size: 12px;
      .position_quan {
        position: relative;

        img {
          width: 24px;
          height: 22px;
          margin-bottom: 10px;
        }
      }
    }
    .orderTop {
      width: 100%;
      display: flex;
      justify-content: space-between;
      align-items: center;
      height: 40px;
      margin-top: 10px;
      font-size: 14px;
      p {
        padding-left: 10px;
      }
      .oderRight {
        padding-right: 10px;
      }
    }
  }
  .my_data3 {
    height: 80px;
    background-color: #fff;
    margin-bottom: 10px;
    display: flex;
    align-items: center;
    justify-content: space-around;
    padding: 15px;
    text-align: left;
    .my_data {
      width: 110px;
      height: 70px;
      position: relative;
      img {
        position: absolute;
        z-index: 1;
        width: 100%;
        height: 100%;
      }
      .data3_in {
        display: flex;
        align-items: center;
        justify-content: center;
        height: 100%;
        text-align: center;
        color: #666;
        font-size: 12px;
        div {
          position: relative;
          z-index: 2;
          .dataNum {
            color: #333;
            font-size: 16px;
            font-weight: 600;
            margin-bottom: 5px;
          }
        }
      }
    }
  }
  .list_ul {
    display: flex;
    align-items: center;
    justify-content: flex-start;
    flex-wrap: wrap;
    background-color: #fff;

    li {
      font-size: 14px;
      color: #020202;
      border-bottom: 1px solid #eee;
      width: 33%;
      height: 100px;
      border-right: 1px solid #eee;
      display: flex;
      align-items: center;
      justify-content: center;
      text-align: center;

      img {
        width: 24px;
        height: 24px;
        margin-bottom: 10px;
      }
    }
  }
  .title {
    text-align: center;
    font-size: 12px;
    padding: 10px 0;
    color: #bbb;
    background-color: #f8f8f8;
    width: 100%;
    margin-bottom: 50px;
    img{
        width: 14px;
    height: 14px;
    margin-right: 5px;
    position: relative;
    top: 5px;
    }
  }
}
</style>
