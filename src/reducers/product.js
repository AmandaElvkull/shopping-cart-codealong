import { createSlice } from '@reduxjs/toolkit';

const productData = [
  { id: 1, title: 'socks', price: 100, emjoi: '<3 ' },
  { id: 2, title: 't-shirt', price: 200, emjoi: '<3 ' },
  { id: 3, title: 'Pants', price: 300, emjoi: '<3 ' },
  { id: 4, title: 'Dress', price: 550, emjoi: '<3 ' }

]

export const products = createSlice({
  name: 'products',
  initialState: productData

})