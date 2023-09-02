import './App.css'
import Home from './components/Home'
import Header from './components/Header'
import Footer from './components/Footer'
import Produtos from './components/Produtos'
import { useState } from 'react'

function App() {

  const [nome, setNome] = useState('Luis')
  const [numState, setNumState] = useState(5)

  let numVar = 5

  const adicionar = ()=>{
    setNumState(numState + 5)
    numVar += 5
  }

  const mudar = ()=>{
    setNome('Rafael')
  }

  return (
    <>
      <Header/>
      <h2>Nome: {nome}</h2>
      <button onClick={mudar}>Mudar</button>
      <p>Número State = {numState}</p>
      <p>Número Variavel = {numVar}</p>
      <button onClick={adicionar}>Aumentar</button>
      <Home num = {numState} adicionar = {adicionar}/>
      <Produtos/>
      <Footer/>
    </>
  )
}

export default App

/*<div className='div-app'>
      //  {{}} obj javaScript
      <h1 style={{color: 'blue', fontSize:'3em'}}>Componente App</h1>
      <p style={paragr1}>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
    </div>
*/

     // const paragr1 = {
  //   color: "darkblue",
  //   fontSize: '1.5em',
  //   textAlign: 'justify'
  // }
