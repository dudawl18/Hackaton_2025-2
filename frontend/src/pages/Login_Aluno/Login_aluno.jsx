import "../Login_Aluno/Login_aluno.css"
import { useState } from "react"
import { useNavigate } from 'react-router-dom';

function Login_aluno() {
      const [cpfAluno, setCpfAluno] = useState("")
      const [senhaAluno, setSenhaAluno] = useState("")
      const navigate = useNavigate();
    
      const ConfirmarLogin = () => {
        
        if (cpfAluno.trim() === "" || senhaAluno.trim() === "") {
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
                    <p className="descricao">Digite o CPF e a senha do aluno</p>

                </div>
                <div className="inputs-button-content">
                    
                    <input 
                    type="text" 
                    placeholder="CPF" 
                    value={cpfAluno}
                      onChange={(e) => setCpfAluno(e.target.value)}/>

                    <input 
                    type="password" 
                    placeholder="Senha"
                    value={senhaAluno}
                    onChange={(e) => setSenhaAluno(e.target.value)}
                    />
                    <button onClick={ConfirmarLogin}>Confirmar</button>

                </div>
            </div>
            <div className="elemento-cinza-content">
                <img src="/img/elemento-login.svg" alt="" />
            </div>
            <div className="parte-direita-content">
                <img src="/img/Foto-login-hackaton-aluno.svg" alt="" />
            </div>

            
        </div>

    </div>
  )
}

export default Login_aluno
