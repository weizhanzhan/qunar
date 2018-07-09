<template>
    <div class="list">
        <div class="list-title">热门城市</div>
        <ul class="map-list">
            <li class="list-li" v-for="n of hotCities" :key="n.id">{{n.name}}</li>
        </ul>
        <div class="list-title">字母排序</div>
        <ul class="character-list">
            <li class="character-li" 
                v-for="(city,key) of cities" 
                :key="key"
                @click="goScroll"
            >{{key}}</li>
        </ul>
        <div v-for="(city,key) of cities" :key="key" v-if="city.length">
             <div class="list-title" :id="key">{{key}}</div>
             <ul class="map-list">
                <li class="list-li" v-for="n of city" :key="n.id">{{n.name}}</li>
             </ul>
        </div>
       
    </div>
</template>

<script>
export default {
    props:{
        hotCities:Array,
        cities:Object
    },
    computed:{
        character(){
            let nums=[]
            for(let i=0;i<26;i++){
                nums.push(String.fromCharCode(65+i))
            }
            return nums
        }
    },
    methods:{
        goScroll($event){
            window.location.href="#"+$event.target.innerHTML
        }
    }
   

}
</script>

<style lang="stylus" scoped>
  .list
    .list-title
      height 0.62rem
      line-height .65rem
      text-indent .3rem
      font-size: .24rem;
      width 100%
      background #F4F4F4
    .map-list
      position relative
      overflow hidden
      .list-li
        display:inline-block;
        width 33.3%
        height: .9rem;
        line-height: .9rem;
        font-size: .28rem;
        text-align center
        border-bottom: .02rem solid #ddd;
        border-right: .02rem solid #ddd;
        margin-right: -1px;
        margin-bottom: -1px;
        position: relative;
        z-index: 10;
        color: #212121;
    .character-list
      position relative
      overflow hidden
      padding: .3rem 0;
      .character-li
        display:inline-block;
        width 16.67%
        text-align center
        height: .9rem;
        line-height: .9rem;
        font-size: .28rem;
</style>
