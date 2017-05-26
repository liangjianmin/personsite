<template>
   <el-col :span="24">
       <el-col :span="12" class="echarts">
           <IEcharts :option="pie_radius" :loading="loading"></IEcharts>
       </el-col>
       <el-col :span="12" class="echarts">
           <el-table :data="stocklist" border>
               <el-table-column prop="typecostume" label="服饰美妆"></el-table-column>
               <el-table-column prop="typeelectrical" label="家用电器"></el-table-column>
               <el-table-column property="typedigital" label="电脑数码"></el-table-column>
               <el-table-column prop="total" label="总库存量"></el-table-column>
           </el-table>
       </el-col>
   </el-col>
</template>

<style scoped>
    .echarts {
        width: 800px;
        height: 400px;
    }
</style>
<script>
    import IEcharts from 'vue-echarts-v3/src/full.vue';
    import {mapState} from 'vuex'
    export default {
        name: 'stock',
        data() {
            return {
                loading: true,
                stocklist:null,
                pie_radius:{
                    color:["#20a0ff","#FF4949","#F7BA2A"],
                    title : {
                        text: '数据分析',
                        x:'center'
                    },
                    tooltip : {
                        trigger: 'item',
                        formatter: "{a} <br/>{b} : {c} ({d}%)"
                    },
                    legend: {
                        orient: 'vertical',
                        left: 'left',
                        data: ["服饰美妆", "家用电器", "电脑数码"]
                    },
                    series : [
                        {
                            name: '数据',
                            type: 'pie',
                            radius : ['40%','60%'],
                            data:[
                                {value:0, name:'服饰美妆'},
                                {value:0, name:'家用电器'},
                                {value:0, name:'电脑数码'}
                            ],
                            itemStyle: {
                                emphasis: {
                                    shadowBlur: 10,
                                    shadowOffsetX: 0,
                                    shadowColor: 'rgba(0, 0, 0, 0.5)'
                                }
                            }
                        }
                    ]
                }
            }
        },
        computed: mapState({
            stock (state) {
              var obj=Object.assign(state.shop.stock);
              if(obj.hasOwnProperty('data')){
                  return obj.data;
              }
            }
        }),
        mounted(){
            this.getStock();
        },
        watch: {
            $route(to){
                var path = to.path.substring(1);
                if (path == 'stock') {
                    this.getStock();
                }
            }
        },
        methods: {
            getStock(){
                let arr=[];
                this.$http.get('stock').then(res => {
                    this.stocklist=res.data.data;
                    this.pie_radius.series[0].data[0].value = this.stocklist[0].typecostume;
                    this.pie_radius.series[0].data[1].value = this.stocklist[0].typeelectrical;
                    this.pie_radius.series[0].data[2].value = this.stocklist[0].typedigital;
                    this.loading = false;
                }, error => {
                    console.log('请启动node server')
                });
            }
        },
        components: {
            IEcharts
        }
    }
</script>
