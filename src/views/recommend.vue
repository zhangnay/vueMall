<template>
  <div class="recommend">
    <div v-for="(item, i) in recommend" :key="i">
      <a :href="item.link">
        <img :src="item.image" alt="" />
        <div>{{ item.title }}</div>
      </a>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    recommend: {
      type: Array,
      default() {
        return [];
      },
    },
  },
};
</script>

<style>
.recommend {
  width: 100%;
  display: flex;
  text-align: center;
  padding: 10px 0;
  border-bottom: 8px solid #f1f1f1;
}
.recommend > div {
  flex: 1;
}
.recommend img {
  width: 70px;
}
</style>