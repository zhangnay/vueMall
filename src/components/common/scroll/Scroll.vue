<template>
  <div class="wrapper" ref="wrapper">
      <div class="content">
          <slot></slot>
      </div>
  </div>
</template>

<script>
import BetterScroll from "better-scroll";
import Pullup from "@better-scroll/pull-up";

BetterScroll.use(Pullup);
export default {
    mounted(){
        this.bs = new BetterScroll(this.$refs.wrapper, {
            observeDOM: true,
            pullUpLoad: true,
            click: true,
        });
        this.bs.on("pullingUp", () => {
            // await fetchData()
            this.$emit('pullingUp')
        this.bs.finishPullUp();
        });
    }
}
</script>

<style>

 
</style>