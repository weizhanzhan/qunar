<template>
    <div class="list" ref="wrapper">
      <div>  
        <div class="area">
            <div class="title">当前城市</div>
            <div class="button-list">
                <div class="button-wrapper">
                    <div class="button">常州</div>                   
                </div>
            
            </div>
        </div>
        <div class="area">
            <div class="title">热门城市</div>
            <div class="button-list">
                <div class="button-wrapper">
                    <div class="button">常州</div>                   
                </div>
                <div class="button-wrapper">
                    <div class="button">常州</div>                   
                </div>
                <div class="button-wrapper">
                    <div class="button">常州</div>                   
                </div>
                <div class="button-wrapper">
                    <div class="button">常州</div>                   
                </div>
            </div>
        </div>
        <div class="area">
            <div class="title border-topbottom">A</div>
            <div class="item-list">
                <div class="item">阿拉尔 </div>
                <div class="item">阿拉尔 </div>
                <div class="item">阿拉尔 </div>
                <div class="item">阿拉尔 </div>
            </div>
            <div class="title border-topbottom">B</div>
            <div class="item-list">
                <div class="item">阿拉尔 </div>
                <div class="item">阿拉尔 </div>
                <div class="item">阿拉尔 </div>
                <div class="item">阿拉尔 </div>
            </div>
            <div class="title border-topbottom">C</div>
            <div class="item-list">
                <div class="item">阿拉尔 </div>
                <div class="item">阿拉尔 </div>
                <div class="item">阿拉尔 </div>
                <div class="item">阿拉尔 </div>
            </div>
        </div>
      </div>
    </div>
</template>

<script>
import Bscroll from 'better-scroll'

export default {
    // props:{
    //     hotCities:Array,
    //     cities:Object
    // }, 
    mounted(){
        this.scroll=new Bscroll(this.$refs.wrapper)
    }
}
</script>

<style lang="stylus" scoped>
 .list
   overflow hidden
   position absolute
   top 1.78rem
   left 0
   right 0
   bottom 0
   .title
     line-height .54rem
     background #eee
     padding-left .2rem
     color #666
     font-size .26rem
    .button-list   
      overflow hidden
      padding .1rem .6rem .1rem .1rem
      .button-wrapper
        float left
        width 33.3%
        .button
          text-align center
          margin 0.1rem
          padding .1rem 0
          border .02rem solid #ccc
          border-radius .06rem
   .item-list
     .item
       line-height .76rem
       padding-left .2rem
       border-bottom 1px solid #ccc
</style>
