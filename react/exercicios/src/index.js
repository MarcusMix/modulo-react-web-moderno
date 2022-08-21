import React from 'react'
import ReactDOM from 'react-dom'

// import Primeiro from './componentes/Primeiro'
// import BomDia from './componentes/BomDia'

// import  BoaTarde, {  BoaNoite } from './componentes/Multiplos'
// import  Multi from './componentes/Multiplos'
// import  Saudacao from './componentes/Saudacao'
import Pai from './componentes/Pai'

// const elemento = <h1>React</h1>

// ReactDOM.render(<Primeiro/>, document.getElementById('root'))
ReactDOM.render(
        <div>
            {/* <Multi.BoaNoite nome=" Marcus"/>
            <Multi.BoaTarde nome=" marcus"/> */}
            {/* <Saudacao tipo="bom dia" nome="Marcus"/> */}
            <Pai nome="Paulo" sobrenome="Sandi">
                {/* Como passo os componentes Filhos aqui? */}
                
            </Pai>
        </div>
    , document.getElementById('root'))