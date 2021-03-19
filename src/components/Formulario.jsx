import React, {useState} from 'react';
import Error from './Error';
import shortid from "shortid";

const Formulario = ({agregarNuevoGasto}) => {

    const [nombre, guardarNombre] = useState(""); //Nombre del gasto
    const [cantidad, guardarCantidad] = useState(0); //Cantidad del gasto
    const [error, guardarError] = useState(false);//Mensaje de error

    //Cuando el usuario agrega un gasto
    const agregarGasto = e =>{
        e.preventDefault();

        //Validar
        if(cantidad < 1 || isNaN( cantidad ) || nombre.trim() === ''){
            guardarError(true); 
            return;
        }
        guardarError(false);
        //Construir el gasto
        const gasto = {
            nombre,
            cantidad,
            id: shortid.generate()
        }

        //Pasar el gasto al componente principal
        agregarNuevoGasto(gasto);
        //Resetear el form
        guardarNombre("");
        guardarCantidad(0);
    }

    return ( 
        <form
            onSubmit={agregarGasto}
        >
            <h2>Agrega tus gastos aqui</h2>
            {error? (<Error mensaje="Gasto no valido" />): null }
            <div className="campo">
                <label>Nombre del gasto</label>
                <input 
                    type="text"
                    className="u-full-width"
                    placeholder="Ej. Transporte"
                    value={nombre}
                    onChange={e => guardarNombre(e.target.value)}
                    />
            </div>
            <div className="campo">
                <label>Cantidad del gasto</label>
                <input 
                    type="number"
                    className="u-full-width"
                    placeholder="Ej. 300"
                    value={cantidad}
                    onChange={e => guardarCantidad(parseInt(e.target.value, 10))}
                    />
            </div>

            <input 
                type="submit"
                className="button-primary u-full-width"
                value="Agregar gasto"
            />
        </form>
     );
}
 
export default Formulario;
