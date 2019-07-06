<template>
    <div class="page-index">
        <el-row class="nav-banner">
            <el-col :span="5">
                <menulist/>
            </el-col>
            <el-col :span="19">
                <banner />
            </el-col>
        </el-row>
        <el-row  class="istyle">
            <el-col :span="24">
               <free-style />
            </el-col>
        </el-row>
        <el-row>
            <el-col :span="24">
                <favourable />
            </el-col>
        </el-row>
        <el-row>
            <el-col :span="24">
                <movie />
            </el-col>
        </el-row>

        <el-row>
            <el-col :span="24">
                <mingsu />
            </el-col>
        </el-row>

        <el-row>
            <el-col :span="24">
                <youlove />
            </el-col>
        </el-row>
        <el-row>
            <el-col :span="24">
                <meituannav />
            </el-col>
        </el-row>
    </div>
</template>
<script>
import Axios from "axios"
import menulist from "../components/index/menu"
import banner from "../components/index/banner"
import freeStyle from "../components/index/freestyle"
import favourable from "../components/index/favourable"
import movie from "../components/index/movie"
import mingsu from "../components/index/mingsu"
import youlove from "../components/index/youlove"
import meituannav from "../components/index/meutuannav"
export default {
       components:{
          menulist,
          banner,
          freeStyle,
          favourable,
          movie,
          mingsu,
          youlove,
          meituannav
       },
       created(){
          Axios.get("http://api.duyiedu.com/api/meituan/city/getPosition.json",{
            params:{
              appkey:"_crote_1551267686091"
            }
          }).then(res=>{
             this.$store.commit("changeNearCity",res.data.data.nearCity)
            this.$store.dispatch("changeCity",res.data.data.name);
          })
       }
}
</script>
<style lang="less" scoped>
    @import url("../assets/css/page/index.less");
</style>
