import React, {useState} from 'react';
import PropTypes from 'prop-types';

const Formulario = ({busqueda, setBusqueda, setConsultar}) => {

    const [error, setError] = useState(false);

    //Destructuring de busqueda (ese State proviene del componente principal)
    const {ciudad, pais} = busqueda;

    //Funcion que se ejecuta al enviar el formulario
    const handleSubmit = e => {
        e.preventDefault();

        //Validar
        if(ciudad.trim() === '' || pais.trim() === '') {
            setError(true);
            return;
        }
        
        setError(false)

        setConsultar(true);

        //Pasarlo al componente principal
    };

    return (
        <form
            onSubmit={handleSubmit}
        >

            { error ? <p className="error red darken-4">Completa todos los campos</p> : null }

            <div className="input-field col s12">
                <input
                    type="text"
                    name="ciudad"
                    id="ciudad"
                    value={ciudad}
                    onChange={ e => setBusqueda({
                        ...busqueda, [e.target.name]: e.target.value
                    })}
                />
                <label htmlFor="ciudad">Ciudad</label>
            </div>
            <div className="input-field col s12">
                <select
                    name="pais"
                    id= "pais"
                    value={pais}
                    onChange={ e => setBusqueda({
                        ...busqueda, [e.target.name]: e.target.value
                    })}
                >
                    <option value="">Seleccione un país</option>
                    <option value="US">Estados Unidos</option>
                    <option value="MX">México</option>
                    <option value="AR">Argentina</option>
                    <option value="CO">Colombia</option>
                    <option value="CR">Costa Rica</option>
                    <option value="ES">España</option>
                    <option value="PE">Perú</option>
                </select>    
                <label htmlFor="pais">Pais</label>
            </div>
            <div className="input-field col s12">
                <input 
                    type="submit"
                    value="Buscar Clima"
                    className="waves-effect waves-light btn-large btn-block yellow accent-4"
                />
            </div>
        </form>
    );
}

Formulario.propTypes = {
    busqueda: PropTypes.object.isRequired,
    setBusqueda: PropTypes.func.isRequired,
    setConsultar: PropTypes.func.isRequired
}

export default Formulario;