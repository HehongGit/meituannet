<template>
    <div class="page-changeCity">
        <el-row>
            <province v-if="citylist" :citylist="citylist"  />
        </el-row>
        <el-row>
          <some-city v-if="hotCityList" title="热门城市" :citylist="hotCityList"/>
        </el-row>
        <el-row>
          <some-city v-if="visitedList"  title="最近搜索" :citylist="visitedList" />
        </el-row>
        <el-row>
          <use-char v-if="citylist" :citylist="citylist"/>
        </el-row>
    </div>
</template>
<style lang="less" scoped>
    .page-changeCity{
        width:1190px;
        margin:70px auto;
        padding:20px;
        background:white;
        border-radius:10px;
        border:1px solid #ddd ;
        box-sizing: border-box;
        // height:700px;

    }
</style>

<script>
import province from "../components/changeCity/province"
import someCity from "../components/changeCity/somecity"
import useChar from "../components/changeCity/useChar"
import Axios from "axios"
export default {
    components:{
        province,
        someCity,
        useChar
    },
    data(){
       return {
         citylist:null,
         hotCityList:null,
         visitedList:null,
         myPosition:null,
       }
    },
    created(){
         Axios.get("http://api.duyiedu.com/api/meituan/city/hot.json",{
          params:{
            appkey:"_crote_1551267686091"
          }
        }).then(res => {
            this.hotCityList = res.data.data
        });

        Axios.get("http://api.duyiedu.com/api/meituan/city/recents.json",{
          params:{
            appkey:"_crote_1551267686091"
          }
        }).then( res => {
           this.visitedList=res.data.data
        });

        Axios.get("http://api.duyiedu.com/api/meituan/city/province.json",{
        params:{
          appkey:"_crote_1551267686091"
        }
      }).then( res => {

        this.citylist = res.data.data

      });


        // Axios.get("http://api.duyiedu.com/api/meituan/city/getPosition.json",{
        //   params:{
        //   appkey:"_crote_1551267686091"

        //   }
        // }).then(res=>{

        //     this.$store.commit("changeNearCity",res.data.data.nearCity)
        //     this.$store.dispatch("changeCity",res.data.data.name);

        // })
    }
}
</script>
