import React from "react";
import { Fade } from "react-awesome-reveal";
import { useDispatch } from "react-redux";
import { toast } from "react-toastify";
import { addProduct } from "../redux/slices/cartSlice";

const Product: React.FC<{ product: any }> = ({ product }) => {
  const dispatch = useDispatch();
  return (
    <div className='w-full max-w-[18em] bg-white rounded-lg border shadow-xl dark:bg-gray-800 dark:border-gray-700 flex justify-between flex-col'>
      <img
        className='p-8 rounded-t-lg'
        src={product.pimage}
        alt='product image'
      />
      <div className='px-5 pb-5'>
        <h5 className='text-xl font-semibold tracking-tight text-gray-900 dark:text-white'>
          {product.pname}
        </h5>
        <div className='flex items-center justify-between'>
          <span className='text-3xl font-bold text-gray-900 dark:text-white'>
            ${(product.price / 200).toFixed(2)}
          </span>
          <button
            className='text-white bg-blue-700 hover:bg-blue-800 focus:ring-2 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800'
            onClick={() => {
              dispatch(addProduct(product));
              toast.success(`${product.pname} added to cart successfully!`);
            }}
          >
            Add to cart
          </button>
        </div>
      </div>
    </div>
  );
};

export default Product;
