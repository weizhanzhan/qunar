<template>
    <div>
        <city-header></city-header>
        <city-search></city-search>
        <city-list2></city-list2>
        <city-alphabet></city-alphabet>
        <!-- <city-list :hotCities="hotCities" :cities="cities"></city-list> -->
        
    </div>
</template>

<script>
import CityHeader from './components/Header'
import CitySearch from './components/Search'
import CityList from './components/List'
import CityList2 from './components/List2'
import CityAlphabet from './components/Alphabet'
export default {
    name:'City',
    components:{
        CityHeader,
        CitySearch,
        CityList,
        CityList2,
        CityAlphabet
    },
    data(){
        return{
            hotCities:[],
            cities:{}
        }
    },
    methods:{
        getCity(res){
            res=res.data
            if(res.ret){
                this.hotCities=res.data.hotCities
                this.cities=res.data.cities
            }
        }
    },
    mounted () {
        this.$http.get('/api/city.json')
        .then(this.getCity)
    }
}
</script>

<style lang="stylus" scoped>

</style>
