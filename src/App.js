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
  const[flagBg,setFlagBg]=useState(false);
  const[falgThumb,setFlagThumb]=useState(false);
  const[query,setQuery]=useState('');
  let count1=0,count2=0;
  const fetchThumbImages=async()=>{
    console.log("hello",count2+=1)
    // const data=await fetch(`https://api.unsplash.com/photos/random/?client_id=${process.env.REACT_APP_ACCESS_KEY}&count=30`)
    const data=await fetch(`https://api.unsplash.com/search/photos/?client_id=${process.env.REACT_APP_ACCESS_KEY}&count=30&query=${query}`)
   
    const response=await data.json();
    setFlagThumb(true)
    console.log(response)
    setThumbImages([...thumImages,...response.results])

    // setThumbImages(response)
}
useEffect(()=>{
  fetchThumbImages()
  // console.log("hello running",count1+=1)

},[])
  return (
    <div className="App">
     <Header setThumbImages={setThumbImages} setQuery={setQuery}/>
   {(setFlagBg && setFlagThumb)?
    <> <SearchBox setFlagBg={setFlagBg} setThumbImages={setThumbImages} setQuery={setQuery}/>
     <ThumbBox thumImages={thumImages} fetchThumbImages={fetchThumbImages} query={query}/>
     </>
   :<HomeScreenLoader/>}
    </div>
  );
}

export default App;
