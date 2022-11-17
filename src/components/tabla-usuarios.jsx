import { React } from "react";
import '../components/tabla-usuario.css';



 const TablaUsuario = (props) => {

    console.log(props.tarea);


    return (
        <table className ="table usuario-tabla">
            <thead >
                <tr>
                    <th scope="row">Prioridad</th>
                    <th scope="row">Tarea</th>
                    <th scope="row">Acciones</th>
                </tr>
            </thead>
            <tbody> 
               { props.tarea.length > 0 ? 
                    props.tarea.map(task => (
                        <tr key={task.id}>
                        <td>{task.prioridad}</td>
                        <td>{task.tarea}</td>
                        <td>
                            <button
                            type="button"
                            className ="btn btn-dark mx-1 boton"
                            onClick={
                                () => {props.editRow(task)}
                            }
                            >Edit</button>
                            <button
                             type="button"
                             className ="btn btn-dark mx-1 boton"
                             onClick={ () => {props.eliminarTarea(task.id)} }
                              >Delete</button>
    
                        </td>
                    </tr>
                       )) : (
                      <tr>
                          <td colSpan={3}>No hay usuarios por mostrar</td>
                      </tr>
                  )
                  }
            </tbody>
        </table>
    );
}

export default TablaUsuario;