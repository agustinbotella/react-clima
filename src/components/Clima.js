import React from 'react';
import PropTypes from 'prop-types';

const Clima = ({resultado}) => {
    
    if(!resultado.name) {return null};

    //Grados Kelvin (la API provee la temperatura en Kelvin)
    const kelvin = 273.15;
    
    return (
        <div className="card-panel white col s12">
            <div className="black-text">
                <h2>La temperatura en {resultado.name} es</h2>
                <p className="temperatura">
                    {parseFloat(resultado.main.temp - kelvin, 10).toFixed(1)} <span>&#x2103;</span>
                </p>
                <p className="">
                    Maxima para hoy: {parseFloat(resultado.main.temp_max - kelvin, 10).toFixed(1)} <span>&#x2103;</span>
                </p>
                <p className="">
                    Minima para hoy: {parseFloat(resultado.main.temp_min - kelvin, 10).toFixed(1)} <span>&#x2103;</span>
                </p>
            </div>
        </div>
    );
}

Clima.propTypes = {
    resultado: PropTypes.object.isRequired
}

export default Clima;