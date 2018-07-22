<template>
  <div>
     <div class="item" v-for="(item,index) of list" :key="index">
         <div class="item-title">
             <span class="item-title-icon"></span>
             {{item.title}}
         </div>
         <div v-if="item.children" class="item-children">
             <detail-list :list="item.children"></detail-list>
         </div>
     </div>
  </div>
</template>

<script>
export default {
    name:"detail-list",
    props:{
        list:Array
    }

    
}
</script>

<style lang="stylus" scoped>
 .item  
   .item-title
     line-height .8rem
     font-size .32rem
     pading 0 .2rem
     border-bottom 1px solid #eee
     .item-title-icon
       position relative
       left .1rem
       top .06rem
       z-index -1
       display: inline-block;
       width: .36rem;
       height: .36rem;
       background: url(http://s.qunarzz.com/piao/image/touch/sight/detail.png) 0 -.45rem no-repeat;
       margin-right: .1rem;
       background-size: .4rem 3rem;
   .item-children
     padding 0 .2rem
</style>
