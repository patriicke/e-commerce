import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { removeProduct } from "../redux/slices/cartSlice";

const CartSideBar: React.FC<{
  CartRef: any;
  showCart: boolean;
  setShowCart: Function;
}> = ({ CartRef, showCart, setShowCart }) => {
  const { carts, total } = useSelector((state: any) => state?.cart);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  return (
    <div
      ref={CartRef}
      className={`fixed w-[25em] top-0 h-screen bg-slate-300 shadow-2xl ${
        showCart ? "right-0" : "-right-[25em]"
      } duration-150 ease-in-out p-4 flex flex-col gap-3`}
    >
      <div className='flex justify-between'>
        <h1 className='text-3xl font-semibold z-50'>Cart</h1>
        <i
          className='fa fa-close text-xl text-red-500 cursor-pointer'
          onClick={() => setShowCart(false)}
        ></i>
      </div>
      <div className='flex flex-col gap-2'>
        {!carts?.length && (
          <p className='text-red-500'>There is nothing in your cart!</p>
        )}
        {carts?.map((product: any) => {
          return (
            <div className='flex items-center gap-2 ' key={product.pid}>
              <img src={product.pimage} alt='' className='w-16 h-14' />
              <div className='flex flex-col w-3/5 gap-2'>
                <span>{product.pname}</span>
                <span className='flex gap-5'>
                  <span className='font-semibold'>
                    Quantity: {product.items}{" "}
                  </span>
                  <span className='font-semibold'>
                    Price: ${(product.price / 200).toFixed(2)}{" "}
                  </span>
                </span>
              </div>
              <i
                className='fa fa-trash text-xl text-red-500 cursor-pointer'
                onClick={() => {
                  dispatch(removeProduct(product.pid));
                  toast.success(
                    `${product.pname} has been removed successfully!`
                  );
                }}
              ></i>
            </div>
          );
        })}
      </div>
      <h1 className='text-xl'>
        Total: <span className='font-semibold'>${total}</span>
      </h1>
      <button
        className='text-white bg-blue-700 hover:bg-blue-800 focus:ring-2 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 disabled:bg-gray-500'
        onClick={() => {
          navigate("/checkout");
        }}
        disabled={!carts?.length}
      >
        Checkout
      </button>
    </div>
  );
};

export default CartSideBar;
