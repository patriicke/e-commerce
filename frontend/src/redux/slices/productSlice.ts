import { createSlice } from "@reduxjs/toolkit";

const productSlice: any = createSlice({
  name: "product",
  initialState:{
    products: []
  },
  reducers: {
    setProductsRedux: (state: any, { payload }) => {
      state.products = payload
    },
  }
});

export const {setProductsRedux} = productSlice.actions;

export default productSlice.reducer;
