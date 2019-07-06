<template>
  <dl class="hotcity">
      <dt>{{title}}：</dt>
        <dd v-for="item in citylist" :key="item.id"><a href="#" :data-city="item.name" @click="changeCity">{{item.name}}</a></dd>
  </dl>
</template>
<style lang="less" scoped>
  .hotcity{
    height:40px;
    line-height:40px;
    border-bottom:1px solid #ddd;
    padding:20px 0;
    dt{
      font-size:16px;
      font-weight: 400;
      float:left;
      margin:0 10px;
    }
    dd{
      width:50px;
      float:left;
      margin:0 10px;
      color:#444;
      font-size:14px;
      font-weight: 300;
    }
  }
</style>

<script>
import Axios from "axios"
export default {
  props:["citylist","title"],

  methods:{
    changeCity(e){
        let city=e.target.dataset.city;
        this.$store.commit("changeCity",city);
        // this.$store.commit("changeProvince",null);
    }
  }
}
</script>
