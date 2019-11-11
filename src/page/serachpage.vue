<template>
     <div class="page-serach">
         <Header leftArrow title="搜索" border>
             <img src="https://xiaochengxu.laiketui.com/static/img/back2x.png" alt=""  slot="headerLeft" class="imgs" @click="gotoBack"/>
         </Header>
         <section class="page-serachTop">
              <van-search
                v-model="value"
                placeholder="请输入搜索关键词"
                :show-action='false'
                shape="round"
              
            >
               
              </van-search>
               <div class="right">
                 <span  slot="action"  @click="searchButton">搜索</span>
             </div>
         </section>
           <section class="tabConent">
            <center> <ul class="ulStyle">
                 <li class="goods_li" v-for="(item,index) in list2" :key="index"
                    :class="{active:activeIndex == index}"
                    @click="goTab(index)"
                   
                   >
                     <span>{{item.title}}
                         <div class="goods_li_border"></div>
                     </span>
                 </li>
        
             </ul>
                <section class="tabMain">
           
                  </section>
            </center>
     
         </section>
         <section class="page-remen">
              <div class="pageRemenTop" >
                  <div class="pageTopLeft">
                      <span>热门搜索</span>
                  </div>
                  <div class="pageTopRight">
                      <img :src="seen?openeye:nopeneye" @click="changeType()"/>
                  </div>
              </div>
             <div class="serchLishi" v-if="hideIswo">
                  <div class="pageTopLeft">
                      <span>历史搜索</span>
                  </div>
                  <div class="pageTopRight">
                     <span @click="removeSerch">清空历史记录</span>
                  </div>
               
             </div>
             <div class="mainStyle" v-if="hideIswo">
                 <ul>
                     <li v-for="(item,index) in maplist" :key="index">
                        {{item}}
                     </li>
                 </ul>
               
             </div>
                <div class="pagetBottom"  v-if="hideIswo">
                     <ul>
                         <li v-for="(item,index) in shoplist" :key="index">
                             <img :src="item.imgurl" alt="">
                               <p>{{item.product_title}}</p>
                         </li>
                     </ul>
                  </div>
         </section>
     </div>
</template>

<script>
import Header from "../components/header.vue";
import { Search ,Toast  } from "vant";
import { seatchList } from "../api/home.js";
export default {
  data() {
    return {
      list2: [{ title: "商店" }, { title: "店铺" }],
      activeIndex: 0,
      isShow: false,
      hideIswo:false,
      seen: "",
      value:'',
      maplist:[],
      shoplist:[],
      openeye: require("@/assets/images/even.png"), //图片地址
      nopeneye: require("@/assets/images/eventt.png") //图片地址
    };
  },
  components: {
    Header,
    [Search.name]: Search,
    [Toast.name]: Toast
  },
  created(){
      this.maplist=JSON.parse(localStorage.getItem('data'))
      let data = this.value;
  },
  methods: {
    goTab(index) {
      this.activeIndex = index;
    },
    //点击眼睛切换样式
    changeType() {
      this.seen = !this.seen; //小眼睛的变化

      if (this.seen == true) {
        this.isShow = true;
      } else {
        this.isShow = false;
      }
    },
    searchButton(){
        seatchList(this.value).then(res=>{
            //   console.log(res)
               this.shoplist = res.data.data
               console.log(this.shoplist)
              this.hideIswo = true;
        }).catch(err=>{
            console.log('err')
        });
        let datas = JSON.parse(localStorage.getItem('data')||'[]')
        datas.push(this.value)
        this.maplist=datas
        localStorage.setItem('data',JSON.stringify(datas))
        if(this.value){
              this.value=""
        }else{
            Toast('请输入搜索内容')
        }
    },
    //返回上一个页面
    gotoBack(){
       this.$router.go(-1)
    },
    removeSerch(){
 
         localStorage.removeItem('data')
         this.maplist=''
    }
  }
};
</script>

<style lang="less" scoped>
.page-serach {
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  .imgs {
    width: 0.9rem;
  }
  .page-serachTop /deep/ .van-search{
      width: 320px;
      border-radius: 2px;
  }
  .page-serachTop /deep/ .van-search__content--round{
      border-radius: 5px;
  }
  .mainStyle{
      width: 100%;
      height: 100%;
      text-align: left;
      margin-bottom: 50px;
      padding-left: 10px;
      padding-top: 20px;
      ul li{
          float: left;
          width: auto;
          height: 20px;
          background: #2b2b2b;
          text-align: center;
          line-height: 20px;
          margin-left: 10px;
          color: #fff;

      }
      span{
          display: inline-block;
          width: 60px;
          height: 20px;
          background: #505050;

      }
  }
  .page-serachTop {
    height: 4rem;
    margin-top: 0.2rem;
    text-align: left;
    position: relative;
    display: flex;
    align-items: center;
    .left {
      flex: 9;
    }
    .right {
      flex: 1;
    }
    i {
      position: absolute;
      font-size: 20px;
      top: 23px;
      left: 25px;
    }
    span {
      display: inline-block;
      margin-left: -0.2rem;
      font-weight: 700;
    }
    input {
      width: 88%;
      height: 2rem;
      border: none;
      outline: none;
      margin: 1rem;
      background: #f4f4f4;
      text-indent: 30px;
      border-radius: 5px;
    }
  }
  .page-remen {
    width: 100%;
    height: 100%;
    .pagetBottom {
      text-align: left;
    
      ul{
          display: flex;
          flex-wrap: wrap;
      }
      ul li{
          width: 47%;
          margin-bottom: 20px;
          padding-left: 10px;
          img{
              width: 180px;
              height: 180px;
              margin-bottom: 10px;
              margin-left: -5px;
          }
          p{
              font-size: 14px;
              line-height: 20px;
          }
      }
    }
    .pageRemenTop {
      height: 50px;
      display: flex;
      align-items: center;
      .pageTopLeft {
        flex: 1;
        span {
          margin-left: 10px;
          font-weight: 700;
        }
      }
      .pageTopRight {
        flex: 4;
        text-align: right;
        img {
          width: 30px;
          padding-right: 20px;
        }
      }
    }
    .serchLishi {
      height: 100%;

      display: flex;
      align-items: center;
      margin-top: 20px;
      .pageTopLeft {
        flex: 1;
        span {
          margin-left: 10px;
        }
      }
      .pageTopRight {
        flex: 4;
        text-align: right;
        span {
          font-size: 14px;
          display: inline-block;
          padding-right: 20px;
        }
      }
    }
  }
  .tabConent {
    height: 100%;
    background: #fff;
    position: relative;
    width: 100%;
    border-bottom: 1px solid #dddddd;
    margin-bottom: 10px;
    .ulStyle {
      height: 40px;
      display: flex;
      align-items: center;
      justify-content: center;
    }
    .goods_li {
      height: 40px;
      float: left;
      width: 75px;
      line-height: 25px;
    }

    .active {
      color: #505050;
      font-weight: 700;
      .goods_li_border {
        height: 3px;
        background-color: #2b2b2b;
        width: 30px;
        transform: translateX(-20%);
        margin-left: 0.8rem;
      }
    }
  }
}
</style>
