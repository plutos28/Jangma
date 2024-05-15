import coverImage from './assets/cover.jpg'
import './App.css'
import { Squircle }
  from "@squircle-js/react"
import * as g from './stripe-gradient.js'
import { useRef, useState, useEffect } from 'react';
import { extractColors } from 'extract-colors'



function App() {
  const canvasRef = useRef(null);
  const [fourColor, setFourColor] = useState(['', '', '', '']);

  // Function to update an item in the list by index
  const updateItem = (index, newValue) => {
    setFourColor(prevList => {
      const newList = [...prevList];
      newList[index] = newValue;
      return newList;
    });
  };
  
 
  useEffect(() => {
    extractColors(coverImage)
    .then(finalColor => {
      updateItem(0, finalColor[0].hex)
      updateItem(1, finalColor[1].hex)
      updateItem(2, finalColor[2].hex)
      updateItem(3, finalColor[3].hex)

      new Gradient({
        canvas: canvasRef.current,
        // colors: ['#249e90', '#6fccc1', '#edefda', '#d3e3a0']
        colors: [fourColor[0], fourColor[1], fourColor[2], fourColor[3]]
      });
    })
    .catch(console.error)
  
    

    // Return a cleanup function to clean up resources when the component unmounts
    return () => {
      // Clean up the gradient animator
      console.log("clean up")
    };
  }, []); // Empty dependency array ensures that this effect runs only once on component mount


  
  return (
    <>
      <div className='w-screen h-screen'>
        <div className='bg-[#ffffff2c] [box-shadow:0_4px_30px_rgba(0,_0,_0,_0.1)] backdrop-filter backdrop-blur-[25px] border-[1px] border-[solid] border-[rgba(0,0,0,0.3)]'>
          <canvas className='w-screen h-screen' ref={canvasRef}></canvas>
        </div>
        <div className='mx-auto my-auto absolute inset-0'>
        <Squircle
          cornerRadius={64}
          cornerSmoothing={1}
          width={450}
          height={450}
          className=" mt-40 mx-auto bg-black text-white"
        >
        <img  src={coverImage} alt="Astro World Album Cover" />
        </Squircle>
        {/* progress */}
        {/* <div className='mt-2'>
          <p>1:54</p>
          <div className='mx-auto bg-black w-[400px] h-2'></div>
          <p>3:23</p>
        </div> */}
        </div>
      <div className='blur-3xl w-screen h-screen'></div>
      </div>
    </>
  )
}

export default App
