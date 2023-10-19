import React, { useEffect } from 'react'
import {RxCross2} from 'react-icons/rx'
import { FiThumbsUp } from 'react-icons/fi'
import {PiInstagramLogo,PiTwitterLogoLight} from 'react-icons/pi'
import keywords from './keyword'
const ImagePopup = (props) => {
    useEffect(()=>{
        document.addEventListener('mouseup', function(e) {
            // console.log("clicked ",e.target)
            var container = document.getElementById('container');
            if (container && !container.contains(e.target)) {
                // console.log("clicked outside ")
                // container.style.display = 'none';
                // props.setAddItem(false);
                
                props.setShowPopUp(false)
            }  
        });
    })
    const relatedTags= keywords.filter(keyword =>
        keyword.toLowerCase().includes(props.query.toLowerCase())
      );

      // handle clicks on related tags
      const handleRelatedTags=async(value)=>{
        const data=await fetch(`https://api.unsplash.com/search/photos/?client_id=${process.env.REACT_APP_ACCESS_KEY}&count=1&query=${value}`) 
        const result=await data.json();
        console.log("real time updates", result)
        props.setThumbImages(result.results)
        props.setQuery(value);
      }
    if(props.showPopUp){
  return (
   <>
   {/* for dark background */}
     <div className="fixed  z-30 w-screen h-screen inset-0 bg-gray-800 bg-opacity-60"></div>

     <div id='container'  className={`fixed top-1/2 left-1/2 -translate-y-1/2 -translate-x-1/2 z-40   rounded-lg shadow-2xl w-[90vw] sm:w-[85vw] md:w-[50vw] xl:w-[40vw] ${document.body.classList.contains('dark')?'bg-black':'bg-white'} `}>
        {/* close card  */}
        <RxCross2  className='float-right fixed -traslate-x-1/2 -translate-y-1/2 -right-1 -top-2 hover:opacity-10 cursor-pointer text-gray-400 text-3xl' onClick={()=>props.setShowPopUp(false)}/>
        <img src={props.img} className='rounded-lg w-full h-[40vh] md:h-[50vh]'/>
        <div className='px-5 py-2 my-2 '>
        <div className=" flex   justify-between gap-x-5 px-3 py-1   w-full text-gray-500">
            <div className='flex flex-wrap justify-start gap-x-3'>
          <div className="flex justify-between gap-x-2">
          <img
                  className="my-auto h-10 rounded-full border-2 border-white"
                  src={props.user}
                  alt="user"
                ></img>
              <div className="text-left ">
                <p >{props.name}</p>
                <small >{props.desc}</small>
              </div>
          </div>
          <div className='flex gap-x-1 items-center' >
            <PiInstagramLogo className='my-auto'/>
            <small>{props.desc}</small>
          </div>
          <div className='flex gap-x-1 items-center' >
            <PiTwitterLogoLight className='my-auto'/>
            <small>{props.twitter}</small>
          </div>
          </div>
          <div className='flex gap-x-1 items-center' >
            <FiThumbsUp className='my-auto'/>
            <small>{props.like}</small>
          </div>
            </div>
        </div>
        <div className='px-6 py-2 my-2'>
            <h3 className=' text-left'>Related Tags</h3>
            <div className='flex flex-wrap justify-normal gap-3'>
                {
                  relatedTags.map((item,i)=>{
                    if(i<=5)
                    return <div key={i} onClick={()=>[handleRelatedTags(item),props.setShowPopUp(false)]} className='hover:opacity-70 cursor-pointer bg-orange-200 w-max p-1 rounded-md md:text-base text-sm text-gray-500'>{item}</div>
                  }) 
                }
                </div>
        </div>
     </div>
   </>
    
  )
    }
}

export default ImagePopup