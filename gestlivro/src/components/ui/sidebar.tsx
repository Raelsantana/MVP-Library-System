import { Bell, Home, Settings, Users } from 'lucide-react'
import { Avatar } from './avatar'

function Sidebar() {
    return (
        <div className="w-[230px] bg-white border-r border-[#dde1e6] flex flex-col">
            <div className="p-6">
                <h1 className="text-2xl font-bold text-[#4d5358]">GestLivro</h1>
                <p className="text-xs text-[#697077]">O seu sistema de gestão bibliotecária!</p>
            </div>
            <nav className="mt-6 flex-1">
                <a
                    href="/acervo"
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
                <a href="/usuarios" className="flex items-center gap-3 px-6 py-3 text-[#4d5358] hover:bg-[#f2f4f8]">
                    <Users size={20} />
                    <span>Usuários</span>
                </a>
            </nav>
        </div>
    )
}

export default Sidebar