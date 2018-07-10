<template>
    <div>     
        <home-header :city="city"></home-header>
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
            city:'',
            iconList:[],
            swiperList:[],
            recommendList:[],
            weekendList:[]
        }
    },
    methods:{
        getData(res){    
           const data=res.data
           if(data.ret){
               const jsonData=data.data
               this.city=jsonData.city
               this.iconList=jsonData.iconList
               this.swiperList=jsonData.swiperList
               this.recommendList=jsonData.recommendList
               this.weekendList=jsonData.weekendList
           }
        }
    },
    mounted () {
        // this.$http.get("/api/index.json")
        this.$http.get("index.json")
        .then(this.getData)
    }

}
</script>

<style>

</style>
