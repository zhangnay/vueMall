<template>
  <div>
    <div></div>
    <div v-for="(item, i) in urls" :key="i" @click="jumpUrl(item.url)">
      <nav>
        <img :src="item.scr" alt="" />
        <p>{{ item.title }}</p>
      </nav>
    </div>
  </div>
</template>

<script>
import nav from "@/components/navpc/nav";
export default {
  name: "navs",
  components: { nav },
  data() {
    return {
      urls: [
        { url: "", title: "", type: "" },
        { url: "", title: "", type: "" },
      ],
    };
  },
};
</script>

<style>
</style>