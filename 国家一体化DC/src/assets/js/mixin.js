export const myMixins = {
    data() {
        return {
            whRate: 0.5625,
            winWCur: 0,
            winHCur: 0,
            curWHRate: 0,
            lang:true
        }
    },
    watch: {
        $route: {
            handler(newVal, oldVal) {
                //判断newVal有没有值监听路由变化
                this.init()
                // console.log(newVal)
                if(newVal.query.lang == 'cn-ZH'){
                    this.lang = true
                }else if(newVal.query.lang == 'en-US'){  //判断url参数改变中英文
                    this.lang = false
                }
            },
            deep: true
        },
    },
    methods: {
        resizeHandler(e) {
            this.curWHRate =
                document.documentElement.clientHeight /
                document.documentElement.clientWidth;
            if (this.curWHRate < this.whRate) {
                this.winWCur = document.documentElement.clientHeight / this.whRate;
                this.winHCur = document.documentElement.clientHeight;
            } else {
                this.winHCur = document.documentElement.clientWidth * this.whRate;
                this.winWCur = document.documentElement.clientWidth;
            }
        },
        langSelect(){
            if(this.lang){
                this.$router.push({path:this.$route.path,query:{lang:'en-US'}})
                this.lang = false
            }else {
                this.$router.push({path:this.$route.path,query:{lang:'cn-ZH'}})
                this.lang = true
            }
        }
    },
    mounted() {
        this.resizeHandler();
        window.addEventListener("resize", this.resizeHandler);
    },
    created(){
        if(this.$route.query.lang == 'cn-ZH'){
            this.lang = true
        }else if(this.$route.query.lang == 'en-US'){  //判断url参数改变中英文
            this.lang = false
        }
    }
}
