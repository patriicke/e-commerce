import {  createContext, useEffect, useState } from "react";
import  {ToastContainer} from "react-toastify"
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";
import NotFound from "./pages/NotFound/NotFound";
import HomePage from "./pages/Home/HomePage";
import CheckoutPage from "./pages/Checkout/CheckoutPage";
import data from "./data/data.json"
import {useDispatch} from "react-redux"
import { setProductsRedux } from "./redux/slices/productSlice";

export const ProductContext:any = createContext({});

const App = () => {
  const dispatch = useDispatch()
  const [products, setProducts] = useState<any>([])
  useEffect(() => {
    dispatch(setProductsRedux(data))
    setProducts(data)
  }, [])
  return (
    <>
    <ProductContext.Provider value={{products, setProducts}}>
        <Router>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/checkout" element={<CheckoutPage />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </Router>
    </ProductContext.Provider>
      <ToastContainer
        position='top-right'
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme='colored'
        />
        </>
  );
};

export default App;