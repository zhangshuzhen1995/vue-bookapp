import axios from 'axios'
axios.defaults.baseURL='http://localhost:3001'
//获取轮播图数据
export let getSliders=()=>{
  return axios.get('/sliders')
}
//获取所有的图书
export let getBooks=()=>{
  return axios.get('/books')
}
//获取热门图书
export let getHot=()=>{
  return axios.get('/hot')
}
//详情页获取的一本图书
export let getOne=(id)=>{
  return axios.get(`/getOne?id=${id}`)
}
//删除一个图书
export let deleteBook=(id)=>{
  return axios.get(`/delete?id=${id}`)
}
//收藏页
export let collectBook=()=>{
  return axios.get(`/books?page=collect`)
}
//收藏一本书
export let collectOne=(data)=>{
  return axios.post('/collect',data)
}
