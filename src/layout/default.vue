<template>
  <el-container>
  <el-header class="el-header" height="">
      <headerCon/>
  </el-header>
  <el-main>内容</el-main>
  <el-footer height="">
      <footerCon />
  </el-footer>
</el-container>
</template>
<script>
import headerCon from "../components/header/index";
import footerCon from "../components/footer/index";
export default {
    components:{
        headerCon,
        footerCon
    }
}
</script>
<style scoped>
.el-header{
    padding:0;
}
</style>
