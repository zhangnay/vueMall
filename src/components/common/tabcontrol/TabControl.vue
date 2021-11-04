<template>
  <div class="tabControl">
    <div
      v-for="(item, i) in list"
      :key="i"
      @click="clickTab(i)"
      :class="{ active: i == chooseIndex }"
    >
      <span>{{ item }}</span>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    list: {
      type: Array,
      default() {
        return [];
      },
    },
  },
  methods: {
    clickTab(index) {
      console.log(index);
      this.chooseIndex = index;
      this.$emit("click-tab", index);
    },
  },
  data() {
    return {
      chooseIndex: 0,
    };
  },
};
</script>

<style>
.tabControl {
  position: sticky;
  top: 44px;
  width: 100%;
  display: flex;
  text-align: center;
  line-height: 44px;
  background: white;
}
.tabControl > div {
  flex: 1;
}
.tabControl .active {
  color: rgb(100, 162, 255);
}
.tabControl .active span {
  padding: 2px;
  border-bottom: 2px solid rgb(100, 162, 255);
}
</style>