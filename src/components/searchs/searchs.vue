<template>
  <div>
    <search1 :choic-engine="searchId" />
  </div>
</template>

<script>
import search1 from "@/components/searchs/search1.vue";

export default {
  components: {
    search1,
  },
  data() {
    return {
      searchId: "bing1",
    };
  },
};
</script>

<style>
</style>
