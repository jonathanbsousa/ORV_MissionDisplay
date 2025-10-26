export function MissaoCard({ missao, onIniciarMissao, concluida }) {
  return (
    <article className='missao-card' aria-labelledby={`titulo-${missao.id}`}>
      <h3 id={`titulo-${missao.id}`}>{missao.titulo}</h3>
      <p>{missao.missao}</p>
      <button
        onClick={() => onIniciarMissao(missao)}
        disabled={concluida}
        aria-disabled={concluida}
        aria-label={concluida
          ? `Missão ${missao.titulo} concluída`
          : `Iniciar missão ${missao.titulo}`
        }
      >
        {concluida ? "Missão concluída" : "Iniciar Missão"}
      </button>
    </article>
  )
}
