import { use, useState } from "react";
import { Camera } from "../Componentes/Camera";
import Box from '@mui/material/Box';
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import ImageListItemBar from '@mui/material/ImageListItemBar';

export function Galeria() {
  const [fotos, setFotos] = useState(() => {
    const salvas = localStorage.getItem("fotos");
    return salvas ? JSON.parse(salvas) : [];
  });

  const adicionarFotos = (novaFoto) => {
    const novasFotos = [...fotos, novaFoto];
    setFotos(novasFotos);
    localStorage.setItem("Fotos", JSON.stringify(novasFotos));
  };

  const limparGaleria = () => {
    if (!confirm("Deseja excluir todas as suas fotos")) return;
    localStorage.removeItem("fotos");
    setFotos([]);
  };

  return (
    <main>
      <Camera onFotoTirada={adicionarFotos} />
      <button onClick={limparGaleria}>Limpar Galeria</button>

      <section>
        <h2>Galeria de Fotos</h2>
        {fotos.leght === 0 && <p></p>}
        <Box sx={{ width: 500, height: 450, overflowY: "scroll" }}>
          <ImageList variant="masonry" cols={3} gap={8}>
            {fotos.map((f, i) => (
              <ImageListItem key={i}>
                <img
                  src={f}
                  alt={`Foto ${i + 1}`}
                  loading="lazy"
                />
                <ImageListItemBar position="below" title={f} />
              </ImageListItem>
            ))}
          </ImageList>
        </Box>
      </section>
    </main>
  );
}
