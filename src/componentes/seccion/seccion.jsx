import React from 'react';
import img from '../../assets/img/woman-vinos.jpg';
import brindis from '../../assets/img/brindis.jpg';
import martin from '../../assets/img/Martin R.jpg';
import rocio from '../../assets/img/Rocio F.jpg';
import './seccion.css';
const seccion = () => {
    return (
    <>
    {/* Hero  */}
    <div className='hero'>
        < img src={img} controls loop />
    </div>
    {/* Contenido de la pagina  */}
    <div className='container'>
    <section className="nosotros">
        <div className="nosotros_contenido">
            <div className="nosotros_titulo">
                <h3>QUIENES SOMOS</h3>
            </div>
            <p className='nosotros_texto'>Somos un grupo de personas, profesionales, entusiastas que luego de transitar distintos caminos por el mundo del vino, nos encontramos compartiendo un mismo sueño. Pues el club es mucho más que una empresa, es el resultado de deseos comunes, de un entendimiento de lo que para nosotros significa esta noble bebida. Creemos que la belleza de la naturaleza se halla en la diversidad, que es grato dejarse sorprender.</p>
        </div>
        <div className="nosotros_contenido">
            <div className="nosotros_titulo">
                <h3>QUÉ BUSCAMOS</h3>
            </div>
            <p className='nosotros_texto'>Salir de la pretensión puramente comercial de la fórmula de " los vinos más vendidos". Para aventurarnos en la búsqueda de aquellas producciones cuidadas, de alta personalidad, que sean referentes sinceros de nuestros terruños. De las producciones más arriesgadas de prestigiosos maestros consagrados, como las de una creciente hondada de jóvenes enólogos, que marcaran su impronta, a causa de su pasión y su arte.</p>
        </div>
        <div className="brindis">
            <img  className= "brindis_img" src={brindis} />
        </div>
    </section>
    
    <div className='socios_titulos'>
            <h2 className='socios_h2'>100% socios  satisfechos</h2>
            <p className='socios_h3'>conocé la experiencia de nuestros socios con el club</p>
        </div>
    <div className="socios">
        <div className="socios_contenido">
            <div className='socio_imagen'>
                <img className='socio_img1' src={martin} alt="Martin R" />
            </div>
            <div>
                <p className='socio_texto'>"Ser miembro del club me abrió las puertas a descubrir el mundo del vino desde una perspectiva completamente innovadora y alternativa. Todos los meses recibo vinos de una calidad superadora a un precio muy competitivo, ademas de la oportunidad de participar de eventos sumamemente interesantes conociendo personas que comparten mi pasión"</p>
                <p className='socio_firma'>Martin R., socio desde 2018</p>  
            </div>
        </div>
        <div className="socios_contenido">
            <div className='socio_imagen'>
                <img className='socio_img2'src={rocio} alt="Rocio F" />
            </div>
            <div>
                <p className='socio_texto'>"Todos los meses el Club te sorprende con una variedad de vinos super exclusivos, etiquetas que no encontrás en otros lugares y realizadas por las mejores bodegas del país. Cuentan con un equipo de profesionales con altísimo conocimiento en la materia y que te permiten aventurarte en un mundo nuevo del vino"</p>
                <p className='socio_firma'>Rocío F., socia desde 2020</p>
            </div>
        </div>
    </div>
    </div>
    
    
    
    
    </>
    )
}

export default seccion