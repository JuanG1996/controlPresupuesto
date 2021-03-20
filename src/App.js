import React, {useState, useEffect} from 'react';
import Formulario from './components/Formulario';
import Listado from './components/Listado';
import Pregunta from './components/Pregunta';
import ControlPresupuesto from './components/controlPresupuesto';

function App() {

  //Definir el state
  const [presupuesto, guardarPresupuesto] = useState(0); //El presupuesto despues de definirlo
  const [restante, guardarRestante] = useState(0);       //Lo que te queda para gastar
  const [mostrarpregunta, actualizarPregunta] = useState(true); //Mostrar/Ocultar pregunta y formulario
  const [gastos, guardarGastos] = useState([]);
  const [gasto, guardarGasto] = useState({});
  const [creargasto, guardarCrearGasto] = useState(false);

  //useEffect que actualiza el restante
  useEffect(()=>{
    //Agrega el nuevo presupuesto
    if(creargasto){
      guardarGastos([...gastos, gasto]);
    }

    //Resta el presupuesto actual
    const presupuestoRestante = restante - gasto.cantidad;
    guardarRestante(presupuestoRestante);
    //Reseteando a false el creargasto
    guardarCrearGasto(false);
  },[gasto]);


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
                    guardarGasto = {guardarGasto}
                    guardarCrearGasto={guardarCrearGasto}
                  />
                </div>
                <div className="one-half column">
                  <Listado 
                    gastos={gastos}
                  />
                  <ControlPresupuesto 
                    presupuesto={presupuesto}
                    restante={restante}
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
