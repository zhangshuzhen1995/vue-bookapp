<template>
    <div class="footer">
      <router-link to="/Home">
        <i class="iconfont icon-home"></i>
        <span>首页</span>
      </router-link>
      <router-link to="List">
        <i class="iconfont icon-chazhaobiaodanliebiao"></i>
        <span>列表</span>
      </router-link>
      <router-link to="Collect">
        <i class="iconfont icon-shoucang"></i>
        <span>收藏</span>
      </router-link>
      <router-link to="Add">
        <i class="iconfont icon-tianjia-xue"></i>
        <span>购物</span>
      </router-link>
    </div>
</template>

<script>
    // 默认导出一个对象
    export default {
        data(){
            return {}
        },
        methods: {},
        components: {},
        computed: {}
    }
</script>

<style scoped>
  .footer{
    width: 100%;
    height: 50px;
    display: flex;
    position: fixed;
    bottom: 0;
    left: 0;
    background: #cccccc;
    z-index: 10;
  }
  a{
    display: flex;
    justify-content: center;
    align-items: center;
    flex: 1;
    flex-direction: column;
  }
</style>
