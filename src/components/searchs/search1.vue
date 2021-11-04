<template>
  <div class="search">
    <div class="nowEngine" @click="search()">
      <img :src="'img/' + engineSrc" alt="icon" />
    </div>
    <div class="searchInput">
      <input type="text" placeholder="输入关键字" v-model="keyword" />
    </div>
    <div class="searchBtn" @click="search()">
      <span>搜索</span>
      <div class="quickEngine">
        <div v-for="item in engines" @click.stop="search(item.name)">
          <img :src="'img/' + item.src" style="width: 100%" />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: { choicEngine: { type: String, default: "bing" } },
  data() {
    return {
      defEngine: "bing", //默认引擎
      keyword: "", //搜索关键字
      engineSrc: "", //第一icon路径
      engineName: "", //第一引擎
      engines: {
        bing: {
          name: "bing",
          src: "bing.jpg",
          url: "https://cn.bing.com/search?q=",
        },
        baidu: {
          name: "baidu",
          src: "baidu.png",
          url: "https://www.baidu.com/s?wd=",
        },
        sougou: {
          name: "sougou",
          src: "sougou.png",
          url: "https://www.sogou.com/web?query=",
        },
      },
    };
  },
  mounted() {
    //获取对象的key
    const keys = Object.keys(this.engines);
    //判断keys中是否存在this.choicEngine
    const choicEngine =
      keys.indexOf(this.choicEngine) === -1 ? this.defEngine : this.choicEngine;
    console.log("choicEngine:", choicEngine);
    const engine = this.engines[choicEngine];
    this.engineSrc = engine.src;
    this.engineName = engine.name;
  },
  methods: {
    search(name = this.engineName) {
      console.log(name, this.keyword);
      const engine = this.engines[name];
      let url = engine.url;
      url += this.keyword;
      this.keyword = "";
      window.open(url);
    },
  },
};
</script>

<style>
.search {
  width: 100%;
  min-width: 200px;
  border-radius: 30px;
  border: 2px solid rgb(0, 153, 255);
  /* overflow: hidden; */
}
.search > div {
  float: left;
  height: 30px;
  line-height: 30px;
  padding: 5px;
}
.search::after {
  content: "";
  display: block;
  clear: both;
}
.search input {
  width: 100%;
  height: 30px;
  /* text-align: center; */
  border: none;
  outline: none;
}
.nowEngine {
  width: 30px;
}
.nowEngine img {
  width: 100%;
  border-radius: 30px;
  overflow: hidden;
}
.searchInput {
  width: calc(100% - 110px);
}
.searchBtn {
  width: 50px;
  color: rgb(0, 153, 255);
  font-weight: bold;
  position: relative;
}
.searchBtn:hover .quickEngine {
  display: block;
}
.quickEngine {
  display: none;
  position: absolute;
  bottom: -15px;
  right: 0;
}
.quickEngine > div {
  float: left;
  width: 20px;
  height: 20px;
  margin: 0 0px;
  border-radius: 50%;
  overflow: hidden;
  /* border: 1px solid gray; */
  box-shadow: 0px 0px 10px #c1c1c1;
}
.quickEngine > div:hover {
  transform: scale(1.1);
  /* transition: 1s; */
}
</style>