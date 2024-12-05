import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
<<<<<<< HEAD
import { RouterProvider } from 'react-router-dom'
import { router } from './routes.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <RouterProvider router = {router} />
=======

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
>>>>>>> 01d0dd3a73190499418607706a3e23dc97614ae9
  </StrictMode>,
)
