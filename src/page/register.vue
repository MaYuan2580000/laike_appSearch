<template>
    <section class="page_login">
           <Header leftArrow>
             <img src="https://xiaochengxu.laiketui.com/static/img/guanbi2x.png" alt=""  slot="headerLeft" class="imgs" @click="gotoBack"/>
              <span slot="headerRight" @click="register">登录</span>
         </Header>
         <section class="login">
             <div class="loginType">注册</div>
              <div class="login_inpu">
                 <input type="text" placeholder="请输入账号(6-15位字母或数字)" @keyup="getInputValue"  v-model="userId"/>
             </div>
               <div class="login_inpu">
                 <input type="text" placeholder="请输入6-16位数的新密码" maxlength="16"  @keyup="getInputValue" v-model="password" v-if="pwdType"/>
                <input type="password" placeholder="请输入6-16位数的新密码" maxlength="16"  @keyup="getInputValue" v-model="password" v-else/>
                   <div class="pageTopRight">
                      <img :src="seen?openeye:nopeneye" @click="changeType()"/>
                  </div>
             </div>
               <div class="login_inpu" style="margin-top:-20px;">
                 <input type="text" placeholder="请再次输入密码" maxlength="16"  @keyup="getInputValue" v-model="posswordNew" v-if="pwdType"/>
                <input type="password" placeholder="请再次输入密码" maxlength="16"  @keyup="getInputValue" v-model="posswordNew" v-else/>
                   <div class="pageTopRight">
                      <img :src="seen?openeye:nopeneye" @click="changeType()"/>
                  </div>
             </div>
              <div class="login_inpu" style="margin-top:-20px;">
                 <input type="text" placeholder="请输入手机号" maxlength="11" @keyup="getInputValue" v-model="phone" />
             </div>
                 <div class="login_inpu">
                 <input type="text" placeholder="请输入验证码" maxlength="16"  @keyup="getInputValue" v-model="keyCode"/>
                   <div class="pageTopRight">
                      <span @click.prevent="getCode">{{computeTime>0 ? `(${computeTime}s)已发送` : '获取验证码'}}</span>
                  </div>
             </div>
         </section>
          
             <div>
                   <button class="loginButton" v-if="btnShow"  @click="registerClick">注册</button>
                   <button class="loginStyle" v-if="!btnShow">注册</button>
             </div>
    </section>
</template>

<script>
import Header from "../components/header.vue";
import { register, loginCode } from "../api/home.js";
import { Toast } from "vant";
import { clearInterval } from "timers";
export default {
  data() {
    return {
      openeye: require("@/assets/images/even.png"), //图片地址
      nopeneye: require("@/assets/images/eventt.png"), //图片地址
      seen: "",
      btnShow: false,
      phone: "",
      codeFlase: true,
      password: "",
      posswordNew: "",
      userId: "",
      keyCode: "",
      computeTime: 0, //验证码
      pwdType: false //此时文本框隐藏，显示密码框
    };
  },
  components: {
    Header,
    [Toast.name]: Toast //提示框信息
  },
  methods: {
    getInputValued() {},
    gotoBack() {
      this.$router.push({ path: "/" });
    },
    changeType() {
      this.seen = !this.seen; //小眼睛的变化
      this.pwdType = !this.pwdType; //文本框的显示隐藏
    },
    //输入时候按钮解除
    getInputValue() {
      if (
        this.userId.length >= 1 &&
        this.password.length >= 1 &&
        this.phone.length >= 1 &&
        this.keyCode.length >= 1
      ) {
        this.btnShow = true;
      } else {
        this.btnShow = false;
      }
    },
    //获取短信验证码
    getCode() {
      loginCode(this.phone)
        .then(res => {
          // console.log(res);
          Toast("短信验证码发送成功");
          if (!this.computeTime) {
            this.computeTime = 59;
            this.timer = setInterval(() => {
              this.computeTime--;
              if (this.computeTime <= 0) {
                clearInterval(this.timer);
              }
            }, 1000);
          }
        })
        .catch(err => {
          console.log(err);
        });
    },
    //跳转到登录页面
    register() {
      this.$router.push({ path: "/login" });
    },
    codeLogin() {
      this.codeFlase = !this.codeFlase;
    },
    //注册按钮事件
    registerClick() {
      if (this.password == this.posswordNew) {
        register(this.userId, this.phone, this.password, this.keyCode)
          .then(res => {
           this.$router.push({path:'/login'})
          })
          .catch(err => {
            console.log(err);
          });
      } else {
        Toast("两次密码输入的不一致");
      }
    }
  }
};
</script>

<style lang="less" scoped>
.page_login {
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  .imgs {
    width: 15px;
  }
  .loginButton {
    width: 90%;
    margin: 10px auto;
    background-color: #020202;
    color: #fff;
    justify-content: center;
    font-size: 15px;
    border-radius: 4px;
    height: 45px;
    display: flex;
    align-items: center;
    border: none;
  }
  .loginStyle {
    width: 90%;
    margin: 10px auto;
    background-color: #dddddd;
    color: #fff;
    justify-content: center;
    font-size: 15px;
    border-radius: 4px;
    height: 45px;
    display: flex;
    align-items: center;
    border: none;
  }
  .login {
    padding: 0 20px;
    .login_pass {
      margin: 15px 0;
      font-size: 12px;
      color: #020202;
      text-align: right;
      padding-right: 12px;
    }
    .text {
      text-align: center;
      font-size: 14px;
      color: rgb(153, 153, 153);
    }

    .loginyanzheng {
      width: 90%;
      margin: 10px auto;
      background-color: #fff;
      color: #000;
      justify-content: center;
      font-size: 15px;
      border-radius: 4px;
      height: 45px;
      display: flex;
      align-items: center;
      border: 1px solid #020202;
    }
    .loginType {
      width: 100%;
      height: 115px;
      text-align: left;
      padding: 0 15px;
      font-size: 27px;
      color: #020202;
      display: flex;
      align-items: center;
    }
    .login_inpu {
      position: relative;
      margin-bottom: 10px;

      input {
        width: 90%;
        margin: 0 auto;
        border: none;
        border-radius: 0;
        border-bottom: 1px solid #ddd;
        padding: 16px 0;
        font-size: 15px;
        margin-bottom: 2px;
      }
      .pageTopRight {
        flex: 4;
        text-align: right;
        position: relative;
        span {
          float: right;
          display: inline-block;
          position: absolute;
          z-index: 9999;
          width: 90px;
          right: 20px;
          top: -35px;
        }
        img {
          width: 20px;
          padding-right: 20px;
          margin-top: -70px;
        }
      }
    }
  }
}
</style>
