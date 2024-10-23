import React from 'react'
import './Footer.css'
import logo from '../icone.jpg'
import instagram from '../instagram.png'
import whatsapp from '../whatsapp.png'

const Footer = () => {
    return (
        <div className="footer" id='footer'>
            <div className="footer-content">
                <div className="footer-content-left">
                    <img className='logo' src={logo} alt="logo" />
                    <p>Bem-vindo à nossa clínica odontológica, onde o seu sorriso é a nossa prioridade! Nossa equipe de
        profissionais experientes está comprometida em oferecer os melhores tratamentos para
        melhorar a sua saúde bucal e autoconfiança. Oferecemos uma ampla gama de serviços, 
        desde consultas de rotina até procedimentos estéticos avançados.
                    </p>
                    <a href="https://www.instagram.com/inst_drmarcelofranco/" target="_blank" rel="noopener noreferrer">
                        <img className='socials' src={instagram} alt="" />
                    </a>
                    <a href="https://api.whatsapp.com/message/C5DNOZ4Z4OKYB1?autoload=1&app_absent=0" target="_blank" rel="noopener noreferrer">
                        <img className='socials' src={whatsapp} alt="" />
                    </a>
                </div>
                <div className="footer-content-right">
                    <hr/> 
                    <p className="footer-copyright">&copy; 2024 Instituto Dontológico Marcelo Franco de Melo. Todos os direitos reservados</p>
                </div>
            </div>
        </div>
    )
}

export default Footer