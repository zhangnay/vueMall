<template>
  <div class="TabBar">
    <bar v-for="(item, i) in bar_list" :key="i" :path="item.path">
      <!-- :class="{ active: path == item.path }" -->
      <div>
        <img :src="item.img" width="25px" />
        <div>{{ item.text }}</div>
      </div>
    </bar>
  </div>
</template>

<script>
import bar from "@/components/TabBars/Bar.vue";
export default {
  name: "MainBar",
  components: { bar },

  data() {
    return {
      bar_list: [
        { img: "img/bar/home.svg", text: "首页", path: "/home" },
        { img: "img/bar/hot.svg", text: "热点", path: "/hot" },
        { img: "img/bar/msg.svg", text: "消息", path: "/msg" },
        { img: "img/bar/man.svg", text: "个人中心", path: "/man" },
      ],
      path: "/home",
    };
  },
  methods: {},
};
</script>

<style>
</style>