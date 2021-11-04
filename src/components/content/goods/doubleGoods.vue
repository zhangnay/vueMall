<template>
  <div class="doubleGoods">
    <div v-for="(item, i) in goods_list" :key="i">
      <img :src="item.show.img" width="100%" />
      <div>
        <p>{{ item.title }}</p>
        <span>{{ item.price }}</span>
        <span> 收藏：{{ item.cfav }}</span>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    goods_list: {
      type: Array,
      default() {
        return [];
      },
    },
  },
};
</script>

<style>
.doubleGoods {
  width: 100%;
  display: flex;
  text-align: center;
  flex-wrap: wrap;
  justify-content: space-evenly;
}
.doubleGoods > div {
  width: 48%;
}
</style>