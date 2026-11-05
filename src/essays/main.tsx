import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import '../index.css'
import EssaysApp from './EssaysApp.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <EssaysApp />
  </StrictMode>,
)
