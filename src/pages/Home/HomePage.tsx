import Product from "../../components/Product";
import { useSelector } from "react-redux";
import React, { useContext, useEffect, useRef, useState } from "react";
import { ProductContext } from "../../App";
import NavBar from "../../components/NavBar";
import CartSideBar from "../../components/CartSideBar";
import SearchComponent from "../../components/SearchComponent";
const HomePage = () => {
  const { products: productsRedux } = useSelector(
    (state: any) => state?.product
  );

  const CART_ELEMENT: any = useRef(null);

  const { products, setProducts } = useContext<any>(ProductContext);

  const [showCart, setShowCart] = useState<boolean>(false);

  const [searchQuery, setSearchQuery] = useState("");

  useEffect(() => {
    const clickEvent = () => {
      if (!CART_ELEMENT.current?.contains(event?.target)) setShowCart(false);
    };
    document.addEventListener("mousedown", clickEvent);
    return () => document.removeEventListener("mousedown", clickEvent);
  }, [CART_ELEMENT]);

  useEffect(() => {
    if (!searchQuery) {
      setProducts(productsRedux);
      return;
    }
    setProducts(
      productsRedux?.filter((product: any) =>
        product?.pname?.toLowerCase()?.includes(searchQuery.toLowerCase())
      )
    );
  }, [searchQuery]);

  useEffect(() => {
    document.title = "Jurassic Store | Home";
  }, []);

  return (
    <div className='h-screen w-screen overflow-auto overflow-x-hidden'>
      <div
        className={`w-4/5 h-full m-auto ${
          showCart && "blur-sm pointer-events-none"
        }`}
      >
        <NavBar setShowCart={setShowCart} />

        <SearchComponent setSearchQuery={setSearchQuery} />

        <div className='flex flex-wrap gap-3 w-full'>
          {products?.map((product: any) => {
            return <Product key={product?.pid} product={product} />;
          })}
        </div>

        {!products?.length && (
          <h1>
            No product named <span className='text-red-500'>{searchQuery}</span>{" "}
            found!
          </h1>
        )}
      </div>

      <CartSideBar
        CartRef={CART_ELEMENT}
        showCart={showCart}
        setShowCart={setShowCart}
      />
    </div>
  );
};

export default HomePage;
