<template>
  <div class="dropdown" @click.stop="tap" v-documentClick='hidelist'>
    <span class="screen">{{tip}}</span>
    <i class="el-icon-caret-bottom"></i>
    <div class="list" v-show="isShow">
      <h5>{{title}}</h5>
      <i class="list-icon"></i>
      <div class="data-list" >
        <div class="col" v-for="(itemO,indexO) in colNum" :key="itemO">
          <a href="javascript:;" @click.stop="changeTar" v-if="(indexO*12+indexI)<datalen" :data-num="indexO*12+indexI" :class="{selected:indexO*12+indexI==selected}" v-for="(itemI,indexI) in 12" :key="indexI*Math.random()"
          >{{datalist[indexO*12+indexI][prop]}}</a>
        </div>
      </div>
    </div>
  </div>
</template>
<style lang="less" scoped>
.selected{
  background:rgb(86,202,177);
  color:white !important;
}
.dropdown {
  vertical-align: middle;
  display: inline-block;
  width: 150px;
  height: 40px;
  line-height: 40px;
  border: 1px solid #ddd;
  border-radius: 5px;
  cursor: pointer;
  position: relative;

  .screen{
    color: #888;
    width:100%;
    height:100%;
    padding:0 20px;
    box-sizing: border-box;
    display: inline-block;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
  }

  i {

    width:10px;
    height:10px;
    margin-right: 10px;
    line-height: 40px;
    position:absolute;
    right:10px;
    top:0;
    color: #888;
  }
  .list {
    border: 1px solid #ddd;
    padding: 10px;
    display: table-row;
    position: absolute;
    background: white;
    left: 0;
    z-index: 99999;
    top: calc(100% + 10px);
    .list-icon {
      width: 10px;
      height: 10px;
      background: white;
      box-sizing: border-box;
      border: 1px solid #ddd;
      border-right-color: transparent;
      border-bottom-color: transparent;
      position: absolute;
      top: 0;
      transform: translateY(-50%) rotatez(45deg);
      left: 20px;
    }
    h5 {
      font-size: 16px;
      color: #aaa;
      font-weight: 400;
    }
    div.data-list {
      display: flex;
      div.col {
        // border:1px solid red;
        display:flex;
        flex-direction:column;
        // margin:0 10px;
        a {

          font-size: 12px;
          float: left;
          white-space:nowrap;
          height: 20px;
          line-height: 20px;
          margin:2px;
          padding:2px 10px;
          text-align: center;
          // background:gray;
          color: #aaa;
          border-radius:5px;
        }
      }
    }
  }
}
</style>
<script>
import Axios from "axios";
// import {mapState,mapMutation} from "vuex"
export default {
  data() {
    return {
      isShow: false,
      selected:null,
      // tit:JSON.parse(JSON.stringify(this.title))
    };
  },
  computed: {
    // ...mapState(["province","city"]),
    colNum() {
      return Math.ceil(this.datalist.length / 12);
    },
    lastWhile() {
      return this.datalist.length % 12;
    },
    datalen() {
      return this.datalist.length;
    },
    target(){
      return this.datalist[this.selected].provinceName||this.datalist[this.selected].name
    },
    prop(){
      return this.title=="省份"?"provinceName":"name"
    },
    tip(){
      if(this.title=="省份"){
        return this.$store.state.province?this.$store.state.province:this.title
      }else{
        return this.$store.state.city?this.$store.state.city:this.title

      }
    }
  },
  props: ["title", "datalist","show"],
  methods: {
    // ...mapMutation(['changeProvince','changeCity']),
    changeTar(e){
          this.selected=e.target.dataset.num;
          // this.tit=this.target;

          if(this.title=="省份"){
            this.$store.commit("changeProvince",this.datalist[this.selected].provinceName);
            this.$store.commit("changeProNum",this.selected)
          }else{
            this.$store.commit("changeCity",this.target)
          }
          this.isShow=false;
    },
    tap(e){
      this.isShow=!this.isShow;

    },
    hidelist(){

      this.isShow=false;
    }
  }
};
</script>
