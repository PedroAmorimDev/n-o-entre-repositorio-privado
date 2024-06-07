import { Routes, BrowserRouter, Route } from "react-router-dom" 
import Home from "./componentes/Home"
import Header from "./componentes/Header"
import Footer from "./componentes/Footer"
import PuxarEExibirProvas from "./componentes/PuxarEExibirProvas"

function App() {

  return (
    <BrowserRouter>
    <Header logo={'QUEST.'} sobre={'Sobre'} calculadora={'Calculadora SISU'} provas={'Exames'}/>
    <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/sobre" />
      <Route path="/contato"/>
      <Route path="/provas" element={<PuxarEExibirProvas/>}/>
    </Routes>
    <Footer paragrafh={'Todos os direitos reservados'} />
    </BrowserRouter>
  )
}

export default App
