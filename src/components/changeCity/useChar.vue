<template>
  <dl class="useChar">
      <dt>
        <span>按拼音首字母选择：</span>
        <a :href="'#'+item" v-for="item in charList" :key="item">{{item}}</a>
      </dt>

      <dd v-for="(item,index) in charList" :key="item+index" :id="item">
          <span class="firstChar">{{item}}</span>
          <span class="list">
            <a href="/"  @click="changecity" :data-city="child.name"  v-for="child in filterCity(item)" :key="child.id">
              {{child.name}}
            </a>
          </span>
      </dd>
  </dl>
</template>
<style lang="less" scoped>
    .useChar{
      // padding:20px;
      background-color: white;
      dt{
          height:80px;
          line-height:80px;
          span{
            font-size:16px;
          }
          a{
            display: inline-block;
            margin:0 10px;
            font-weight:400;
            font-size:14px;
            color:#888;
          }
      }
      dd{
        padding:20px;
        border-radius:10px;

        // white-space: nowrap;
        .firstChar{
          display: inline-block;
          width:40px;
          height:40px;
          background:rgb(86,200,177);
          border-radius: 50%;
          line-height:40px;
          font-size:16px;
          color:white;
          text-align: center;

        }
        .list{
          vertical-align: top;
          width:1050px;
          display: inline-block;
          white-space: wrap;
          a{
            font-size:14px;
            padding:2px;
            color:#888;
            margin: 5px 10px;
            height:20px;
            line-height:20px;
            font-weight:300;
            display:inline-block;
          }
          a:hover{
            color:rgb(86,200,177)
          }
        }
      }
      dd:hover{
        background:whitesmoke;
      }
    }
</style>

<script>
export default {
  props:["citylist"],
  data(){
    return {
      charList:["A","B","C","D","E","F","G","H","J","K","L","M","N","P","Q","R","S","T","W","X","Y","Z"],
          }
  },
  methods:{
    filterCity(char){
        let arr=[];
        for(let i=0;i<this.citylist.length;i++){
          for(let j=0;j<this.citylist[i]["cityInfoList"].length;j++){
              if(this.citylist[i]["cityInfoList"][j].firstChar==char){
                  arr.push(this.citylist[i]["cityInfoList"][j])
              }
          }
        }
        return arr;
        console.log(arr)
    },

    changecity(e){
      this.$store.commit("changeCity",e.target.dataset.city);

    }

  }
}
</script>
