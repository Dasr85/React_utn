import React, { useState } from 'react';
import { Form, Button } from 'react-bootstrap';

export const NewWine = ({ setOpen, setVinos, vinos, title }) => {
    const [Wine, setWine] = useState('');

    const AccionWine = () => {
        if (title) {
            console.log('edit');
            const findWine = vinos.find(item => item.wine === title);
            findWine.wine = Wine;

            const filterWine = vinos.filter(item => item.wine !== Wine);
            filterWine.push(findWine);

            setVinos(filterWine);
            setOpen(false);
            return;
        }

        if (Wine) {
            const data = {
                id: new Date().getTime().toString(),
                wine: Wine,
                complete: false,
            };

            setOpen(false);

            setVinos([...[data], ...vinos]);
        } else {
            alert('Este campo es requerido');
        }
    };

    return (
        <Form>
            <Form.Group controlId="formBasicEmail">
                <Form.Label>{title ? 'Editar Vino' : 'Nuevo Vino'}</Form.Label>
                <Form.Control
                    type="text"
                    defaultValue={title}
                    placeholder="Agrega tu Vino"
                    onChange={event => setWine(event.target.value)}
                />
            </Form.Group>

            <Button variant="primary" block onClick={AccionWine}>
                {title ? 'Actualizar' : 'Agregar'}
            </Button>
        </Form>
    );
};
