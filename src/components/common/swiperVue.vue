<template>
  <!-- v-if 延迟加载  等到数据接收到之后再渲染 否则再先加载后，再获取数据重新渲染后 loop 会失效  -->
  <swiper ref="mySwiper" :options="swiperOptions" v-if="banner.length > 0">
    <swiper-slide v-for="(item, i) in banner" :key="i">
      <a :href="item.link"><img :src="item.image" width="100%" /></a>
    </swiper-slide>
    <div class="swiper-pagination" slot="pagination"></div>
  </swiper>
</template>

<script>
import "swiper/swiper-bundle.css";
import { swiper, swiperSlide } from "vue-awesome-swiper"; //局部引入

export default {
  name: "swiperVue",
  data() {
    return {
      swiperOptions: {
        // slidesPerView: 4, //显示个数
        // direction: "vertical",
        autoplay: {
          delay: 3000,
          disableOnInteraction: false,
        },
        pagination: {
          el: ".swiper-pagination",
          clickable: true,
        },
        loop: true,
      },
    };
  },
  props: {
    banner: {
      type: Array,
      default() {
        return [];
      },
    },
  },
  computed: {
    swiper() {
      //   return this.$refs.swiper;
    },
  },
  mounted() {
    // console.log(this);
    // this.swiper.slideTo(1, 1000, true);
  },
  components: {
    swiper,
    swiperSlide,
  },
};
</script>

<style>
.swiper-container {
  overflow: hidden;
  position: relative;
}
.swiper-pagination {
  bottom: 0px;
  left: 50%;
  transform: translateX(-50%);
}
.swiper-pagination-bullet {
  margin: 0 2px;
}
</style>