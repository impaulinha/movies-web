import { createBrowserRouter } from 'react-router-dom'

import { Categories } from '@/app/categories/screens/categories'
import { Favorites } from '@/app/favorites/screens/favorites'
import { MainLayout } from '@/common/layout/main-layout'
import { Search } from '@/app/search/screens/search'
import { Home } from '@/app/home/screens/home'

export const Routes = createBrowserRouter([
  {
    path: '/',
    element: <MainLayout />,
    children: [
      {
        path: '/',
        element: <Home />,
      },
      {
        path: '/categorias',
        element: <Categories />,
      },
      {
        path: '/favoritos',
        element: <Favorites />,
      },
      {
        path: '/pesquisar',
        element: <Search />,
      },
    ],
  },
])
