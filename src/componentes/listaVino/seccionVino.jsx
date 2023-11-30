import React, { useState } from 'react';
import { ModalElement } from './modal';
import { newVino } from './newVino';

export const SeccionVino = ({ task, setVino, vino }) => {
  const [visible, setVisible] = useState(false);

  const checkVino = (check) => {
    const findVino = vino.find((item) => item.id === task.id);
    findVino.complete = check;

    const filterVino = vino.filter((item) => item.id !== task.id);
    filterVino.push(findVino);

    setVino(filterVino);
  };

  const deleteVino = () => {
    const filterVino = vino.filter((item) => item.id !== task.id);
    setVino(filterVino);
  };

  return (
    <>
      <div className="flex p-2 seccionVino">
        <input
          type="checkbox"
          className="p-1"
          onChange={(event) => checkVino(event.target.checked)}
          defaultChecked={task.complete}
        />
        <span className="P-1 ml-2" onClick={() => setVisible(true)}>
          {task.task}
        </span>
        <span
          className="text-danger p-1 ml-2 float-right"
          onClick={deleteVino}
        >
          Eliminar
        </span>
      </div>

      <ModalElement open={visible} setOpen={setVisible}>
        <newVino setOpen={setVisible} setVino={setVino} vino={vino} title={task.task} />
      </ModalElement>
    </>
  );
};
