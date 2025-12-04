import { useState } from "react";
import { InventarioModal } from "./Inventario";
import missao from '../assets/pngegg.png';
import mapa from '../assets/pngegg (2).png';
import bau from '../assets/pngegg (1).png';
import camera from '../assets/5.png';
import { Geolocalizacao } from './Geolocalizacao'; // Importe o componente GeoLocalizacao

export function Menu() {
  const [abrirInventario, setAbrirInventario] = useState(false);
  const [conteudo, setConteudo] = useState(null); // Estado para controle de conteúdo exibido

  // Função para mostrar GeoLocalização
  const mostrarGeoLocalizacao = () => {
    setConteudo(<Geolocalizacao />);
  };

  // Função para voltar ao menu principal
  const voltarMenu = () => {
    setConteudo(null); // Limpar o conteúdo exibido para voltar ao menu
  };

  return (
    <div className="fixed bottom-6 left-1/2 -translate-x-1/2 w-[90%] max-w-[850px] px-6 py-3 rounded-3xl backdrop-blur-md bg-white/10 shadow-xl border border-white/20"
      role="navigation"
      aria-label="Menu principal">
      
      {/* Verifica se há algum conteúdo a ser exibido */}
      {conteudo ? (
        <div>
          <button 
            onClick={voltarMenu}
            className="px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600"
          >
            Voltar ao Menu
          </button>
          <div>{conteudo}</div>
        </div>
      ) : (
        <ul className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-4 gap-6">
          {/* Missões */}
          <li className="flex justify-center">
            <figure className="flex flex-col items-center text-black transition-all hover:scale-110">
              <img src={missao} className="w-16 h-16 mb-2" />
              <figcaption>Missões</figcaption>
            </figure>
          </li>

          {/* Inventário (agora abre modal) */}
          <li className="flex justify-center">
            <figure className="flex flex-col items-center text-black transition-all hover:scale-110 cursor-pointer"
              onClick={() => setAbrirInventario(true)}
              aria-label="Abrir Inventário"
            >
              <img src={bau} className="w-16 h-16 mb-2" />
              <figcaption>Inventário</figcaption>
            </figure>
          </li>

          {/* GeoLocalização */}
          <li className="flex justify-center">
            <figure className="flex flex-col items-center text-black transition-all hover:scale-110 cursor-pointer"
              onClick={mostrarGeoLocalizacao} // Exibe o conteúdo de GeoLocalização
            >
              <img src={mapa} className="w-16 h-16 mb-2" />
              <figcaption>GeoLocalização</figcaption>
            </figure>
          </li>

          {/* Câmera */}
          <li className="flex justify-center">
            <figure className="flex flex-col items-center text-black transition-all hover:scale-110">
              <img src={camera} className="w-16 h-16 mb-2" />
              <figcaption>Câmera</figcaption>
            </figure>
          </li>
        </ul>
      )}

      {/* Modal do Inventário */}
      {abrirInventario && (
        <InventarioModal onClose={() => setAbrirInventario(false)} />
      )}
    </div>
  );
}
