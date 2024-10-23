import React from 'react'
import Navbar from './Navbar'
import { Route, Routes } from 'react-router-dom'
import Inicio from './Inicio/Inicio';
import StoreContextProvider from './context/StoreContext';
import Footer from './Footer/Footer';


function App() {

  return (
    <>

      <StoreContextProvider>
        <div className="app">
          <Navbar />
          <Routes>
            <Route path="/" element={<Inicio />} />
          
          </Routes>
        </div>
        <Footer />
      </StoreContextProvider>
    </>
  )
}

export default App
