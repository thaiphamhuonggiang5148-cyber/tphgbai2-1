import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Welcome from './Welcome' 

function App() {
  return (
    <>
      <div className='card-title'>
         <Welcome name = " Thái Phạm Hương Giang"/>
         <p>Lớp:26.SP.IT3</p>
         <p>Sở thích: Ngủ, nấu ăn</p>
      </div>
    </>
  )
}

export default App