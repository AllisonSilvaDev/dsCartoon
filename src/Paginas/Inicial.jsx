import logo from '../assets/Design sem nome (1).png';
import { useNavigate } from 'react-router-dom';

export function Inicial() {
  const navigate = useNavigate();

  return (
    <main className="w-full h-screen flex flex-col items-center justify-center p-4">
      <img 
        src={logo} 
        className="logo max-w-[90%] sm:max-w-[80%] max-h-[300px] object-contain mb-6" 
        alt="Logo DS GO" 
        aria-label="Logo DS GO"
      />
      
      <button 
        onClick={() => navigate('/dsgo')} 
        className="px-6 py-3 bg-blue-500 text-white font-semibold rounded-lg hover:bg-blue-600 focus:outline-none transition-all duration-200"
        aria-label="Entrar no sistema DS GO"
      >
        Entrar
      </button>
    </main>
  );
}
