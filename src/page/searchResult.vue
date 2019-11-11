<template>
     <div class="page-serach">
      
         <section class="page-serachTop">
             <div class="left">
                <i class="iconfont icon-icon-"></i>
             <input type="text" placeholder="请输入商品名称" @focus="backGo">
             </div>
             <div class="right">
                 <span @click="serchButton">搜索</span>
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
                          <div class="tabNei">
                              <div class="tabTitle">
                                  <img src="../assets/images/11111.png" alt="">
                                  <h3>未找到相关的宝贝</h3>
                                  <p>可以去看看有那些想买的</p>
                              </div>
                              <button>去商场逛逛</button>
                          </div>
                  </section>
            </center>
     
         </section>
     
     </div>
</template>

<script>


export default {
  data() {
    return {
      list2: [{ title: "商店" }, { title: "店铺" }],
      activeIndex: 0,
      isShow:false,
      seen: "",
      serachValue:'',
      openeye: require("@/assets/images/even.png"), //图片地址
      nopeneye: require("@/assets/images/eventt.png") //图片地址
    };
  },

  methods: {
    goTab(index) {
      this.activeIndex = index;
    },


    backGo(){
      this.$router.go(-1)
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
    .pagetBottom{
        text-align: left;
        padding: 20px;
    }
    .pageRemenTop {
      height: 50px;
      display: flex;
      align-items: center;
      .pageTopLeft {
        flex: 1;
        span{
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
    .serchLishi{
        height: 100%;
 
        display: flex;
        align-items: center;
        margin-top: 20px;
          .pageTopLeft {
        flex: 1;
        span{
           margin-left: 10px;
 
        }
      }
      .pageTopRight {
        flex: 4;
        text-align: right;
        span{
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
  .tabMain{
      width: 100%;
      height: 100%;
      button{
          width: 95%;
          height: 50px;
          background: none;
          border: 1px solid #000;
          outline: none;
          margin-top: 30px;
      }
      .tabNei{
          height: 360px;

          .tabTitle{
              height: 240px;
              img{
                  margin-top: 70px;
                  margin-bottom: 10px;
              }
              p{
                  font-size: 12px;
                  padding-top: 10px;
                  color: #dddddd;
              }
          }
      }
  }
}
</style>
