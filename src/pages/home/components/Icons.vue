<template>
    <div class="icons">
         <swiper :options="swiperOption" ref="mySwiper" >
            <swiper-slide v-for="(lists,index) in pages" :key="index">
                <div class="icon" v-for="item of lists" :key="item.id">
                    <div class="icon-img">
                        <img class="icon-img-content" :src="item.imgUrl">
                    </div>                 
                    <p class="icon-desc">{{item.desc}}</p>
                </div> 
            </swiper-slide>        
        </swiper>
    </div>
</template>

<script>
export default {
    data(){
        return{
            swiperOption:{
                  // pagination:'.swiper-pagination',//显示swiper中 类似分页的点
                 // loop:true //轮播支持循环
              },    
        }
    },
    props:{
        list:Array      
    },
    computed:{
        pages () {
            const pages=[]
            this.list.forEach((list,index)=>{
               let page=parseInt(index/8)
               if(!pages[page])
                  pages[page]=[]                          
               pages[page].push(list)
            })
            return pages
        }
    }

}
</script>

<style lang="stylus" scoped>
    @import '~@/assets/style/varible.styl';//全局样式变量
    @import '~@/assets/style/mixins.styl'; //字符太长 省略号代替
    .icons >>> .swiper-container
      height 0
      padding-bottom 50%
    .icons
      margin-top .1rem
      .icon
        position relative
        overflow hidden
        float left 
        width 25%
        padding-bottom 25%
        height 0
        .icon-img
          position absolute
          top 0
          left 0
          right 0
          bottom 0.44rem
          box-sizing border-box
          padding .1rem
          .icon-img-content
            display block
            margin 0 auto //居中
            height 100%
        .icon-desc
          position absolute
          left 0
          right 0
          bottom 0
          line-height .44rem
          height .44rem
          color #darkTextColor
          text-align center
          ellilsis()
</style>
