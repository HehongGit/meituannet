<template>
  <dl class="list">
      <dt>猜你喜欢</dt>
      <dd v-for="item in tuijianlist" :key="item.itemId">
        <img src="http://p0.meituan.net/dpmerchantalbum/6c83d5727ce38eb0f73664ea4c376a92210951.jpg@275w_156h_1e_1c" :alt="item.title" :title="item.title"/>
        <p class="title">{{item.title}}</p>
        <div class="score">
            <el-rate
            v-model="item.score"
            disabled
            show-score
            text-color="#ff9900"
            score-template="{value}分">
          </el-rate>
           <span>{{item.commentNum}}个评价</span>
           <p class="address">{{item.areaName}}</p>
           <p class="price">￥ <em>{{item.avgPrice}}</em> 起</p>
        </div>
      </dd>
  </dl>
</template>

<style lang="less" scoped>
    .list{
      padding:10px 20px;
      margin-left:20px;
      background-color: #fff;
      border:1px solid #ddd;
      border-radius:10px;
      dt{
        font-size:14px;
        font-weight:500;
        height:25px;
        line-height:25px;
      }
      dd{
        margin:10px 0;
        img{
          width:100%;
          height:100px;
        }
      p.title{
          font-size:14px;
          font-weight:500;
        }

        .score{
          font-size:12px;
          margin:5px 0;
        }
        p.address{
          color:#888;
          font-size:10px;
        }
        p.price{
          color:orangered;
          font-size:12px;
          font-weight:500;
          em{
            font-style:normal;
            font-size:18px;
            color:orangered
          }
        }
      }
    }
</style>
<script>
export default {
  props:['tuijianlist']
}
</script>
