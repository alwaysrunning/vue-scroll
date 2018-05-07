<template>
    <div ref="wrapper">
        <slot></slot>
    </div>
</template>

<script>
    import Vue from 'vue'
    import IScroll from 'iscroll'
    export default {
        name:'mk-iscroll',
        props:{
            /**
             * 列表的数据
             */
            data: {
                type: Array,
                default: null
            },

            pullup:{
                type:Boolean,
                default:true
            },

            pulldown:{
                type:Boolean,
                default:false
            },

            /**
             * 当数据更新后，刷新scroll的延时。
             */
            refreshDelay: {
                type: Number,
                default: 20
            }
        },
        data() {
            return{
                list:[],
                scroll:null
            } 
        },
        methods: {
            initScroll(){
                let self = this
                if(!this.$refs.wrapper) return
                this.scroll = new IScroll(this.$refs.wrapper,{
                    probeType: 2,
                    bounce:false,
                    click:true,
                    scrollbars:false,
                    scrollY:true,
                    fadeScrollbars:false,
                    disablePointer:true,
                    disableTouch:false,
                    disableMouse:true
                });
                this.scroll.on('scrollStart', () => {
                    self.$emit('scrollStart')
                })
                this.scroll.on('scroll', () => {
                    self.$emit('scroll')
                })

                
                this.scroll.on('scrollEnd',function(){
                    if(self.pullup){
                        if(this.y <= this.maxScrollY+30){  
                            self.$emit('scrollToEnd')
                        }
                    }
                    if(self.pulldown){
                        if(this.y >= 0){  
                            self.$emit('scrollToEnd')
                        }
                    }
                })
                
            },
            scrollTo(x, y, time, easing){
                //擦除动画的类型选项有：quadratic, circular, back, bounce, elastic。
                this.scroll.scrollTo(0, -100, 1000, IScroll.utils.ease.elastic)
            },
            refresh(){
                this.scroll && this.scroll.refresh()
            },

            destroy(){
                this.scroll && this.scroll.destroy()
            }
        },
        mounted(){
            setTimeout(()=>{
                this.initScroll()
            },20)
        },
        watch:{
            data(){
                setTimeout(()=>{
                    this.refresh()
                },this.refreshDelay)
            }
        }
    }
</script>

<style scoped lang="scss">
ul{
    width:100%;
    padding: 0;
    li{
        padding: rem(40) 0;
        font-size: rem(40);
        list-style-type: none
    }

}

</style>
