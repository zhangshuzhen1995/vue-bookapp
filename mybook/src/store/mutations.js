import * as Types from './mutations-type'
const mutations={
[Types.ADD_CART](state,book){
  console.log(book);
  console.log(state.carList);
  let product=state.carList.find(item=>item.bookId===book.bookId)

  console.log(product);
  if(product){
    console.log(1);
    console.log(product);
   product.bookCount+=1
  }else {
    book.bookCount=1
  console.log(product)
    state.carList=[...state.carList,book]
    console.log(state.carList);
  }
}
}

export default mutations
