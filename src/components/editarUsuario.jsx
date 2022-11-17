import { React, useRef, useEffect } from "react";
import { useForm } from 'react-hook-form';


const EditarUsuario = (props) => {

    console.log(props.currentTarea)

  const { register, clearErrors, handleSubmit, setValue } = useForm({
      defaultValues: props.currentTarea
  });

  setValue('name', props.currentTarea.name);
  setValue('username', props.currentTarea.username);


  const onSubmit = (data, e) => {
    console.log(data)

    props.actualizarTarea(props.currentTarea.id, data)

    e.target.reset();
  }

    return (
      
 <form onSubmit={handleSubmit(onSubmit)}>
  <label htmlFor="prioridad">Prioridad</label>
  <input type="text" className="form-control" placeholder="Enter name" {...register("prioridad", 
  { required: {value: true, message: 'campo req'}
}
)}/> 
<div>{clearErrors?.name?.message}</div>

<label htmlFor="username">Tarea</label>
<input type="text" className="form-control" placeholder="Enter user name" {...register("tarea",
  { required: {value: true, message: 'campo req'}
}
)}/> 
<div>{clearErrors?.username?.message}</div>

<button type="submit" className="btn btn-primary">Submit</button>
</form>

    );
}

export default EditarUsuario;