import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Welcome from './Welcome'
function App() {
  return (
    <>
      <div className='card-title'>
         <Welcome name = "26SPIT3"/>
         <p>Họ tên: Thái Phạm Hương Giang</p>
         <p>Sở thích: Ngủ,nấu ăn</p>
      </div>
    </>
  )
}
export default App
