import { MessageSquare } from 'lucide-react'

export function ChatbotButton() {
  return (
    <button
      type="button"
      className="button chatbot-button"
      disabled
      title="O acesso ao chatbot externo será disponibilizado após a integração"
    >
      <MessageSquare size={17} aria-hidden="true" />
      Chatbot — em breve
    </button>
  )
}
