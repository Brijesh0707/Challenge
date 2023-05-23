import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle'
import Navbar from './Navbar';
import {Routes,Route} from "react-router-dom";
import Home from './Home';
import $ from "jquery";

const App = () => {
  return (
    <>
       <Routes>
        <Route path='/' element={<Home/>}/>
       
        
      </Routes>
    </>
  )
}

export default App