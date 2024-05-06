import coverImage from './assets/cover.jpg'
import './App.css'
import { Squircle }
  from "@squircle-js/react"

function App() {

  return (
    <>
      <div className='blur-3xl bg-gradient-to-r from-indigo-200 to-yellow-100 w-screen h-screen'>
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
        <div className='mt-2'>
          <p>1:54</p>
          <div className='mx-auto bg-black w-[400px] h-2'></div>
          <p>3:23</p>
        </div>
      </div>
    </>
  )
}

export default App
