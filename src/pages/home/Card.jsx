import React, { useContext } from 'react'
import { ProductContext } from '../../context/ProductProvider';

const Card = ({id, title, thumbnail, description, price, category}) => {
  const {addToCart} = useContext(ProductContext);

  return (
    <div className='bg-white w-[20rem] p-3 rounded-lg flex flex-col gap-1 justify-between'>
        <div className='h-[12rem]'>
            <img className='w-full h-full' src={thumbnail} />
        </div>
        <h2 className='text-xl'>{title}</h2>
        <p className='text-sm text-gray-700'>{description}</p>
        <p className='font-bold'>Rs. {price}</p>
        <p>{category}</p>
        <button onClick={()=>addToCart(id)} className='bg-blue-200 px-5 rounded-md'>Add to Cart</button>
    </div>
  )
}

export default Card
