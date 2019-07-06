<template>
  <div class="login">
      <div class="logo">
        <h1>美团</h1>
        <p>meituan.com</p>
      </div>
      <el-row class="form">
          <el-col :span="12" class="pic">
            <img src="https://s0.meituan.net/bs/file/?f=fe-sso-fs:build/page/static/banner/www.jpg"/>
          </el-col>
          <el-col :span="12" class="loginInfo">

            <div class="message" v-show="failMsg">{{failMsg}}</div>
            <form>
                <p class="title">
                  <span class="left">账号登录</span>
                  <span class="right">手机动态码登录<i class="el-icon-mobile-phone"></i></span>
                </p>
                <div class="phone">
                  <span>+86 <i class="el-icon-arrow-right"></i></span>
                  <input v-model="phoneNum" type="phone" max-len=15 placeholder="手机号"/>
                </div>

                <div class="password">
                  <span class="el-icon-goods"></span>
                  <input v-model="password"  type="password" placeholder="密码"/>
                </div>
                <p class="forget"><a href="#">忘记密码?</a></p>
                <router-link tag="button" to="/" button class="sub" >登录</router-link>

              </form>
                <p class="toRegister">
                  还没有账号?<router-link tag="span" to="/blank/register">免费注册</router-link>
                </p>
                <p class="otherway">
                  <span></span>
                    用合作网站账号登录
                  <span></span>
                </p>
                <div class="ways">
                  <span><img src="https://tse1-mm.cn.bing.net/th?id=OIP.FpoCAsORxnx5oNKw3nr_agHaH6&w=178&h=190&c=7&o=5&pid=1.7"/></span>
                  <span><img src="https://tse1-mm.cn.bing.net/th?id=OIP.6Jrh4gnTb2miO9v3a1DFSQHaHa&w=207&h=198&c=7&o=5&pid=1.7"/></span>
                </div>
          </el-col>
      </el-row>
      <div class="foot">
          <ul>
            <li>关于美团</li>
            <li class="shu">|</li>

            <li>加入我们</li>
            <li class="shu">|</li>


            <li>商家入驻</li>
            <li class="shu">|</li>


            <li>帮助中心</li>
            <li class="shu">|</li>

            <li>美团手机版</li>
          </ul>

          <p class="copyRight">©2019 美团网团购 meituan.com 京ICP证070791号 京公网安备11010502025545号</p>
      </div>
  </div>
</template>

<style lang="less" scoped >

  .login{
    width:900px;
      margin:0 auto;
    // border:1px solid purple;
    .logo{
        height:100px;

        width:150px;
        padding-top:30px;
        h1{
          font-size:40px;
          font-family: "shanghei";
          color:rgb(80,202,202);
        }
        p{
          font-family: "shanghei";
          font-size:16px;
          color:rgb(80,202,202);

        }
    }

    .form{

        .pic{
          img{
            width:100%;
            height:100%;
          }
        }
        .loginInfo{
          padding-top:30px;
          width:250px;
          margin-left:80px;
          .message{
            height:30px;
            line-height:30px;
            background-color:rgba(241, 189, 16,.2);
            border:1px solid rgb(241,189,16);
            margin-bottom:10px;
            font-size:12px;
            color:#444;
            text-indent:20px;
          }
          .title{
            font-size:12px;
            color:#888;
            height:16px;
            .left{
              float:left;
             color:#888;
            }
            .right{
              float:right;
              color:#888;
            }
          }
          .phone,.password{
            margin: 10px 0;
             width:100%;
            height:30px;
            line-height:30px;
            border:1px solid #ccc;
            span{
              color:#888;
              margin:0 5px;
            }
            input{
              vertical-align: top;
              height:100%;
              width:70%;
              outline:none;
              border:none;
              font-size:14px;

            }

        }
        .forget{
          text-align: right;
          a{
            color:rgb(80,202,202);
            font-size:12px;
          }
        }

        button{
          width:100%;
          height:30px;
          line-height: 30px;
          background-color: rgb(80,202,202);
          color:white;
          margin-top:10px;
          font-size:14px;
          outline:none;
          border:none;
         }
         .toRegister{
           height:30px;
           line-height:30px;
           font-size:13px;
           font-weight:400;
            span{
              cursor: pointer;
              color:rgb(80,202,202)
            }
         }
          .otherway{
            height:30px;
            line-height:30px;
            font-size:14px;
            text-align:center;
            font-weight:300;
            color:#444;
            span{
              vertical-align:top;
              display: inline-block;
              height:50%;
              border-bottom:1px solid #888;
              width:50px;
            }
          }
          .ways{
            display: flex;
            justify-content:center;
            span{
              width:16px;
              height:16px;
              margin:0 15px;
              img{
                width:100%;
                height:100%;
              }
            }
          }
        }

    }

    .foot{
      width:100%;
      margin-top:30px;

      ul{
          margin:10px 0;
          height:20px;
        li{
          float:left;
          width:60px;
          height:20px;
          line-height: 20px;
          font-size:12px;
          color:#aaa;

        }
        li.shu{
          text-align: center;
          color:#ddd
        }
      }

      .copyRight{
        font-size:12px;
        color:#aaa;
        // text-indent:20px;

      }
    }

  }
</style>
<script>
import Axios from "axios"
export default {
  data(){
    return {
      phoneNum:"",
      password:"",
      failMsg:"",
    }
  },
  beforeRouteLeave (to, from, next) {
      this.failMsg="";
     Axios.get("http://api.duyiedu.com/api/meituan/login",{
          params:{
            appkey:"_crote_1551267686091",
            userName:this.phoneNum,
            password:this.password
          }
        }).then(res=>{
          console.log(res);
          if(res.data.status=="fail"){
            this.failMsg=res.data.msg
          }else{
            this.$store.dispatch("changeLoginStatus",true);
            this.$store.dispatch("changeUserName",res.data.data);
            next()
          }
        })
  },
  methods:{



  }
}
</script>
