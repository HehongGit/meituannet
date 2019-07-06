<template>
    <div class="geo">
        <div class="position">
                    <span class="myPosition"><i class="el-icon-location-outline"></i>{{this.$store.state.city}}</span>
                    <router-link  tag="span" class="choiceCity" to="/changeCity">切换城市</router-link>
                    <span class="otherCity">
                        [
                        <a href="#" v-for="item in this.$store.state.nearCity" :key="item.id">{{item.name}}</a>

                        ]
                    </span>
        </div>
        <div class="user">
          <p v-if="!this.$store.state.loginStatus">
            <router-link  class="login" to="/blank/login">立即登录</router-link>
            <router-link to="/blank/register" >注册</router-link>
          </p>

          <p v-else>
              <span class="login">{{this.$store.state.userName}}</span>，
              <span>你好</span>
          </p>

        </div>
    </div>
</template>
<style lang="less" scoped>
    @import url("../../assets/css/header/geo.less");
</style>
