<template>
  <el-container>
  <el-header class="el-header" height="">
      <headerCon/>
  </el-header>
  <el-main style="padding:0" class="content">
      <router-view />
  </el-main>
  <el-footer height="">
      <footerCon />
  </el-footer>
</el-container>
</template>
<script>
import headerCon from '../components/header/index'
import footerCon from '../components/footer/index'
import index from "../page/index"
export default {
  components: {
    headerCon,
    footerCon,
    index
  }
}
</script>
<style scoped>
.el-header{
    padding:0;
}
.content{
  width:100%;
  margin-top:-50px;
}
</style>
