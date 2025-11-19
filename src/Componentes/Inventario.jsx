import React from "react";

export function InventarioModal({ onClose }) {

    const inventario = JSON.parse(localStorage.getItem("inventario")) || [];

    return (
        <div
            className="fixed inset-0 bg-black/60 backdrop-blur-sm z-50"
            aria-modal="true"
            role="dialog"
        >
            {/* Modal centralizada com absolute */}
            <div
                className="
          absolute bottom-1/2 left-1/2 
          -translate-x-1/2 -translate-y-1/2
          bg-slate-500 p-8 rounded-3xl shadow-2xl
          w-full max-w-lg sm:max-w-xl md:max-w-3xl
          transform transition-all duration-300
        "
            >
                {/* Título */}
                <h2
                    id="inventario-modal-titulo"
                    className="text-3xl font-bold text-center text-white mb-6"
                >
                    Inventário de Missões
                </h2>

                {/* Inventário vazio */}
                {inventario.length === 0 && (
                    <p className="text-white text-center text-lg mb-6">
                        Você ainda não completou nenhuma missão.
                    </p>
                )}

                {/* Grid */}
                {inventario.length > 0 && (
                    <ul className="grid grid-cols-2 md:grid-cols-3 gap-6">
                        {inventario.map((item) => (
                            <li
                                key={item.id}
                                className="bg-white/20 p-4 rounded-2xl shadow-xl flex flex-col items-center border-2 border-white/30"
                            >
                                {
                                    console.log(item)}
                                <p className="text-white text-center font-semibold text-lg">
                                    {item.titulo}
                                </p>
                                <p className="text-white text-sm mt-2">
                                    Resposta: <span className="font-bold">{item.respostaUsuario}</span>
                                </p>
                                {console.log(item.respostaUsuario)}


                            </li>
                        ))}
                    </ul>
                )}

                {/* Botão fechar */}
                <div className="mt-8 flex justify-center">
                    <button
                        onClick={onClose}
                        className="px-8 py-3 bg-gray-700 text-white font-semibold rounded-full hover:bg-gray-600 focus:outline-none transition-all duration-200"
                    >
                        Fechar Inventário
                    </button>
                </div>
            </div>
        </div>
    );
}
