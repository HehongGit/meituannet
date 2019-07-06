<template>
  <div class="filter">
      <div class="choiced">
        <span class="title">已选条件</span>
        <span class="choiceItem">美瞳美甲x</span>
        <span class="clearAll">清除全部</span>
      </div>
    <itemlist title="分类"  :itemlist="itemList" />
     <!-- <itemlist title="区域" />   后端数据有误 -->
  </div>
</template>

<style lang="less" scoped>
  .filter{
    width:100%;
    background:white;
    border:1px solid #ddd;
    border-radius:5px;
    .choiced{
      box-sizing: border-box;
      padding:0 20px;
      font-size:10px;
      border-bottom:1px solid #ddd;
      height:40px;
      line-height:40px;
      color:#888;
      .title{
        font-size:14px;
        font-weight:500;
        margin-right:10px;
      }
      .choiceItem{
        padding:0 5px;
        margin-right:5px;
        color:rgb(80,200,200);
        border:1px solid rgb(80,200,200);
        border-radius:10px;
      }
      .clearAll{
        color:#999;
        font-size:10px;
      }
    }

  }
</style>
<script>
import Axios from "axios"
import itemlist from "./itemlist"
export default {
  components:{
    itemlist
  },
  data(){
    return {
      itemList:null
    }
  },
  created(){
    Axios.get("http://api.duyiedu.com/api/meituan/list/classify.json",{
      params:{
          appkey:"_crote_1551267686091"
      }
    }).then(res=>{
      this.itemList=res.data.data;

    });

    Axios.get("http://api.duyiedu.com/api/meituan/list/areaList.json",{
        params:{
          appkey:"_crote_1551267686091"
      }
    }).then(res=>{
      // console.log(res.data);
    })
  }
}
</script>
