import { ArrowUpRight } from 'lucide-react'
import { Button } from '../components/ui/Button'
export default function NotFound() {
  return (
    <div className="container not-found">
      <span className="eyebrow">ERRO 404</span>
      <h1>Este caminho ainda não existe.</h1>
      <p>Continue explorando a plataforma a partir da página inicial.</p>
      <Button to="/">
        Voltar ao início <ArrowUpRight size={17} />
      </Button>
    </div>
  )
}
