import coverImage from './assets/cover.jpg'
import './App.css'
import { Squircle }
  from "@squircle-js/react"
import * as g from './stripe-gradient.js'
import { useRef, useState, useEffect } from 'react';
import { extractColors } from 'extract-colors'


function App() {
  const [fourColor, setFourColor] = useState(['', '', '', '']);

  // Function to update an item in the list by index
  const updateItem = (index, newValue) => {
    setFourColor(prevList => {
      const newList = [...prevList];
      newList[index] = newValue;
      return newList;
    });
  };
  

  extractColors(coverImage)
    .then(finalColor => {
      updateItem(0, finalColor[3].hex)
      updateItem(1, finalColor[2].hex)
      updateItem(2, finalColor[1].hex)
      updateItem(3, finalColor[0].hex)
      console.log(finalColor)
    }).catch(console.error);

  return (
    <>
      <div className='w-screen h-screen'>
        <div className='mx-auto my-auto absolute inset-0' style={{background: `radial-gradient(${fourColor[1]}, hsl(210,50%,70%) )`}}>
        <Squircle
          cornerRadius={64}
          cornerSmoothing={1}
          width={450}
          height={450}
          className="mt-40 mx-auto bg-black text-white"
        >
        <img src={coverImage} alt="Astro World Album Cover" />
        </Squircle>
        </div>
      </div>
    </>
  )
}

export default App
