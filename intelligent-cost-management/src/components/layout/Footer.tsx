import { Link } from 'react-router-dom'
import { ArrowUpRight } from 'lucide-react'
import { Brand } from './Brand'
export function Footer() {
  return (
    <footer className="site-footer">
      <div className="container">
        <div className="footer-top">
          <div>
            <Brand />
            <p>
              Projeto de automação interna de backoffice.
              <br />
              Ferramentas conectadas e apoio às rotinas administrativas.
            </p>
          </div>
          <div>
            <span className="footer-label">O PROJETO</span>
            <Link to="/sobre">Sobre o projeto</Link>
            <Link to="/beneficios">Benefícios</Link>
            <Link to="/tecnologias">Tecnologias</Link>
          </div>
          <div>
            <span className="footer-label">CONSULTAS</span>
            <Link to="/dashboard">
              Dashboard <ArrowUpRight size={13} />
            </Link>
            <Link to="/custos">
              Catálogo de custos <ArrowUpRight size={13} />
            </Link>
            <Link to="/demonstracao">Demonstração do projeto</Link>
          </div>
        </div>
        <div className="footer-bottom">
          <span>© 2026 Gestão de custos</span>
          <span>Projeto no contexto 2RPnet / Inovanet Tech</span>
          <span className="demo-dot">Ambiente demonstrativo</span>
        </div>
      </div>
    </footer>
  )
}
