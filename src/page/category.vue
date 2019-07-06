<template>
  <div class="category">
    <div class="crumb">
        <el-breadcrumb class="bread"  separator-class="el-icon-arrow-right">
        <el-breadcrumb-item :to="{ path: '/' }">{{this.$store.state.city}}美团</el-breadcrumb-item>
         <el-breadcrumb-item>{{this.$store.state.city}}丽人</el-breadcrumb-item>
        </el-breadcrumb>
     </div>


     <el-row>
       <el-col :span="19">
         <filters />
         <categorylist v-if="goodsList" :goodsList="goodsList" />
       </el-col>


       <el-col :span="5">
          <mayyoulove v-if="tuijian" :tuijianlist="tuijian" />
       </el-col>
     </el-row>

     <meituannav />
  </div>


</template>
<script>
import Axios from "axios"
import meituannav from "../components/index/meutuannav"
import filters from "../components/category/filter"
import categorylist from "../components/category/categorylist"
import mayyoulove from "../components/category/mayYouLove"
export default {
    components:{
      meituannav,
      filters,
      categorylist,
      mayyoulove
    },
    data(){
      return {
      goodsList:null,
      tuijian:null
      }
    },
    created(){
        Axios.get("http://api.duyiedu.com/api/meituan/list/goodsList.json",{
          params:{
            appkey:'_crote_1551267686091'
          }
        }).then(res=>{
            this.goodsList=res.data.data
        })


        Axios.get("http://api.duyiedu.com/api/meituan/list/recommend.json",{
          params:{
            appkey:'_crote_1551267686091'

          }
        }).then(res=>{

            this.tuijian=res.data.data
        })

    }

}
</script>




<style lang="less" scoped>
    .category{
      width:1190px;
      margin:50px auto;
      padding-top:30px;
      .crumb{
        height:30px;
         .bread{
        font-size:12px;
        }
      }

    }
</style>

