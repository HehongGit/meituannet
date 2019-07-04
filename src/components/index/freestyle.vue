<template>
    <div class="freeStyle">
        <dl class="nav">
            <dt >有格调</dt>
            <dd  v-for="item in navList" :key="item.name" :data-type="item.type" v-if="istyleList[item.type].length"  @mouseenter="changeType" >{{item.name}}<i v-if="item.type==nowtype"></i></dd>
        </dl>
        <ul class="list">
            <li v-for="item in istyleList[nowtype]" :key="item.address">
                <a href="#">
                    <img :src="item.image" />
                    <p class="title">{{item.title}}</p>
                    <p class="description">{{item.subTitle}}</p>
                    <p class="price-pos">
                         <span class="price">￥<em>{{item.price}}</em><del>门市价￥<strong>{{(item.price*1.5).toFixed(1)}}</strong></del></span>
                        <span class="pos">{{item.address}}</span>
                    </p>
                </a>
            </li>
           <li>
               <a href="#">
                <img src="https://p1.meituan.net/bbia/9e9d8322fb54999971c544947745160f287603.jpg@368w_208h_1e_1c"/>
                <p class="title">右键蛋糕店（北京路）</p>
                <p class="description">布朗熊生日蛋糕一个,约8寸，圆形</p>
                <p class="price-pos">
                   
                        <span class="price">￥<em>118</em><del>门市价￥218</del></span>
                        <span class="pos">北京路商业区 </span>
                    
                </p>
             </a>
           </li>

        </ul>
    </div>
</template>
<style lang="less" scoped>
    @import url("../../assets/css/index/freestyle.less");
</style>
<script>
import Axios from 'axios'
export default {
    data(){
       return {
            navList:[
                {
                    name:"全部",
                    type:"all"
                },
                {
                    name:"约会聚餐",
                    type:"food"
                },
                {
                    name:"丽人SPA",
                    type:"spa"
                },
                {
                    name:"电影演出",
                    type:"movie"
                },
                {
                    name:"品质出游",
                    type:"travel"
                }
            ],
            istyleList:[],
            nowtype:"all",  //默认选中all
       }
    },
    created(){
        Axios.get("http://api.duyiedu.com/api/meituan/index/resultsByKeywords.json",{
            params:{
                appkey:"_crote_1551267686091"
            }
        }).then(res=>{

            this.istyleList=res.data.data
        })
    },
    methods:{
        changeType(e){

            this.nowtype=e.target.dataset.type;
            
        }
    },
}   
</script>

