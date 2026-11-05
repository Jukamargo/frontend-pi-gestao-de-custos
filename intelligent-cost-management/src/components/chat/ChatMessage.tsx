import type { ChatMessage } from '../../types/chat'

export function ChatMessageItem({ message }: { message: ChatMessage }) {
  return (
    <li className={`chat-message chat-message--${message.role}`}>
      <span className="chat-author">
        {message.role === 'user' ? 'Você' : 'Assistente'}
      </span>
      <p>{message.text}</p>
      {message.sources.length > 0 && (
        <ul className="chat-sources" aria-label="Fontes da resposta">
          {message.sources.map((source) => (
            <li key={source}>{source}</li>
          ))}
        </ul>
      )}
    </li>
  )
}
