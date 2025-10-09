import missao from '../assets/pngegg.png';
import mapa from '../assets/pngegg (2).png';
import bau from '../assets/pngegg (1).png';
import camera from '../assets/5.png';
import { Link } from 'react-router-dom';

export function Menu() {
  return (
    <div 
      className="fixed bottom-6 left-1/2 -translate-x-1/2 w-[90%] max-w-[850px] px-6 py-3 rounded-3xl backdrop-blur-md bg-white/10 shadow-xl border border-white/20"
      role="navigation"
      aria-label="Menu principal"
    >
      <ul className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-4 gap-6 list-none m-0 p-0">
        
        <li className="flex justify-center" aria-label="Missões">
          <Link to="missao" aria-label="Acessar Missões" tabindex="0">
            <figure className="flex flex-col items-center text-black text-sm transition-all duration-300 hover:scale-110 hover:drop-shadow-[0_0_12px_rgba(255,255,255,0.6)]">
              <img
                className="w-16 h-16 sm:w-20 sm:h-20 mb-2 transition-transform duration-300 hover:rotate-6"
                src={missao}
                alt="Ícone de Missões"
                role="img"
                aria-label="Missões"
              />
              <figcaption className="opacity-80 hover:opacity-100 hover:text-blue-300 transition-all duration-300">
                Missões
              </figcaption>
            </figure>
          </Link>
        </li>

        <li className="flex justify-center" aria-label="Inventário">
          <figure className="flex flex-col items-center text-black text-sm transition-all duration-300 hover:scale-110 hover:drop-shadow-[0_0_12px_rgba(255,255,255,0.6)]">
            <img
              className="w-16 h-16 sm:w-20 sm:h-20 mb-2 transition-transform duration-300 hover:-rotate-6"
              src={bau}
              alt="Ícone de Inventário"
              role="img"
              aria-label="Inventário"
            />
            <figcaption className="opacity-80 hover:opacity-100 hover:text-blue-300 transition-all duration-300">
              Inventário
            </figcaption>
          </figure>
        </li>

        <li className="flex justify-center" aria-label="GeoLocalização">
          <figure className="flex flex-col items-center text-black text-sm transition-all duration-300 hover:scale-110 hover:drop-shadow-[0_0_12px_rgba(255,255,255,0.6)]">
            <img
              className="w-16 h-16 sm:w-20 sm:h-20 mb-2 transition-transform duration-300 hover:rotate-6"
              src={mapa}
              alt="Ícone de GeoLocalização"
              role="img"
              aria-label="GeoLocalização"
            />
            <figcaption className="opacity-80 hover:opacity-100 hover:text-blue-300 transition-all duration-300">
              GeoLocalização
            </figcaption>
          </figure>
        </li>

        <li className="flex justify-center" aria-label="Câmera">
          <figure className="flex flex-col items-center text-black text-sm transition-all duration-300 hover:scale-110 hover:drop-shadow-[0_0_12px_rgba(255,255,255,0.6)]">
            <img
              className="w-16 h-16 sm:w-20 sm:h-20 mb-2 transition-transform duration-300 hover:-rotate-6"
              src={camera}
              alt="Ícone de Câmera"
              role="img"
              aria-label="Câmera"
            />
            <figcaption className="opacity-80 hover:opacity-100 hover:text-blue-300 transition-all duration-300">
              Câmera
            </figcaption>
          </figure>
        </li>

      </ul>
    </div>
  );
}
