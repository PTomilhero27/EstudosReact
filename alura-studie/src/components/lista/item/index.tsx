import { Tarefa } from '../../../types/tarefa';
import style from '../lista.module.scss';

interface ItemProps {
  tarefa: Tarefa;
  selecionaTarefa: (tarefaSelecionada: Tarefa) => void; 
}


export default function Item({tarefa, selecionaTarefa}: ItemProps) {
  return (
    <li className={`${style.item} ${tarefa.completado ? style.itemCompletado : ""} ${tarefa.selecionado ? style.itemSelecionado : ''}`} onClick={() => !tarefa.completado && selecionaTarefa(tarefa)}>
      <h3>{tarefa.tarefa} </h3>
      <span>{tarefa.tempo}</span>
      {tarefa.completado && <span className={style.concluido} aria-label='tarefa completado'></span>}
    </li>
  )
}