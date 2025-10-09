import logo from '../assets/Design sem nome (1).png';
import { useNavigate } from 'react-router-dom';

export function Inicial() {
    const navigate =useNavigate();

  return (
    <main className="w-[100vw] flex flex-col items-center justify-center ">
      <img src={logo} className="logo" alt="Logo DS GO"  />
     
      <button onClick={() => navigate('/dsgo')} className='entrar'>
        Entrar
      </button>
    </main>
  );
}
