import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import { BrowserRouter } from 'react-router-dom'
import createDefaultTheme from './theme/index.ts'
import { ThemeProvider } from '@mui/material'

const defaultTheme = createDefaultTheme()

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <BrowserRouter>
      <ThemeProvider theme={defaultTheme}>
        <App />
      </ThemeProvider>
    </BrowserRouter>
  </React.StrictMode>
)
