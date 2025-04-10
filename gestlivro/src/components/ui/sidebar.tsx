import { Bell, Home, Settings, Users } from 'lucide-react'
import { Avatar } from './avatar'

function Sidebar() {
  return (
      <div className="w-[230px] bg-white border-r border-[#dde1e6] flex flex-col">
        <div className="p-6">
          <h1 className="text-xl font-medium text-[#4d5358]">GestLivro</h1>
          <p className="text-xs text-[#697077]">o melhor</p>
        </div>

        <div className="flex items-center justify-between px-6 py-3">
          <Avatar className="h-8 w-8 bg-[#f2f4f8]">
            <div className="text-[#697077]">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <circle cx="12" cy="8" r="5" />
                <path d="M20 21a8 8 0 0 0-16 0" />
              </svg>
            </div>
          </Avatar>

          <div className="flex items-center gap-4">
            <button className="text-[#4d5358]">
              <Settings size={20} />
            </button>
            <div className="relative">
              <Bell size={20} className="text-[#4d5358]" />
              <span className="absolute -top-1 -right-1 bg-[#da1e28] text-white text-xs rounded-full h-4 w-4 flex items-center justify-center">
                1
              </span>
            </div>
          </div>
        </div>

        <nav className="mt-6 flex-1">
          <a href="#" className="flex items-center gap-3 px-6 py-3 text-[#4d5358] hover:bg-[#f2f4f8]">
            <Home size={20} />
            <span>Home</span>
          </a>
          <a
            href="#"
            className="flex items-center gap-3 px-6 py-3 bg-[#f2f4f8] text-[#001d6c] border-l-4 border-[#0f62fe]"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M4 19.5v-15A2.5 2.5 0 0 1 6.5 2H20v20H6.5a2.5 2.5 0 0 1 0-5H20" />
            </svg>
            <span>Acervo</span>
          </a>
          <a href="#" className="flex items-center gap-3 px-6 py-3 text-[#4d5358] hover:bg-[#f2f4f8]">
            <Users size={20} />
            <span>Usuários</span>
          </a>
        </nav>
      </div>
  )
}

export default Sidebar