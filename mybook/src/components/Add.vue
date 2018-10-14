<template>
    <div>
      <Header>购物</Header>
      <ul class="content">
        <li v-for="(book,index) in books">
          <img :src="book.bookCover" alt="">
          <div class="container">
            <p>{{book.bookName}}</p>
            <p>{{book.bookInfo}}</p>
            <p> <span>$</span> {{book.bookPrice}}</p>
            <p>小计：{{book.bookPrice*book.bookCount}}</p>
            <button>-</button>{{book.bookCount}} <button>+</button>
          </div>
        </li>
      </ul>
    </div>
</template>

<script>
    // 默认导出一个对象
    import Header from '../base/Header.vue'
    import {mapState} from 'vuex'
    export default {
        data(){
            return {
            }
        },
        methods: {
        },
        components: {
            Header
        },
        computed: {
          ...mapState({books:'carList'})

        }
    }
</script>

<style scoped>
  .container{
    width: 50%;
    overflow: hidden;
    float: right;
  }
</style>
