import '../../App.css';
import { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { SeccionWine } from './SeccionWine';
import { Alert } from 'react-bootstrap';
import { ModalElement } from './Modal';
import { NewWine } from './NewWine'; 
import lista from '../../assets/img/lista.jpg';
import './WineApp.css';


function WineApp() {
  const [visible, setVisible] = useState(false);
  const [search, setSearch] = useState('');
  const [vinos, setVinos] = useState([]); 

  const filterWine = (complete) => {
    if (search) {
      const searchWine = vinos.filter(item => item.wine.toLocaleLowerCase().includes(search.toLocaleLowerCase()));
      return searchWine.filter(item => item.complete === complete);
    }
    return vinos.filter(item => item.complete === complete);
  };

  return (
    <>
      <div className="lista">
        <img src={lista} alt="" />
      </div>
      <div className="container">
        <p>En esta seccion invitamos a nuestros socios a realizar la carga de la lista de vinos que les gustaria degustar y probar. Acto seguido, de la lista realizada les pedimos que seleccionen los 6 vinos que estaran recibiendo en su proxima entrega.</p>
        <h3 className="text-center p-2">Lista de Vinos</h3>
        <div className="row justify-content-center"></div>
        <div className="row justify-content-center mt-4">
          {filterWine(false).map(item => (
            <div className="col-12 col-md-7 mb-3" key={item.id}>
              <SeccionWine wine={item} setVinos={setVinos} vinos={vinos} />
            </div>
          ))}

          {!filterWine(false).length && (
            <div className="col-12 col-md-7 agrandar-texto">
              <Alert variant='danger'>
                No hay Vinos Agregados
              </Alert>
            </div>
          )}
        </div>

        <div className="row justify-content-center mt-4">
          <div className="col-5">
            <button className="btn btn-info form-control agrandar-texto" onClick={() => setVisible(true)}>Nuevo Vino</button>
          </div>
        </div>

        <h3 className="p-2">Vinos seleccionados para tu proxima entrega:</h3>
        <div className="row justify-content-center mt-4">
          {filterWine(true).map(item => (
            <div className="col-12 col-md-7 mb-3" key={item.id}>
              <SeccionWine wine={item} setVinos={setVinos} vinos={vinos} />
            </div>
          ))}
        </div>

        <ModalElement open={visible} setOpen={setVisible} title="Nuevo Vino">
          <NewWine setOpen={setVisible} setVinos={setVinos} vinos={vinos} />
        </ModalElement>
      </div>
    </>
  );
}

export default WineApp;
