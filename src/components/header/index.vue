<template>
    <div class="header">
        <el-row class="header-top">
            <topBar/>
        </el-row>

        <el-row class="header-bottoms">
            <searchBar/>
        </el-row>
    </div>
</template>
<style lang="less" scoped>
    @import url("../../assets/css/header/index.less");
</style>
<script>
import topBar from "./topbar";
import searchBar from "./searchBar";
export default {
    components:{
        topBar,
        searchBar
    }
}
</script>