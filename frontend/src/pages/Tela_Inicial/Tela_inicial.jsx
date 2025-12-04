import "../Tela_Inicial/Tela_Inicial.css"

function Tela_inicial() {
  return (
    <div className="toda-tela-inicial-content">
      <nav className="navbar-tela-inicio">
        <img src="/img/Foto-Logo.svg" alt="" />

        <div className="topicos-nav-content">
          <a href="/">Início</a>
          <a href="/">Sobre Nós</a>
          <a href="./Login_Principal">Login</a>
        </div>
      </nav>

      <div className="area-principal-tela-inicio-content">
        <div className="parte-superior-content">
          <img src="/img/Banner-home.svg" alt="" />
        </div>

        <div className="parte-inferior-content">
          <div className="parte-esquerda-tela-inicio-content">
            <p>calendario</p>
          </div>

          <div className="parte-direita-tela-inicio-content">
            <p className="titulo-modulos">Conheça os módulos</p>

            <div className="grupo-cards-horarios-content">

              <div className="card-horario-content">
                <div className="card-img-content">
                  <img src="/img/foto-card.svg" alt="" />
                </div>
                <p className="card-titulo">Contato</p>
              </div>

              <div className="card-horario-content">
                <div className="card-img-content">
                  <img src="/img/foto-card.svg" alt="" />
                </div>
                <p className="card-titulo">Desempenho</p>
              </div>

              <div className="card-horario-content">
                <div className="card-img-content">
                  <img src="/img/foto-card.svg" alt="" />
                </div>
                <p className="card-titulo">Matérias</p>
              </div>

              <div className="card-horario-content">
                <div className="card-img-content">
                  <img src="/img/foto-card.svg" alt="" />
                </div>
                <p className="card-titulo">Professores</p>
              </div>

              <div className="card-horario-content">
                <div className="card-img-content">
                  <img src="/img/foto-card.svg" alt="" />
                </div>
                <p className="card-titulo">Avaliações</p>
              </div>

              <div className="card-horario-content">
                <div className="card-img-content">
                  <img src="/img/foto-card.svg" alt="" />
                </div>
                <p className="card-titulo">Matrícula</p>
              </div>

              <div className="card-horario-content">
                <div className="card-img-content">
                  <img src="/img/foto-card.svg" alt="" />
                </div>
                <p className="card-titulo">Requerimentos</p>
              </div>

            </div>
          </div>

        </div>



      </div>
    </div>
  )
}

export default Tela_inicial
