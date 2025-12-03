import { createBrowserRouter } from "react-router-dom"
import Tela_inicial from "../pages/Tela_Inicial/Tela_inicial"
import Login_responsavel from "../pages/Login_Responsavel/Login_responsavel"
import Login_aluno from "../pages/Login_Aluno/Login_aluno"


const router = createBrowserRouter([
    { path: `/`, element: <Tela_inicial /> },
    { path: `/Login_responsavel`, element: <Login_responsavel/> },
    { path: `/Login_aluno`, element: <Login_aluno/> },
])

export default router