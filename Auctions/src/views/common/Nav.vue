<template>
    <div class="nav clr">
        <el-menu theme="dark" default-active="1" class="el-menu-demo" mode="horizontal" unique-opened router>
            <el-menu-item index="/home">在线竞拍</el-menu-item>
            <el-menu-item index="/cassify">分类列表</el-menu-item>
            <el-menu-item index="3">联系我们</el-menu-item>
            <el-menu-item index="4">常见问题</el-menu-item>
        </el-menu>
    </div>
</template>
<style>

</style>
<script>
    export default{
        name: 'nav',
        data(){
            return {}
        }
    }
</script>