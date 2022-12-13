import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { toast } from "react-toastify";
import { api } from "../../api/api";

const CheckoutPage = () => {
  useEffect(() => {
    document.title = "Jurassic Store | Checkout";
  }, []);

  const { carts, total } = useSelector((state: any) => state?.cart);

  const [name, setName] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [address, setAddress] = useState<string>("");
  const [loading, setLoading] = useState<boolean>(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      if (!name || !email || address || !carts?.length) {
        toast.error("Provide all details!");
        return;
      }
    } catch (error) {
      console.log(error);
      toast.error("An error occured. Try again later!");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className='h-screen w-screen flex flex-col lg:flex-row                                                                           items-center justify-center gap-40'>
      <div className='flex flex-col gap-12'>
        <h1 className='text-3xl font-semibold text-gray-600'>
          Checkout & Payment
        </h1>
        <div className='w-[23em] p-4 bg-white border border-gray-200 rounded-lg shadow-md sm:p-6 md:p-8 dark:bg-gray-800 dark:border-gray-700'>
          <form className='space-y-6' onSubmit={handleSubmit}>
            <h5 className='text-xl font-medium text-gray-900 dark:text-white'>
              Your Information
            </h5>
            <div>
              <label
                htmlFor='names'
                className='block mb-2 text-sm font-medium text-gray-900 dark:text-white'
              >
                Your Names
              </label>
              <input
                type='text'
                name='name'
                id='name'
                className='bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white'
                placeholder='Names'
                onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                  setName(e.target.value)
                }
                required
              />
            </div>
            <div>
              <label
                htmlFor='email'
                className='block mb-2 text-sm font-medium text-gray-900 dark:text-white'
              >
                Your email
              </label>
              <input
                type='email'
                name='email'
                id='email'
                className='bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white'
                placeholder='example@gmail.com'
                onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                  setEmail(e.target.value)
                }
                required
              />
            </div>
            <div>
              <label
                htmlFor='address'
                className='block mb-2 text-sm font-medium text-gray-900 dark:text-white'
              >
                Your Address
              </label>
              <input
                type='text'
                name='address'
                id='address'
                className='bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white'
                placeholder='Address'
                onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                  setAddress(e.target.value)
                }
                required
              />
            </div>
            <button
              type='submit'
              className='w-full text-white bg-blue-700 hover:bg-blue-800 focus:ring-2 focus:outline-none focus:ring-blue-300 rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 font-semibold disabled:bg-gray-500'
              disabled={loading}
            >
              Confirm & Pay
            </button>
          </form>
        </div>
      </div>
      <div className='w-[23em] flex flex-col gap-3 '>
        <h1 className='text-3xl font-semibold z-50'>Cart</h1>
        <div className='flex flex-col gap-2'>
          {carts?.map((product: any) => {
            return (
              <div className='flex items-center gap-3 ' key={product.pid}>
                <img src={product.pimage} alt='' className='w-20 h-20' />
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
              </div>
            );
          })}
        </div>
        <h1 className='text-xl'>
          Total: <span className='font-semibold'>${total}</span>
        </h1>
      </div>
    </div>
  );
};

export default CheckoutPage;
