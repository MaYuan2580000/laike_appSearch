<template>
  <div class="page_Assmble">
    <Header leftArrow title="拼团" border>
      <img
        src="https://xiaochengxu.laiketui.com/static/img/back2x.png"
        alt
        slot="headerLeft"
        class="imgs"
        @click="gotoBack"
      />
    </Header>
    <section class="tabMain">
      <van-tabs v-model="active">
        <van-tab title="今日拼团">
          <ul class="group">
            <li>
              <img src="../assets/images/sdsdsdsd_15.png" alt />
              <div class="group_div">
                <div class="group_title list_break2">不锈钢挂钩粘胶承重壁挂粘钩子</div>
                <div class="group_num">已团241件</div>
                <div class="group_money list_break1">
                  <span>3人团</span>
                  <span>￥0.16</span>
                </div>
                <div class="group_price list_break1">
                  <s>￥8.00</s>
                </div>
                <div class="group_go">
                   去开团
                </div>
              </div>
            </li>
          </ul>
        </van-tab>
        <van-tab title="拼团抢先知">内容 2</van-tab>
      </van-tabs>
    </section>
  </div>
</template>
<script>
import { Tab, Tabs } from "vant";
import Header from "../components/header.vue";
import { Assemble } from "../api/home.js";
export default {
  data() {
    return {
      active: "1"
    };
  },
  components: {
    Header,
    [Tab.name]: Tab,
    [Tabs.name]: Tabs
  },
  methods: {
    gotoBack() {
      this.$router.push({ path: "/" });
    }
  },
  created(){
      Assemble().then(res=>{
          console.log(res)
      }).catch(err=>{
          console.log('失败了')
      })
  }
};
</script>
<style lang="less" scoped>
.page_Assmble {
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  .imgs {
    width: 16%;
  }
  .tabMain /deep/ .van-tabs__line {
    background-color: #000;
  }
  .tabMain {
    .group {
      padding: 0 15px;
      text-align: left;
      li {
        position: relative;
        padding: 15px 0;
        border-bottom: 1px solid #e6e6e6;
        img {
          width: 110px;
          height: 110px;
          background-size: 100% 100%;
          position: absolute;
          top: 9px;
          left: 0;
        }
        .group_div {
          padding-left: 121px;
          .group_title {
            font-size: 14px;
            color: #020202;
            line-height: 19px;
          }
          .list_break2 {
            word-break: break-all;
            text-overflow: ellipsis;
            overflow: hidden;
          }
          .group_num {
            font-size: 11px;
            color: #999;
            line-height: 16px;
            padding-top: 15px;
          }
          .group_money {
            font-size: 15px;
            color: #020202;
            padding-right: 100px;
            line-height: 19px;
            padding-top: 14px;
            span {
              font-size: 15px;
              color: #f33;
            }
          }
          .group_price {
            padding-right: 100px;
            line-height: 14px;
            s {
              font-size: 12px;
              color: #9b9b9b;
              position: relative;
              top: 5px;
            }
          }
          .group_go {
            width: 95px;
            background-color: #020202;
            height: 35px;
            position: absolute;
            border-radius: 3px;
            bottom: 15px;
            right: 0;
            text-align: center;
            line-height: 35px;
            color: #fff;
            font-size: 15px;
          }
        }
      }
    }
  }
}
</style>