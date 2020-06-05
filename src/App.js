import React, {Fragment, useState, useEffect} from 'react';
import Header from './components/Header';
import Formulario from './components/Formulario';
import Clima from './components/Clima';
import Error from './components/Error';

function App() {

//State del componente  
const [busqueda, setBusqueda] = useState({
    ciudad: '',
    pais: ''
});

const [consultar, setConsultar] = useState(false);

const [resultado, setResultado] = useState({});

const [error, setError] = useState(false);

//Destructuring de busqueda
const {ciudad, pais} = busqueda;

useEffect(() => {

  const consultarAPI = async () => {

    if (consultar) {

      const appID = '57f0b5508ed0ee4e2f3127f6588a3d21';
      const url = `https://api.openweathermap.org/data/2.5/weather?q=${ciudad},${pais}&appid=${appID}`

      const respuesta = await fetch(url);
      const resultado = await respuesta.json();
      
      //En caso de obtener un error de la API porque la ciudad no existe
      if(resultado.cod === '404') { setError(true)} else {setError(false)}

      setResultado(resultado);
      setConsultar(false);

    }
  }  

consultarAPI();

},)

let componente
if(error) {
  componente = <Error mensaje="No se encontró la ciudad"/>
} else {
  componente = <Clima resultado={resultado}/>
}

  return (
    <Fragment>
      <Header 
        titulo="Clima"
      />
      <div className="contenedor-form">
          <div className="container">
              <div className="row">
                  <div className="col m6 s12">
                      <Formulario
                        busqueda={busqueda}
                        setBusqueda={setBusqueda}
                        setConsultar={setConsultar}/>
                  </div>
                  <div className="col m6 s12">
                      {componente}
                  </div>
              </div>
          </div>
      </div>
    </Fragment>
  );
}

export default App;
