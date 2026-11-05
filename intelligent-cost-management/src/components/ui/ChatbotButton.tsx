import { MessageSquare } from 'lucide-react'

export function ChatbotButton() {
  return (
    <button
      type="button"
      className="button chatbot-button"
      disabled
      title="O chatbot será disponibilizado em uma próxima etapa"
    >
      <MessageSquare size={17} aria-hidden="true" />
      Chatbot — em breve
    </button>
  )
}
