import { useState } from 'react'
import style from './App.module.css'

function App() {

  const[numero1, setNumero1] = useState()
  const[numero2, setNumero2] = useState()
  const[respSoma, setRespSoma] = useState()
  const[respSub, setRespSub] =useState()
  const[respMult, setRespMult] =useState()
  const[respDiv, setRespdiv] =useState()

  const soma= ()=> setRespSoma(parseFloat(numero1) + parseFloat(numero2))
  const subtracao = () => setRespSub(parseFloat(numero1) + parseFloat(numero2))
  const multiplicacao = () => setRespMult(parseFloat(numero1) + parseFloat(numero2))
  const divisao = () => setRespdiv(parseFloat(numero1) + parseFloat(numero2))
  
  return (
    <>
      <h1>CALCULADORA</h1>
      <div>
        <label htmlFor="n1">digite um numero</label>
        <input type="number" id='n1' value={numero1} onChange={(e) => setNumero1(e.target.value)}/>
      </div>
      <div>
        <label htmlFor="n2">digite um numero</label>
        <input type="number" id='n2' value={numero2} onChange={(e) => setNumero2(e.target.value)} />
      </div>

      <div>
           <div>
            <h2>RESULTADO DA SOMA</h2>
            {respSoma}
            <button onClick={soma}>SOMAR</button>
           </div>

           <div>
             <h2>RESULTADO DA SUBTRACAO</h2>
             {respSub}
             <button onClick={subtracao}>SUBTRAIR</button>
           </div>

           <div>
            <h2>RESULTADO DA MULTIPLICACAO</h2>
            {respMult}
            <button onClick={multiplicacao}>MULTIPLICAR</button>
           </div>

           <div>
            <h2>RESULTADO DA DIVISAO</h2>
            {respDiv.toFixed(2)}
            <button onClick={divisao}>DIVIDIR</button>
           </div>



      </div>
    </>
  )
}

export default App
