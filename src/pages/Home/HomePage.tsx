import Product from '../../components/Product'
import {useSelector} from "react-redux"
import React, { useContext, useEffect, useState } from 'react'
import { ProductContext } from '../../App'
const HomePage = () => {
    const {products: productsRedux } = useSelector((state: any)=> state?.product)

    const {products, setProducts} = useContext<any>(ProductContext)

    const [searchQuery, setSearchQuery] = useState('');

    useEffect(()=>{
        if(!searchQuery){
            setProducts(productsRedux)
            return;
        }
        setProducts(productsRedux?.filter((product:any) => product?.pname?.toLowerCase()?.includes(searchQuery.toLowerCase())))
    },[searchQuery])

  return (
        <div>
            <div>
                <input type="text" onChange={(e:React.ChangeEvent<HTMLInputElement>)=> setSearchQuery(e.target.value)} placeholder="Search product here"/>
            </div>
    <div className='flex flex-wrap gap-3 justify-center'>
{(!products?.length) &&                                                                                                                                                                                                                                                                                                                                                                                                                                                                  <h1>No product named <span className='text-red-500'>{searchQuery}</span> is found!</h1>}
{
    products?.map((product:any)=>{
        return <Product key={product?.pid} product={product} />
    })
}
    </div>
        </div>
  )
}

export default HomePage