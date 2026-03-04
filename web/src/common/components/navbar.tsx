import { House, Heart, Search, TextAlignJustify, Film } from 'lucide-react'

export function Navbar() {
  return (
    <nav className="fixed z-50 bg-surface w-full border-border border-t bottom-0 left-0 md:top-0 md:border-t-0 md:border-b md:bottom-auto">
      <div className="flex items-center justify-between py-3 px-5 max-w-7xl mx-auto md:py-5 md:px-7">
        <div className="hidden md:flex items-center gap-2 text-secondary">
          <Film size={32} />
          <span className="text-lg font-subtitle">MoviesDB</span>
        </div>

        <ul className="flex items-center justify-around w-full md:w-auto md:gap-6">
          <li className="flex flex-col items-center text-text-primary justify-center gap-1 transition-colors md:flex-row md:gap-2">
            <House size={24} />
            <span className="text-sm md:text-base">Home</span>
          </li>

          <li className="flex flex-col items-center justify-center text-text-primary gap-1 transition-colors md:flex-row md:gap-2">
            <TextAlignJustify size={24} />
            <span className="text-sm md:text-base">Categorias</span>
            {/* <Link to="/categories">Categorias</Link> */}
          </li>

          <li className="flex flex-col items-center justify-center text-text-primary gap-1 transition-colors md:flex-row md:gap-2">
            <Heart size={24} />
            <span className="text-sm md:text-base">Favoritos</span>
            {/* <Link to="/saved">Salvos</Link> */}
          </li>

          <li className="flex flex-col items-center justify-center text-text-primary gap-1 transition-colors md:flex-row md:gap-2">
            <Search size={24} />
            <span className="text-sm md:text-base">Pesquisar</span>
            {/* <Link to="/search">Pesquisa</Link> */}
          </li>
        </ul>
      </div>
    </nav>
  )
}
