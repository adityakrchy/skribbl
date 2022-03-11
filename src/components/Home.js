import React from 'react'
import './Home.css'
import Joingame from './Joingame'

export default function Home() {
  return (
    <div className="Home">
    <a href={Joingame} >  <button>Create room</button></a>  
    </div>
  )
}
