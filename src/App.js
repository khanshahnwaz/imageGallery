import logo from './logo.svg';
import './App.css';
import React from 'react';
import Header from './Header/Header';
import SearchBox from './components/SearchBox/SearchBox';
import ThumbBox from './components/ThumbBox/ThumbBox';
import { useState ,useEffect} from 'react';
import HomeScreenLoader from './components/HomeScreenLoader';
function App() {
  const[thumImages,setThumbImages]=useState([])
  const [image,setImage]=useState('');

  const[flagBg,setFlagBg]=useState(false);
  const[flagThumb,setFlagThumb]=useState(false);
  const[query,setQuery]=useState('');
  let count1=0,count2=0;
  const fetchThumbImages=async()=>{
    console.log("hello",count2+=1)
    // const data=await fetch(`https://api.unsplash.com/photos/random/?client_id=${process.env.REACT_APP_ACCESS_KEY}&count=30`)
    const data=await fetch(`https://api.unsplash.com/search/photos/?client_id=${process.env.REACT_APP_ACCESS_KEY}&count=1&query=mountain`)
   
    const response=await data.json();
    setFlagThumb(true)
    console.log(response)
    setThumbImages([...thumImages,...response.results])

    // setThumbImages(response)
}

   
// get image for search box
async function fetchImage(){
  const bgImage=await fetch(`https://api.unsplash.com/search/photos/?client_id=${process.env.REACT_APP_ACCESS_KEY}&query=mountain&count=1`)
   const response=await bgImage.json();
  setFlagBg(true)
  console.log(response)
   setImage(response.results[7].urls.full)
}
useEffect(()=>{
  fetchThumbImages()
  fetchImage()
  // console.log("hello running",count1+=1)

},[])
  return (
    <div className="App">
     <Header setThumbImages={setThumbImages} setQuery={setQuery}/>
{(flagBg)&(flagThumb)?
<>
    <SearchBox setQuery={setQuery} setThumbImages={setThumbImages} image={image}/>
     <ThumbBox thumImages={thumImages} fetchThumbImages={fetchThumbImages} setThumbImages={setThumbImages} query={query} setQuery={setQuery}/>
     
     </>:<HomeScreenLoader/>}
    </div>
  );
}

export default App;
