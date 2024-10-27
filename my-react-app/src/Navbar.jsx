import './Navbar.css'
import imagem from '../src/icone.jpg'
import React, {useState} from  'react'
import { Link } from 'react-router-dom';


const Navbar = ({setShowLogin})=>{

    const [menu, setMenu] = useState("Inicio");

    return(
        <nav className="navbar">
            <img className="icone" src={imagem} alt="logo"></img>
            <h1 className="nome">Instituto Odontologico</h1>
            <ul className= "navbar-menu">
                <Link to='/' onClick={()=>setMenu("Inicio")}className= {menu==="Inicio"?"active":""}>Inicio</Link>
                <a href='#servicos' onClick={()=>setMenu("Serviços")}className={menu==="Serviços"?"active":""}>Serviços</a>
                <a href='#footer' onClick={()=>setMenu("Contato")}className={menu==="Contato"?"active":""}>Contato</a>
                <Link to = '/profissionais' onClick={()=>setMenu("Profissionais")}className={menu==="Profissionais"?"active":""}>Profissionais</Link>
                <button onClick={()=>setShowLogin(true)}>Registre-se</button>
            </ul>
        </nav>
    )
}
export default Navbar