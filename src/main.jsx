import React from 'react'
import ReactDOM from 'react-dom/client'
import MainComponent from './MainComponent'
import ContadorApp from './ContadorApp'
import ListadoApp from './ListadoApp'
import './styles/main.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    {/* <MainComponent nombre='Mateo' apellido="Andrade" edad={44} /> */}
    {/* <ContadorApp value={0} /> */}
    <ListadoApp />
  </React.StrictMode>
)
