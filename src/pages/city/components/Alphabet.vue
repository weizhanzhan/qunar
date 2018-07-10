<template>
    <ul class="list">
        <li class="item" 
            v-for="item of letters" 
            :key="item"
            @touchstart="handleTouchStart"
            @touchmove="handleTouchMove"
            @touchend="handleTouchEnd"
            @click="goScroll(item)"
            :ref="item"
        >
            {{item}}
        </li>
    </ul>
</template>

<script>
export default {
    name:'CityHeader',
    props:{
        cities:Object
    },
    data () {
       return {
           touchStatus:false,
           startY:0,
           timer:null
       }
    },
    computed:{
        letters(){
            const letters=[]
            for(let i in this.cities){
                letters.push(i)
            }
            return letters
        }
    },
    updated(){
        this.startY=this.$refs['A'][0].offsetTop  //获取顶部字母 距离外层div的高度
    },
    methods:{
        goScroll(key){
            this.$emit('change',key)
        },
        handleTouchStart () {
            this.touchStatus=true
            
        },
        handleTouchMove (e) {
            if(this.touchStatus){    
                if(this.timer){
                    clearTimeout(this.timer)
                }
                this.timer=setTimeout(()=>{ //节流减少move滑动频率 ，函数节流
                    const touchY=e.touches[0].clientY-78  
                    const index=Math.floor((touchY-this.startY) /20 )
                    if(index>=0&&index<this.letters.length){
                        this.$emit("change",this.letters[index])
                    }
                },16)
                    
                    

            }
        },
        handleTouchEnd () {
            this.touchStatus=false
        },
    }

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
