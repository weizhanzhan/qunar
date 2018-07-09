<template>
    <div class="search">
       <input class="search-input" type="text" placeholder="输入城市名或拼音">
    </div>
</template>

<script>
export default {
    name:'CitySearch'

}
</script>

<style lang="stylus" scoped>
  @import '~@/assets/style/varible.styl';//全局样式变量
  .search
    height .72rem
    padding .1rem
    background $bgColor
    .search-input
      box-sizing border-box
      height .7rem
      line-height .7rem
      width 100%
      text-align center
      border-radius .06rem
      color #666
      padding 0 .1rem
</style>
