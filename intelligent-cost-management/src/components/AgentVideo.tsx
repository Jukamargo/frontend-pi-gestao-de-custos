import { CirclePlay } from 'lucide-react'

export function AgentVideo() {
  return (
    <div
      className="video-placeholder"
      aria-label="Espaço reservado para o vídeo real de demonstração do agente"
    >
      <div className="video-top">
        <span>Apresentação do chatbot</span>
        <span>Em breve</span>
      </div>
      <span className="video-play">
        <CirclePlay size={49} strokeWidth={1.3} />
      </span>
      <h3>Demonstração em preparação</h3>
      <p>O vídeo ainda não foi disponibilizado.</p>
      <span className="video-footnote">Gestão de custos / Demonstração</span>
    </div>
  )
}
