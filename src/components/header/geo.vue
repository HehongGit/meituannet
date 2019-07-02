<template>
    <div class="geo">
        <div class="position">
                    <span class="myPosition"><i class="el-icon-location-outline"></i>广州</span>
                    <span class="choiceCity">切换城市</span>
                    <span class="otherCity">
                        [
                        <a href="">佛山</a>
                        <a href="">顺德</a>
                        <a href="">南沙</a>
                        ]
                    </span>
        </div>
        <div class="user">
            <router-link class="login" :to="{name:'login'}">立即登录</router-link>
            <router-link :to="{name:'register'}">注册</router-link>
        </div>
    </div>
</template>
<style lang="less" scoped>
    @import url("../../assets/css/header/geo.less");
</style>
