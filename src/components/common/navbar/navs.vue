<template>
  <div class="navs" :style="defaultColor">
    <div class="left" @click="back()"><slot name="left"></slot></div>
    <div class="center"><slot name="center"></slot></div>
    <div class="right"><slot name="right"></slot></div>
  </div>
</template>

<script>
export default {
  name: "navs",
  props: {
    fontcolor: {
      type: String,
      default: "black",
    },
    backcolor: {
      type: String,
      default: "white",
    },
  },
  computed: {
    defaultColor() {
      return { color: this.fontcolor, background: this.backcolor };
    },
  },
  data() {
    return {};
  },
  methods: {
    back() {
      this.$router.go(-1);
    },
  },
};
</script>

<style>
.navs {
  display: flex;
  line-height: 44px;
  box-shadow: 0 1px 1px #0000000d;
  text-align: center;
}
.left {
  width: 60px;
}
.right {
  width: 60px;
  /* font-size: 30px; */
  /* line-height: 30px; */
}

.center {
  flex: 1;
  font-size: 16px;
}
</style>