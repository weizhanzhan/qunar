<template>
    <div>     
        <home-header ></home-header>
        <home-swiper :list="swiperList"></home-swiper>
        <home-icons  :list="iconList"></home-icons>
        <home-recommend :list="recommendList"></home-recommend>
        <home-weekend :list="weekendList"></home-weekend>
    </div>
</template>

<script>

import HomeHeader from './components/Header.vue' 
import HomeSwiper from './components/Swiper.vue' 
import HomeIcons from './components/Icons.vue' 
import HomeRecommend from './components/Recommend.vue' 
import HomeWeekend from './components/Weekend.vue' 
import { mapState } from 'vuex'
export default { 
    name:"Home",
    components:{
        HomeHeader,
        HomeSwiper,
        HomeIcons,
        HomeRecommend,
        HomeWeekend
    },
    data(){
        return{
            iconList:[],
            swiperList:[],
            recommendList:[],
            weekendList:[],
            lastCity:''
        }
    },
    methods:{
        getData(res){    
           const data=res.data
           if(data.ret){
               const jsonData=data.data
               this.iconList=jsonData.iconList
               this.swiperList=jsonData.swiperList
               this.recommendList=jsonData.recommendList
               this.weekendList=jsonData.weekendList
           }
        },
        init(){
          this.$http.get("index.json?city="+this.city)
          .then(this.getData)
        }
    },
    computed:{
        ...mapState(['city'])
    },
    activated(){
        if(this.lastCity!==this.city){
            this.init()
            this.lastCity=this.city
        }
    },
    mounted () {
        this.lastCity=this.city
        this.init()
    }

}
</script>

<style>

</style>
