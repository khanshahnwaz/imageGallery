import "./App.css";
import React from "react";
import Header from "./components/Header/Header";
import SearchBox from "./components/HomePage/MessageBox";
import ThumbBox from "./components/ThumbContainer/ThumbContainer";
import { useState, useEffect } from "react";
import HomeScreenLoader from "./components/ScreenLoader";
function App() {
  const [thumImages, setThumbImages] = useState([]);
  const [image, setImage] = useState("");
  const [apiErrorMessage, setApiErrorMessage] = useState(
    "Loading some awesome images..."
  );
  const [flagBg, setFlagBg] = useState(false);
  const [flagThumb, setFlagThumb] = useState(false);
  const [query, setQuery] = useState("");

  // function to fetch random thumbimages
  const fetchThumbImages = async () => {

    // sometimes random api causes error because of limited api calls per hour
    // if json.parse error found, comment out the first api and uncomment second
    // next set the thumbimages with response.results
    try {
      const data = await fetch(
        `https://api.unsplash.com/photos/random/?client_id=${process.env.REACT_APP_ACCESS_KEY}&count=10`
      );
      // const data=await fetch(`https://api.unsplash.com/search/photos/?client_id=${process.env.REACT_APP_ACCESS_KEY}&count=1&query=mountain`)

      const response = await data.json();

      setFlagThumb(true);
      // console.log(response);
      setThumbImages([...thumImages, ...response]);
    } catch (e) {
      setApiErrorMessage(`${e}`);
      return null;
    }

    // setThumbImages(response)
  };

  // get image for message box
  const fetchImage=async()=> {
    try{
    const bgImage = await fetch(
      `https://api.unsplash.com/search/photos/?client_id=${process.env.REACT_APP_ACCESS_KEY}&query=mountain&count=1`
    );
    const response = await bgImage.json();
    setFlagBg(true);
    // console.log(response);
    setImage(response.results[2].urls.full);
  } catch (e) {
    setApiErrorMessage(`${e}`);
    return null;
  }
  }
  useEffect(() => {
    fetchThumbImages();
    fetchImage();
    // console.log("hello running",count1+=1)
  },[]);
  return (
    <div className="App">
      <Header setThumbImages={setThumbImages} setQuery={setQuery} />
      {flagBg & flagThumb ? (
        <>
          <SearchBox
            setQuery={setQuery}
            setThumbImages={setThumbImages}
            image={image}
          />
          <ThumbBox
            thumImages={thumImages}
            fetchThumbImages={fetchThumbImages}
            setThumbImages={setThumbImages}
            query={query}
            setQuery={setQuery}
          />
        </>
      ) : (
        <HomeScreenLoader message={apiErrorMessage} />
      )}
    </div>
  );
}

export default App;
