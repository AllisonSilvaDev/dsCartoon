export function MissaoCard({ missao, onIniciarMissao, concluida }) {
  return (
    <article className="w-[300px] h-[200px] bg-white rounded-lg shadow-lg p-4 flex flex-col items-center justify-between hover:scale-105 transition-all duration-300 ease-in-out">
      <h3 className="text-xl font-semibold text-center text-gray-800 mb-2" id={missao.id}>
        {missao.titulo}
      </h3>
      <p className="text-gray-600 text-center mb-4">{missao.missao}</p>
      
      <button
        onClick={() => onIniciarMissao(missao)}
        disabled={concluida}
        className={`px-6 py-2 rounded-lg text-white focus:outline-none transition-all duration-300 ${concluida ? 'bg-gray-400 cursor-not-allowed' : 'bg-indigo-600 hover:bg-indigo-700'}`}
      >
        {concluida ? "Missão concluída" : "Iniciar Missão"}
      </button>
    </article>
  );
}
