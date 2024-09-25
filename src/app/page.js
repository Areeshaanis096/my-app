'use client'
import { useEffect, useState } from "react";
import  {ToursList}  from "./components/ToursList.jsx";

 const url = 'https://www.course-api.com/react-tours-project'
export default function Home() {
  const [isLoading,setIsLoading] = useState(true)
  const [tours,setTours] = useState([])
  // let list;

  const fetchTours = async () =>{
    setIsLoading(true)
    try{
      const res = await fetch(url);
      const tours = await res.json();
      setTours(tours)

    } catch (error){
      console.log(error)
    }
    setIsLoading(false)
  }

  useEffect(()=>{
    fetchTours();
    console.log(isLoading)
  },[])
  
  const handleReset=()=>{
    fetchTours()
  }
  if (isLoading){
    return(
      <main className="w-[90vw] mt-[5rem] mr-[auto] mb-[5rem] ml-[auto]"><h1 className=" text-center text-5xl font-[540]" >....Loading</h1></main>
    )
  }
  if (tours.length < 1){
    return(
      <main className="w-[90vw] mt-[5rem] mr-[auto] mb-[5rem] ml-[auto] text-center">
        <h1 className=" text-center text-5xl font-[540]" >no tours left</h1>
      {tours.length < 1 && <button className='cursor-pointer bg-[#10b981] hover:bg-[#097b55] text-white text-lg font-normal font-sans divide-solid  pr-[0.75rem] pt-[0.375rem] pb-[0.375rem] pl-[0.75rem] inline-block rounded-md mt-4 items-center capitalize' onClick={handleReset} >Refresh</button>}
      </main>
    )
  }
      
  return(
    <main className="w-[90vw] mt-[5rem] mr-[auto] mb-[5rem] ml-[auto]">
      <div className="text-center m-auto">
      <h1 className=" text-center text-5xl font-[540]">Our Tours</h1>
      <div className=" bg-[#10b981] h-[6px] w-[8rem] m-auto mt-[10px] mb-3"></div>
     </div>
      <ToursList tours={tours} setTours={setTours}/>
    </main>
  )
}
