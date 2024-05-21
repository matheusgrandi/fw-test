import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import { BrowserRouter } from 'react-router-dom'
import createDefaultTheme from './theme/index.ts'
import { ThemeProvider } from '@mui/material'
import './amplify/amplify-config.ts'
import { AuthProvider } from './contexts/AuthContext.tsx'

const defaultTheme = createDefaultTheme()

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <BrowserRouter>
      <ThemeProvider theme={defaultTheme}>
        <AuthProvider>
          <App />
        </AuthProvider>
      </ThemeProvider>
    </BrowserRouter>
  </React.StrictMode>
)
