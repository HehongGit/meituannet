<template>
  <dl class="list">
      <dt>
        <span>智能排序</span>
        <span>价格排序</span>
        <span>人气最高</span>
        <span>评价最高</span>
      </dt>

      <dd v-for="(item,index) in goodsList" :key="item.address">
          <i class="index">{{index}}</i>
          <img :src="item.image" />
          <div class="info">
            <p class="title">{{item.title}}</p>
            <div class="score">
                <el-rate
                  v-model="item.score"
                  disabled
                  show-score
                  text-color="#ff9900"
                  score-template="{value}分">
                </el-rate>
            </div>
            <p class="address">{{item.address}} </p>
            <p class="description">{{item.dealItems[0].title}}</p>
          </div>
      </dd>
  </dl>
</template>

<style lang="less" scoped>
    .list{
      margin-top:20px;
      border-radius: 10px;
      border:1px solid #ddd;
      padding:20px;
      background-color: #fff;
      dt{
        height:30px;

        border-bottom:1px solid #ddd;
        span{
          margin-right:40px;
          font-size:14px;
          color:#666;
          cursor: pointer;
        }
      }
      dd{
        padding:20px 0;
        display: flex;
        position: relative;
        border-bottom:1px solid #ddd;
        .index{
          font-size: 12px;
          position: absolute;
          border-radius: 5px;

          padding:0 10px;
          left:-5px;
          top:25px;
          background-color: rgb(247, 128, 17);
          color:white;

        }
          img{
            // flex:1;
            width:200px;
            height:120px;
            border-radius: 10px;
          }
          .info{
            // flex:8;
            margin-left:20px;
            p.title{
              font-weight:500;
            }
            .score{
                font-size:12px;
                height:25px;
                line-height: 25px;
            }
            p.address{
              font-size:12px;
              color:#888;
              height:30px;
              line-height:30px;
              overflow: hidden;
              text-overflow: ellipsis;
              white-space: nowrap;
            }
            p.description{
              font-size:14px;
              color:#888;
              height:50px;
              line-height:50px;
              overflow: hidden;
              text-overflow: ellipsis;
              white-space: nowrap;
            }
          }
      }
    }
</style>

<script>
export default {
  props:['goodsList'],

}
</script>
