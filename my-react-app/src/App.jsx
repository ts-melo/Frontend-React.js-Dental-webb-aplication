import React, {useState} from 'react'
import Navbar from './Navbar'
import { Route, Routes } from 'react-router-dom'
import Inicio from './Inicio/Inicio';
import StoreContextProvider from './context/StoreContext';
import Footer from './Footer/Footer';
import LoginPopup from './LoginPopup/LoginPopup';
import Profissionais from './Profissionais/Profissionais';
import Servicos from './Servicos/Servicos';


function App() {

  const[showLogin, setShowLogin] = useState(false)

  return (
    <>
    {showLogin ? <LoginPopup setShowLogin={setShowLogin}/> : <></>}
      <StoreContextProvider>
        <div className="app">
          <Navbar setShowLogin = {setShowLogin} />
          <Routes>
            <Route path="/" element={<Inicio />} />
            <Route path="/profissionais" element={<Profissionais />} />
          </Routes>
        </div>
        <Footer />
      </StoreContextProvider>
    </>
  )
}

export default App
