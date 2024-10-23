import './Navbar.css'
import imagem from '../src/icone.jpg'
import React, {useState} from  'react'

const Navbar = ()=>{

    const [menu, setMenu] = useState("Inicio");

    return(
        <nav className="navbar">
            <img className="icone" src={imagem} alt="logo"></img>
            <h1 className="nome">Instituto Odontologico</h1>
            <ul className= "navbar-menu">
                <li onClick={()=>setMenu("Inicio")}className= {menu==="Inicio"?"active":""}>Inicio</li>
                <li onClick={()=>setMenu("Serviços")}className={menu==="Serviços"?"active":""}>Serviços</li>
                <li onClick={()=>setMenu("Contato")}className={menu==="Contato"?"active":""}>Contato</li>
                <li onClick={()=>setMenu("Profissionais")}className={menu==="Profissionais"?"active":""}>Profissionais</li>
                <button>Registre-se</button>
            </ul>
            
        </nav>
    )
}
export default Navbar