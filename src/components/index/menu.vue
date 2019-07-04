<template>
    <div class="menu">
        <div class="menu-detail" @mouseenter="enter" @mouseleave="leave" v-if="showDetail" >
            
            <div class="detail" v-for="item in menulist[hoverIndex%3].items" :key="item.type">
                    <p class="title">{{item.title}}<span>更多></span></p>
                    <div class="itemList">
                        <a href="#" v-for="list in item.items" :key="list">{{list}}</a>
                    </div>
            </div>

            <div class="detail">
                <p class="title">
                    美食
                    <span>更多></span>
                </p>
                <div class="itemList">
                    <a href="#">代金券</a>
                    <a href="#">饮料甜点</a>
                    <a href="#">火锅</a>
                    <a href="#">自助餐</a>
                    <a href="#">小吃快餐</a>
                    <a href="#">日韩料理</a>
                    <a href="#">川湘菜</a>
                    <a href="#">江浙菜</a>
                    <a href="#">西北菜</a>
                    <a href="#">京菜鲁菜</a>
                </div>
            </div>

             <div class="detail">
                <p class="title">
                    职业技术 
                    <span>更多></span>
                </p>
                <div class="itemList">
                    <a href="#">美容化妆</a>
                    <a href="#">会计</a>
                    <a href="#">IT</a>
                    <a href="#">厨艺</a>
                    <a href="#">管理培训</a>
                    <a href="#">摄影培训</a>
                    <a href="#">司法考试</a>
                    <a href="#">公务员考试</a>
                    <a href="#">其他职业培训</a>

                </div>
            </div>
        </div>
        <dl>
            <dt>全部分类</dt>
            <dd @mouseenter="enter" data-index="0" @mouseleave="leave"><a href="#">美食</a></dd>
            <dd @mouseenter="enter" data-index="1" @mouseleave="leave"><a href="#">外卖</a></dd>
            <dd @mouseenter="enter" data-index="2" @mouseleave="leave"><a href="#">酒店</a></dd>
            <dd @mouseenter="enter" data-index="3" @mouseleave="leave"><a href="#">榛果民宿</a></dd>
            <dd @mouseenter="enter" data-index="4" @mouseleave="leave"><a href="#">猫眼电影</a></dd>
            <dd @mouseenter="enter" data-index="5" @mouseleave="leave"><a href="#">机票</a> / <a href="#">火车票</a></dd>
            <dd @mouseenter="enter" data-index="6" @mouseleave="leave"><a href="#">休闲娱乐</a> / <a href="#">KTV</a></dd>
            <dd @mouseenter="enter" data-index="7" @mouseleave="leave"><a href="#">生活服务</a> </dd>
            <dd @mouseenter="enter" data-index="8" @mouseleave="leave"><a href="#">丽人</a> / <a href="#">美发</a> / <a href="#">医学美容</a></dd>
            <dd @mouseenter="enter" data-index="9" @mouseleave="leave"><a href="#">结婚</a> / <a href="#">婚纱摄影</a> / <a href="#">婚宴</a></dd>
            <dd @mouseenter="enter" data-index="10" @mouseleave="leave"><a href="#">亲子</a> / <a href="#">儿童乐园</a> / <a href="#">幼教</a></dd>
            <dd @mouseenter="enter" data-index="11" @mouseleave="leave"><a href="#">运动健身</a> / <a href="#">健身中心</a></dd>
            <dd @mouseenter="enter" data-index="12" @mouseleave="leave"><a href="#">家装</a> / <a href="#">建材</a> / <a href="#">家居</a></dd>
            <dd @mouseenter="enter" data-index="13" @mouseleave="leave"><a href="#">学习培训</a> / <a href="#">音乐培训</a></dd>
            <dd @mouseenter="enter" data-index="14" @mouseleave="leave"><a href="#">医疗健康</a> / <a href="#">宠物</a> / <a href="#">爱车</a></dd>
            <dd @mouseenter="enter" data-index="15" @mouseleave="leave"><a href="#">酒吧</a> / <a href="#">密室逃脱</a></dd>
        </dl>
    </div>
</template>
<style lang="less" scoped>
    @import url("../../assets/css/index/menu.less");
</style>

<script>
import Axios from "axios";
export default {
    data(){
        return {
            menulist:null,
            showDetail:false,
            hoverIndex:0
        }
    },

    created() {
        Axios.get("http://api.duyiedu.com/api/meituan/index/nav.json",{
            params:{
                appkey:"_crote_1551267686091"
            }
        }).then(res=>{
            this.menulist=res.data.data;
        })
    },
    methods:{
        enter(e){
            if(e.target.dataset.index){
                this.hoverIndex=e.target.dataset.index
            }
            this.showDetail=true
        },
        leave(){

          this.showDetail=false
        }
    }
}
</script>