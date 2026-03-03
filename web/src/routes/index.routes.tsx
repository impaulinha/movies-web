import { createBrowserRouter } from 'react-router-dom'
import { MainLayout } from '@/common/layout/main-layout'

export const Routes = createBrowserRouter([
  {
    path: '/',
    element: <MainLayout />,
    children: [{}],
  },
])
