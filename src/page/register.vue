<template>
  <div class="register">
      <div class="header">
           <img src="https://tse1-mm.cn.bing.net/th?id=OIP.P9XKrJtgKVthUQnIkvxDagHaF7&w=214&h=168&c=7&o=5&pid=1.7"/>
            <p class="toLogin">已有美团账号？<router-link to="/blank/login" tag="span">登录</router-link></p>
      </div>

      <div class="registerInfo">
          <form>
              <label>
                <span class="title">手机号</span>
                <input type="tel" @blur="phoneBlur" v-model.number="phone" placeholder="请输入手机号"/>
                <span class="tip">{{phoneMsg}}</span>
              <button class="sendMsg">免费获取短信动态码</button>

              </label>

              <label>
                <span  class="title">短信动态码</span>
                <input type="text" @blur="msgBlur" v-model="shortMsg"/>
                <span class="tip">{{mesMsg}}</span>

              </label>

              <label>
                <span class="title">创建密码</span>
                <input type="password" v-model="password"/>
                <span class="tip">{{passMsg}}</span>

                <div class="pass-level">
                  <span>弱</span>
                  <span>中</span>
                  <span>强</span>
                </div>
              </label>


              <label>
                <span class="title">确认密码</span>
                <input type="password" v-model="comfirm" />
                <span class="tip">{{confirmMsg}}</span>

              </label>

              <button class="agree" @click="register">同意以下协议并注册</button>
              <p class="protocol"><a href="#">《美团网用户协议》</a></p>
          </form>
      </div>

      <div class="copyRight">
          <router-link tag="a" to="/" >©️meituan.com</router-link>
          <a href="#">京ICP证070791号</a>
          <span> 京公网安备11010502025545号</span>
      </div>
  </div>
</template>

<style lang="less" scoped>
    .register{
        .header{
          height:60px;
          line-height:60px;
          border-bottom:2px solid rgb(80,170,150);
          box-sizing: border-box;
          padding:0 120px;
          img{
            width:80px;
            height:100%;
          }
          .toLogin{
            float:right;
            font-size:12px;
            color:#444;
            font-weight:400;
            span{
              padding:2px 10px;
              background-color:rgb(80,170,150);
              border-radius: 3px;
              color:white;
            }
          }

        }
        .registerInfo{
          box-sizing: border-box;
          padding:0 150px;
          border-bottom:1px solid #ccc;
          form{
              margin-bottom:30px;
              label{
                display: block;
                margin:20px 10px;
                span.title{
                  display:inline-block;
                  width:100px;
                  text-align: right;
                  font-weight:300;

                  font-size:14px;
                }

                input{
                  width:250px;
                  height:30px;
                  outline:none;
                  border:1px solid #aaa;
                  text-indent: 5px;
                }
                input:focus{
                  border:1px solid rgb(80,170,150);
                }

                .sendMsg{
                  display:block;
                  width:150px;
                  background-color: #ddd;
                  margin-top:10px;
                  height:20px;
                  line-height:20px;
                  margin-left:105px;
                }

                .pass-level{
                    width:250px;
                    display: flex;
                    margin-left:105px;
                    // border:1px solid red;
                    margin-top:10px;
                    justify-content: space-around;
                    height:20px;
                    line-height:20px;
                    span{
                      width:32%;
                      background-color: #ddd;
                      font-size:12px;
                      color:white;
                      text-align: center
                    }
                }

                .tip{
                  width:120px;
                  height:30px;
                  line-height:30px;
                  font-size:12px;
                  margin-left:10px;
                  color:#888;
                }
              }
              .agree{
                width:150px;
                height:40px;
                line-height:40px;
                color:white;
                background-color: rgb(80,170,150);
                margin-left:120px;
                font-size:14px;
                outline: none;
              }
              .protocol{
                margin-left:120px;
                height:30px;
                line-height:30px;
                a{
                  font-size:10px;
                  text-align: center;
                  color:rgb(80,170,150)
                }
              }
          }
        }
        .copyRight{
            text-align: center;
            height:40px;
            line-height:40px;
            font-size:12px;
            a{
              color:#aaa;
            }
            span{
              color:#aaa;
            }
        }
    }
</style>
<script>
import Axios from "axios"
export default {
  data(){
    return {
      phoneMsg:"",
      mesMsg:"",
      passMsg:"",
      confirmMsg:"",
      phone:"",
      shortMsg:"",
      password:"",
      comfirm:""
    }
  },
  methods:{
      phoneBlur(){

       if(this.phone==""){
          this.phoneMsg="❌请输入手机号"
        } else if(this.phone.toString().length<11||this.phone.toString().length>16){
          this.phoneMsg="❌请输入正确的手机号"
        }else{
          this.phoneMsg="✅"
        }
      },
      msgBlur(){
          if(this.shortMsg==""){
            this.mesMsg="❌请输入验证码"
          }else if(this.shortMsg.toString().length!=6){
            this.mesMsg="❌输入错误，请重新输入"
          }else{
            this.mesMsg="✅"
          }
      },

    register(){

         Axios.get("http://api.duyiedu.com/api/meituan/register",{
          params:{
            appkey:"_crote_1551267686091",
            userName:this.phone,
            password:this.password,
            rePassword:this.comfirm
          }
        }).then(res=>{
            if(res.data.status=="success"){
              alert("注册成功")
            }else{
              alert(res.data.msg)
            }
        })
      }

    }
  }

</script>
