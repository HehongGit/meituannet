<template>
  <div class="mingsu">
    <dl class="nav">
      <dt>推荐民宿</dt>
      <dd
        v-for="item in mingsuData.areaList"
        :data-type="item.type"
        @mouseenter="changetype"
        :key="item.name"
      >
        {{item.name}}
        <i v-if="nowtype==item.type"></i>
      </dd>
    </dl>
    <ul class="list">
      <li v-for="item in mingsuData.data[nowtype]" :key="item.image">
        <a href="#">
          <img class="house-img" :src="item.image" />
          <img class="owner-img" :Src="item.owner" />
          <p class="title">{{item.title}}</p>
          <p class="description">{{item.description}}</p>
          <p class="price">
            ￥
            <em>{{item.price}}</em>
          </p>
        </a>
      </li>
    </ul>
  </div>
</template>
<style lang="less" scoped>
    @import url("../../assets/css/index/mingsu.less");
</style>

<script>
export default {
  data() {
    return {
      nowtype: "sz",
      mingsuData: {
        areaList: [
          {
            name: "深圳",
            type: "sz"
          },
          {
            name: "珠海",
            type: "zh"
          },
          {
            name: "桂林",
            type: "gl"
          }
        ],
        data: {
          sz: [
            {
              image:
                "https://img.meituan.net/phoenix/e4765234cb9b908798fdc122dc26dfba331774.jpg@740w_416h_1e_1c",
              owner:
                "http://p1.meituan.net/iphoenix/0f739e478f59cd5abe9248f02c54cdc135133.jpg@200w_200h_1e_1c",
              title: "西冲西涌一朵小花-标准双床房",
              description: "整套1居室·可住2人 | 西涌",
              price: 128
            },
            {
              image:
                "http://p1.meituan.net/iphoenix/65f5425c241120cbe7aa5ca40400174a2861947.jpg@740w_416h_1e_1c",
              owner:
                "https://img.meituan.net/avatar/91425e859dc30679a2aaad62c23bb4da350700.jpg@200w_200h_1e_1c",
              title: "龙岗南联地铁口-北欧清新风格LOFT套房",
              description: "整套1居室·可住2人 | 南联",
              price: 148
            },
            {
              image:
                "http://p1.meituan.net/phoenix/5ab9207d960ce1febd5f65b106e9b387922123.jpg@740w_416h_1e_1c",
              owner:
                "https://img.meituan.net/avatar/e0fab958bfa52ca6b3b94106fa7c8fc3128031.jpg@200w_200h_1e_1c",
              title: "高端公寓 地铁口舒适大床LOFT复式 套房 可做饭 10至32楼",
              description: "整套1居室·可住2人 | 南联",
              price: 176
            },
            {
              image:
                "https://img.meituan.net/phoenix/6f69849ff8c9dfdd3a1ad6f22fec0026334633.jpg@740w_416h_1e_1c",
              owner: "https://gz.meituan.com/@200w_200h_1e_1c",
              title: "简约公寓",
              description: "整套1居室·可住2人 | 沙井",
              price: 118
            },
            {
              image:
                "https://img.meituan.net/iphoenix/1c0bc6462bfad30ca8eca685c8b33275396903.jpg@740w_416h_1e_1c",
              owner:
                "https://img.meituan.net/avatar/ca544b93a03dd6a89de4ac74f02c100451915.jpg@200w_200h_1e_1c",
              title: "（免费接送服务）南山科技园被公园包围又安静的公寓！",
              description: "整套1居室·可住2人 | 西涌",
              price: 208
            },
            {
              image:
                "https://img.meituan.net/phoenix/8c97634c18f297a0c0077efdc4a0aeff436747.jpg@740w_416h_1e_1c",
              owner:
                "https://img.meituan.net/avatar/3d40a068afb2d208c4246cc76d9cdc2c24716.jpg@200w_200h_1e_1c",
              title:
                "深圳北站落地窗高端公寓，欧式清新风，近地铁，近福田口岸，会展中心，环境非常好 24小时入住，大床房，适合情侣",
              description: "整套1居室·可住2人 | 民治",
              price: 148
            }
          ],
          zh: [
            {
              image:
                "http://p0.meituan.net/iphoenix/039d9156bf105fdf45465ec29ea6fdfd2054956.jpg@740w_416h_1e_1c",
              owner:
                "https://img.meituan.net/avatar/1e3866e8581126d507b54767cb76ed3e168075.jpg@200w_200h_1e_1c",
              title: "<绘影·缤果>床幔|水果风|宁堂|北师珠|北理工|唐家湾轻轨站",
              description: "整套1居室·可住2人 | 北师大/北理工",
              price: 118
            },
            {
              image:
                "http://p0.meituan.net/iphoenix/4764d14c43f8acb5847bfbb34e1f2f252288713.jpg@740w_416h_1e_1c",
              owner:
                "https://img.meituan.net/avatar/4570c2cf7f155be24f5ac74ff93e61a895786.jpg@200w_200h_1e_1c",
              title:
                "·拱北口岸/港珠澳大桥/城轨珠海站/圆明新园/简约宜家风一居室",
              description: "整套1居室·可住4人 | 摩尔广场",
              price: 334
            },
            {
              image:
                "https://img.meituan.net/phoenix/187ae467fa7b646fc2510e4fb4b1dd5e999596.jpg@740w_416h_1e_1c",
              owner:
                "https://img.meituan.net/avatar/14a6250a58417d2a82cd387c86a73c6183891.jpg@200w_200h_1e_1c",
              title:
                "珠海机场/吉林大学旁翰林公寓/安静傍山交通方便【YL House公寓】静谧房",
              description: "整套1居室·可住2人 | 吉林大学珠海学院",
              price: 118
            },
            {
              image:
                "http://p1.meituan.net/iphoenix/76b0d259efbb5dd0d934f3dd7eb8dd072500950.jpg@740w_416h_1e_1c",
              owner:
                "https://img.meituan.net/avatar/4570c2cf7f155be24f5ac74ff93e61a895786.jpg@200w_200h_1e_1c",
              title:
                "贝壳·近拱北口岸/城轨珠海站/港珠澳大桥/圆明新园/原木风一居室",
              description: "整套1居室·可住3人 | 摩尔广场",
              price: 334
            },
            {
              image:
                "https://img.meituan.net/phoenix/2467c6e363733a62a35229d28226727761603.jpg@740w_416h_1e_1c",
              owner:
                "https://img.meituan.net/avatar/09fdbf270eb57ade8dfbaaabd9f287024283.jpg@200w_200h_1e_1c",
              title: "香洲/北师北理/唐家湾站/四方民宿/粉粉设计/樱宿Sakura",
              description: "整套1居室·可住2人 | 北师大/北理工",
              price: 102
            },
            {
              image:
                "http://p0.meituan.net/iphoenix/8c106103575e95545e85b0fa05933c021744951.jpg@740w_416h_1e_1c",
              owner:
                "https://img.meituan.net/avatar/e5088066d6557ebe3dd77f2ba1ebffde487685.jpg@200w_200h_1e_1c",
              title:
                "拱北口岸/30分钟直达珠海长隆/港珠澳大桥/轻轨站/可容纳6人简约原木二居室",
              description: "整套2居室·可住6人 | 摩尔广场",
              price: 438
            }
          ],
          gl: [
            {
              image:
                "http://p1.meituan.net/iphoenix/b65e88192468372327094fe0c6ad778a1805388.jpg@740w_416h_1e_1c",
              owner:
                "https://img.meituan.net/avatar/f7cb46c439f7cec4af3d8bbb5f459d7357507.jpg@200w_200h_1e_1c",
              title: "近桂林北站-精品商务大床房",
              description: "整套1居室·可住2人 | 高铁北站",
              price: 118
            },
            {
              image:
                "http://p0.meituan.net/iphoenix/d5484941a43095bcc535b02e0b79265d6224418.jpg@740w_416h_1e_1c",
              owner:
                "https://img.meituan.net/avatar/5705e58965dcd3e883dad2209f5002c520007.jpg@200w_200h_1e_1c",
              title: "魔幻小屋2号近两江四湖东西巷王城",
              description: "整套1居室·可住2人 | 中心广场|两江四湖",
              price: 108
            },
            {
              image:
                "https://img.meituan.net/phoenix/128767eb34abd9ba64671e7a8af64b01469298.jpg@740w_416h_1e_1c",
              owner:
                "https://img.meituan.net/avatar/b0835de546131e99dc36cec22e6f7e9518222.jpg@200w_200h_1e_1c",
              title:
                "【夕然】市中心/象鼻山/两江四湖/日月双塔/东西巷/火车站高铁/一室一厅榻榻米/清新风温馨小屋",
              description: "整套1居室·可住4人 | 西城路步行街",
              price: 118
            },
            {
              image:
                "https://img.meituan.net/phoenix/272c417a273b23f1b1dc300bc8ff8a5d512229.jpg@740w_416h_1e_1c",
              owner:
                "https://img.meituan.net/avatar/9c4a839dbd18a9eadbcf08383d4ae08f23610.jpg@200w_200h_1e_1c",
              title:
                "糖窝.Sugar Miss you 火车站 Loft两江四湖 象鼻山 小清新 英伦 北欧 loft 汽车站 市中心 漓江",
              description: "整套1居室·可住3人 | 桂林站",
              price: 198
            },
            {
              image:
                "http://p1.meituan.net/iphoenix/31adbf30a327ad3d3976113176282f646034565.jpg@740w_416h_1e_1c",
              owner:
                "https://img.meituan.net/avatar/5705e58965dcd3e883dad2209f5002c520007.jpg@200w_200h_1e_1c",
              title: "<绘影·缤果>床幔|水果风|宁堂|北师珠|北理工|唐家湾轻轨站",
              description: "整套1居室·可住2人 | 中心广场|两江四湖",
              price: 108
            },
            {
              image:
                "https://img.meituan.net/phoenix/0a4f291a46b129ec96f01e79933d3f7e158038.jpg@740w_416h_1e_1c",
              owner:
                "https://img.meituan.net/avatar/80de8f803f9e306d54f4173709344ab8126796.jpg@200w_200h_1e_1c",
              title:
                "莫奈-法式ins小清新 近桂林站 两江四湖 象鼻山 东西巷 市中心落地窗套房",
              description: "整套2居室·可住6人 | 西城步行街",
              price: 299
            }
          ]
        }
      }
    };
  },
  methods: {
    changetype(e) {
      this.nowtype = e.target.dataset.type;
    }
  }
};
</script>
