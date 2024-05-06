import coverImage from './assets/cover.jpg'
import './App.css'
import { Squircle }
  from "@squircle-js/react"

function App() {

  return (
    <>
      <div>
        {/* <img className='size-[450px] absolute inset-0 mx-auto my-auto' src={coverImage} alt="Astro World Album Cover" /> */}

        <Squircle
          cornerRadius={64}
          cornerSmoothing={1}
          width={450}
          height={450}
          className="mx-auto my-auto absolute inset-0 bg-black text-white"
        >
        <img  src={coverImage} alt="Astro World Album Cover" />

        </Squircle>

      </div> 
    </>
  )
}

export default App
