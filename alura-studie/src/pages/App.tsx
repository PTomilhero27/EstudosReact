import { useState } from 'react';
import Formulario from '../components/formulario';
import Lista from '../components/lista';
import { Cronometro } from '../components/cronometro';
import style from './app.module.scss';
import { Tarefa } from '../types/tarefa';

 
function App() {

  const [tarefas, setTarefa] = useState<Tarefa[]>([]);
  const [selecionado, setSelecionado] = useState<Tarefa>();

  function selecionaTarefa(tarefaSelecionada: Tarefa) {
    setSelecionado(tarefaSelecionada);
    setTarefa(tarefasAnteriores => tarefasAnteriores.map(tarefa => (
      {...tarefa, selecionado: tarefa.id === tarefaSelecionada.id ? true : false}
    )))
  }

  function finalizarTarefa() {
    if(selecionado) {
      setSelecionado(undefined);
      setTarefa(tarefasAnteriores => tarefasAnteriores.map(tarefa => {
        if(tarefa.id === selecionado.id) {
          return { ...tarefa, selecionado: false, completado: true }
        } 
        return tarefa;
      }))
    }
  }

  return (
    <div className={style.AppStyle}>
      <Formulario setTarefa={setTarefa} />
      <Lista tarefas={tarefas} selecionaTarefa={selecionaTarefa}/>
      <Cronometro tarefa={selecionado} finalizarTarefa={finalizarTarefa} />
    </div>
  );
}

export default App;
