import React from 'react'
import './Profissionais.css'
import Card from './Cards'
import marcelo from './foto.jpg'
import jaqueline from './jaqueline.png'

const Profissionais = () => {
    const doutores = [
        { image: marcelo, name: 'Dr. Marcelo Franco', description: 'Especialista em ortodontia e ortopedia funcional dos maxilares.' },
        { image: jaqueline, name: 'Dra. Jaqueline Cury', description: 'Harmonização Facial' },
        // Add more doctor objects here
    ];

    return (
        
       <div className='cards-container'>
        {doutores.map((doctor, index) => (
                <Card 
                    key={index} 
                    image={doctor.image} 
                    name={doctor.name} 
                    description={doctor.description} 
                />
            ))}
       </div>
    )
}

export default Profissionais