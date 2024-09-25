import React, { useState } from 'react'
import Image from 'next/image'

export const Tour = ({name,info,image,id, handlClick}) => {
  return (
    <section>
        <div className='bg-white shadow-gray-300 hover:shadow-lg hover:shadow-gray-300 box-border shadow border-2 relative transition m-4 rounded-lg '>
            <Image 
            src={image}
            height={75}
            width={75}
            alt={name}
            className='w-[100%] block object-cover h-[20rem] rounded-t-sm rounded-r-sm'
            unoptimized
            />
            <div className='text-center leading-6 pt-[2rem] pr-[1.5rem] pb-[2rem] pl-[1.5rem] '>
            <h2 className=' text-2xl font-[550] mb-3 '>{name}</h2>
        <p>{<SeeMore info={info}/>}</p>
        <button onClick={()=>handlClick(id)}
          className='cursor-pointer text-[#10b981] hover:bg-[#10b981] hover:text-white text-lg font-normal font-sans border-[3px] divide-solid border-[#10b981] bg-transparent w-[100%] pr-[0.75rem] pt-[0.375rem] pb-[0.375rem] pl-[0.75rem] inline-block rounded-md mt-4 capitalize'
          > Not Interested</button>
        </div>
        </div>
    </section>
  )
}

const SeeMore = ({info}) =>{
const [showingLess ,setShowingLess]= useState(true);
function handlClick() {
    setShowingLess(!showingLess)
}
return(
    <>
    <p 
    className='text-lg text-[#64748b] font-normal font-sans'
    >{showingLess ? info.slice(0,175) : info}
    <span 
     onClick={handlClick}
     className='text-[#10b981] cursor-pointer'
     >
       {showingLess ? " ...Read More" : " Show Less"} 

    </span>
    </p>
    </>
)
}
