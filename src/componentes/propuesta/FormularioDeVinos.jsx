import { useState } from 'react';

const FormularioDeVinos = ({ agregarVino }) => {
    const [nuevaVino, setNuevoVino] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        if (nuevaVino.trim() !== '') {
        agregarVino(nuevoVino);
        setNuevoVino('');
        }
    };

    return (
        <form onSubmit={handleSubmit}>
        <input
            type="text"
            value={nuevaVino}
            onChange={(e) => setNuevoVino(e.target.value)}
            placeholder="Nuevo Vino"
        />
        <button type="submit">Agregar</button>
        </form>
    );
    };

export default FormularioDeVinos;
