<template>
  <div id="app">
    <Tab></Tab>
    <router-view/>
  </div>
</template>

<script>
  import Tab from './base/Tab.vue'
export default {
  name: 'App',
  components:{
      Tab
  }
}
</script>

<style>
ul li{
  list-style: none;
}
a{
    text-decoration: none;
  }
  *{
    margin: 0;
    padding: 0;
  }
.content{
  position: absolute;
  top:40px;
  width: 100%;
  bottom: 50px;
}
</style>
