import React, { useContext } from 'react';
import './TratDisplay.css';
import { StoreContext } from '../context/StoreContext.jsx';
import TratItem from '../TratItem/TratItem';

const TratDisplay = ({ category }) => {
    const { trat_list } = useContext(StoreContext);

    return (
        <div className='trat-display' id='trat-display'>
            <h2>Tratamentos</h2>
            <div className="trat-display-list">
                {trat_list
                    .filter(item => category === "All" || item.category === category)  // Filtro por categoria
                    .map((item, index) => {
                        return <TratItem key={index} nome={item.nome} img={item.img} desc={item.desc} />;
                    })}
            </div>
        </div>
    );
}

export default TratDisplay;