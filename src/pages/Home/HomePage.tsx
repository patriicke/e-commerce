import Product from "../../components/Product";
import { useSelector } from "react-redux";
import React, { useContext, useEffect, useRef, useState } from "react";
import { ProductContext } from "../../App";
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
    <div className='h-screen w-screen overflow-auto'>
      <div
        className={`w-4/5 h-full m-auto ${
          showCart && "blur-sm pointer-events-none"
        }`}
      >
        <div className='h-[20vh] w-full flex items-center justify-between bg-green-50 border mt-1 rounded-sm px-5 '>
          <h1 className='text-3xl font-bold'>Jurassic Store</h1>
          <div
            className='flex items-center justify-center gap-3 cursor-pointer mr-4'
            onClick={() => setShowCart(true)}
          >
            <i className='fa fa-shopping-cart text-4xl'></i>
            <div className='flex flex-col items-center justify-center'>
              <span>Cart</span>
              <span className='font-bold'>${0}</span>
            </div>
          </div>
        </div>

        <div className='h-[5vh] w-full my-5'>
          <input
            type='text'
            onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
              setSearchQuery(e.target.value)
            }
            placeholder='Search a product here ...'
            className='border outline-none px-3 py-2 w-[20em] rounded-md'
          />
        </div>

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
      <div
        ref={CART_ELEMENT}
        className={`fixed w-[25em] top-0 h-screen bg-red-400 ${
          showCart ? "right-0" : "-right-[25em]"
        } duration-150 ease-in-out`}
      ></div>
    </div>
  );
};

export default HomePage;
