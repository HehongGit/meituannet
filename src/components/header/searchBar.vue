<template>
    <div class="searchBar">
        <div class="logo">
            <a href=""><img src="https://s0.meituan.net/bs/fe-web-meituan/e5eeaef/img/logo.png"/></a>
        </div>
        <div class="searchBox">
            <div class="search">
                <div class="associate" v-if="isInput">
                    <dl v-show="searchwords==''">
                        <dt>热门搜索</dt>
                        <dd v-for="item in hotList" :key="item"><a href="#">{{item}}</a></dd>

                    </dl>
                    <ul class="aboutWords" v-show="searchwords!=''">
                          <li v-for="(item,index) in searchList" :key="item+index">{{item}}</li>
                    </ul>
                </div>
                <input type="text" v-model="searchwords" class="keywords" placeholder="请输入商家或地点" @focus="inputFocus" @input="input" @blur="inputBlur"/>
                <el-button type="primary" class="searchBtn" icon="el-icon-search"></el-button>
            </div>
            <ul class="tuijian">
                <li v-for="(item,index) in tuijianList" :key="item+index"><a href="">{{item}}</a></li>

            </ul>

        </div>

    </div>
</template>
<style lang="less" scoped>
   @import url("../../assets/css/header/search.less");
</style>
<script>
import Axios from 'axios'
export default {
  data () {
    return {
      isInput: false,
      searchwords: '',
      searchList: [],
      hotList: [],
      tuijianList: [
        '广州长隆欢乐世界',
        '广州融创水世界',
        '广州长隆欢乐谷'
      ]
    }
  },
  methods: {
    inputFocus () {
      this.isInput = true
    },
    inputBlur () {
      let self = this
      setTimeout(() => {
        self.isInput = false
      }, 300)
    },
    input () {
      Axios.get('http://api.duyiedu.com/api/meituan/header/search.json', {
        params: {
          appkey: '_crote_1551267686091'
        }
      }).then(res => {
        this.searchList = res.data.data.list
      })
    }
  },
  mounted () {
    Axios.get('http://api.duyiedu.com/api/meituan/header/searchHotWords.json', {
      params: {
        appkey: '_crote_1551267686091'
      }
    }).then(res => {
      this.hotList = res.data.data
    })
  }
}
</script>
