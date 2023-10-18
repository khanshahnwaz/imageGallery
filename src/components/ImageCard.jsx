import React, { useState } from 'react'
import {FiThumbsUp} from 'react-icons/fi'
import ImagePopup from './ImagePopup';
const ImageCard = (props) => {
    const [showPopUp,setShowPopUp]=useState(false);
  return (
    <>
    {/* ImagePopup */}
    <ImagePopup showPopUp={showPopUp} setShowPopUp={setShowPopUp} {...props}/>
    <div onClick={(e)=>[e.stopPropagation(),setShowPopUp(!showPopUp)]} className='hover:border-2  hover:border-green-500  py-3 px-1  hover:shadow-3xl cursor-pointer hover:opacity-70 hover:text-black bg-white'>
     <img src={props.img} className='4/5' alt='Image Card'/>
     <div className=" flex flex-wrap  justify-between gap-x-5 px-3 py-1 text-gray-600 ">
          <div className="flex justify-between gap-x-2 flex-wrap">
          <img
                  className="my-auto h-5 md:h-10 rounded-full border-2 border-white"
                  src={props.user}
                  alt="user"
                ></img>
              <div className="text-left md:text-base text-sm b">
                <p>{props.name}</p>
                <small >{props.desc}</small>
              </div>
          </div>
          <div className='flex gap-x-1 items-center' >
            <FiThumbsUp className='my-auto'/>
            <small>{props.like}</small>
          </div>
            </div>
    </div>
    </>
  )
}

export default ImageCard