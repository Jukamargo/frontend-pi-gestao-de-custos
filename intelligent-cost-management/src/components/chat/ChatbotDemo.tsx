import { useEffect, useId, useRef, useState, type FormEvent } from 'react'
import { MessageSquare, RotateCcw, Send } from 'lucide-react'
import { demoChatGateway, demoQuestions } from '../../services/chatService'
import type { ChatGateway, ChatMessage } from '../../types/chat'
import { ChatMessageItem } from './ChatMessage'

const welcome: ChatMessage = {
  id: 0,
  role: 'assistant',
  text: 'Consulte as rotinas e ferramentas mapeadas ou um custo da base fictícia. Esta conversa é uma demonstração local, sem conexão aos sistemas externos.',
  sources: [],
}

export function ChatbotDemo({
  gateway = demoChatGateway,
}: {
  gateway?: ChatGateway
}) {
  const id = useId()
  const [messages, setMessages] = useState<ChatMessage[]>([welcome])
  const [question, setQuestion] = useState('')
  const [sending, setSending] = useState(false)
  const nextId = useRef(1)
  const log = useRef<HTMLDivElement>(null)
  const form = useRef<HTMLFormElement>(null)

  useEffect(() => {
    if (log.current) log.current.scrollTop = log.current.scrollHeight
  }, [messages])

  async function ask(value: string) {
    const text = value.trim()
    if (!text || sending) return
    setQuestion('')
    setSending(true)
    const userMessage: ChatMessage = {
      id: nextId.current++,
      role: 'user',
      text,
      sources: [],
    }
    setMessages((current) => [...current, userMessage])
    try {
      const reply = await gateway.ask(text)
      const message: ChatMessage = {
        id: nextId.current++,
        role: 'assistant',
        ...reply,
      }
      setMessages((current) => [...current, message])
    } catch {
      const errorMessage: ChatMessage = {
        id: nextId.current++,
        role: 'assistant',
        text: 'Não foi possível obter a resposta. Tente enviar a pergunta novamente.',
        sources: [],
      }
      setMessages((current) => [...current, errorMessage])
    } finally {
      setSending(false)
    }
  }

  function submit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault()
    void ask(question)
  }

  return (
    <section
      className="chat-surface chatbot-demo"
      aria-labelledby={`${id}-heading`}
    >
      <div className="chat-heading">
        <span id={`${id}-heading`}>
          <MessageSquare size={18} aria-hidden="true" />
          Chatbot demonstrativo
        </span>
        <button
          type="button"
          className="icon-button"
          aria-label="Limpar conversa"
          title="Nova conversa"
          disabled={sending}
          onClick={() => {
            setMessages([welcome])
            setQuestion('')
          }}
        >
          <RotateCcw size={17} aria-hidden="true" />
        </button>
      </div>
      <p className="chat-demo-note">
        Respostas locais · fontes indicadas em cada resposta
      </p>
      <div
        ref={log}
        className="chat-log"
        role="log"
        aria-label="Histórico da conversa"
        aria-live="polite"
        aria-relevant="additions"
        aria-busy={sending}
        tabIndex={0}
      >
        <ol>
          {messages.map((message) => (
            <ChatMessageItem key={message.id} message={message} />
          ))}
        </ol>
      </div>
      <div className="chat-suggestions" aria-label="Sugestões de perguntas">
        {demoQuestions.map((prompt) => (
          <button
            type="button"
            key={prompt}
            disabled={sending}
            onClick={() => void ask(prompt)}
          >
            {prompt}
          </button>
        ))}
      </div>
      <form ref={form} className="chat-form" onSubmit={submit}>
        <label htmlFor={`${id}-question`} className="sr-only">
          Sua pergunta
        </label>
        <textarea
          id={`${id}-question`}
          rows={2}
          maxLength={500}
          placeholder="Pergunte sobre processos, ferramentas ou custos…"
          value={question}
          onChange={(event) => setQuestion(event.target.value)}
          onKeyDown={(event) => {
            if (
              event.key === 'Enter' &&
              !event.shiftKey &&
              !event.nativeEvent.isComposing
            ) {
              event.preventDefault()
              form.current?.requestSubmit()
            }
          }}
        />
        <button
          type="submit"
          className="button button-primary"
          disabled={!question.trim() || sending}
          aria-label="Enviar pergunta"
        >
          <Send size={17} aria-hidden="true" />
          <span>Enviar</span>
        </button>
      </form>
      <p className="chat-keyboard-note">
        Enter para enviar · Shift + Enter para uma nova linha
      </p>
    </section>
  )
}
