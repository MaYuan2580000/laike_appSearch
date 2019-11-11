<template>
     <header :class="['com-header',{'has-border':border},{'fixed':fixed}]">
           <div class="headerLeft">
               
               <span  v-if="leftText">
                    {{leftText}}
               </span>
               <slot v-else name="headerLeft"></slot>
           </div>
           <div class="headerTitle">
               <span v-if="title">{{title}}</span>
              <slot v-else name="headerTitle"></slot>
           </div>
           <div class="headerRight">
             <span  v-if="rightText">{{rightText}}</span>
               <slot v-else name="headerRight"></slot>
           </div>
     </header>
</template>

<script>
export default {
  props: {
    title: String,
    leftText: String,
    rightText: String,
    leftArrow: {
      type: Boolean,
      default: false
    },
    fixed: Boolean,
    border: Boolean
  },
  data() {
    return {};
  }
};
</script>

<style lang="less" scoped>
.com-header {
  width: 100%;
  height: 46px;
  background: #ffffff;
  line-height: 46px;
  position: relative;
  display: flex;
  z-index: 100;
  .headerLeft {
    flex: 1;
    i {
      font-size: 20px;
    }
    span{
        position: relative;
        top: -0.2rem;
    }
  }
  .headerTitle {
    flex: 3;
  }
  .headerRight {
    flex: 1;
  }
  &.has-border{
      &::after{
          content: "";
          position: absolute;
          left: 0;
          bottom: 0;
          width: 100%;
          height: 1px;
          transform: scaleY(0.5);
          background: #dddddd;
      }
  }
  &.fixed{
      position: fixed;
      top: 0;
      left: 0;
  }
}
</style>
