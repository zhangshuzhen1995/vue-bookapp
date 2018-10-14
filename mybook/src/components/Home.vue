<template>
    <div>
      <Header>首页</Header>
        <div class="content">
          <div v-if="loading">疯狂加载</div>
          <template v-else>
            <Sliders :swiperSlides="sliders"></Sliders>
            <div>
              <p>热门图书</p>
              <ul class="list">
                <li v-for="(book,index) in hotBook" @click="fn(book.bookId)" >
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
        </div>

    </div>
</template>

<script>
    // 默认导出一个对象
    import Header from '../base/Header.vue'
    import Sliders from '../base/Sliders.vue'
    import {getSliders,getHot} from '../api/index'
    export default {
        data(){
            return {
                sliders:[],
              hotBook:[],
              loading:true
            }
        },
        created(){
          this.getSliders(),
            this.getHot()
        },
        methods: {
            async getSliders(){
             let {data}=await getSliders()
              this.sliders=data
              this.loading=false
            },
           async getHot(){
              let {data}=await getHot()
             this.hotBook=data
           },
           fn(id){
            this.$router.push({
                path:`/Detail/${id}`
              })
          }
        },
        components: {
            Header,
           Sliders
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
