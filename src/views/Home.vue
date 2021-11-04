<template>
  <div class="home">
    <navs
      fontcolor="white"
      backcolor="#64a2ff"
      style="position: fixed; top: 0; left: 0; right: 0; z-index: 10"
    >
      <!-- <div slot="left" class="glyphicon glyphicon-menu-left"></div> -->
      <div slot="center">首页</div>
      <div slot="right" class="glyphicon glyphicon-th-large"></div>
    </navs>


     
    <scroll @pullingUp = "pullingUp" class="scroll">
        <swiper-vue :banner="banner"></swiper-vue>
        <recommend :recommend="recommend"></recommend>

        <img src="@/assets/img/aa.jpg" width="100%" />

        <tab-control :list="goodsKey" @click-tab="tabClick"></tab-control>
        <double-goods :goods_list="goods_list"></double-goods>

    </scroll>
     
  </div>
</template>

<script>
import navs from "@/components/common/navbar/navs.vue";
import swiperVue from "@/components/common/swiperVue";
import Scroll from "@/components/common/scroll/Scroll"
import tabControl from "@/components/common/tabcontrol/TabControl";

import recommend from "./recommend";
import doubleGoods from "@/components/content/goods/doubleGoods";

import { getHomeM, getHomeGoods } from "@/network/home.js";



export default {
  data() {
    return {
      banner: [],
      recommend: [],
      goodsKey: ["新品", "推荐", "热卖"],
      goodsVal: ["pop", "new", "sell"],
      goods: {
        pop: { list: [], page: 0 },
        new: { list: [], page: 0 },
        sell: { list: [], page: 0 },
      },
      defGoodsKey: "pop",
      bs: {},
    };
  },
  computed: {
    goods_list() {
      console.log("list", this.goods[this.defGoodsKey].list);
      return this.goods[this.defGoodsKey].list;
    },
  },
  mounted() {
    
  },
  methods: {
    add() {
      this.$store.commit("increment");
    },
    getHomeM() {
      getHomeM().then((res) => {
        this.data = res.data.data;
        console.log(this.data);
        this.banner = this.data.banner.list;
        this.recommend = this.data.recommend.list;
      });
    },
    getHomeGoods(type) {
      console.log(this.goods[type].page, type);
      const page = this.goods[type].page + 1;

      getHomeGoods(type, page).then((res) => {
        this.goods[type].page += 1;
        this.goods[type].list.push(...res.data.data.list);
        // console.log(this.goods);
        // this.goods[type].list = [{}];
      });
    },
    tabClick(index) {
      console.log(index);
      this.defGoodsKey = this.goodsVal[index];
    },

    pullingUp(){
      this.getHomeGoods(this.defGoodsKey);
    }
  },
  created() {
    this.getHomeM();

    this.getHomeGoods("pop");
    this.getHomeGoods("new");
    this.getHomeGoods("sell");
    // getHomeM().then((res) => {
    //   console.log(res.data.data);
    // });
  },
  components: { navs, swiperVue, Scroll, tabControl, recommend, doubleGoods },
};
</script>

<style>
.home {
  font-weight: bold;
  position: relative;
}
 

.scroll{
  position: absolute;
  top: 44px;
  bottom: 49px;
  left: 0;right: 0;
}
</style>