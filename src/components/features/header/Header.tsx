//componentes
import { SearchInput } from "./search-input/SearchInput"
import DialogSearchCep from "./dialog-search-cep/DialogSearchCep"
import { Button } from "@/components/ui/button"

//imagens
import logo from "../../../../public/assets/images/logo.png"
import carrinho from "../../../../public/assets/images/carrinho.png"
import MobileMenuBar from "./mobile-menu-bar/MobileMenuBar"

export default function Header() {
    return (
        <header className="flex flex-col w-full">
            {/* Primeira linha */}
            <div className="bg-white w-full py-2 px-4 flex items-center justify-center">
                <div className="container flex flex-col md:flex-row items-center justify-between w-full gap-4">
                    {/* Logo - ajuste para mobile */}
                    <div className="w-28 md:w-[7.5%]">
                        <img src={logo} alt="logo" className="w-full"/>
                    </div>
                    
                    {/* Search - ocupa mais espaço em mobile */}
                    <div className="w-full md:w-[60%] flex items-center justify-center">
                        <SearchInput />
                    </div>
                    
                    {/* Menu de ícones */}
                    <div className="flex items-center justify-end gap-4 w-full md:w-[30%]">
                        {/* Itens reduzidos para mobile */}
                        <div className="hidden md:block md:w-[33%]">
                            <Button variant="ghost" className="text-xs md:text-sm p-1 md:p-0 block">
                                Olá, faça seu login<br />
                                <span className="font-semibold">Entrar / Cadastrar</span>
                            </Button>
                        </div>

                        <div className="hidden md:block md:w-[33%]">
                            <Button variant="ghost" className="text-xs md:text-sm p-1 md:p-0 block">
                                Acompanhe seu<br />
                                <span className="font-semibold">Pedido</span>
                            </Button>
                        </div>
                        
                        <div className="relative w-10 hidden md:flex flex-col items-center justify-center">
                            <img src={carrinho} alt="carrinho" className="w-full"/>
                            <span className="absolute -top-1 -right-1 bg-red-600 text-white rounded-full w-5 h-5 flex items-center justify-center text-xs font-bold">
                                0
                            </span>
                        </div>
                    </div>
                </div>
            </div>
            
            {/* Segunda linha - menu */}
            <div className="bg-gray-900 w-full py-2 px-4 hidden md:flex items-center justify-center">
                <div className="container flex flex-col md:flex-row items-center justify-between gap-4">
                    <DialogSearchCep />
                    
                    <nav className="w-full overflow-x-auto flex items-center justify-center">
                        <ul className="flex gap-2 md:gap-4 min-w-max">
                            {['Home', 'Loja', 'Serviço', 'Sobre Nós', 'Contato'].map((item) => (
                                <li key={item} className="text-white text-sm md:text-base px-2 py-1 hover:font-bold hover:border-t-2 hover:border-b-2 border-t-2 border-b-2 border-gray-900 hover:border-white pb-1 cursor-pointer transition-all">
                                    {item}
                                </li>
                            ))}
                        </ul>
                    </nav>
                    
                    <p className="text-white text-sm md:text-base font-semibold hidden md:block whitespace-nowrap">
                        O que você precisa, nós tem!
                    </p>
                </div>
            </div>

            {/* Botão para o menu mobile */}
            <MobileMenuBar />
        </header>
    )
}