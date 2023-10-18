import React, { useEffect,useState } from 'react'
import InfiniteScroll from 'react-infinite-scroll-component';
import ImageCard from '../ImageCard';
import Macy from 'macy';
import HomeScreenLoader from '../HomeScreenLoader';

const ThumbBox = ({thumImages,fetchThumbImages,query,setQuery,setThumbImages}) => {
  
    
    useEffect(()=>{
        var macyInstance = Macy({
            container:document.getElementById('box')
    
          });
          macyInstance.recalculate()
    })
  return (
    <div className='my-10 w-[90%] mx-auto '>
        <h1 className='text-left font-bold text-3xl tracking-wide'>{query}</h1>
    <InfiniteScroll
    dataLength={thumImages.length}
    hasMore={true}
    next={fetchThumbImages}
    loader={<HomeScreenLoader/>}
>
<div className=' m-2 ' id='box'>
    {
        thumImages.map((item,i)=>{
            // {console.log(item)}
            return <ImageCard key={i} img={item.urls.regular} user={item.user.profile_image.small} name={item.user.name} like={item.likes} desc={item.user.instagram_username} twitter={item.user.social.twitter_username}
            setQuery={setQuery}
            query={query}
           setThumbImages={setThumbImages}
            />
        })
    }
    </div> 
</InfiniteScroll>
</div>
  )
}

export default ThumbBox