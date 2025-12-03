import "../Login_Principal/Login_Principal.css"

function Login_Principal() {
    return(
        <div className="telaTotal">
            <header>
                <nav>
                    <img src="/img/Foto-Logo.svg" alt="" />
                </nav>
            </header>
            <div>
                <section className="Container-login">
                    <h1>Bem-Vindo</h1>
                    <p>Para começar, nos diga quem está acessando.</p>
                    <a href="./Login_Responsavel">Responsavel</a>
                    <a href="./Login_Aluno">Aluno</a>
                </section>
                <section className="elemento-visual">
                    <img src="/img/elemento-login.svg" alt="" />
                </section>
                <section className="Imagem">
                    <img src="/img/Foto-login-hackaton-Principal.svg" alt="" />
                </section>
            </div>  
        </div>
    )
}

export default Login_Principal