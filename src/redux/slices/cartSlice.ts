import { createSlice } from "@reduxjs/toolkit";

const carsSlice: any = createSlice({
  name: "cart",
  initialState:{
    carts: []
  },
  reducers: {
    addProduct: (state: any, { payload }) => {
      state.carts.push(payload);
    },
    removeProduct: (state: any, { payload }) => {
      state.carts = state.filter((product: any) => {
        return product.pid != payload;
      });
    },
  }
});

export const {addProduct, removeProduct} = carsSlice.actions;

export default carsSlice.reducer;
