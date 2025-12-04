import { useState } from "react";
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';

export function Galeria() {

  // Carrega fotos salvas no localStorage
  const [fotos, setFotos] = useState(() => {
    const salvas = localStorage.getItem("fotos");
    return salvas ? JSON.parse(salvas) : [];
  });

  // Adiciona nova foto
  const adicionarFoto = (novaFoto) => {
    const novasFotos = [...fotos, novaFoto];
    setFotos(novasFotos);
    localStorage.setItem("fotos", JSON.stringify(novasFotos));
  };

  // Limpa a galeria
  const limparGaleria = () => {
    if (!confirm("Deseja excluir todas as fotos?")) return;
    localStorage.removeItem("fotos");
    setFotos([]);
  };

  return (
    <main className="flex flex-col">
      
      {/* Tira foto */}
      <Camera onFotoTirada={adicionarFoto} />

      {/* Galeria */}
      <section>
        <h1>Galeria de Fotos</h1>

        {/* Correção: length */}
        {fotos.length === 0 && (
          <p>Nenhuma foto foi tirada ainda.</p>
        )}

        {fotos.length > 0 && (
          <ImageList sx={{ width: 500, height: 850 }} cols={3} rowHeight={164}>
            {fotos.map((f, i) => (
              <ImageListItem key={i}>
                <img
                  src={f}
                  alt={`Foto ${i + 1}`}
                  loading="lazy"
                />
              </ImageListItem>
            ))}
          </ImageList>
        )}
      </section>

      <button
        onClick={limparGaleria}
        className="relative z-50 bottom-40 bg-red-500 text-white px-4 py-2 rounded"
      >
        Limpar Galeria
      </button>
    </main>
  );
}
