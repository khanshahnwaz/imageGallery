import React from 'react'
import {FiThumbsUp} from 'react-icons/fi'
const ImageCard = (props) => {
    
  return (
    <div className='  py-3 px-1  hover:shadow-3xl cursor-pointer hover:opacity-70 hover:text-black'>
     <img src={props.img} alt='Image Card'/>
     <div className=" flex   justify-between gap-x-5 px-3 py-1 text-gray-300 absolute bottom-10 ">
          <div className="flex justify-between gap-x-2">
          <img
                  className="my-auto h-10 rounded-full border-2 border-white"
                  src={props.user}
                  alt="user"
                ></img>
              <div className="text-left ">
                <p>{props.name}</p>
                <small >{props.desc}</small>
              </div>
          </div>
          <div className='flex gap-x-2 items-center' >
            <FiThumbsUp className='my-auto'/>
            <small>{props.like}</small>
          </div>
            </div>
    </div>
  )
}

export default ImageCard