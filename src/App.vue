<template>
    <mk-iscroll class="wrapper" :data="data" :pullup="pullup" :pulldown="pulldown" @scrollTo="scrollTo" @scrollToEnd="scrollToEnd"  @scrollStart="scrollStart"  @scroll="scroll">
        <ul>
            <li v-for="(item, index) in data">{{item.activityText}}</li>
        </ul>
    </mk-iscroll>
</template>

<script>
import Vue from 'vue'
import iscroll from './components'
Vue.use(iscroll)
export default {
    data() {
        return{
            data:[],
            pullup:true,
            pulldown:false
        } 
    },
    methods: {
        loadData(){
            let self = this
            this.$ajax.get('//wx.yunhou.com/api/list').then(res => {
                this.data = this.data.concat(res.data)
                //this.data = res.data.concat(this.data)
            });
        },
    
        scrollStart(){
         
        },
    
        scroll(){
            
        },
     
        scrollToEnd(){
            this.loadData()
        },

        scrollTo(){
            
        }
    },
    mounted(){
        this.loadData()
    }
}
</script>

<style scoped lang="scss">
.wrapper{
    width: 100%;
    height: 300px;
    overflow: hidden;
    background: #ccc;
}
</style>
