<template>
     <div class="comp_tab_tar" >
         <ul >
            
             <li v-for="(item,index) in tabList" :key="index"
                @click="switchTo(item.path)"
               :class="{ active:item.path == $route.path}">
                 <!-- <i :class="item.iconFont"></i> -->
                 <img :src="item.path == $route.path ? item.isActive :item.iconFont" alt />
                 {{item.title}}
             </li>
            
         </ul>
     </div>
</template>

<script>
export default {
  name: "tabbar",
  
  // props: {
  //   selectedActive: {
  //     type: Number,
  //     default: 0
  //   },
  //   tabList: {
  //     type: Array,
  //     default: []
  //   }
  // },
  data() {
    return {
      // selected: this.selectedActive,
       tabList: [
        {
          title: "首页",
          path: "/",
          iconFont: require("@/assets/images/home.png"),
          isActive: require("@/assets/images/home_active.png")
        },
        {
          title: "全部分类",
          path: "/classIfy",
          iconFont: require("@/assets/images/category.png"),
          isActive: require("@/assets/images/category_active.png")
        },
        {
          title: "购物车",
          path: "/shoppingCar",
          iconFont: require("@/assets/images/cart.png"),
          isActive: require("@/assets/images/cart_active.png")
        },
        {
          title: "个人中心",
          path: "/persoNal",
          iconFont: require("@/assets/images/my.png"),
          isActive: require("@/assets/images/my_active.png")
        }
      ]
    };
  },
  methods: {
    switchTo(path){
      this.$router.replace(`${path}`)
    }
  },
 
}
</script>

<style lang="less" scoped>
* {
  margin: 0;
  padding: 0;
}
.comp_tab_tar {
  position: fixed;
  left: 0;
  width: 100%;
  height: 100%;
  height: 44px;
  bottom: 0.4rem;
  z-index: 999;
  img{
    width: 1.8rem;
    margin-bottom: 0.2rem;
  }
  ul {
    position: relative;
  height: 100%;
  height: 4rem;
  display: flex;
  background: #ffffff;
  justify-content: space-around;
    &::after {
      content: "";
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 1px;
      background: gray;
      transform: translateY(0.5);
    }
}
}

ul li {
  list-style: none;
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  font-size: 12px;
  padding-top: 0.3rem;

  align-items: center;
}

ul li i {
  font-size: 24px;
  font-weight: bold;
}
.active {
  color: #505050;
  font-weight: 700;
}
a {
  text-decoration: none;
  color: #dddddd;
}
.imgList {
  width: 1.8rem;
}

</style>
