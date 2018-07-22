<template>
  <div>
    <div class="banner" @click="handleBanner">
        <img class="banner-img" src="http://img1.qunarzz.com/sight/p0/1611/78/786b5749da2dceb5a3.water.jpg_r_800x800_b52c7865.jpg"/>
        <div class="banner-info">
          <div class="banner-title">常州中华恐龙园(AAAAA景区)</div>
          <div class="banner-number">
            <span class="iconfont">&#xe608;</span>
            39
          </div>
        </div>
    </div> 
    <fade-animation>
       <common-gallary 
        :imgs="imgs" 
        v-show="showGallary" 
        @closeBanner="closeBanner">
      </common-gallary>
    </fade-animation>
    
  </div>
</template>

<script>
import CommonGallary from 'common/gallary/gallary'
import FadeAnimation from 'common/fade/fade'
export default {
    name:"banner",
    components:{
        CommonGallary,
        FadeAnimation
    },
    data(){
        return{
            imgs: [
                    'http://img1.qunarzz.com/sight/p0/1807/c9/c9b31bce950940bda3.img.jpg_r_800x800_375a5f0f.jpg',
                    'http://img1.qunarzz.com/sight/p0/1807/b3/b366356df3f4f44a3.img.jpg_r_800x800_07fb1909.jpg'
                ],
            showGallary:false
        }
    },
    methods:{
        handleBanner(){
            this.showGallary=true
        },
        closeBanner(){
            this.showGallary=false
        }
    }
    
}
</script>

<style lang="stylus" scoped>
  .banner
    position relative
    overflow: hidden;
    height 0
    padding-bottom 55%
    .banner-img
      width 100%
    .banner-info
      display flex
      position absolute
      left 0
      right 0
      bottom 0
      line-height .6rem
      color #fff
      background-image linear-gradient(top,rgba(0,0,0,0),rgba(0,0,0,0.8))//info层颜色渐变
      .banner-title
        flex 1
        font-size .32rem
        padding 0 .2rem
      .banner-number
        padding 0 .4rem
        height .4rem
        line-height .4rem
        border-radius .2rem
        background rgba(0,0,0,.8)
</style>
