<template>
  <div class="items">
       <h5>{{title}}</h5>
       <dl>
         <dt><span>全部</span></dt>
         <dd  v-for="item in itemlist" :key="item.title">
           {{item.title}}
           <i :class="{'el-icon-caret-bottom':item.subList.length>1}"></i>
            <div class="more">
                <i class="icon"></i>
                <h4>{{item.title}}</h4>
                <div class="detail">
                    <span   v-for="sonItem in item.subList" :key="sonItem.name">{{sonItem.name}}</span>
                </div>
            </div>
          </dd>
       </dl>
     </div>
</template>
<script>
export default {
  props:['title','itemlist']
}
</script>
<style lang="less" scoped>
.checked{
  background:rgb(80,200,200);
  color:white;
}

.items{
      display:flex;
      padding:0 20px;
      border-radius: 10px;
      h5{
        padding:10px 0;
        flex:1;
        line-height:30px;
      }
      dl{
        flex:14;
        font-size:12px;
        color:#888;
        padding:10px;
        border-bottom: 1px solid #ddd;
        dt{
          float:left;
          width:100px;
          height:100%;
          line-height:30px;
         color:#888;
         font-size:14px;

          span{
            padding:2px 10px;
            border-radius:10px;
          }

        }
        dd{
          position: relative;
          cursor: pointer;
          float:left;
          height:30px;
          width:100px;
          color:#888;
          font-size:14px;
          font-weight:300;
          // border:1px solid red;
          line-height:30px;
          margin-right:30px;
          .more{
            box-shadow: 0px 2px 2px 0px  gray;

            display: none;
            position:absolute;
            top:100%;
            width:400px;
            box-sizing:border-box;
            padding:10px;
            border:1px solid #ddd;
            background-color: #fff;
            .icon{
              width:10px;
              height:10px;
              position:absolute;
              background: white;
              border-top:1px solid #ddd;
              border-left:1px solid #ddd;
              left:20px;
              top:0;
              transform:translateY(-50%) rotatez(45deg)
            }
            h4{
              height:40px;
              line-height:40px;
            }
            .detail{
              width:100%;
              span{
                  width:100px;
                  margin-right:30px;
                  padding:3px 10px;
                  border-radius:10px;
                  cursor:pointer;
              }
            }
          }
        }
        dd:hover .more{
          display: block
        }
      }
    }
</style>

