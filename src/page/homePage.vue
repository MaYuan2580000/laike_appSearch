<template>
    <div class="comp_home">
        <router-view></router-view>
         <TabBar :tabList="tabList" v-show="$route.meta.showFooter"></TabBar>
   
    </div>
</template>

<script>
import TabBar from "../components/tabBar";
import { Button } from 'vant';
export default {
  name: "home",
  components: {
    TabBar,
    [Button.name]:Button
  },
  data() {
    return {
      tabList: [
        {
          title: "首页",
          path: "/Shouye",
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
  }
};
</script>

<style scoped>
</style>
