<template>
    <div class="header">
        <div class="header-left">
            <div class="iconfont back-icon">&#xe624;</div>
        </div>
        <div class="header-input">
            <span class="iconfont">&#xe632;</span>
            输入城市/景点/游玩主题
        </div>
        <router-link to="/city">
          <div class="header-right">
            {{city}}
            <span class="iconfont arrow-icon">&#xe6aa;</span>
          </div>
        </router-link>
    </div>
</template>

<script>
export default {
    name:"HomeHeader",
    computed:{
        city(){
            return this.$store.state.city
        }
    }

}
</script>

<style lang="stylus" scoped>
   @import '~@/assets/style/varible.styl';//全局样式变量
   /* 1rem =html font-size(reset.css中设定字体大小为50px) =50px 
      由于是二倍图（原像素除于2）
      x= 86 / 2 / 50  x=0.86  86px就等于 0.86rem
  */
  .header
    display :flex
    line-height :$headerHeight
    background :$bgColor
    color:#fff
    .header-left 
      width : 0.64rem
      float : left
      .back-icon
        text-align :center
        font-size :.4rem
    .header-input
      flex:1
      height :0.64rem
      line-height :0.64rem
      margin-top:0.12rem
      color:#ccc
      padding-left :.2rem
      background :#fff
      border-radius:.1rem
    .header-right
      width :1.24rem
      float :right
      text-align :center
      color #fff
      .arrow-icon
        font-size :.24rem
        margin-left :-.1rem

</style>
