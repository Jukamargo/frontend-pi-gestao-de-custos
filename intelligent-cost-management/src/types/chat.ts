export interface ChatReply {
  text: string
  sources: readonly string[]
}

export interface ChatMessage extends ChatReply {
  id: number
  role: 'user' | 'assistant'
}

// Um adaptador de API pode implementar este contrato sem mudar a conversa.
export interface ChatGateway {
  ask(question: string): Promise<ChatReply>
}
