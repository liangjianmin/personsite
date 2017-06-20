<template>
    <div class="wap-home">
        <div class="page-loadmore">
            <div class="page-loadmore-wrapper" ref="wrapper" :style="{ height: wrapperHeight + 'px' }">
                <mt-loadmore :bottom-method="loadBottom" @bottom-status-change="handleBottomChange" :bottom-all-loaded="allLoaded" ref="loadmore">
                    <ul class="page-loadmore-list list boxsiz">
                        <li v-for="item in list" class="page-loadmore-listitem">
                            <a href="javascript:;">
                                <div class="pic">
                                    <img class="va-m" :src="'http://127.0.0.1:3838/static/upload/shop/'+item.url">
                                </div>
                                <p class="t1">{{item.describes}}</p>
                                <p class="t2">￥{{item.price}}</p>
                            </a>
                        </li>
                    </ul>
                    <div slot="bottom" class="mint-loadmore-bottom">
                        <span v-show="bottomStatus !== 'loading'" :class="{ 'is-rotate': bottomStatus === 'drop' }">↑</span>
                        <span v-show="bottomStatus === 'loading'"><mt-spinner type="snake"></mt-spinner></span>
                    </div>
                </mt-loadmore>
            </div>
        </div>
        <footer class="edm-menu boxsiz">
            <a class="curr" href="index.html">
                <i class="ico-1"></i>
                <p>首页</p>
            </a>
            <a href="#1">
                <i class="ico-2"></i>
                <p>分类列表</p>
            </a>
            <a href="#2">
                <i class="ico-3"></i>
                <p>我的</p>
            </a>
        </footer>
    </div>
</template>
<style scoped>
    .mint-loadmore {
        margin-bottom: 100px;
    }

    .page-loadmore .mint-spinner {
        display: inline-block;
        vertical-align: middle;
    }

    .page-loadmore-desc {
        text-align: center;
        color: #666;
        padding-bottom: 5px;
    }

    .page-loadmore-desc:last-of-type {
        border-bottom: solid 1px #eee;
    }

    .page-loadmore-listitem {
        background: #ffffff;
    }

    .page-loadmore-wrapper {
        overflow: scroll;
    }

    .mint-loadmore-bottom span {
        display: inline-block;
        -webkit-transition: .2s linear;
        transition: .2s linear;
        vertical-align: middle
    }

    .mint-loadmore-bottom span.is-rotate {
        -webkit-transform: rotate(180deg);
        transform: rotate(180deg);
    }

</style>
<script>
    require('../assets/css/wap/index.css');
    export default{
        name: 'waphome',
        data(){
            return {
                list: [],
                allLoaded: false,
                bottomStatus: '',
                wrapperHeight: 0,
                currage: 1,
                type: 3
            }
        },
        created() {
           // this.getlist();
        },
        mounted(){
            this.wrapperHeight = document.documentElement.clientHeight - this.$refs.wrapper.getBoundingClientRect().top;
        },
        methods: {
            getlist(){
                this.$http.get('shoplist', {
                    params: {
                        p: this.currage,
                        type: this.type
                    }
                }).then(res => {
                    this.list = res.data.list.data;
                }, error => {
                    console.log('请启动node server')
                });
            },
            handleBottomChange(status) {
                this.bottomStatus = status;
            },
            loadBottom() {
                setTimeout(() => {
                    if (this.currage == 2) {
                        this.allLoaded = true;
                    } else {
                        this.getlist();
                        this.currage = this.currage + 1;
                    }
                    this.$refs.loadmore.onBottomLoaded();
                }, 1500);
            }
        }
    }
</script>

