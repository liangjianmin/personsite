<template>
    <el-col :span="24">
        <el-form :inline="true">
            <el-form-item>
                <el-input  placeholder="输入订单号"></el-input>
            </el-form-item>
            <el-select v-model="status" placeholder="请选择订单状态">
                <el-option v-for="item in statusdata" :key="item.value" :label="item.label" :value="item.value">
                </el-option>
            </el-select>
            <el-select v-model="value" placeholder="请选择分类">
                <el-option v-for="item in options" :key="item.value" :label="item.label" :value="item.value">
                </el-option>
            </el-select>
            <el-date-picker v-model="date" align="right" type="date" placeholder="选择日期" :picker-options="pickerOptions">
            </el-date-picker>
            <el-form-item>
                <el-button type="primary" icon="search">查询</el-button>
            </el-form-item>
        </el-form>
        <el-table border style="width: 100%">
            <el-table-column label="ID" width="80"></el-table-column>
            <el-table-column label="订单号"></el-table-column>
            <el-table-column label="商品名称"></el-table-column>
            <el-table-column label="商品单价"></el-table-column>
            <el-table-column label="商品总价"></el-table-column>
            <el-table-column label="用户"></el-table-column>
            <el-table-column label="订单状态"></el-table-column>
            <el-table-column label="订单时间"></el-table-column>
            <el-table-column label="操作" align="center" width="150">
                <template scope="scope">
                    <el-button size="small">编辑</el-button>
                    <el-button size="small" type="danger">删除</el-button>
                </template>
            </el-table-column>
        </el-table>
        <div class="page-block">
        </div>
    </el-col>
</template>

<style scoped>
    .page-block {
        padding: 40px 10px 0px 40px;
        text-align: right;
    }

    .destext {
        white-space: normal;
        display: -webkit-box;
        text-overflow: ellipsis;
        -webkit-line-clamp: 2;
        -webkit-box-orient: vertical;
        overflow: hidden;
    }
</style>
<script>
    import {mapState} from 'vuex'
    export default {
        name: 'order',
        data() {
            return {
                date:'',
                statusdata: [{
                    value: '0',
                    label: '待付款'
                }, {
                    value: '1',
                    label: '待发货'
                }, {
                    value: '2',
                    label: '待收货 '
                },{
                    value: '3',
                    label: '确认收货 '
                }],
                options: [{
                    value: '0',
                    label: '服饰美妆'
                }, {
                    value: '1',
                    label: '家用电器'
                }, {
                    value: '2',
                    label: '电脑数码'
                }],
                value: '',
                status:'',
                pickerOptions: {
                    shortcuts: [{
                        text: '今天',
                        onClick(picker) {
                            picker.$emit('pick', new Date());
                        }
                    }, {
                        text: '昨天',
                        onClick(picker) {
                            const date = new Date();
                            date.setTime(date.getTime() - 3600 * 1000 * 24);
                            picker.$emit('pick', date);
                        }
                    }, {
                        text: '一周前',
                        onClick(picker) {
                            const date = new Date();
                            date.setTime(date.getTime() - 3600 * 1000 * 24 * 7);
                            picker.$emit('pick', date);
                        }
                    }]
                },
            }
        },
        computed: mapState({}),
        mounted(){

        },
        methods: {}
    }
</script>
