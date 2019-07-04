<template>
    <div class="movie">
        <dl class="nav">
            <dt >猫眼电影</dt>
            <dd  v-for="item in navList" :key="item.name" :data-type="item.type"   @mouseenter="changeType" >{{item.name}}<i v-if="item.type==nowtype"></i></dd>
            <a href="#" class="more">全部 ></a>
        </dl>
        
                <el-carousel indicator-position="outside" width="100%" >
                <el-carousel-item v-for="(item,index) in movieList[nowtype]" :key="index">
                    <ul class="movieList">
                        <li v-for="picList in item" :key="picList.name">
                            <img :src="picList.image"/>
                            <div class="mask">
                            <span class="special">{{picList.special}}</span>
                            <div class="info">
                                <p class="score" v-if="picList.score">观众评<em>{{picList.score}}</em></p>
                                <p class="wanna" v-else><em>{{picList.wanna}}</em>人想看</p>
                                <p class="title">{{picList.name}}</p>
                            </div>
                            </div>
                            
                        </li>
                    </ul>
                </el-carousel-item >
                </el-carousel>
      
    </div>
</template>
<script>
export default {
    data(){
        return {
            nowtype:"hot",
            navList:[
                {
                    name:"正在热映",
                    type:"hot"
                },
                {
                    name:"即将上映",
                    type:"soon"
                }
            ],
            movieList:{
                "hot":[
                    [
                        {
                            name:"玩具总动员4",
                            score:"9.1",
                            image:"https://p0.meituan.net/moviemachine/7857ce32393023f4fee8c3b9dcc0c28f455385.jpg@214w_297h_1e_1c",
                            special:"IMAX 3D"
                        },
                        {
                            name:"素人特工",
                            wanna:44996,
                            image:"https://p0.meituan.net/movie/c0bec212d759ad52f22bbb280e551c065000875.jpg@214w_297h_1e_1c",
                            special:"3D"
                        },
                        {
                            name:"银河补习班",
                            wanna:109692,
                            image:"https://p0.meituan.net/movie/27fc03ee1a30e141c92cddf15e3d300f12296747.jpg@214w_297h_1e_1c"
                        },
                        {
                            name:"猪猪侠·不可思议的世界",
                            wanna:25557,
                            image:"https://p0.meituan.net/movie/e7efe584f3a76d11ef850aff5077ffb03437268.jpg@214w_297h_1e_1c",
                            special:"3D"
                        },
                        {
                            name:"追龙II",
                            score:"7.8",
                            image:"https://p1.meituan.net/movie/c0a02897fa49e5c529bfe3cead0f49652270427.jpg@214w_297h_1e_1c",
                            special:"IMAX"
                        }
                    ],
                    [
                        {
                            name:"蜘蛛侠：英雄远征",
                            score:"9.1",
                            image:"https://p0.meituan.net/moviemachine/5dac476535359b7bb951ff15d37a9d0b153821.jpg@214w_297h_1e_1c",
                            special:"IMAX 3D"
                        },
                        {
                            name:"扫毒2天地对决",
                            wanna:295883,
                            image:"https://p1.meituan.net/movie/8d3efdc44af04c3254fc9e4ad5334ae32660685.jpg@214w_297h_1e_1c",
                            
                        },
                        {
                            name:"九龙不败",
                            score:"5.6",
                            image:"https://p0.meituan.net/movie/89c697ccd689f04efa04de649a9fe8ec5732189.jpg@214w_297h_1e_1c"
                        },
                        {
                            name:"千与千寻",
                            score:"9.3",
                            image:"https://p0.meituan.net/movie/30b20139e68c46d02e0893277d633b701292458.jpg@214w_297h_1e_1c",

                        },
                        {
                            name:"爱宠大机密2",
                            wanna:97956,
                            image:"https://p0.meituan.net/moviemachine/350582b51ae828c837ec00bf8aac2a30548615.jpg@214w_297h_1e_1c",
                            special:"3D"
                        }
                    ]
                ],
                "soon":[
                    [
                         {
                            name:"扫毒2天地对决",
                            wanna:295883,
                            image:"https://p1.meituan.net/movie/8d3efdc44af04c3254fc9e4ad5334ae32660685.jpg@214w_297h_1e_1c",
                            
                        },
                        {
                            name:"爱宠大机密2",
                            wanna:97956,
                            image:"https://p0.meituan.net/moviemachine/350582b51ae828c837ec00bf8aac2a30548615.jpg@214w_297h_1e_1c",
                            special:"3D"
                        },
                        {
                            name:"猪猪侠·不可思议的世界",
                            wanna:25557,
                            image:"https://p0.meituan.net/movie/e7efe584f3a76d11ef850aff5077ffb03437268.jpg@214w_297h_1e_1c",
                            special:"3D"
                        },
                        {
                            name:"他她他她",
                            wanna:3062,
                            image:"https://p1.meituan.net/moviemachine/12b44b8ba6a6324770917356a29061d71893276.jpg@214w_297h_1e_1c",
                        },
                        {
                            name:"狮子王",
                            wanna:97449,
                            image:"https://p0.meituan.net/moviemachine/7b9b0725ab5feae642e1fbba9fbb90fe3702078.jpg@214w_297h_1e_1c"
                        }
                    ],
                    [
                        {
                            name:"素人特工",
                            image:"https://p0.meituan.net/movie/c0bec212d759ad52f22bbb280e551c065000875.jpg@214w_297h_1e_1c",
                            wanna:45279,
                            special:"3D"
                        },
                        {
                            name:"命运之夜-天之杯",
                            image:"https://p1.meituan.net/moviemachine/bdd85cc999521f673357fc2e5982676314414343.jpg@214w_297h_1e_1c",
                            wanna:42696,

                        },
                        {
                            name:"机动战士高达NT",
                            image:"https://p0.meituan.net/moviemachine/c700d30cb942080bb650676fb2a9bbb0207693.jpg@214w_297h_1e_1c",
                            wanna:18130
                        },
                        {
                            name:"镜仙",
                            image:"https://p0.meituan.net/movie/ef9eabb7dc9c4fc9252bed1d11ca79c4308028.jpg@214w_297h_1e_1c",
                            wanna:10337
                        }   ,
                        {
                            name:"九克拉战栗",
                            image:"https://p0.meituan.net/movie/3d80f557b88348b7b729602f4618b5fd21384740.jpg@214w_297h_1e_1c",
                            wanna:4608
                        }
                    ]
                ]
            }
        }
    },
    methods:{
        changeType(e){

            this.nowtype=e.target.dataset.type
        }
    }
}
</script>

<style lang="less" scoped>
   @import url("../../assets/css/index/movie.less");
</style>

