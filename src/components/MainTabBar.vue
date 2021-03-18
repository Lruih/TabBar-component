<template>
  <tab-bar>
    <tab-bar-item path="/Home" activeColor="red">
      <template #item-icon>
        <img src="~assets/img/tabbar/Home.svg" alt="" />
      </template>
      <template #item-icon-active>
        <img src="~assets/img/tabbar/Home-active.svg" alt="" />
      </template>
      <template #item-text>
        <div>首页</div>
      </template>
    </tab-bar-item>
    <tab-bar-item path="/Category">
      <template #item-icon>
        <img src="~assets/img/tabbar/classify.svg" alt="" />
      </template>
      <template #item-icon-active>
        <img src="~assets/img/tabbar/classify-active.svg" alt="" />
      </template>
      <template #item-text>
        <div>分类</div>
      </template>
    </tab-bar-item>
    <tab-bar-item path="/Cart">
      <template #item-icon>
        <img src="~assets/img/tabbar/shopcar.svg" alt="" />
      </template>
      <template #item-icon-active>
        <img src="~assets/img/tabbar/shopcar-active.svg" alt="" />
      </template>
      <template #item-text>
        <div>购物车</div>
      </template>
    </tab-bar-item>
    <tab-bar-item path="/Profile">
      <template #item-icon>
        <img src="~assets/img/tabbar/mine.svg" alt="" />
      </template>
      <template #item-icon-active>
        <img src="~assets/img/tabbar/mine-active.svg" alt="" />
      </template>
      <template #item-text>
        <div>我的</div>
      </template>
    </tab-bar-item>
  </tab-bar>
</template>

<script>
import TabBar from "./tabbar/TabBar";
import TabBarItem from "./tabbar/TabBarItem";
export default {
  name: "",
  data() {
    return {};
  },
  components: {
    TabBar,
    TabBarItem,
  },
};
</script>
<style scoped>
</style>
