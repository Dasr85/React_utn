import React from 'react'
import { Link } from "react-router-dom"
import './header.css'

const header = () => {
    return (
    
    <div className='nav-b'>

        <div className="contenedor header_navegacion">
        <h1><a href="">Club Bodega Del 8</a></h1>
        <nav className="navegacion">
            <ul>
                <li><Link to="/"> Inicio </Link></li> 
                <li><Link to="/Propuesta"> Propuesta </Link></li> 
                <li><Link to="/Lista"> Lista de Vinos </Link></li>
                <li><Link to="/Contacto"> Contacto </Link></li> 

            </ul>
        </nav>
        </div>

    </div>
    
    )
}

export default header