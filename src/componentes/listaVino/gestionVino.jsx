import './App.css';
import { useState } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import { SeccionTask } from './components/SeccionTask'
import { Alert } from 'react-bootstrap';
import { ModalElement } from './components/modal'
import { newVino } from './components/newVino'

function App() {
  const [visible, setVisible] = useState(false)
  const [search, setSearch] = useState('')
  const [tarea, setTarea] = useState([])

  const filterTask = (complete) => {
    if(search){
      const searchTask = tarea.filter(item => item.task.toLocaleLowerCase().includes(search.toLocaleLowerCase()))
      return searchTask.filter(item => item.complete === complete)
    }
    return tarea.filter(item => item.complete === complete)
  }

  return (
    <>
      <div className="container">
        <h3 className="text-center p-2">Lista de Vinos</h3>
        <div className="row justify-content-center">
        </div>
        <div className="row justify-content-center mt-4">
          {filterTask(false).map(item => (
            <div className="col-12 col-md-7 mb-3" key={item.id}>
              <SeccionTask task={item} setTarea={setTarea} tarea={tarea} />
            </div>
          ))}
          
          {!filterTask(false).length && (
            <div className="col-12 col-md-7">
              <Alert variant='danger'>
                No hay Vinos Agregados 
              </Alert>
            </div>
          )}
        </div>

        <h3 className="p-2">Agregados</h3>
        <div className="row justify-content-center mt-4">
          {filterTask(true).map(item => (
            <div className="col-12 col-md-7 mb-3" key={item}>
              <SeccionTask task={item} setTarea={setTarea} tarea={tarea} />
            </div>
          ))}
        </div>

        <div className="row justify-content-center mt-4">
          <div className="col-5">
            <button className="btn btn-info form-control" onClick={() => setVisible(true)}>Agregar</button>
          </div>
        </div>

        <ModalElement open={visible} setOpen={setVisible}>
          <NewTask setOpen={setVisible} setTarea={setTarea} tarea={tarea} />
        </ModalElement>
      </div>
    </>
  );
}

export default App;
