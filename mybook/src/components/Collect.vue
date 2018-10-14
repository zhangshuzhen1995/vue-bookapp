<template>
    <div>
      <Header>收藏</Header>
      <ul class="content">
        <li v-for="(book,index) in books">
          <img :src="book.bookCover" alt="">
          <div class="container">
            <p>{{book.bookName}}</p>
            <p>{{book.bookInfo}}</p>
            <p> <span>$</span> {{book.bookPrice}}</p>
          </div>
        </li>
      </ul>
    </div>
</template>

<script>
    // 默认导出一个对象
    import Header from '../base/Header.vue'
    import {collectBook} from "../api"
    export default {
        data(){
            return {
                books:[]
            }
        },
        created(){
            this.getCollect()
        },
        methods: {
        async getCollect(){
            let {data}=await collectBook()
          this.books=data
        }
        },
        components: {
            Header
        },
        computed: {}
    }
</script>

<style scoped>
  .container{
    width: 50%;
    overflow: hidden;
    float: right;
  }
</style>
