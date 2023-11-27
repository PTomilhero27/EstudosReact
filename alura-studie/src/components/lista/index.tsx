import { Tarefa } from '../../types/tarefa';
import Item from './item';
import style from './lista.module.scss';

interface ListaProps {
  tarefas: Tarefa[];
  selecionaTarefa: (tarefaSelecionada: Tarefa) => void; 

}

function Lista(props: ListaProps) {

  return (
    <aside className={style.listaTarefas}>
      <h2>Estudos do dia</h2>
      <ul>
        {props.tarefas.map((tarefa: Tarefa) =>{
          return (
            <Item selecionaTarefa={props.selecionaTarefa} key={tarefa.id} tarefa={tarefa}/>
          )
        })}
      </ul>
    </aside>
  )
}

export default Lista;