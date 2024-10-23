import React from 'react'
import './TratItem.css'

const TratItem = ({ nome, img, desc}) => {
    return(
        <div className='trat-item'>
            <div className="trat-item-img-container">
                <img className='trat-item-img' src={img} alt="" />
            </div>
            <div className="trat-item-info">
                <p>{nome}</p>
            </div>
            <p className="trat-item-desc">{desc}</p>
        </div>
    )
}

export default TratItem