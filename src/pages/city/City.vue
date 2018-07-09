<template>
    <div>
        <city-header></city-header>
        <city-search></city-search>
        <city-list :hotCities="hotCities" :cities="cities"></city-list>
    </div>
</template>

<script>
import CityHeader from './components/Header'
import CitySearch from './components/Search'
import CityList from './components/List'
export default {
    name:'City',
    components:{
        CityHeader,
        CitySearch,
        CityList
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
