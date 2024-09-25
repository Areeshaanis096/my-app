import React from 'react'
import  {Tour}  from './Tour'

export  const ToursList = ({tours,setTours}) => {
  const handlClick = (id)=>{
    const los = tours.filter(i => i.id !== id )
    setTours(los)
  }
  return (
    <div className='grid pt-8 pb-8 gap-8 md:grid-cols-2 lg:grid-cols-3 items-start  '>
        {
            tours.map(place=>{
                return(
                    <>
                    
                    <Tour key={place.id} handlClick={handlClick} {...place}/>
                </>
            )
            })
        }
    </div>
  )
}
