import React, {useState} from 'react';
import Formulario from './components/Formulario';
import Listado from './components/Listado';
import Pregunta from './components/Pregunta';


function App() {

  //Definir el state
  const [presupuesto, guardarPresupuesto] = useState(0); //El presupuesto despues de definirlo
  const [restante, guardarRestante] = useState(0);       //Lo que te queda para gastar
  const [mostrarpregunta, actualizarPregunta] = useState(true); //Mostrar/Ocultar pregunta y formulario
  const [gastos, guardarGastos] = useState([]);

  //Cuando agreguemos nuevo gasto
  const agregarNuevoGasto = gasto =>{
    guardarGastos([...gastos, gasto]);
  }

  return (
    <div className="container">
      <header>
        <h1>Gasto semanal</h1>
        <div className="contenido-principal contenido">
          {mostrarpregunta? 
          (<Pregunta 
            guardarPresupuesto={guardarPresupuesto}
            guardarRestante={guardarRestante}
            actualizarPregunta={actualizarPregunta}
            />) 
            :(
              <div className="row">
                <div className="one-half column">
                  <Formulario 
                    agregarNuevoGasto = {agregarNuevoGasto}
                  />
                </div>
                <div className="one-half column">
                  <Listado 
                    gastos={gastos}
                  />
                </div>
              </div>

            )}
        


        </div>
      </header>
    </div>
  );
}

export default App;
