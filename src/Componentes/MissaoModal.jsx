import { useEffect, useState, useRef } from "react";
import sucesso from "../assets/win.png";
import erro from "../assets/raios.png";

export function MissaoModal({ missao, onClose, onConcluir }) {
  const [resposta, setResposta] = useState("");
  const [resultado, setResultado] = useState(null);
  const [status, setStatus] = useState(null);
  const inputRef = useRef(null);

  useEffect(() => {
    // foco inicial no campo de resposta
    inputRef.current?.focus();
  }, []);

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
      setTimeout(() => onConcluir(missao.id), 1000);
    } else {
      setResultado("Resposta incorreta. Tente novamente!");
      setStatus("erro");
    }
  };

  return (
    <dialog 
      open 
      className="modal"
      role="dialog"
      aria-labelledby="titulo-missao"
      aria-describedby="descricao-missao"
      aria-modal="true"
    >
      <h2 id="titulo-missao">{missao.titulo}</h2>
      <p id="descricao-missao">{missao.descricao}</p>

      <label htmlFor="resposta">Digite sua resposta</label>
      <input
        ref={inputRef}
        className="caixaTexto"
        id="resposta"
        type="text"
        placeholder="Digite sua resposta..."
        value={resposta}
        onChange={(e) => setResposta(e.target.value)}
        required
      />

      <div className="modal-botoes">
        <button onClick={verificarResposta}>Enviar</button>
        <button onClick={onClose}>Fechar</button>
      </div>

      {resultado && (
        <div 
          className="resultado" 
          role="status" 
          aria-live="polite"
        >
          <p>{resultado}</p>
          {status === "sucesso" && (
            <img
              src={sucesso}
              alt="Missão concluída com sucesso"
              width="100"
            />
          )}
          {status === "erro" && (
            <img
              src={erro}
              alt="Resposta incorreta"
              width="100"
            />
          )}
        </div>
      )}
    </dialog>
  );
}
