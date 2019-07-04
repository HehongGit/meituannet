<template>
  <div class="favourable">
    <dl class="nav">
      <dt>狠优惠</dt>
      <dd
        v-for="item in navList"
        :key="item.name"
        :data-type="item.type"
        @mouseenter="changeType"
      >
        {{item.name}}
        <i v-if="item.type==nowtype"></i>
      </dd>
    </dl>
    <ul class="list">
      <li v-for="item in cheapList[nowtype]" :key="item.info">
        <a href="#">
          <img :src="item.image" />
          <p class="title">{{item.title}}</p>
          <p class="description">{{item.info}}</p>
          <p class="price-pos">
            <span class="price">
              ￥
              <em>{{item.nowPrice}}</em>
              <del>
                门市价￥
                <strong>{{item.originPrice}}</strong>
              </del>
            </span>
            <span class="pos">已售{{item.sale}}</span>
          </p>
        </a>
      </li>
    </ul>
  </div>
</template>
<style lang="less" scoped>
@import url("../../assets/css/index/favourable.less");
</style>
<script>
export default {
  data() {
    return {

        navList:[
            {
                name:"全部",
                type:"all"
            },
            {
                name:"美食",
                type:"food"
            },
            {
                name:"休闲",
                type:"rest"
            }
        ],
        cheapList:{
            "all":[
             {
              image:
                "https://p1.meituan.net/deal/f54b122dbdc3230050e365cdf037e68c655161.jpg@0_68_2256_1367a%7C388h_640w_2e_90Q%7C213w_120h_1e_1c",
              title: "Sweety Cake高端定制生日蛋糕",
              info: "[建设北路]59元代金券1张",
              originPrice: 59,
              nowPrice: 1,
              sale: "118"
            },
            {
              image:
                "https://p0.meituan.net/dpmerchantalbum/edd4601c3e4b1aaa86c7c7725774c9e6284569.jpg@213w_120h_1e_1c",
              title: "爱之裳鲜花（增城店）",
              info: "[淘金]【精品单枝】可随意定制520/365/999等10枝起订",
              originPrice: 99999999,
              nowPrice: 25,
              sale: "570"
            },
            {
              image:
                "https://p1.meituan.net/deal/201208/22/1_0822151022.jpg@213w_120h_1e_1c",
              title: "红星电影世界（新塘星之岛店）",
              info: "千与千寻",
              originPrice: 100,
              nowPrice: 24,
              sale: "4.0万"
            },
            {
              image:
                "https://p0.meituan.net/deal/5488ce33b235cacedda235a33e6887a130407.jpg@0_36_500_303a%7C388h_640w_2e_90Q%7C213w_120h_1e_1c",
              title: "老乡根据地",
              info: "[太和镇]咸骨粥1份，提供免费WiFi",
              originPrice: 48,
              nowPrice: 1,
              sale: "98"
            },
            {
              image:
                "https://p0.meituan.net/education/b80225a7b7df887a2f0ea6ade0130dc1587753.jpg@213w_120h_1e_1c",
              title: "树华美术（星河湾校区）",
              info: "[长隆/南村/万达][少儿美术]绘画画画班5选1",
              originPrice: 168,
              nowPrice: 68,
              sale: "244"
            },
            {
              image:
                "https://p1.meituan.net/deal/201208/22/1_0822151022.jpg@213w_120h_1e_1c",
              title: "红星电影世界（新塘星之岛店）",
              info: "蜘蛛侠：英雄远征",
              originPrice: 120,
              nowPrice: 29,
              sale: "8.4万"
            }
            ],
            "food":[
                {
                    image:"https://p1.meituan.net/deal/f54b122dbdc3230050e365cdf037e68c655161.jpg@0_68_2256_1367a%7C388h_640w_2e_90Q%7C213w_120h_1e_1c",
                    title: "Sweety Cake高端定制生日蛋糕",
                    info: "[建设北路]59元代金券1张",
                    originPrice: 59,
                    nowPrice: 1,
                    sale: "118"
                },
                  {
                    image: "https://p0.meituan.net/deal/5488ce33b235cacedda235a33e6887a130407.jpg@0_36_500_303a%7C388h_640w_2e_90Q%7C213w_120h_1e_1c",
                    title: "老乡根据地",
                    info: "[太和镇]咸骨粥1份，提供免费WiFi",
                    originPrice: 48,
                    nowPrice: 1,
                    sale: "98"
                },
                  {
                    image: "https://p0.meituan.net/deal/144e7d72141dd6b6cc33e3f4dd1a890f62440.jpg@0_26_823_498a%7C388h_640w_2e_90Q%7C213w_120h_1e_1c",
                    title: "Sweety Cake高端定制生日蛋糕",
                    info: "[建设北路]59元代金券1张",
                    originPrice: 36,
                    nowPrice: 1,
                    sale: "789"
                },
                  {
                    image:"https://p0.meituan.net/deal/a4eeb70ca827cf0c49e369250313325185666.jpg@0_52_800_484a%7C388h_640w_2e_90Q%7C213w_120h_1e_1c",
                    title: "好牛·潮汕牛肉火锅",
                    info: "[东圃]18元代金券1张，可叠加2张",
                    originPrice: 18,
                    nowPrice: 1,
                    sale: "77"
                },
                  {
                    image:"https://p1.meituan.net/deal/5d5db56059c3ec21e4521fe4f61ad7eb260217.jpg@213w_120h_1e_1c",
                    title: "尊霸披萨",
                    info: "[多城市]2-3人套餐，包间免费",
                    originPrice: 849,
                    nowPrice: 49.9,
                    sale: "1.8万"
                },
            ],
            "rest":[
                {
                   image:
                "https://p0.meituan.net/dpmerchantalbum/edd4601c3e4b1aaa86c7c7725774c9e6284569.jpg@213w_120h_1e_1c",
              title: "爱之裳鲜花（增城店）",
              info: "[淘金]【精品单枝】可随意定制520/365/999等10枝起订",
              originPrice: 99999999,
              nowPrice: 25,
              sale: "570" 
                },
                {
                    image: "https://p0.meituan.net/education/b80225a7b7df887a2f0ea6ade0130dc1587753.jpg@213w_120h_1e_1c",
                    title: "树华美术（星河湾校区）",
                    info: "[长隆/南村/万达][少儿美术]绘画画画班5选1",
                    originPrice: 168,
                    nowPrice: 68,
                    sale: "244"
                },
                {
                    image: "https://p0.meituan.net/wedding/53a3ece5d3a5554f8da66f9d20fe1ea6100304.jpg@213w_120h_1e_1c",
                    title: "聚轩装饰·专注家装",
                    info: "[天河北/广州东站]基材升级",
                    originPrice: 9087,
                    nowPrice: 1,
                    sale: "0"
                },
                {
                    image: "https://p0.meituan.net/wedding/3932a7891c8f1fdcc8e0d529c76bb543271593.jpg@213w_120h_1e_1c",
                    title: "三星装束·往工地开口说话",
                    info: "[珠江新城]明星设计师量房+初步方案+预算",
                    originPrice: 7000,
                    nowPrice: 1,
                    sale: "6"
                }
            ]

        
        },
      nowtype: "all" //默认选中all
    };
  },
  methods: {
    changeType(e) {
      this.nowtype = e.target.dataset.type;
    }
  }
};
</script>

