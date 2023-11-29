import { useState, useEffect } from 'react';
import './Propuesta.css'
import camion from '../../assets/img/camion.png';
import botella from '../../assets/img/botella de vino.png';
import copa from '../../assets/img/copa de vino.png';
import ListaDeVinos from './ListaDeVinos';
import FormularioDeVinos from './FormularioDeVinos';

const GestionPropuesta = () => {
    // Estado para almacenar las vinos
    const [vinos, setVinos] = useState([]);

    // Carga inicial de vinos desde localStorage
    useEffect(() => {
        try {
            const vinosGuardados = JSON.parse(localStorage.getItem('pociones'));
            console.log('Vinos cargados:', vinosGuardados);
            if (vinosGuardados) {
                setVinos(vinosGuardados);
            }
        } catch (error) {
            console.error('Error al cargar datos desde localStorage:', error);
        }
    }, []);

    // Almacena los vinos en localStorage cuando cambia el estado
    useEffect(() => {
        localStorage.setItem('vinos', JSON.stringify(vinos));
    }, [vinos]);

    // Marcar un vino como completada o no completada
    const completarVino = (id) => {
        const nuevosVinos = vinos.map((vino) =>
        vino.id === id ? { ...vino, completada: !vino.completada } : vino
        );
        setVinos(nuevosVinos);
    };

    // Eliminar un vino de la lista
    const eliminarVino = (id) => {
        const nuevosVinos = vinos.filter((vino) => vino.id !== id);
        setVinos(nuevosVinos);
    };

    // Agregar una nuevo vino a la lista
    const agregarVino = (nombre) => {
        const nuevoVino = {
        id: Date.now(), // Generar ID único
        nombre,
        completada: false,
        };
        setVinos([...vinos, nuevoVino]);
    };

    return (
        <div className='contenedor-propuesta'>
            <h1 className='titulo'>Propuestas para socios</h1>
            <p><span>Recibí una caja de 6 vinos exclusivos
            todos los meses en tu domicilio</span> </p>

            <div className="container1">
                <div className="card">
                    <figure>
                        <img src={botella}/>
                    </figure>
                    <div className="contenido1">
                        <h3>ETIQUETAS EXCLUSIVAS</h3>
                        <p>Etiquetas Originales de las mejores bodegas de Argentina y exclusivamente creadas para los socios del Club.</p>
                    </div>
                </div>
                
                <div className="card">
                    <figure>
                        <img src={copa}/>
                    </figure>
                    <div className="contenido1">
                        <h3>CATAS Y EVENTOS</h3>
                    <p>Se parte de Eventos exclusivos para nuestros socios. Degustaciones gratuitas, charlas con enólogos reconocidos y más eventos</p>
                    </div>
                </div>

                <div className="card">
                    <figure>
                        <img src={camion}/>
                    </figure>
                    <div className="contenido1">
                        <h3>BONIFICACIONES EN ENVIO</h3>
                        <p>Recibí una caja de seis vinos mensualmente y aprovechá 50% de Descuento en el costo de envío.</p>
                    </div>
                </div> 
            </div>   


            {/* Lista de Vinos */}
            <ListaDeVinos
                vinos={vinos}
                completarVino={completarVino}
                eliminarVino={eliminarVino}
            />
            {/* Formulario para agregar nuevos Vinos */}
            <FormularioDeVinos agregarVino={agregarVino} />
        </div>
    );
    };

export default GestionPropuesta;
