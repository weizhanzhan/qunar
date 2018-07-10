<template>
  <div>
     <div class="search">
       <input class="search-input" type="text" v-model="keyWord" placeholder="输入城市名或拼音">
     </div>
     <div class="search-content" ref="wrapper" v-show="keyWord">
       <ul>
         <li v-for="item of list" 
             :key="item.id"
             class="search-item">
             {{item.name}}
        </li>
        <li class="search-item" v-show="hasNoData">没有找到匹配数据</li>
       </ul>
     </div>
  </div>
    

</template>

<script>
import Bscroll from 'better-scroll'
export default {
    name:'CitySearch',
    props:{
        cities:Object
    },
    data(){
        return{
            keyWord:"",
            list:[],
            timer:null
        }
    },
    watch:{
        keyWord(){
            console.log(this.keyWord)
            if(this.timer){
                clearTimeout(this.timer)
            }
            if(!this.keyWord){
                this.list=[]
                return
            }
            this.timer=setTimeout(()=>{
                const result=[]
                for(let i in this.cities){
                      this.cities[i].forEach(city=>{
                          if(city.spell.indexOf(this.keyWord)>-1||city.name.indexOf(this.keyWord)>-1){
                              result.push(city)
                          }
                      })                    
                }
                this.list=result
            },100)

            
        }
    },
    computed:{
        hasNoData(){
            return !this.list.length
        }
    },
    mounted(){
        this.scroll=new Bscroll(this.$refs.wrapper)
    }

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
  .search-content
    z-index 1
    overflow hidden
    
    background #eee
    position absolute
    top 1.78rem
    left 0
    right 0
    bottom 0
    .search-item
      line-height .62rem
      padding-left .2rem
      background #fff
      border-bottom 1px solid #ccc
</style>
