import React from 'react'
import Navbar from './Navbar'
import './Style.css'
import Card1 from './Card1'
import Card2 from './Card2'
import Card3 from './Card3'
import Card4 from './Card4'
const Home = () => {
  return (
    <>
      
      <div className='nav'>
          <Navbar></Navbar>
       </div>
       <section id="main">
       <Card1></Card1>
       <Card2></Card2>
       <Card3></Card3>
       <Card4></Card4>

       </section>
        
    </>
  )
}

export default Home