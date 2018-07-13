<template>
    <div class="list" ref="wrapper">
      <div>  
        <div class="area">
            <div class="title">当前城市</div>
            <div class="button-list">
                <div class="button-wrapper">
                    <div class="button">{{city}}</div>                   
                </div>         
            </div>
        </div>
        <div class="area">
            <div class="title">热门城市</div>
            <div class="button-list">
                <div class="button-wrapper"
                     v-for="item of hotCities"
                     :key="item.id"
                     @click="handleCityClick(item.name)"
                >
                     <div class="button">{{item.name}}</div>                   
                </div>              
            </div>
        </div>
        <div class="area"
             v-for="(city,key) of cities" 
             :key="key"  
             :ref="key">
            <div class="title border-topbottom">{{key}}</div>
            <div class="item-list">
                <div class="item" 
                v-for="item of city" 
                :key="item.id" 
                @click="handleCityClick(item.name)"
                >{{item.name}}</div>
            </div> 
          </div> 
      </div>
    </div>
</template>

<script>
import Bscroll from 'better-scroll'
import {mapState,mapMutations} from 'vuex'
export default {
    props:{
        hotCities:Array,
        cities:Object,
        letter:String
    }, 
    watch:{
        letter(){
            if(this.letter){              
                const element=this.$refs[this.letter]                      
                this.scroll.scrollToElement(element[0])        
            }
        }
    },
    computed:{
        ...mapState(['city'])
    },
    methods:{
        handleCityClick(name){
         //  this.$store.commit('changeCity',name)
           this.changeCity(name)
           this.$router.push('/')
        },
        ...mapMutations(['changeCity']) //把vuex的方法映射到该组件的方法中 名字相同 调用的时候就可以写this.xxxx
    },
    mounted(){
        this.scroll=new Bscroll(this.$refs.wrapper,{
            click:true
        })
        
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
