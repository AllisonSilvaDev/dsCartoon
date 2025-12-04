
import { Routes, Route } from "react-router-dom";
import { Inicial } from "../Paginas/Inicial";
import { DSGo } from "../Paginas/DSGo";
import { Missao } from "../Paginas/Missao";
import { Camera } from "../Componentes/Camera";
import { Galeria } from "../Paginas/Galeria";
import { Geolocalizacao } from "../Componentes/Geolocalizacao";
// import { Inventario } from "../Pagina/Inventario";
// import { GeolocalizacaoMapa } from "../Componentes/GeolocalizacaoMapa";

export function Rotas() {
    return (
        <Routes>
            <Route path="/" element={<Inicial />} />
            <Route path="/dsgo" element={<DSGo />} >
                <Route index element={<DSGo />} />
                <Route path="missao" element={<Missao />} />
                {/* <Route path="inventario" element={<Inventario/>} /> */}
                <Route path="camera" element={<Galeria />} />
            </Route>
            {/* Tornando a rota de Geolocalização independente */}
            <Route path="/geolocalizacao" element={<Geolocalizacao />} />
        </Routes>
    );
}
