import { createSlice } from "@reduxjs/toolkit";

const calculateTotal = (carts:any):number =>{
  let total = 0;
  carts?.map((cart:any)=>{
      total += Number((cart.price / 200).toFixed(2)) * cart.items
  })
  return total;
}

const carsSlice: any = createSlice({
  name: "cart",
  initialState:{
    carts: [],
    total: 0
  },
  reducers: {
    addProduct: (state: any, { payload }) => {
      let exist = state.carts?.filter((cart:any)=>{
        return cart.pid === payload.pid
      })
      if(!exist.length){
        state.carts = [...state.carts, {...payload, items: 1}]
      }else{
        state.carts = state.carts?.map((cart:any)=>{
          if(cart.pid === payload.pid){
            return {...payload, items: exist[0].items +1}
          }
          return cart;
        })
      }
      state.total = calculateTotal(state.carts)
    },
    removeProduct: (state: any, { payload }) => {
      state.carts = state.carts?.filter((ca: any) => {
        return ca.pid !== payload;
      });
      state.total = calculateTotal(state.carts)
    },
  }
});

export const {addProduct, removeProduct} = carsSlice.actions;

export default carsSlice.reducer;
