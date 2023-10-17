import React,{useContext,useState,useEffect} from 'react'
import {CiSearch} from 'react-icons/ci'


const Header = () => {
  // console.log("I am in header component.")
  const[scrollState,setScrollState]=useState('')
  let listener=null;
  useEffect(() => {
		listener = document.addEventListener("scroll", (e) => {
			var scrolled = document.scrollingElement.scrollTop;
			// if (scrolled >= 120) {
			// 	setScrollState("bg-gray-100");
			// } else {
			// 	setScrollState("bg-gradient-to-r from-[#e9f1fc] to -[#f4f5fc]");
			// }
		});
		return () => {
			document.removeEventListener("scroll", listener);
		};
	}, [scrollState]);


  
  return (
    <div className={`m-auto w-[95vw] md:w-[80vw]   flex flex-wrap justify-between p-5 sticky z-10 top-0 ${scrollState}`}>
      <div className='flex justify-start md:space-x-7 w-max'>
        <h1 className=' text-2xl font-bold font-serif'>Image Gallery</h1>
      </div>
      <div className='flex justify-around gap-x-5 items-center '>
      <div className='flex gap-x-2 justify-start shadow-md rounded p-2 w-96 bg-gray-200'>
        <CiSearch className='my-auto'/>
        <input type='text' className='bg-inherit outline-none' placeholder='Search input here'/>
       </div>
       <div>
       <p className='font-semibold'>Explore</p>
       </div>
       <p className='font-semibold'>Colllection</p>
  
       <p className='font-semibold'>Community</p>

       </div>
       <div className='w-max items-center flex'>
        <button>Dark Mode </button>
       </div>
    </div>
  )
}

export default Header