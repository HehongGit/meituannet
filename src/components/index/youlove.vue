<template>
  <div class="youlove">
    <dl class="nav">
      <dt>猜你喜欢</dt>
      <dd>
        为你甄选最合适的
        <i></i>
      </dd>
    </dl>

    <ul class="list">
      <li v-for="item in tuijianList" :key="item.name">
        <a href="#">
          <img :src="item.image" />
          <p class="title">{{item.title}}</p>
          <el-rate :value="item.star" disabled show-score text-color="#ff9900" ></el-rate>
          <p class="address">{{item.address}}</p>
          <p class="price">
            ￥
            <em>{{item.price.toFixed(1)}}</em>
            起
          </p>
        </a>
      </li>
    </ul>
  </div>
</template>
<style lang="less" scoped>
  @import url("../../assets/css/index/youlove.less");
  // @import url("../../assets/css/index/youlove.less");
</style>
<script>
export default {
  data() {
    return {
      tuijianList: [
        {
          title: "满汉三汁焖锅",
          image:
            "https://p1.meituan.net/apiback/f2a077881b0add0ec1acfba5cad25fb1149726.jpg@214w_120h_1e_1c",
          star: 3.2,
          commont: 5513,
          address: "时尚天河",
          price: 44.9
        },
        {
          title: "Taning挞柠·匠心柠檬茶（沙凤店）",
          image:
            "https://p0.meituan.net/msmerchant/afeacea2c79a09974b033b1f42269f18572425.jpg@214w_120h_1e_1c",
          star: 3.6,

          address: "罗冲围/金沙洲",
          price: 10.9
        },
        {
          title: "老湘村",
          image:
            "https://p1.meituan.net/msmerchant/3a7f7caa81aecbd09aa21c77dd8cdb5a24342.jpg@214w_120h_1e_1c",
          star: 4.3,
          commont: 1012,
          address: "东晓南路沿线",
          price: 95.0
        },
        {
          title: "探蟹肉蟹煲（北京路店）",
          image:
            "https://p1.meituan.net/apiback/f2a077881b0add0ec1acfba5cad25fb1149726.jpg@214w_120h_1e_1c",
          star: 4.7,
          commont: 1149,
          address: "北京路商业区",
          price: 118.0
        },
        {
          title: "鑫淼猪肚鸡（嘉禾店）",
          image:
            "https://p1.meituan.net/mogu/605ea10e6b12a9c1cc26edc23909fcd51313876.png@214w_120h_1e_1c",
          star: 3.3,
          commont: 359,
          address: "嘉禾望岗",
          price: 95.0
        },
        {
          title: "为什么牛现切牛肉火锅（万胜广场店）",
          image:
            "https://p0.meituan.net/msmerchant/bc34dae2069213750fea5c66c74e6a81134672.jpg@214w_120h_1e_1c",
          star: 3,
          commont: 3039,
          address: "琶洲",
          price: 78.0
        },
        {
          title: "大岗仙庙烧鸡（石牌东路店）",
          image:
            "https://p1.meituan.net/mogu/890485aaffe19f69dafd77d52b74399253545.jpg@214w_120h_1e_1c",
          star: 5,
          commont: 467,
          address: "石牌/百脑汇",
          price: 90.0
        },
        {
          title: "食上签串串香火锅（漫广场店）",
          image:
            "https://p1.meituan.net/msmerchant/64d4d2f5a100dc675bc5d233b9b31ef5240876.jpg@214w_120h_1e_1c",
          star: 4.8,
          commont: 142,
          address: "东圃",
          price: 68.0
        },
        {
          title: "野藤造型",
          image:
            "https://p0.meituan.net/merchantpic/0be5f931622c93a399c51fd38c8f31cb387384.jpg@214w_120h_1e_1c",
          star: 5,
          commont: 1808,
          address: "海珠广场",
          price: 9.0
        },
        {
          title: "弘善素食（富华东路店）",
          image:
            "https://p0.meituan.net/mogu/2ce59c68e5dd54df223f3d1e5fe8b0d743335.jpg@214w_120h_1e_1c",
          star: 4.2,
          commont: 11490,
          address: "市桥",
          price: 19.8
        }
      ]
    };
  }
};
</script>
