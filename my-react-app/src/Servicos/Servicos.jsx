import React from 'react'
import './Servicos.css'
import { serv_list } from '../assets/imagens.js'

const Servicos = ({category,setCategory}) => {

    return(
        <div className='servicos' id='servicos'>
            <h1>Dê uma olhada em nossos serviços</h1>
            <p className='servicos-text'>Não podemos negar que um belo sorriso faz toda a diferença na aparência de uma pessoa, não é mesmo ?</p>
            <div className="servicos-list">
                {serv_list.map((item,index)=>{
                    return(
                        <div onClick={() => setCategory(prev=>prev === item.serv_nome ? "All":item.serv_nome)} key={index} className ='servicos-list-item'>
                            <img className={category===item.serv_nome?"active":""} src={item.serv_img} alt=""/>
                            <p>{item.serv_nome}</p>
                        </div>
                    )
                })}
            </div>
            <hr/>
        </div>
    )
}

export default Servicos