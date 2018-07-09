<template>
    <div>
        <div class="recommend-title">周末去哪儿</div>
        <ul>
            <li class="item" v-for="item of list" :key="item.id" >
                <div class="item-img-wrapper">
                    <img class="item-img" :src="item.imgUrl" />
                </div>             
                <div class="item-info">
                    <p class="item-title">{{item.title}}</p>
                    <p class="item-desc">{{item.desc}}</p>                  
                </div>
            </li>
        </ul>
    </div>
</template>

<script>
export default {
    name:"HomeWeekend",
    props:{
          list:Array
    }
}
</script>

<style lang="stylus" scoped>
 @import '~@/assets/style/mixins.styl'; //字符太长 省略号代替
  .recommend-title
    line-height .8rem
    background #eee
    text-indent .2rem
  .item
    border-bottom:1px solid #eee
  .item-img-wrapper
    overflow hidden
    height 0
    padding-bottom 33.9%
    .item-img
      width 100%     
  .item-info
    padding .1rem
    .item-title
      line-height .54rem
      font-size .32rem
      ellilsis()
    .item-desc
      line-height .4rem
      color #ccc
      ellilsis()
        
        
</style>
