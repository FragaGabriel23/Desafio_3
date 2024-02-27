import React, { useState } from 'react';
import "./index.scss";
import Button1 from '../Buttons/Button1/Button1';

const Modal = ({ isOpen, mode, taskSelect, setOpen, deleteTask, editedTask, setEditedTask, editTask }) => {

    return (
        isOpen && mode === "Edit" ? (
            <div className='Modal'>
                <div className="Modal__main">
                    <h1>Deseja editar esse item?</h1>
                    <input
                        type="text"
                        id='EditTitle'
                        placeholder={taskSelect.title}
                        onChange={(e) => setEditedTask({ ...editedTask, title: e.target.value })}
                    />
                    <input
                        type="text"
                        id='EditDescription'
                        placeholder={`${taskSelect.description} ${taskSelect.completed ? ": Completo" : ": Incompleto"}`}
                        onChange={(e) => setEditedTask({ ...editedTask, description: e.target.value })}
                    />
                    <div className='Modal__buttons'>
                        <Button1 text="Não" classMod="Modal__buttons--blue" onClick={() => setOpen(!isOpen)} />
                        <Button1 text="Sim" classMod="Modal__buttons--green" onClick={() => editTask(taskSelect.id)}/>
                    </div>
                </div>
            </div>
        ) : isOpen && mode === "Dell" ? (
            <div className='Modal'>
                <div className="Modal__main">
                    <h1>Deseja excluir esse item?</h1>
                    <h2>{taskSelect.title}</h2>
                    <h2>{taskSelect.description}{taskSelect.completed ? ": Completo" : ": Incompleto"}</h2>
                    <div className='Modal__buttons'>
                        <Button1 text="Não" classMod="Modal__buttons--blue" onClick={() => setOpen(!isOpen)} />
                        <Button1 text="Sim" classMod="Modal__buttons--red" onClick={() => (setOpen(!isOpen), deleteTask(taskSelect.id))} />
                    </div>
                </div>
            </div>
        ) : (
            <></>
        )
    );
}

export default Modal;
