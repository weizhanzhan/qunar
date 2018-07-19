<template>
  <div>
     <router-link tag="div" to="/" class="header-abs" v-show="showAbs">
         <div class="iconfont header-abs-back">&#xe624;</div>
     </router-link>
     <div class="header-fixed" 
          v-show="!showAbs"
          :style="opacityStyle">
         景点详情
         <router-link to="/">
          <div class="iconfont header-fixed-back">&#xe624;</div>
        </router-link>
     </div>
  </div>
</template>

<script>
export default {
    name:"detail-header",

    data(){
        return{  
            showAbs:true,
            opacityStyle:{
                opacity:0
            }
        }
    },
    methods:{
        handleScroll(){
            const top=document.documentElement.scrollTop
            if(top>60 ){
                let opacity= top/140
                opacity=opacity>1 ? 1 :opacity
                this.opacityStyle={ opacity }
                this.showAbs=false
            }else{
                this.showAbs=true
            }
         //   console.log(document.documentElement.scrollTop)
        }
    },
    activated(){
        window.addEventListener('scroll',this.handleScroll)
    }
    
}
</script>

<style lang="stylus" scoped>
   @import '~@/assets/style/varible.styl';//全局样式变量
   .header-abs
     position absolute
     left .2rem
     top .2rem
     width .8rem
     line-height .8rem
     height .8rem
     text-align center
     border-radius .4rem
     background rgba(0,0,0,.8)
     .header-abs-back
       color #fff
       font-size .4rem
   .header-fixed
     position fixed
     top 0
     left 0
     right 0
     height $headerHeight
     line-height :$headerHeight
     background :$bgColor
     color:#fff
     text-align center
     font-size .32rem
     .header-fixed-back
       position absolute
       top 0
       left  0
       width .64rem
       text-align center
       font-size .4rem
       color #fff
</style>
