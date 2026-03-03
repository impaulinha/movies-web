import { Outlet } from 'react-router-dom'
import { Navbar } from '../components/navbar'

export function MainLayout() {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main className="max-w-7xl mx-auto p-6 pb-24 md:pb-6 md:pt-24">
        <Outlet />
      </main>
    </div>
  )
}
