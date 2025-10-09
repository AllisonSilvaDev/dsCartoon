import missao from '../assets/pngegg.png';
import mapa from '../assets/pngegg (2).png';
import bau from '../assets/pngegg (1).png';
import camera from '../assets/5.png';
import { Link } from 'react-router-dom';

export function Menu() {
  return (
    <div className="fixed bottom-6 left-1/2 -translate-x-1/2 w-[90%] max-w-[850px] px-6 py-3 rounded-3xl backdrop-blur-md bg-white/10 shadow-xl border border-white/20">
      <ul className="flex justify-around items-center gap-6 flex-wrap list-none m-0 p-0">

        <Link to="missao">
          <li className="flex-1 flex justify-center">
            <figure className="flex flex-col items-center text-white text-sm transition-all duration-300 hover:scale-110 hover:drop-shadow-[0_0_12px_rgba(255,255,255,0.6)]">
              <img
                className="w-20 h-20 mb-2 transition-transform duration-300 hover:rotate-6"
                src={missao}
                alt="Missões"
              />
              <figcaption className="opacity-80 hover:opacity-100 hover:text-blue-300 transition-all duration-300">
                Missões
              </figcaption>
            </figure>
          </li>
        </Link>

        <li className="flex-1 flex justify-center">
          <figure className="flex flex-col items-center text-white text-sm transition-all duration-300 hover:scale-110 hover:drop-shadow-[0_0_12px_rgba(255,255,255,0.6)]">
            <img
              className="w-20 h-20 mb-2 transition-transform duration-300 hover:-rotate-6"
              src={bau}
              alt="Inventário"
            />
            <figcaption className="opacity-80 hover:opacity-100 hover:text-blue-300 transition-all duration-300">
              Inventário
            </figcaption>
          </figure>
        </li>

        <li className="flex-1 flex justify-center">
          <figure className="flex flex-col items-center text-white text-sm transition-all duration-300 hover:scale-110 hover:drop-shadow-[0_0_12px_rgba(255,255,255,0.6)]">
            <img
              className="w-20 h-20 mb-2 transition-transform duration-300 hover:rotate-6"
              src={mapa}
              alt="GeoLocalização"
            />
            <figcaption className="opacity-80 hover:opacity-100 hover:text-blue-300 transition-all duration-300">
              GeoLocalização
            </figcaption>
          </figure>
        </li>

        <li className="flex-1 flex justify-center">
          <figure className="flex flex-col items-center text-white text-sm transition-all duration-300 hover:scale-110 hover:drop-shadow-[0_0_12px_rgba(255,255,255,0.6)]">
            <img
              className="w-20 h-20 mb-2 transition-transform duration-300 hover:-rotate-6"
              src={camera}
              alt="Câmera"
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
