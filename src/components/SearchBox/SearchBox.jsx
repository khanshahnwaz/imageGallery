import React, { useEffect, useState } from 'react'

import SearchField from './SearchField';
const SearchBox = ({setThumbImages,setQuery,setFlagBg}) => {

   
    
    const [image,setImage]=useState('');
   
    // get image for search box
    async function fetchImage(){
        const bgImage=await fetch(`https://api.unsplash.com/search/photos/?client_id=${process.env.REACT_APP_ACCESS_KEY}&query=mountain&count=1`)
       const response=await bgImage.json();
      setFlagBg(true)
       console.log(response)

       setImage(response.results[2].urls.full)
    }
   


    useEffect(()=>{
        console.log("running")
        fetchImage()
        
       },[])



 

  
  return (
    <div>
    <div className={`w-full h-[50vh] lg:h-[70vh] bg-cover flex items-center`} style={{ backgroundImage: `url('${image}')`}}>
    
            <div className='mx-auto grid gap-y-5'>
                <div>
        <h1 className=' font-extrabold text-4xl text-center text-white tracking-wide'>Download High Quality Images by creators </h1>
        <small className='text-gray-600 tracking-wide'>Over 2.4 million stock images by our talendted community</small>
        </div>
      <SearchField setQuery={setQuery} setThumbImages={setThumbImages}/>
        </div>
      
    </div>
    {/* thumbs */}
   
   
    </div>
  )
}

export default SearchBox