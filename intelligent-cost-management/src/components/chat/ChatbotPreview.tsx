import { ArrowRight, MessageSquare } from 'lucide-react'
import { Link } from 'react-router-dom'
import { demoQuestions, getDemoReply } from '../../services/chatService'
import { ChatMessageItem } from './ChatMessage'

const question = demoQuestions[0]
const reply = getDemoReply(question)

export function ChatbotPreview() {
  return (
    <div
      className="chat-surface chatbot-preview"
      aria-label="Prévia demonstrativa do chatbot"
    >
      <div className="chat-heading">
        <span>
          <MessageSquare size={18} aria-hidden="true" />
          Chatbot do projeto
        </span>
        <span className="chat-demo-label">Prévia local</span>
      </div>
      <ol className="chat-preview-messages" aria-label="Exemplo de conversa">
        <ChatMessageItem
          message={{ id: 1, role: 'user', text: question, sources: [] }}
        />
        <ChatMessageItem message={{ id: 2, role: 'assistant', ...reply }} />
      </ol>
      <Link to="/demonstracao" className="chat-preview-link">
        Testar chatbot <ArrowRight size={16} />
      </Link>
    </div>
  )
}
