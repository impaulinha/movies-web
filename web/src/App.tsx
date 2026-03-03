import './common/styles/theme.css'
import { RouterProvider } from 'react-router-dom'
import { Routes } from './routes/index.routes'

export default function App() {
  return <RouterProvider router={Routes} />
}
