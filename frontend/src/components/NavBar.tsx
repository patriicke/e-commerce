import React from "react";
import { useSelector } from "react-redux";

const NavBar: React.FC<{ setShowCart: Function }> = ({ setShowCart }) => {
  const { total } = useSelector((state: any) => state?.cart);

  return (
    <div className='h-[20vh] w-full flex items-center justify-between bg-green-50 border mt-1 rounded-sm px-5 '>
      <h1 className='text-3xl font-bold'>Jurassic Store</h1>
      <div
        className='flex items-center justify-center gap-3 cursor-pointer mr-4'
        onClick={() => setShowCart(true)}
      >
        <i className='fa fa-shopping-cart text-4xl'></i>
        <div className='flex flex-col items-center justify-center'>
          <span>Cart</span>
          <span className='font-bold'>${total}</span>
        </div>
      </div>
    </div>
  );
};

export default NavBar;
