import React, { useEffect, useState } from 'react'
import { CiSearch } from 'react-icons/ci';
import ImageCard from '../../components/ImageCard';
import Macy from 'macy';
import InfiniteScroll from 'react-infinite-scroll-component';
const SearchBox = () => {
    const [image,setImage]=useState('');
    const[thumImages,setThumbImages]=useState([])
    
    // get image for search box
    async function fetchImage(){
        const bgImage=await fetch(`https://api.unsplash.com/search/photos/?client_id=${process.env.REACT_APP_ACCESS_KEY}&query=mountain&count=1`)
       const response=await bgImage.json();
       console.log(response)

       setImage(response.results[2].urls.full)
    }
   

// get image for thumbs
    const fetchThumbImages=async()=>{
        console.log("hello")
        // const data=await fetch(`https://api.unsplash.com/photos/random/?client_id=${process.env.REACT_APP_ACCESS_KEY}&count=30`)
        const data=await fetch(`https://api.unsplash.com/search/photos/?client_id=${process.env.REACT_APP_ACCESS_KEY}&count=1&query=mountain`)

        const response=await data.json();
        console.log(response)
        setThumbImages([...thumImages,...response.results])

        // setThumbImages(response)
    }
    useEffect(()=>{
        
        fetchImage()
        fetchThumbImages()
        
        var macyInstance = Macy({
            container:document.getElementById('container')
    
          });
          macyInstance.recalculate()
       })
  
  return (
    <div>
    <div className={`w-full h-[70vh] bg-cover flex items-center`} style={{ backgroundImage: `url('${image}')`}}>
    
            <div className='mx-auto grid gap-y-5'>
                <div>
        <h1 className=' font-extrabold text-4xl text-center text-white tracking-wide'>Download High Quality Images by creators </h1>
        <small className='text-gray-600 tracking-wide'>Over 2.4 million stock images by our talendted community</small>
        </div>
        <div className='flex gap-x-2 justify-start shadow-md rounded-md p-3 w-full bg-gray-200'>
        <CiSearch className='my-auto text-lg'/>
        <input type='text' className='bg-inherit outline-none' placeholder='Search input here'/>
       </div>
        </div>
      
    </div>
    {/* thumbs */}
    <InfiniteScroll
    dataLength={thumImages.length}
    hasMore={true}
    next={fetchThumbImages}
    loader={<div className="loader" >Loading ...</div>}
>
<div className='flex flex-wrap my-10 w-[90%] mx-auto' id='container'>
    {
        thumImages.map((item,i)=>{
            {console.log(item)}
            return <ImageCard key={i} img={item.urls.regular} user={item.user.profile_image.small} name={item.user.name} like={item.likes} desc={item.user.instagram_username}/>
        })
    }
    </div> 
</InfiniteScroll>
   
    </div>
  )
}

export default SearchBox