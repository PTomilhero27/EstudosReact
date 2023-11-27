import style from './relogio.module.scss';

interface RelogioProps {
  tempo: number | undefined;
}

export default function Relogio({ tempo = 0}: RelogioProps) {
  const min = Math.floor(tempo/60);
  const sec = tempo % 60;

  const [minDezena, minUnidade] = String(min).padStart(2, '0')
  const [secDezena, secUnidade] = String(sec).padStart(2, '0')

  return(
    <>
      <span className={style.relogioNumero}>{minDezena}</span>
      <span className={style.relogioNumero}>{minUnidade}</span>
      <span className={style.relogioDivisao}>:</span>
      <span className={style.relogioNumero}>{secDezena}</span>
      <span className={style.relogioNumero}>{secUnidade}</span>
    </>
  )
}  