<template>
    <ul class="list">
        <li class="item">A</li>
        <li class="item">A</li>
        <li class="item">A</li>
        <li class="item">A</li>
        <li class="item">A</li>
        <li class="item">A</li>
        <li class="item">A</li>
        <li class="item">A</li>
        <li class="item">A</li>
    </ul>
</template>

<script>
export default {
    name:'CityHeader'

}
</script>

<style lang="stylus" scoped>
  @import '~@/assets/style/varible.styl';//全局样式变量
  .list
    display flex
    flex-direction column
    justify-content center  //以上为flex垂直居中
    position absolute
    right 0
    top 1.78rem
    bottom 0
    width .4rem
    .item
      line-height .4rem
      text-align center
      color $bgColor
    
</style>
