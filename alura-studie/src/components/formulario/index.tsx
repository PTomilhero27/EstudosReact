import { useState } from 'react'
import { v4 } from 'uuid'
import Botao from '../botao';
import style from './formulario.module.scss';
import { Tarefa } from '../../types/tarefa';

interface FormularioProps {
  setTarefa: React.Dispatch<React.SetStateAction<Tarefa[]>>;
}


const Formulario: React.FC<FormularioProps> = ({ setTarefa }) => {

  const formVazio: Tarefa = {tarefa: '', tempo: '00:00:00', completado: false, selecionado: false}

  const [form, setForm] = useState<Tarefa>(formVazio);

  function adicionarTarefa(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setTarefa(tarefas => [...tarefas, {...form, selecionado: false, completado: false, id: v4()}]);
    setForm(formVazio);
  };

  const handleChange = (event: any) => {
    const { name, value } = event.target;
    setForm((prevValues) => ({
      ...prevValues,
      [name]: value,
    }));
  };


  return (
    <form onSubmit={adicionarTarefa}  className={style.novaTarefa}>
      <div className={style.inputContainer}>
        <label htmlFor="tarefa">Adicione um novo estudo</label>
        <input onChange={event => handleChange(event)} value={form.tarefa} type="text" name='tarefa' id='tarefa' placeholder='O que você quer estudar' required />
      </div>

      <div className={style.inputContainer}>
        <label htmlFor="tempo">Tempo</label>
        <input onChange={event => handleChange(event)} value={form.tempo} type="time" step='1' name='tempo' id='tempo' min='00:00:00' max='01:30:00' required/>
      </div>

      <Botao type='submit'>
        Adiconar
      </Botao>
 
    </form>
  )
}

export default Formulario;