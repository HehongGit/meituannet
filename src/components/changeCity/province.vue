<template>
    <div class="province">
        按省份选择：
        <selector  title="省份"  :datalist="citylist"  :show="show1"/>
        <selector  title="城市"  :show="show2" :datalist="citylist[this.$store.state.provinceNum]?citylist[this.$store.state.provinceNum].cityInfoList:''"/>
       <div class="search">直接搜索：
             <el-select style="position:absolute"
            v-model="value9"
            filterable
            remote
            @change="changeCity2"
            placeholder="请输入城市拼音或关键词"
            :remote-method="remoteMethod"
             :loading="loading">
              <el-option
                v-for="item in options4"
                :key="item.name"
                :value="item.name"
                >

              </el-option>
       </el-select>
        </div>




    </div>
</template>
<style lang="less" scoped>
    .province{
        height:80px;
        line-height: 80px;
        border-bottom:1px solid #ddd;

      .search{
        width:200px;
        display:inline-block;
        margin-left:30px;
      }

    }
</style>

<script>
import selector from "./select";
import Axios from "axios"
export default {
    components:{
        selector
    },
    data(){
        return {
            // cityList:null,
            show1:false,
            show2:false,
            lenovoList:null,
            keywords:"",
             options4: [],
             value9: [],
            list: [],
            loading: false,
            showSearch:false
        }
    },
    props:["citylist"],
    created(){

    },
    methods:{
      inputwords(){
          //
          this.showSearch=true;
          this.lenovoList=this.remoteMethod(this.keywords);
      },

      changeCity2(){ //ElementUI的远程搜索
            this.$store.commit("changeCity",this.value9);
      },
      changeCity1(e){ //自定义远程搜索
          let city=e.target.dataset.city;
          this.$store.commit("changeCity",city);
          //隐藏下拉框
          this.showSearch=false;
      },

      remoteMethod(query) {
        if (query !== '') {
          this.loading = true;
          setTimeout(() => {
            this.loading = false;

            this.options4 =  this.list.filter(item =>{

              return item.pinyin.indexOf(query.toLowerCase())>-1||item.name.indexOf(query.toLowerCase())>-1
            })
          }, 200);
        } else {
          this.options4 = [];
        }
      }
    },

    mounted(){
        //数据过滤
        let arr=[];
        for(var i=0;i<this.citylist.length;i++){
          for(var j=0;j<this.citylist[i]['cityInfoList'].length;j++){
            arr.push(this.citylist[i]['cityInfoList'][j]);
          }
        }

        this.list=arr;
    }
}
</script>
