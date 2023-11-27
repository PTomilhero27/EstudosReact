import  {ButtonHTMLAttributes, forwardRef} from 'react';
import style from './botao.module.scss';

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  children: any; 
};


const Botao = forwardRef<HTMLButtonElement, ButtonProps>(({type = 'button', children, ...props}) => {
  return (
    <button {...props} type={type} className={style.botao}>
      {children}
    </button>
  )
})
    


export default Botao;