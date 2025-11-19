import { useState } from "react";
import { InventarioModal } from "./Inventario";
import missao from '../assets/pngegg.png';
import mapa from '../assets/pngegg (2).png';
import bau from '../assets/pngegg (1).png';
import camera from '../assets/5.png';
import { Link } from 'react-router-dom';

export function Menu() {

  const [abrirInventario, setAbrirInventario] = useState(false);

  return (
    <div className="fixed bottom-6 left-1/2 -translate-x-1/2 w-[90%] max-w-[850px] px-6 py-3 rounded-3xl backdrop-blur-md bg-white/10 shadow-xl border border-white/20"
         role="navigation"
         aria-label="Menu principal">

      <ul className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-4 gap-6">

        {/* Missões */}
        <li className="flex justify-center">
          <Link to="missao">
            <figure className="flex flex-col items-center text-black transition-all hover:scale-110">
              <img src={missao} className="w-16 h-16 mb-2" />
              <figcaption>Missões</figcaption>
            </figure>
          </Link>
        </li>

        {/* Inventário (agora abre modal) */}
        <li className="flex justify-center">
          <button 
            onClick={() => setAbrirInventario(true)}
            className="focus:outline-none"
            aria-label="Abrir Inventário"
          >
            <figure className="flex flex-col items-center text-black transition-all hover:scale-110">
              <img src={bau} className="w-16 h-16 mb-2" />
              <figcaption>Inventário</figcaption>
            </figure>
          </button>
        </li>

        {/* GeoLocalização */}
        <li className="flex justify-center">
          <figure className="flex flex-col items-center text-black transition-all hover:scale-110">
            <img src={mapa} className="w-16 h-16 mb-2" />
            <figcaption>GeoLocalização</figcaption>
          </figure>
        </li>

        {/* Câmera */}
        <li className="flex justify-center">
          <Link to="camera">
            <figure className="flex flex-col items-center text-black transition-all hover:scale-110">
              <img src={camera} className="w-16 h-16 mb-2" />
              <figcaption>Câmera</figcaption>
            </figure>
          </Link>
        </li>
      </ul>

      {/* Modal do Inventário */}
      {abrirInventario && (
        <InventarioModal onClose={() => setAbrirInventario(false)} />
      )}
    </div>
  );
}
