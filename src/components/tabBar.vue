<template>
     <div class="comp_tab_tar" v-show="hidshow">
         <ul >
             <router-link v-for="(item,index) in tabList" :key="index" :to="item.path">
             <li  @click="goTab(index)" 
               :class="{ active:selected == index}">
                 <!-- <i :class="item.iconFont"></i> -->
                 <img :src="selected == index ? item.isActive :item.iconFont " alt class="imgList"/>
                 {{item.title}}
             </li>
             </router-link>
         </ul>
     </div>
</template>

<script>
export default {
  name: "tabbar",
  
  props: {
    selectedActive: {
      type: Number,
      default: 0
    },
    tabList: {
      type: Array,
      default: []
    }
  },
  data() {
    return {
      selected: this.selectedActive,
         docmHeight: document.documentElement.clientHeight,  //默认屏幕高度
        showHeight: document.documentElement.clientHeight,   //实时屏幕高度
        hidshow:true  //显示或者隐藏footer
    };
  },
  methods: {
    goTab(index) {
      this.selected = index;
    }
  },
    mounted() {
    // window.onresize监听页面高度的变化
    window.onresize = ()=>{
        return(()=>{
            this.showHeight = document.body.clientHeight;
        })()
    }
  },
  watch:{
      showHeight:function() {
        if(this.docmHeight > this.showHeight){
            this.hidshow=false
        }else{
            this.hidshow=true
        }
      }
      }}
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
  padding-top: 0.2rem;

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
