import "../Login_Aluno/Login_aluno.css"

function Login_aluno() {
  return (
    <div className="toda-tela-content">

        <div className="div-superior-logo">
            <img src="./public/logo.svg" alt="" />
        </div>

        <div className="div-area-principal-content">
            <div className="parte-esquerda-content">
                <div className="legendas-content">

                    <p className="titulo">Bem-Vindo</p>
                    <p className="descricao">Digite o CPF e a senha do responsável</p>

                </div>
                <div className="inputs-button-content">
                    
                    <input type="text" placeholder="CPF" />
                    <input type="text" placeholder="Senha"/>
                    <button>Confirmar</button>

                </div>
            </div>
            <div className="parte-direita-content">
                <img src="" alt="" />
            </div>
        </div>

    </div>
  )
}

export default Login_aluno
