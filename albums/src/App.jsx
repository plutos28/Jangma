import { useState, useRef } from 'react'

import './output.css'
import igor from './assets/igor.webp'
import astro from './assets/astro.jpg'
import drake1 from './assets/drake1.jpg'
import her from './assets/her_loss.jpg'
import kanye1 from './assets/kanye.jpg'
import miles from './assets/image3.webp'
import beatles from './assets/beatles.webp'
import beauty from './assets/beauty.jpg'
import clb from './assets/clb.jpg'
import cole from './assets/cole.jpg'
import drake2 from './assets/drake2.jpg'
import flower from './assets/flower.jpg'
import image1 from './assets/image1.jpg'
import image2 from './assets/image2.webp'
import image3 from './assets/image3.webp'
import image4 from './assets/image4.webp'
import image5 from './assets/image5.jpg'
import image6 from './assets/image6.jpg'
import kanye2 from './assets/kanye2.jpg'
import ramon from './assets/ramon.webp'
import sky from './assets/sky.jpg'
import views from './assets/views.jpg'

function App() {
  return (
    <>
      <div className='pl-12 pt-12 w-2/3'>
        <h1 className='font-openSans text-3xl mb-4 font-semibold'>My Albums</h1>

        {/* albums */}
        <div className='grid grid-cols-4 gap-y-6 gap-x-10'>
          <Album img={igor} artist={"Tyler the Creator"} title={"Igor"}/>
          <Album img={astro} artist={"Travis Scott"} title={"Astroworld"}/>
          <Album img={drake1} artist={"Drake"} title={"Nothing Was the Same"}/>
          <Album img={kanye1} artist={"Kanye"} title={"Graduation"}/>
          <Album img={her} artist={"Drake"} title={"Her Loss"}/>
          <Album img={miles} artist={"Miles Davis"} title={"Bitches Brew"}/>
          <Album img={beatles} artist={"Miles Davis"} title={"Bitches Brew"}/>
          <Album img={beauty} artist={"Miles Davis"} title={"Bitches Brew"}/>
          <Album img={clb} artist={"Miles Davis"} title={"Bitches Brew"}/>
          <Album img={cole} artist={"Miles Davis"} title={"Bitches Brew"}/>
          <Album img={drake2} artist={"Miles Davis"} title={"Bitches Brew"}/>
          <Album img={flower} artist={"Miles Davis"} title={"Bitches Brew"}/>
          <Album img={image1} artist={"Miles Davis"} title={"Bitches Brew"}/>
          <Album img={image2} artist={"Miles Davis"} title={"Bitches Brew"}/>
          <Album img={image3} artist={"Miles Davis"} title={"Bitches Brew"}/>
          <Album img={image4} artist={"Miles Davis"} title={"Bitches Brew"}/>
          <Album img={image5} artist={"Miles Davis"} title={"Bitches Brew"}/>
          <Album img={image6} artist={"Miles Davis"} title={"Bitches Brew"}/>
          <Album img={kanye2} artist={"Miles Davis"} title={"Bitches Brew"}/>
          <Album img={ramon} artist={"Miles Davis"} title={"Bitches Brew"}/>
          <Album img={sky} artist={"Miles Davis"} title={"Bitches Brew"}/>
          <Album img={views} artist={"Miles Davis"} title={"Bitches Brew"}/>
        </div>
      </div>
      
    </>
  )
}

function Album({img, artist, title}) {
  const [isHovered, setIsHovered] = useState(false);
  const [imageLocation, setImageLocation] = useState(null);
  const imageRef = useRef(null);
  let topValue = imageLocation ? `${imageLocation.y}px` : '0'; // Default to 0 if imageLocation is null
  let absoluteClass = `absolute -z-10 top-[${topValue}] size-64 rounded`;

  const getImageLocation = () => {
    if (imageRef.current) {
      const rect = imageRef.current.getBoundingClientRect();
      setImageLocation({ x: rect.left, y: rect.top });
    }
  };



  return (
    <>
      <div onMouseEnter={() => {
        setIsHovered(true);
        getImageLocation();
        }} >
        <img src={img} ref={imageRef} alt="Igor" className='size-64 rounded sm:size-60' />
        {(isHovered && imageLocation) && (
          <img src={img} alt="Album" className="blur-lg opacity-65 absolute -z-10 size-[270px] rounded" style={{top: `${imageLocation.y}px`, left: `${imageLocation.x-10}px`}} />
        )}
        <a className='font-openSans text-lg block'>{title}</a>
        <a className='font-openSans text-sm text-gray-500 block'>{artist}</a>
        
      </div>
    </>
  )
}

export default App
