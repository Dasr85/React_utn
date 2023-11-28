import { useState, useEffect } from 'react';
import './Propuesta.css'
import camion from '../../assets/img/camion.png';
import botella from '../../assets/img/botella de vino.png';
import copa from '../../assets/img/copa de vino.png';
import ListaDePociones from './ListaDePociones';
import FormularioDePociones from './FormularioDePociones';

const GestionPociones = () => {
    // Estado para almacenar las pociones
    const [pociones, setPociones] = useState([]);

    // Carga inicial de pociones desde localStorage
    useEffect(() => {
        try {
            const pocionesGuardadas = JSON.parse(localStorage.getItem('pociones'));
            console.log('Pociones cargadas:', pocionesGuardadas);
            if (pocionesGuardadas) {
                setPociones(pocionesGuardadas);
            }
        } catch (error) {
            console.error('Error al cargar datos desde localStorage:', error);
        }
    }, []);

    // Almacena las pociones en localStorage cuando cambia el estado
    useEffect(() => {
        localStorage.setItem('pociones', JSON.stringify(pociones));
    }, [pociones]);

    // Marcar una poción como completada o no completada
    const completarPocion = (id) => {
        const nuevasPociones = pociones.map((pocion) =>
        pocion.id === id ? { ...pocion, completada: !pocion.completada } : pocion
        );
        setPociones(nuevasPociones);
    };

    // Eliminar una poción de la lista
    const eliminarPocion = (id) => {
        const nuevasPociones = pociones.filter((pocion) => pocion.id !== id);
        setPociones(nuevasPociones);
    };

    // Agregar una nueva poción a la lista
    const agregarPocion = (nombre) => {
        const nuevaPocion = {
        id: Date.now(), // Generar ID único
        nombre,
        completada: false,
        };
        setPociones([...pociones, nuevaPocion]);
    };

    return (
        <div className='contenedor-propuesta'>
        <h1 className='titulo'>PROPUESTA PARA SOCIOS</h1>
        <h3>RECIBÍ UNA CAJA DE 6 VINOS EXCLUSIVOS
        TODOS LOS MESES EN TU DOMICILIO</h3>

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


        {/* Lista de Pociones */}
        <ListaDePociones
            pociones={pociones}
            completarPocion={completarPocion}
            eliminarPocion={eliminarPocion}
        />
        {/* Formulario para agregar nuevas Pociones */}
        <FormularioDePociones agregarPocion={agregarPocion} />
        </div>
    );
    };

export default GestionPociones;
