import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import NoticeProvider from './context/NoticeContext.jsx'
import RoleProvider from './context/RoleContext.jsx'

createRoot(document.getElementById('root')).render(
  <RoleProvider>
  <NoticeProvider>
  <StrictMode>
    <App />
  </StrictMode>,
</NoticeProvider>
</RoleProvider>
)
