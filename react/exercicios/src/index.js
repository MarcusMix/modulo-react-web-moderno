import React from 'react'
import ReactDOM from 'react-dom'

import Primeiro from './componentes/Primeiro'
import BomDia from './componentes/BomDia'

// import  BoaTarde, {  BoaNoite } from './componentes/Multiplos'
import  Multi from './componentes/Multiplos'

// const elemento = <h1>React</h1>

// ReactDOM.render(<Primeiro/>, document.getElementById('root'))
ReactDOM.render(
        <div>
            <Multi.BoaNoite nome=" Marcus"/>
            <Multi.BoaTarde nome=" marcus"/>
        </div>
    , document.getElementById('root'))