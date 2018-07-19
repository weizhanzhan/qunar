<template>
    <div class="container" @click="handleGallary">
        <div class="wrapper">
          <swiper :options="swiperOption" v-if="imgs.length">
            <swiper-slide v-for="(img,index) in imgs" :key="index">
                <img class="gallary-img" :src="img">
            </swiper-slide> 
               
            <div class="swiper-pagination"  slot="pagination"></div> 
          </swiper>
        </div>
    </div>
</template>

<script>
export default {
    name:"CommonGallary",
    props:{
        imgs:{
            type:Array,                    
        }
    },
    data(){
        return{
            swiperOption:{
                pagination:'.swiper-pagination',
                paginationType:"fraction",//分页样式
                observeParents:true,
                observer:true //监听到dom变化 就会自我刷新一次，就解决显示后宽度计算的问题

            }
        }
    },
    methods:{
        handleGallary(){
                this.$emit('closeBanner')
            }
    }

}
</script>

<style lang="stylus" scoped>
  .container >>>.swiper-container
    overflow inherit
  .container
    display flex
    flex-direction column
    justify-content center
    z-index 99
    position fixed
    left 0
    right 0
    top 0
    bottom 0
    background #000
    .wrapper
      height 0
      width 100%    
      padding-bottom 50%
      .gallary-img
        width 100%
      .swiper-pagination
        color #fff
        bottom  -1rem
</style>
