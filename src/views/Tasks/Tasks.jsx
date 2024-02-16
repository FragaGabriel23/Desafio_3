import React from 'react';
import './index.scss';
import NavBar from '../../components/NavBar/NavBar';
import DellIcon from '../../assets/Icons/dellIcon.svg';
import EditIcon from '../../assets/Icons/editIcon.svg';

const Tasks = () => {

  const handleSubmit = (event) => {
    event.preventDefault();


  };

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

            <div className="Tasks__task">

              <p>Limpar a casa</p>

              <div class="checkbox-wrapper-19">
                <input id="1" type="checkbox"/>
                <label class="check-box" for="1"></label>
              </div>

              <div className="Tasks__options">
                <img src={EditIcon} alt="Edit" />
                <img src={DellIcon} alt="Dell" />
              </div>

            </div>

            <div className="Tasks__task">

              <p>Responder e-mails</p>

              <div class="checkbox-wrapper-19">
                <input id="2" type="checkbox"/>
                <label class="check-box" for="2"></label>
              </div>

              <div className="Tasks__options">
                <img src={EditIcon} alt="Edit" />
                <img src={DellIcon} alt="Dell" />
              </div>

            </div>

            <form className='Task__form' onSubmit={handleSubmit}>
              <input className='Task__input' type="text" id="Task" placeholder='Nova tarefa...' required />
              <button className='Task__buttonAdd' type="submit">+</button>
            </form>

          </div>

        </main>
      </section>
    </>
  )
}

export default Tasks