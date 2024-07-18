import React from 'react'
import ReactDOM from 'react-dom/client'
// Document Object Model (representação do html através do JS)
//quando importa o react-dom integrando o rect para funcionar no ambiente web (browser)
import { App } from './App.js'


ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)

