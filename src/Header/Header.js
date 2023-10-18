import React,{useContext,useState,useEffect} from 'react'
import {CiSearch} from 'react-icons/ci'
import SearchField from '../components/SearchBox/SearchField';
import MobileViews from './MobileViews';
import { MdOutlineMenu, MdOutlineMenuBook } from 'react-icons/md';
import ToggleButton from '../components/ToggleButton';


const Header = ({setQuery,setThumbImages}) => {

  const [controlSideBar, setControlSideBar] = useState("-left-[200%]");

  // console.log("I am in header component.")
  const[scrollState,setScrollState]=useState('')
  let listener=null;
  useEffect(() => {
		listener = document.addEventListener("scroll", (e) => {
			var scrolled = document.scrollingElement.scrollTop;
      // check if in dark mode
      // if header is hidden from viewport 
      const heade=document.getElementById('head');
      if(!heade.classList.contains('dark')){
			if (scrolled >= 100) {
				setScrollState("dark:bg-white");
			}
      //  else {
			// 	setScrollState("bg-none");
			// }
    }else setScrollState('bg-black')
		});
		return () => {
			document.removeEventListener("scroll", listener);
		};
	}, [scrollState]);


  
  return (
    <>
    
   <div  className='lg:hidden flex justify-between md:space-x-7 w-full py-3 px-2 '>
   <MdOutlineMenu onClick={()=>setControlSideBar('left-0')} className='cursor-pointer hover:opacity-70 my-auto text-3xl'/>
        <h1 className=' text-2xl font-bold font-serif'>Image Gallery</h1>
      </div>
    <MobileViews controlSideBar={controlSideBar}
setControlSideBar={setControlSideBar} setQuery={setQuery} setThumbImages={setThumbImages}/>

    <div id='head' className={`lg:block hidden w-full  sticky z-40 top-0  ${scrollState} transition-colors duration-500 delay-75  `} >
    <div className={`m-auto w-[95vw] md:w-[80vw]   flex flex-wrap justify-between p-5 `}>
    <div  className='flex items-center'>

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
      
        <ToggleButton/>
       
    </div>
    </div>
    </>
  )
}

export default Header