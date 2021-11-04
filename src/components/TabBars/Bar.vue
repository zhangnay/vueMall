<template>
  <div class="bar" @click="toView()" :style="isStyle">
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: "Bar",
  methods: {
    toView() {
      console.log(this.path);
      this.$router.push(this.path);
    },
  },
  props: {
    color: {
      type: String,
      default: "rgb(14 92 144)",
    },
    path: String,
  },
  computed: {
    isActive() {
      return this.$route.path.indexOf(this.path) != -1;
    },
    isStyle() {
      return this.isActive
        ? { color: this.color, filter: "grayscale(0%)" }
        : {};
    },
  },
};
</script>

<style>
.TabBar {
  position: fixed;
  left: 0;
  bottom: 0;
  width: 100%;
  display: flex;
  background: #ececec;
  box-shadow: 0px 0px 7px #80808069;
  height: 49px;
}
.bar {
  flex: 1;
  text-align: center;
  font-size: 14px;
  padding: 4px 0;
  filter: grayscale(100%);
}
.bar img {
  display: inline-block;
  margin: 0 0 -3px 0;
  width: 25%;
}

.active {
  color: rgb(14 92 144);
  filter: grayscale(0%);
}
</style>