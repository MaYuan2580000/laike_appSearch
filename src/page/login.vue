<template>
    <section class="page_login">
           <Header leftArrow>
             <img src="https://xiaochengxu.laiketui.com/static/img/guanbi2x.png" alt=""  slot="headerLeft" class="imgs" @click="gotoBack"/>
              <span slot ="headerRight" @click="register">注册</span>
         </Header>
            <input type="text" placeholder="请输入邮箱" v-model="email">
             <button :class="{'activeStyle':disbox}" @click="btnClick" :disabled="disbox">确认</button>

         <section class="login" v-show="codeFlase">
             <div class="loginType">密码登录</div>
             <div class="login_inpu">
                 <input type="text" placeholder="请输入账号/手机号" maxlength="11" @keyup="getInputValue" v-model="phone"/>
             </div>
               <div class="login_inpu">
                 <input type="text" placeholder="请输入账号密码" maxlength="16"  @keyup="getInputValue" v-model="password" v-if="pwdType"/>
                <input type="password" placeholder="请输入账号密码" maxlength="16"  @keyup="getInputValue" v-model="password" v-else/>
                   <div class="pageTopRight">
                      <img :src="seen?openeye:nopeneye" @click="changeType()"/>
                  </div>
             </div>
             <p class="login_pass">忘记密码？</p>
             <div>
                   <button class="loginButton" v-if="btnShow" @click="loginBut">登录</button>
                   <button class="loginStyle" v-if="!btnShow" >登录</button>
             </div>
             <div class="text">或</div>
               <div>
                   <button class="loginyanzheng" @click="codeLogin" >验证码登录</button>
             </div>
         </section>
             <section class="login"  v-show="!codeFlase" >
             <div class="loginType">验证码登录</div>
             <div class="login_inpu">
                 <input type="text" placeholder="请输入手机号" maxlength="11" @keyup="getInputValue" v-model="phone"/>
             </div>
               <div class="login_inpu">
                 <input type="text" placeholder="请输入验证码" maxlength="16"  @keyup="getInputValue" v-model="keyCode"/>
                   <div class="pageTopRight">
                      <span @click.prevent="getCode">{{computeTime>0 ? `(${computeTime}s)已发送` : '获取验证码'}}</span>
                  </div>
             </div>

             <div>
                   <button class="loginButton" v-if="btnShow" @click="btns" >登录</button>
                   <button class="loginStyle" v-if="!btnShow">登录</button>
             </div>
             <div class="text">或</div>
               <div>
                   <button class="loginyanzheng" @click="codeLogin">密码登录</button>
             </div>
          
         </section>
    </section>
    
</template>

<script>
import Header from "../components/header.vue";
import { login, loginCode } from "../api/home.js";
import { Toast } from "vant";
import { clearInterval, setTimeout, setInterval } from "timers";
import { setCookie } from "../utlis/auth.js";
export default {
  data() {
    return {
      openeye: require("@/assets/images/even.png"), //图片地址
      nopeneye: require("@/assets/images/eventt.png"), //图片地址
      seen: "",
      btnShow: false,
      phone: "",
      password: "",
      keyCode: "",
      codeFlase: true,
      computeTime: 0, //验证码
      pwdType: false, //此时文本框隐藏，显示密码框
      disabledShow:true,
      email:'',
    };
  },
  components: {
    Header,
    [Toast.name]: Toast //提示框信息
  },
 computed:{
  
    disbox(){
      var regTest = /^[A-Za-z0-9\u4e00-\u9fa5]+@[a-zA-Z0-9_-]+(\.[a-zA-Z0-9_-]+)+$/;
      if(regTest.test(this.email)){
           return true
      }else{
        return false
      }
    }
 },
  methods: {
      
    gotoBack() {

      this.$router.push({ path: "/" });
    },
    changeType() {
      this.seen = !this.seen; //小眼睛的变化
      this.pwdType = !this.pwdType; //文本框的显示隐藏
    },
    //输入时候按钮解除
    getInputValue() {
      if (this.password != "" || (this.phone != "" && this.keyCode != "")) {
        this.btnShow = true;
        console.log(111);
      } else {
        this.btnShow = false;
      }
    },
    validatePhone() {
      //判断输入的手机号是否合法
      if (!this.phone) {
        this.errors = {
          Toast: ("手机号码不能为空")
        };
        // return false
      } else if (!/^1[345678]\d{9}$/.test(this.phone)) {
        this.errors = {
          Toast: ("请输入正确是手机号")
          
        };
        // return false
      } else {
        this.errors = {};
        return true;
      
      }
    },
    btns() {
      if (this.validatePhone()) {
        login(this.phone, this.keyCode)
          .then(res => {
            Toast("登录成功");
            var user_name = res.data.user_name;
            // console.log(access_id);

            this.$router.push({
              path: "/personal",
              query: { user_name: user_name }
            });
          })
          .catch(err => {
            console.log(err);
          });
      }
    },
    getCode() {
      loginCode(this.phone)
        .then(res => {
          // console.log(res);
          Toast("短信验证码发送成功");
          if (!this.computeTime) {
            this.computeTime = 59;
            this.timer = setInterval(() => {
              this.computeTime--;
              if (this.computeTime == 0) {
                clearInterval(this.timer);
              }
            }, 1000);
          }
        })
        .catch(err => {
          console.log(err);
        });
    },
    loginCode() {},
    //手机密码登录
    loginBut() {
      login(this.phone, this.password)
        .then(res => {
          if (this.phone == "123456" && this.password == "123456") {
            Toast("登录成功");
            var access_id = res.data.access_id;
            setCookie(access_id);
            this.$router.push({
              path: "/personal"
            });
          } else {
            Toast("用户名或密码错误");
          }
        })
        .catch(err => {
          console.log(err);
        });
    },
    //跳转到登录页面
    register() {
      this.$router.push({ path: "/register" });
    },
    codeLogin() {
      this.codeFlase = !this.codeFlase;
    }
  }
};
</script>

<style lang="less" scoped>
.activeStyle{
  background: blue;
}
.page_login {
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  .imgs {
    width: 15px;
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
      margin-bottom: 20px;

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
