// ToggleButton.js

import React, { useState ,useEffect} from 'react';

const ToggleButton = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);

  // useEffect(() => {
  //   const prefersDarkMode = window.matchMedia('(prefers-color-scheme: dark)').matches;
  //   setIsDarkMode(prefersDarkMode);

  //   if (prefersDarkMode) {
  //     document.body.classList.add('dark');
  //   } else {
  //     document.body.classList.remove('dark');
  //   }
  // }, []);

  const toggleDarkMode = () => {
    // console.log("hello")
    setIsDarkMode(prev => !prev);
    document.body.classList.toggle('dark');
    
  };
  // dark mode was switching correctly for sticky header
  useEffect(()=>{
    const headerEle=document.getElementById('head');

    if(isDarkMode){
      headerEle.style.backgroundColor='black'
    }else headerEle.style.backgroundColor='white'
  },[isDarkMode])

  return (
    <label className="flex items-center cursor-pointer p-2">
      <div className="relative">
        <input
          type="checkbox"
          className="sr-only"
          checked={isDarkMode}
          onChange={toggleDarkMode}
        />
        <div className="w-14 h-8 light:bg-white bg-gray-400 rounded-full shadow-inner"></div>
        <div
          className={`dot absolute w-7 h-6  bg-white rounded-full shadow  -left-1 top-1 transition ${
            isDarkMode ? 'translate-x-full' : ''
          }`}
        ></div>
      </div>
      <div className="ml-3 font-semibold dark:text-gray-300 ">
        Dark Mode
      </div>
    </label>
  );
};

export default ToggleButton;
