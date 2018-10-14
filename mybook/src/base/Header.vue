<template>
    <div class="header">
      <i class="iconfont icon-fanhui" v-if="back" @click="go"></i>
      <slot></slot>
    </div>
</template>

<script>
    // 默认导出一个对象
    export default {
        data(){
            return {

            }
        },
        props:['back'],
        methods: {
            go(){
                this.$router.go(-1)
            }
        },
        components: {},
        computed: {}
    }
</script>

<style scoped>
  .header{
    position: fixed;
    z-index: 10;
    width: 100%;
    height: 40px;
    background: #007aff;
    line-height: 40px;
    text-align: center;
  }
  .header i{
    float: left;
    margin-left: 10px;
  }
</style>
