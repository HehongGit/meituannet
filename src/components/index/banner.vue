<template>
    <el-row class="banner">
        <el-col class="content" :span="24">
                <ul class="nav">
                    <li v-for="item in navList" :key="item"><a href="#">{{item}}</a></li>
                </ul>
                <div class="con-center">
                     <div class="block">
                        <el-carousel  height="250px">
                            <el-carousel-item class="bannerlist" v-for="item in bannerPicList" :key="item">
                                <img :src="item" />
                            </el-carousel-item>
                        </el-carousel>
                    </div>
                    <div class="banner-center-ad"></div>
                    <div class="banner-right-user">
                        <img src="https://s0.meituan.net/bs/fe-web-meituan/2d05c2b/img/avatar.jpg" />
                        <p class="username">HI！你好</p>
                        <el-button class="register" round>注册</el-button>
                        <el-button round class="login">立即登录</el-button>
                    </div>
                </div>

                <div class="con-bottom">
                    <div class="con-bottom-left">
                        <div class="ad1"></div>
                        <div class="ad2"></div>
                    </div>
                    <div class="con-bottom-center"></div>
                    <div class="con-bottom-right">
                        <img src="https://s1.meituan.net/bs/fe-web-meituan/60ac9a0/img/download-qr.png"/>
                        <p>美团APP手机版</p>
                        <span><em>1元起</em>  吃喝玩乐 </span>
                    </div>

                </div>
        </el-col>
    </el-row>
</template>
<style lang="less" scoped>
    @import url("../../assets/css/index/banner.less");
</style>
<script>
export default {
    data(){
        return {
            navList:[
                "美团外卖",
                "猫眼电影",
                "美团酒店",
                "民宿/公寓",
                "商家入驻",
                "美团公益"
            ],
            bannerPicList:[
             "https://p1.meituan.net/travelcube/01d2ab1efac6e2b7adcfcdf57b8cb5481085686.png",
             "http://p0.meituan.net/codeman/daa73310c9e57454dc97f0146640fd9f69772.jpg",
             "http://p1.meituan.net/codeman/826a5ed09dab49af658c34624d75491861404.jpg",
             "http://p0.meituan.net/codeman/a97baf515235f4c5a2b1323a741e577185048.jpg",
             "http://p0.meituan.net/codeman/33ff80dc00f832d697f3e20fc030799560495.jpg"
            ]
        }
    }
}
</script>