import React, { useState } from 'react';
import './index.scss';
import NavBar from '../../components/NavBar/NavBar';
import DellIcon from '../../assets/Icons/dellIcon.svg';
import EditIcon from '../../assets/Icons/editIcon.svg';
import Modal from '../../components/Modal/Modal';

const Tasks = ({ data }) => {

  const [tasks, setTasks] = useState(data);
  const [newTask, setNewTask] = useState({
    id: tasks.length + 1,
    title: '',
    description: '',
    completed: false
  });

  const handleSubmit = (e) => {
    e.preventDefault();

    // Adiciona a nova tarefa à lista de tarefas
    setTasks([...tasks, newTask]);

    // Limpa o campo do formulário
    setNewTask({
      id: tasks.length + 1,
      title: '',
      description: '',
      completed: false
    });
  };

  const [Open, setOpen] = useState(false);
  const [ModalMode, setModalMode] = useState("");
  const [TaskSelect, setTaskSelect] = useState("");
  
  const handleModal = (mode, taskSelect) => {
    setOpen(!Open);
    setModalMode(mode);
    setTaskSelect(taskSelect);
  }

  return (
    <>
      <NavBar />
      <section>
        <h1>Otimize seu tempo e se organize com o nosso Planejador Diário.</h1>

        <main className='Tasks'>

          <div className='Tasks__header'>

            <h3>Tarefa</h3>
            <h3>Status</h3>
            <h3>Opções</h3>

          </div>

          <div className='Tasks__bar'></div>

          <div className="Tasks__container">

            {tasks.map((task) => (

              <div key={task.id} className="Tasks__task">

                <p>{task.title}</p>

                <div className="checkbox-wrapper-19">
                  <input id={task.id} type="checkbox" />
                  <label className="check-box" htmlFor={task.id}></label>
                </div>

                <div className="Tasks__options">
                  <img src={EditIcon} alt="Edit" onClick={()=> handleModal("Edit", task)} />
                  <img src={DellIcon} alt="Dell" onClick={()=> handleModal("Dell", task)} />
                </div>

              </div>

            ))}

            <form className='Task__form' onSubmit={handleSubmit}>
              <input className='Task__input' type="text" id="Task" placeholder='Nova tarefa...' required value={newTask.title} onChange={(e) => setNewTask(
                { ...newTask, title: e.target.value, description: e.target.value }
              )} />
              <button className='Task__buttonAdd' type="submit">+</button>
            </form>

          </div>

        </main>
      </section>
      <Modal isOpen={Open} mode={ModalMode} taskSelect={TaskSelect} setOpen={setOpen}/>
    </>
  )
}

export default Tasks