<template>
    <div>
        <city-header></city-header>
        <city-search></city-search>
        <city-list2 :hotCities="hotCities" :cities="cities" :letter="letter"></city-list2>
        <city-alphabet :cities="cities" @change="change"></city-alphabet>
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
            cities:{},
            letter:""
        }
    },
    methods:{
        getCity(res){
            console.log(res.data)
            res=res.data
            if(res.ret){
                this.hotCities=res.data.hotCities
                this.cities=res.data.cities
            }
        },
        change(val){
           this.letter=val
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
