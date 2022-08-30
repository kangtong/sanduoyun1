export const myMixins = {
    data() {
        return {
            fcflat: 1,
            whRate: 0.5625,
            winWCur: 0,
            winHCur: 0,
            curWHRate: 0,
            lang:true
        }
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
        },
        HandleStartPlayPc() {
            console.log('HandleStartPlayPc', this.fcflat, this.lang)
            if (this.fcflat == 1) {
                if (this.lang) {
                    this.$refs.fcvideo.pause();
                } else {
                    this.$refs.enfcvideo.pause();
                }
                this.fcflat = 2;
            } else if (this.fcflat == 2) {
                if (this.lang) {
                    this.$refs.fcvideo.play();
                } else {
                    this.$refs.enfcvideo.play();
                }
                this.fcflat = 1;
            }
        },
    },
    watch: {
        $route: {
            handler(newVal, oldVal) {
                //判断newVal有没有值监听路由变化
                console.log(newVal)
                if(newVal.query.lang == 'cn-ZH'){
                    this.lang = true
                }else if(newVal.query.lang == 'en-US'){  //判断url参数改变中英文
                    this.lang = false
                }
            },
            deep: true
        },
    },
    mounted() {
        this.resizeHandler();
        window.addEventListener("resize", this.resizeHandler);
    },
    created(){
        // var ch = ['/minjiezuwang','/opgw','/qinglianghua','/rongheganzhi','/weibochangju','/yunbianxietong','/']
        // var en = ['/enminjiezuwang','/enopgw','/enqinglianghua','/enrongheganzhi','/enweibochangju','/enyunbianxietong','/enhomeview',]
        //
        // if(this.$route.query.lang == 'cn-ZH'){
        //     var indexch = en.map(item => item).indexOf(this.$route.path)
        //     if(indexch<0){return}
        //     this.$router.push({path:ch[indexch],query: this.$route.query})
        // }else if(this.$route.query.lang == 'en-US'){  //判断是不是从中午页面跳过来的
        //     var index = ch.map(item => item).indexOf(this.$route.path)
        //     if(index<0){return}
        //     this.$router.push({path:en[index],query: this.$route.query})
        // }
        console.log(this.$route)
        if(this.$route.query.lang == 'cn-ZH'){
            this.lang = true
        }else if(this.$route.query.lang == 'en-US'){  //判断url参数改变中英文
            this.lang = false
        }
    }
}
