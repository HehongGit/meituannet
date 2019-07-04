<template>
    <div class="meituannav">
        <div class="nav">美团导航</div>
        <ul class="navList">
            <li v-for=" item in navList" :key="item.title">
                <h5>{{item.title}}</h5>
                <div class="list">
                    <a href="#" v-for="kind in item.data" :key="kind">{{kind}}</a>
                </div>
            </li>
        </ul>
    </div>
</template>
<style lang="less" scoped>
    .meituannav{
        margin:30px 0;
        .nav{
            background:linear-gradient(to right,rgb(80,180,160),rgb(80,200,190));
            height:50px;
            line-height:50px;
            color:white;
            font-size:16px;
            padding-left:20px;
            border-radius:10px 10px 0 0;
            font-weight:400;
        }
        .navList{
            background-color: #fff;
            box-sizing: border-box;
            border:1px solid #ddd;
            border-radius:0 0 10px 10px ;
           li{
                display: flex;
                h5{
                    flex:1;
                    font-size:14px;
                    font-weight:900;
                    box-sizing: border-box;
                    padding:10px 20px;
                    width:100px;
                    // margin-top:10px;

                }
                .list{
                    flex:13;
                    
                    border-bottom:1px solid #ddd;
                    box-sizing:border-box;
                    padding-right:150px;
                    a{
                        display:inline-block;
                        padding:5px;
                        margin:5px;
                        font-size:12px;
                        color:#888
                    }
                }
            }
        }
    }
</style>
<script>
export default {
    data(){
        return {
            navList:[
                {
                    title:"热门城市",
                    data:["大连","苏州","广州","厦门","长春","深圳","太原","天津","上海","哈尔滨","成都","南京","武汉","青岛","昆明","沈阳","北京"]
                },
                {
                    title:"热门分类",
                    data:["酒店","美食","休闲娱乐","健身运动","生活服务","上门服务","购物","时尚购","本地购物","结婚","摄影写真","宴会","丽人"]
                },
                {
                    title:"周边热门",
                    data:["顺德酒店","南沙美食","佛山休闲娱乐","南沙运动健身","南沙生活服务","佛山上门服务","佛山购物","南沙时尚购","佛山本地购","佛山结婚","顺德摄影写真","顺德宴会","佛山丽人"]
                }

            ]
        }
    }
}
</script>