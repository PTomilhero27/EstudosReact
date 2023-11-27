import Botao from "../botao";
import Relogio from "./relogio";
import style from "./cronometro.module.scss";
import { tempoParaSegundos } from "../../common/utils/time";
import { Tarefa } from "../../types/tarefa";
import { useState, useEffect } from 'react';

interface CronometroProps {
  tarefa: Tarefa | undefined;
  finalizarTarefa: () => void;
}

export function Cronometro({tarefa, finalizarTarefa} : CronometroProps) {
  
  const [tempo, setTempo] = useState<number>();

  useEffect(() => {
    if(tarefa?.tempo)setTempo(tempoParaSegundos(tarefa?.tempo))
  }, [tarefa])

  function regressiva(contador: number = 0) {
    setTimeout(() => {
      if(contador > 0) {
        setTempo(contador - 1);
        return regressiva(contador - 1)
      }
      finalizarTarefa();
    }, 1000);
  }

  return (
    <div className={style.cronometro}>
      <p className={style.titulo}>Escolha um card e inicie o cronometro</p>
      <div className={style.relogioWrapper}>
        <Relogio tempo={tempo} />
      </div>

      <Botao onClick={() => regressiva(tempo)}>
        Começar
      </Botao>

    </div>
  )
}