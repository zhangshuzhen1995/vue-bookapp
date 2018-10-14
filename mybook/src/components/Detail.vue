<template>
    <div class="detail">
      <Header :back="true">详情页</Header>
      <div class="content">
        <img :src="book.bookCover" alt="">
        <p>{{book.bookName}}</p>
        <p>{{book.bookInfo}}</p>
        <p> <span>$</span> {{book.bookPrice}}</p>

      </div>
          </div>
</template>

<script>
    // 默认导出一个对象
    import Header from '../base/Header.vue'
    import {getOne} from '../api'
    export default {
        data(){
            return {
              book:{}
            }
        },
        created(){

          this.get()
        },
        methods: {
         async get(){
           let {data}=await getOne(this.bid)
           this.book=data
           console.log(this.book);
         }
        },
        components: {
          Header
        },
        computed: {
            bid(){
                return this.$route.params.id
            }

        }
    }
</script>

<style scoped>
  .detail{
    position: absolute;
    left: 0;
    top: 0;
    bottom: 0;
    right: 0;
    background: #fff;
    z-index: 100;
  }
</style>
