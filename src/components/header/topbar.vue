<template>
    <el-row class="topBar" type="flex" justify="space-around">
        <el-col :span="10"  class="topBar-left">
            <geo />
        </el-col>
        <el-col :span="14" class="topBar-right">
            <navbar />
        </el-col>
    </el-row>
</template>
<style lang="less" scoped>
    @import url("../../assets/css/header/topbar.less");
</style>
<script>
import geo from './geo'
import navbar from './nav'
export default {
  components: {
    geo,
    navbar
  }
}
</script>
