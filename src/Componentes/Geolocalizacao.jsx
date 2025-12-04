import React, { useState, useRef, useEffect } from 'react';
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';
import 'leaflet-routing-machine';
import 'leaflet-routing-machine/dist/leaflet-routing-machine.css';

export function Geolocalizacao() {
  const mapRef = useRef(null);
  const rotaRef = useRef(null);
  const [form, setForm] = useState({
    lat1: "",
    lng1: "",
    lat2: "",
    lng2: "",
  });
  const [erros, setErros] = useState({});

  // Função para validar os campos
  function validarCampos() {
    let temp = {};

    if (!form.lat1) temp.lat1 = "Informe a latitude da origem.";
    if (!form.lng1) temp.lng1 = "Informe a longitude da origem.";
    if (!form.lat2) temp.lat2 = "Informe a latitude do destino.";
    if (!form.lng2) temp.lng2 = "Informe a longitude do destino.";

    setErros(temp);
    return Object.keys(temp).length === 0;
  }

  // Função para pegar a localização do usuário
  function pegarLocalizacaoOrigem() {
    navigator.geolocation.getCurrentPosition((pos) => {
      setForm({
        ...form,
        lat1: pos.coords.latitude.toFixed(6),
        lng1: pos.coords.longitude.toFixed(6),
      });
    });
  }

  function pegarLocalizacaoDestino() {
    navigator.geolocation.getCurrentPosition((pos) => {
      setForm({
        ...form,
        lat2: pos.coords.latitude.toFixed(6),
        lng2: pos.coords.longitude.toFixed(6),
      });
    });
  }

  // Função para gerar a rota no mapa
  function gerarRota(e) {
    e.preventDefault();
    if (!validarCampos()) return;

    const p1 = L.latLng(parseFloat(form.lat1), parseFloat(form.lng1));
    const p2 = L.latLng(parseFloat(form.lat2), parseFloat(form.lng2));

    if (rotaRef.current) rotaRef.current.remove();

    rotaRef.current = L.Routing.control({
      waypoints: [p1, p2],
      show: false,
      addWaypoints: false,
      draggableWaypoints: false,
      lineOptions: { addWaypoints: false },
    }).addTo(mapRef.current);

    mapRef.current.setView(p1, 15);
  }

  // Hook para inicializar o mapa
  useEffect(() => {
    if (mapRef.current) return;

    const mapa = L.map("mapa").setView([-23.55, -46.63], 13);
    mapRef.current = mapa;

    L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
      maxZoom: 19,
    }).addTo(mapa);
  }, []);

  return (
    <div className="flex p-6 space-y-6">
      {/* Formulário de entrada */}
      <form className="bg-white shadow-lg rounded-lg p-6 space-y-6" onSubmit={gerarRota}>
        <div className="">
                    <h2 className="text-2xl font-semibold text-center">Gerar Rota</h2>
        <h2 onClick={()=>{
            window.location.href = "/dsgo"
        }}>Voltar</h2>
        </div>

        {/* Origem */}
        <fieldset className="space-y-4">
          <legend className="font-medium text-lg">Origem</legend>

          <div className="space-y-2">
            <label className="block text-sm font-medium">Latitude</label>
            <input
              type="number"
              name="lat1"
              step="any"
              value={form.lat1}
              onChange={(e) => setForm({ ...form, lat1: e.target.value })}
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            {erros.lat1 && <p className="text-sm text-red-500">{erros.lat1}</p>}
          </div>

          <div className="space-y-2">
            <label className="block text-sm font-medium">Longitude</label>
            <input
              type="number"
              name="lng1"
              step="any"
              value={form.lng1}
              onChange={(e) => setForm({ ...form, lng1: e.target.value })}
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            {erros.lng1 && <p className="text-sm text-red-500">{erros.lng1}</p>}
          </div>

          <button
            type="button"
            className="w-full py-2 px-4 bg-blue-500 text-white rounded-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
            onClick={pegarLocalizacaoOrigem}
          >
            Usar minha localização atual
          </button>
        </fieldset>

        {/* Destino */}
        <fieldset className="space-y-4">
          <legend className="font-medium text-lg">Destino</legend>

          <div className="space-y-2">
            <label className="block text-sm font-medium">Latitude</label>
            <input
              type="number"
              name="lat2"
              step="any"
              value={form.lat2}
              onChange={(e) => setForm({ ...form, lat2: e.target.value })}
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            {erros.lat2 && <p className="text-sm text-red-500">{erros.lat2}</p>}
          </div>

          <div className="space-y-2">
            <label className="block text-sm font-medium">Longitude</label>
            <input
              type="number"
              name="lng2"
              step="any"
              value={form.lng2}
              onChange={(e) => setForm({ ...form, lng2: e.target.value })}
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            {erros.lng2 && <p className="text-sm text-red-500">{erros.lng2}</p>}
          </div>

          <button
            type="button"
            className="w-full py-2 px-4 bg-blue-500 text-white rounded-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
            onClick={pegarLocalizacaoDestino}
          >
            Usar minha localização atual
          </button>
        </fieldset>

        <button
          type="submit"
          className="w-full py-2 px-4 bg-green-500 text-white rounded-md hover:bg-green-600 focus:outline-none focus:ring-2 focus:ring-green-500"
        >
          Gerar Rota
        </button>
      </form>

      {/* Mapa */}
      <div id="mapa" className="w-full h-[400px] mt-6 rounded-lg shadow-lg"></div>
    </div>
  );
}
