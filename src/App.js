import React from 'react'
import Img from './components/Img'
import Main from './components/Main';
import About from './components/About';
import Footer from './components/Footer';
import './index.css';


function App(){
    return(
        <div className='container'>
            <Img />
            <Main />
            <About />
            <Footer />
        </div> 
    )
}

export default App