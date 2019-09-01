<template>
     <header class="header">
         <slot name="left"></slot>
         <span>{{title}}</span>
         <slot name="right"></slot>
     </header>
</template>

<script>
export default {
    props:{
        title:String
    },
   data(){
       return{

       }
   }
}
</script>

<style lang="less" scoped>
  .header{
       height: 3rem;
    border-bottom: 1px solid #f3f3f3;
    line-height: 3rem;
    font-weight: 700;
  }
</style>
