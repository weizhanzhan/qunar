<template>
    <div class="wrapper">
         <swiper :options="swiperOption" ref="mySwiper" @someSwiperEvent="callback" v-if="list.length">
            <swiper-slide v-for="(list,index) in list" :key="index">
                <img class="swiper-img" :src="list.imgUrl">
            </swiper-slide>    
            <div class="swiper-pagination"  slot="pagination"></div>  
        </swiper>
    </div>
</template>

<script>
export default {
      name:"HomeSwiper",
      props:{
          list:Array
      },
      data(){
          return{ 
              swiperOption:{
                  pagination:'.swiper-pagination',//显示swiper中 类似分页的点
                  loop:true //轮播支持循环
              },
          }
      },
      methods:{
          callback(){}
      }
}
</script>

<style lang="stylus" scoped>
  //  样式穿透 wrapper下面 ，所有子组件出现这个 .swiper-pagination-bullet-active，就让他变成某个样式，不受scoped的限制
  .wrapper >>> .swiper-pagination-bullet-active
    background #fff !important
  .wrapper
    overflow :hidden
    width 100%
    height 0
    padding-bottom 31%
    .swiper-img
      width :100%
</style>
