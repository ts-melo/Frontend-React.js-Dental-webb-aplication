import React from 'react'
import './LoginPopup.css'
import { useState } from 'react'
import xis from './cross.png'

const LoginPopup = ({setShowLogin}) => {
    const [currState, setCurrState] = useState("Login")

    return (
        <div className = 'login-popup'>
            <form className="login-popup-container">
                <div className="login-popup-title">
                    <h2>{currState}</h2>
                    <img onClick={()=>setShowLogin(false)} src={xis} alt="fechar" />
                </div>
                <div className="login-popup-input">
                    {currState==="Login"? <></> : <input type="text" placeholder="Seu Nome" required/>}
                    <input type="email" placeholder='Seu email' required />
                    <input type="password" placeholder='Sua Senha' required />
                </div>
                <button>{currState==="Registre-se" ? "Crie sua conta !":"Login"}</button>
                <div className="login-popup-condition">
                    <input type="checkbox" required/>
                    <p>Continuando, eu concordo com os termos e condições e politica de privacidade</p>
                </div>
                {currState==="Login"?
                <p>Criar uma nova conta? <span onClick={()=>setCurrState("Registre-se")}>Clique Aqui</span></p>
                :<p>Já tem uma conta? <span onClick={()=>setCurrState("Login")}>Faça o Login aqui !</span></p>}
                
            </form>
        </div>
    )
}

export default LoginPopup