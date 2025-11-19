import { useState } from "react";
import { missoes } from '../Dados/dadosMissao';
import { MissaoCard } from '../Componentes/MissaoCard';
import { MissaoModal } from '../Componentes/MissaoModal';

export function Missao() {
  const [missaoSelecionada, setMissaoSelecionada] = useState(null);
  const [refresh, setRefresh] = useState(0); // NECESSÁRIO

  // Função correta para concluir missão e salvar no LocalStorage
  const concluirMissao = (id, titulo, imagem, resposta) => {

    let inventario = JSON.parse(localStorage.getItem("inventario")) || [];

    const figurinha = {
      id,
      titulo,
      imagem,
      respostaUsuario: resposta
    };

    const jaExiste = inventario.some((f) => f.id === id);

    if (!jaExiste) {
      inventario.push(figurinha);
      localStorage.setItem("inventario", JSON.stringify(inventario));
    }

    setMissaoSelecionada(null);
    setRefresh((r) => r + 1);
  };



  // Fechar página
  const close = () => {
    window.location.href = "http://localhost:5173/dsgo";
  };

  return (
    <section className="conteiner">
      <div className="flex w-[100%] justify-between">
        <h2>Missões</h2>
        <button onClick={close} className="bg-red-200 text-red-500">X</button>
      </div>

      <div className="missoes-grid">
        {missoes.map((m) => (
          <MissaoCard
            key={m.id}
            missao={m}
            onIniciarMissao={setMissaoSelecionada}
            refresh={refresh} // IMPORTANTE PARA FORÇAR RECARGA
          />
        ))}
      </div>

      {missaoSelecionada && (
        <MissaoModal
          missao={missaoSelecionada}
          onClose={() => setMissaoSelecionada(null)}
          onConcluir={(missao, resposta) =>
            concluirMissao(
              missao.id,
              missao.titulo,
              missao.imagem,
              resposta
            )
          }


        />
      )}

    </section>
  );
}
