import React,{useContext,useState,useEffect} from 'react'
import {CiSearch} from 'react-icons/ci'
import SearchField from '../components/SearchBox/SearchField';


const Header = ({setQuery,setThumbImages}) => {
  // console.log("I am in header component.")
  const[scrollState,setScrollState]=useState('')
  let listener=null;
  useEffect(() => {
		listener = document.addEventListener("scroll", (e) => {
			var scrolled = document.scrollingElement.scrollTop;
			if (scrolled >= 100) {
				setScrollState("bg-white");
			} else {
				setScrollState("bg-none");
			}
		});
		return () => {
			document.removeEventListener("scroll", listener);
		};
	}, [scrollState]);


  
  return (
    <div className={`w-full  sticky z-10 top-0  ${scrollState} transition-colors duration-500 delay-75 `} >
    <div className={`m-auto w-[95vw] md:w-[80vw]   flex flex-wrap justify-between p-5 `}>
      <div className='flex justify-start md:space-x-7 w-max'>
        <h1 className=' text-2xl font-bold font-serif'>Image Gallery</h1>
      </div>
      <div className='flex justify-around gap-x-5 items-center '>
      <SearchField setThumbImages={setThumbImages} setQuery={setQuery}/>
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
    </div>
  )
}

export default Header