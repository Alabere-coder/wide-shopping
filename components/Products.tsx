import React from 'react'
import { Item } from '../type'
import Image from 'next/image';

const Products = ({productData}: any) => {
    // console.log(productData)
  return (
    <div className="py-6 px-4 grid grid-cols-4 gap-4">
        {
            productData.map((item:Item) => {
                <div key={item._id} className="border-[1px] border-gray-200 mb-6 group">
                    <div className="w-full h-[350px] overflow-hidden p-1">
                        <p>{item.title}</p>
                        <Image className='w-full h-full object-contain scale-100 group-hover:scale-105 duration-200' width={300} height={250} src={item.image} alt=""/>
                    </div>
                </div>
            })}
    </div>
  )
}

export default Products