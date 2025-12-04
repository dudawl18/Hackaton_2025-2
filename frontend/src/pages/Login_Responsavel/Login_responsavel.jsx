import { useState } from "react"
import { useNavigate } from 'react-router-dom';
import "../Login_Responsavel/Login_responsavel.css"


function Login_responsavel() {
  const [cpfResponsavel, setCpfResponsavel] = useState("")
  const [senhaResponsavel, setSenhaResponsavel] = useState("")
  const navigate = useNavigate();

  const ConfirmarLogin = () => {
    
    if (cpfResponsavel.trim() === "" || senhaResponsavel.trim() === "") {
      alert("Por favor, preencha todos os campos!")
      return
    }
    navigate("/")
  }

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
                    
                    <input 
                    type="text" 
                    placeholder="CPF" 
                    value={cpfResponsavel}
                      onChange={(e) => setCpfResponsavel(e.target.value)}
                      />

                    <input 
                    type="password" 
                    placeholder="Senha"
                    value={senhaResponsavel}
                    onChange={(e) => setSenhaResponsavel(e.target.value)}
                    />

                    <button onClick={ConfirmarLogin}>Confirmar</button>

                </div>
            </div>
            <div className="elemento-cinza-content">
                <img src="/img/elemento-login.svg" alt="" />
            </div>
            <div className="parte-direita-content">
                <img src="/img/Foto-login-hackaton-responsaveis.svg" alt="" />
            </div>

            
        </div>

    </div>
  )
}

export default Login_responsavel
