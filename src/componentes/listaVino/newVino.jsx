import React, { useState } from 'react'
import { Form, Button } from 'react-bootstrap'

export const NewTask = ({ setOpen, setTarea, tarea, title }) => {
    const [Task, setTask] = useState('')

    const AccionTask = () => {
        if(title){
            console.log('edit')
            const findTask = tarea.find(item => item.task === title)
            findTask.task = Task

            const filterTask = tarea.filter(item => item.task !== Task)
            filterTask.push(findTask)

            setTarea(filterTask)
            setOpen(false);
            return
        }

        if(Task){
            const data = {
                id: new Date().getTime().toString(),
                task: Task,
                complete: false,
            }

            setOpen(false);

            setTarea([...[data], ...tarea])
        }else{
            alert('Este campo es requerido')
        }
    }
    return (
        <Form>
            <Form.Group controlId="formBasicEmail">
                <Form.Label>{title ? 'Editar tarea' : 'Agregar Vinos'}</Form.Label>
                <Form.Control type="text" defaultValue={title} placeholder="Agregue su Vino" onChange={event => setTask(event.target.value)} />
            </Form.Group>

            <Button variant="primary" block onClick={AccionTask}>
                {title ? 'Actualizar' : 'Agregar'}
            </Button>
        </Form>
    )
}