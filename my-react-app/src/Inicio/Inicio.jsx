import React from 'react'
import'./Inicio.css'
import Header from '../Header/Header'
import Servicos from '../Servicos/Servicos'
import { useState } from 'react'
import TratDisplay from '../TratDisplay/TratDisplay.jsx'
import { trat_list } from '../assets/img2.js'

const Inicio = () => {

    const [category, setCategory] = useState("All");

    return(
        <div>
            <Header></Header>
            <Servicos category={category} setCategory={setCategory}/>
            <TratDisplay category = {category}/>
        </div>
    )
}

export default Inicio