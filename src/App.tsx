<<<<<<< HEAD

import './App.css'
import { RouterProvider } from 'react-router-dom'
import { router } from './routes'


function App() {

  return (
    <RouterProvider router = {router} />
  )
=======
import './App.css'

import { RouterProvider } from 'react-router'

import { router } from './routes'

function App() {
  return <RouterProvider router={router} />
>>>>>>> 01d0dd3a73190499418607706a3e23dc97614ae9
}

export default App
