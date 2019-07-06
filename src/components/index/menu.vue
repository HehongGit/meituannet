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
            <dd @mouseenter="enter" @mouseleave="leave" v-for="(item,index) in navList" :key="item+index">
                 <router-link to="/category"  tag="a" href="#" v-for="(list,sup) in item" :key="list">{{list}}<i v-if="!(sup==item.length-1)"> / </i></router-link>
              </dd>

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
            hoverIndex:0,
            navList:[
             ["美食"],
             ["外卖"],
             ["酒店"],
             ["榛果民宿"],
             ['猫眼电影'],
             ["机票","火车票"],
             ["休闲娱乐","KTV"],
             ["生活服务"],
             ["丽人","美发","医学美容"],
             ['结婚','婚纱摄影','婚宴'],
             ["亲子",'儿童乐园','幼教'],
             ['运动健身','健身中心'],
             ['家装','建材','家居'],
             ["学习培训","音乐培训"],
             ['医疗健康','宠物','爱车'],
             ["酒吧","密室逃脱"]
            ]
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
