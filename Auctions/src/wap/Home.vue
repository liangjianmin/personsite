<template>
    <div class="wap-home">
        <ul class="list boxsiz">
            <li>
                <a href="javascript:;">
                    <div class="pic">
                        <img src="http://127.0.0.1:3838/static/upload/shop/57e4a35bN230918c0.jpg" class="va-m">
                    </div>
                    <p class="t1">宁夏产区直供类人首红酒果香赤霞珠干红葡萄酒整箱宁夏产区直供类人首红酒果香赤霞珠干红葡萄酒整箱</p>
                    <p class="t2">￥388.00</p>
                </a>
            </li>
            <li>
                <a href="javascript:;">
                    <div class="pic">
                        <img src="http://127.0.0.1:3838/static/upload/shop/57e4a35bN230918c0.jpg" class="va-m">
                    </div>
                    <p class="t1">宁夏产区直供类人首红酒果香赤霞珠干红葡萄酒整箱</p>
                    <p class="t2">￥388.00</p>
                </a>
            </li>
            <li>
                <a href="javascript:;">
                    <div class="pic">
                        <img src="http://127.0.0.1:3838/static/upload/shop/57e4a35bN230918c0.jpg" class="va-m">
                    </div>
                    <p class="t1">宁夏产区直供类人首红酒果香赤霞珠干红葡萄酒整箱</p>
                    <p class="t2">￥388.00</p>
                </a>
            </li>
            <li>
                <a href="javascript:;">
                    <div class="pic">
                        <img src="http://127.0.0.1:3838/static/upload/shop/57e4a35bN230918c0.jpg" class="va-m">
                    </div>
                    <p class="t1">宁夏产区直供类人首红酒果香赤霞珠干红葡萄酒整箱</p>
                    <p class="t2">￥388.00</p>
                </a>
            </li>
        </ul>
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

</style>
<script>
    require('../assets/css/wap/index.css');
    export default{
        name: 'waphome',
        data(){
          return{

          }
        },
        mounted(){

        },
        methods: {
            handleClick: function() {
                this.$toast({
                    message: '操作成功',
                    iconClass: 'icon icon-success'
                })
            }
        }
    }
</script>

