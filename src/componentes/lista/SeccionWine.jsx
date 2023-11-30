import React, { useState } from 'react';
import { ModalElement } from './Modal';
import { NewWine } from './NewWine';

export const SeccionWine = ({ wine, setVinos, vinos }) => {
    const [visible, setVisible] = useState(false);

    const checkWine = (check) => {
        const findWine = vinos.find(item => item.id === wine.id);
        findWine.complete = check;

        const filterWine = vinos.filter(item => item.id !== wine.id);
        filterWine.push(findWine);

        setVinos(filterWine);
    };

    const deleteWine = () => {
        const filterWine = vinos.filter(item => item.id !== wine.id);
        setVinos(filterWine);
    };

    return (
        <>
            <div className="flex p-2 seccionWine">
                <input type='checkbox' className="p-1" onChange={event => checkWine(event.target.checked)} defaultChecked={wine.complete} />
                <span className="P-1 ml-2" onClick={() => setVisible(true)}>{wine.wine}</span>
                <span className="text-danger p-1 ml-2 float-right" onClick={deleteWine}>Eliminar</span>
            </div>

            <ModalElement open={visible} setOpen={setVisible} title={`Editar Vino - ${wine.wine}`}>
                <NewWine setOpen={setVisible} setVinos={setVinos} vinos={vinos} title={wine.wine} />
            </ModalElement>
        </>
    );
};
