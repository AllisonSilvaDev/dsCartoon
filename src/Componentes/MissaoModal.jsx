import { useState } from "react";
import sucesso from "../assets/win.png";
import gifPersonagem from "../assets/pngegg (1).png";  // Substitua pelo caminho do seu GIF

export function MissaoModal({ missao, onClose, onConcluir }) {
  const [resposta, setResposta] = useState("");
  const [resultado, setResultado] = useState(null);
  const [status, setStatus] = useState(null);
  const [mostrarGif, setMostrarGif] = useState(false);

  const verificarResposta = () => {
    if (!resposta.trim()) {
      alert("Por favor, digite uma resposta antes de enviar!");
      return;
    }

    if (
      resposta.trim().toLowerCase() ===
      missao.respostaCorreta.trim().toLowerCase()
    ) {
      setResultado("Resposta correta! Parabéns!");
      setStatus("sucesso");

      setTimeout(() => {
        onConcluir(missao.id);
      }, 1000);
    } else {
      setResultado("Resposta incorreta. Tente novamente!");
      setStatus("erro");
      setMostrarGif(true);  

      setTimeout(() => {
        setMostrarGif(false);
      }, 2000);
    }
  };

  return (
    <dialog 
      open 
      className="modal fixed inset-0 bg-black bg-opacity-60 flex items-center justify-center p-6 z-50"
      aria-labelledby="modal-title"
      aria-describedby="modal-description"
    >
      <div 
        className="bg-slate-500 p-8 rounded-3xl shadow-2xl w-full max-w-lg sm:max-w-xl md:max-w-3xl transform transition-all duration-300 scale-100 hover:scale-105 relative"
        role="document"
      >
        <h2 
          id="modal-title" 
          className="text-3xl font-bold text-center text-white mb-4"
        >
          {missao.titulo}
        </h2>
        <p 
          id="modal-description" 
          className="text-center text-white mb-6"
        >
          {missao.descricao}
        </p>

        <label htmlFor="resposta" className="sr-only">
          Digite sua resposta
        </label>
        <input
          className="w-full p-4 rounded-lg border-4 border-black mb-4 text-lg font-bold text-gray-900 focus:outline-none focus:ring-4 focus:ring-yellow-300"
          id="resposta"
          type="text"
          placeholder="Digite sua resposta..."
          value={resposta}
          onChange={(e) => setResposta(e.target.value)}
          required
          aria-label="Resposta"
        />

        <div className="flex justify-between mt-4 flex-wrap gap-4">
          <button
            onClick={verificarResposta}
            className="px-8 py-3 bg-pink-500 text-white font-semibold rounded-full hover:bg-pink-600 focus:outline-none transition-all duration-200"
            aria-label="Enviar resposta"
          >
            Enviar
          </button>
          <button
            onClick={onClose}
            className="px-8 py-3 bg-gray-600 text-white font-semibold rounded-full hover:bg-gray-700 focus:outline-none transition-all duration-200"
            aria-label="Fechar modal"
          >
            Fechar
          </button>
        </div>

        {resultado && (
          <div className="mt-6 text-center">
            <p 
              className={`text-lg font-semibold ${status === "sucesso" ? "text-green-400" : "text-red-500"}`}
              role="alert"
            >
              {resultado}
            </p>

            <div className="relative">
              {status === "erro" && mostrarGif && (
                <img
                  src={gifPersonagem}
                  alt="Personagem Erro"
                  className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 animate-pulse"
                  style={{ width: "80vw", height: "80vh", objectFit: "contain", zIndex: 10 }} // GIF grande, centralizado
                  aria-live="assertive"
                />
              )}
              {status === "sucesso" && (
                <img 
                  src={sucesso} 
                  alt="Missão concluída com sucesso" 
                  width="120" 
                  className="animate-bounce"
                  aria-live="assertive"
                />
              )}
            </div>
          </div>
        )}
      </div>
    </dialog>
  );
}
