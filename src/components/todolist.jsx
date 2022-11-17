import React, { useState,useEffect } from "react";
import TablaUsuario from './tabla-usuarios';
import TablaUsuarioDos from './agregarUsuario';
import EditarUsuario from "./editarUsuario";
import { v4 as uuidv4 } from 'uuid';


import '../components/todolist.css';


const ToDoList = () => {

    const tareaData = [
        {id: uuidv4(), prioridad: 'Alta', tarea:'Hacer codigo' },
        {id: uuidv4(), prioridad: 'Media', tarea:'Hacer app' },
        {id: uuidv4(), prioridad: 'Media', tarea:'Hacer UX' },
    ];

    // state
const [tarea, setTarea] = useState(tareaData);


    // agregar tareas
const agregarTarea = (tareaNueva) => {
    tareaNueva.id = uuidv4()
    setTarea([
        ...tarea,
        tareaNueva
    ])
}

   // eliminar tareas
const eliminarTarea = (id) => {
    setTarea(tarea.filter(tar => tar.id !== id));
}


  // editar tarea

const [editar, setEditar] = useState(false);

const [currentTarea, setCurrentTarea] = useState({
    id: null, prioridad: "", tarea: ""
}); 

const editRow = (tareaNueva) => {
    setEditar(true);
    setCurrentTarea({
    id: tareaNueva.id, prioridad: tareaNueva.prioridad, tarea: tareaNueva.tarea
    })
}


const actualizarTarea = (id, actualizarTarea) => {
    setEditar(false);
    setTarea(tarea.map(tarea => tarea.id === id ? actualizarTarea : tarea))
}


useEffect(() => {
    console.log(tarea)
  }, [tarea]);

    return (

    <div className="container todo-list">
        
        <div className="texto"><h2>Lista de tareas</h2></div>

        <div className="usuarios">

        {
            editar ? (
                <div className="agregar-usuario">
                <h3 className="p-3">Editar tarea</h3>
               <EditarUsuario currentTarea={currentTarea} actualizarTarea={actualizarTarea}/>
            </div>
            ) : (   <div className="agregar-usuario"><h3 className="p-3">Agregar tarea</h3>
            <TablaUsuarioDos agregarTarea={agregarTarea}/>
             </div>)
        }
            <div className="usuario-agregado"><h3 className="p-3">Tarea agregada</h3>
            <TablaUsuario
            tarea={tarea}
            eliminarTarea={eliminarTarea}
            editRow={editRow}
            />
            </div>
        </div>

  </div>
    );
}

export default ToDoList;