<template>
    <div>
        <div class="recommend-title">热销推荐</div>
        <ul>
            <li class="item" v-for="item of list" :key="item.id" >
                <img class="item-img" :src="item.imgUrl" />
                <div class="item-info">
                    <p class="item-title">{{item.title}}</p>
                    <p class="item-desc">{{item.desc}}</p>
                    <button class="item-button"> 查看详情</button>
                </div>
            </li>
        </ul>
    </div>
</template>

<script>
export default {
    name:"HomeRecommend",
    props:{
        list:Array      
    },
}
</script>

<style lang="stylus" scoped>
 @import '~@/assets/style/mixins.styl'; //字符太长 省略号代替
  .recommend-title
    margin-top .2rem
    line-height .8rem
    background #eee
    text-indent .2rem
  .item
    overflow hidden
    display flex
    height 1.9rem
    border-bottom:1px solid #eee
    .item-img
      width 1.7rem
      height 1.7rem
      padding .1rem
    .item-info
      flex 1
      min-width 0  //ellilsis（）省略字符没起作用
      padding .1rem
      .item-title
        line-height .54rem
        font-size .32rem
        ellilsis()
      .item-desc
        line-height .4rem
        color #ccc
        ellilsis()
      .item-button
        line-height .44rem
        margin-top .16rem
        background #ff9300
        padding 0 .1rem
        border-radius .06rem
        color #fff
        
</style>
