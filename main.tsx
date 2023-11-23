import './src/styles/tailwind.css'
import './index.css'

import React from 'react'
import ReactDOM from 'react-dom/client'

import App from './src/App'

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)
