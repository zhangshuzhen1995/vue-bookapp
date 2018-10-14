<template>
    <div>
      <Header>列表</Header>
      <ul class="content">
        <li v-for="(book,index) in books" @click="fn(book.bookId)">
          <img :src="book.bookCover" alt="">
          <div class="container">
            <p>{{book.bookName}}</p>
            <p>{{book.bookInfo}}</p>
            <p> <span>$</span> {{book.bookPrice}}</p>
            <button @click.stop="deleteBook(book.bookId)">删除</button>
            <button @click.stop="collectBook(book)">收藏</button>
            <button @click.stop="addCart(book)">添加</button>
          </div>
        </li>
      </ul>
    </div>
</template>

<script>
    // 默认导出一个对象
    import Header from '../base/Header.vue'
    import {getBooks,deleteBook,collectOne} from '../api/index'
    import * as Types from '../store/mutations-type'
    export default {
        data(){
            return {
                books:[],
            }
        },
        created(){
            this.getBooks()
        },
        methods: {
            addCart(book){
                this.$store.commit(Types.ADD_CART,book)
            },
            async collectBook(val){
                await collectOne(val)
            },
          async getBooks(){
            let {data}=await getBooks()
            this.books=data
          },
          fn(id){
            this.$router.push({
              path:`/Detail/${id}`
            })
          },
          async deleteBook(id){
             await deleteBook(id)
             console.log(1);
             //this.books=this.books.filter(item=>{item.bookId==id})
            this.getBooks()

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
  button{
    width: 50px;
    height: 30px;
    background: #bd2c00;
    margin-top: 10px;
    margin-right: 20px;
  }
</style>
