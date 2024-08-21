'use client'
import {
    Sheet,
    SheetContent,
    SheetTrigger,
} from "@/components/ui/sheet"
import { PanelBottom, Package, Home, Projector, Contact, AlignHorizontalDistributeCenter } from "lucide-react";
import { useState } from "react";
import { Button } from "./ui/button";


export function Header() {

    const [selectedId, setSelectedId] = useState<string>('');
    const [isSheetOpen, setIsSheetOpen] = useState<boolean>(false);

    const handleScrollToId = (id: string) => {
        const element = document.getElementById(id);
        if (element) {
            // Fechar o Sheet com um delay para garantir que a rolagem ocorra corretamente
            setIsSheetOpen(false);
            setTimeout(() => {
                element.scrollIntoView({ behavior: 'smooth' });
            }, 300); // Ajuste o delay conforme necessário
        }
        setSelectedId(id);
    };

    return (
        <div>

            <div className="flex justify-between items-center px-10 py-4 text-white bg-gray-500">

                <h2 className="text-2xl font-bold">ProPage</h2>

               <aside className="sm:flex hidden items-center gap-x-4 z-10">
                    <ul className="flex  gap-x-4 text-white">
                        <li className={`text-white cursor-pointer ${selectedId === 'home' ? 'border-b-2 text-white' : ''}`} onClick={() => handleScrollToId('home')}>Home</li>
                        <li className={`text-white cursor-pointer ${selectedId === 'about' ? 'border-b-2 text-white' : ''}`} onClick={() => handleScrollToId('about')}>Sobre</li>
                        <li className={`text-white cursor-pointer ${selectedId === 'service' ? 'border-b-2 text-white' : ''}`} onClick={() => handleScrollToId('service')}>Serviços</li>
                        <li className={`text-white cursor-pointer ${selectedId === 'contact' ? 'border-b-2 text-white' : ''}`} onClick={() => handleScrollToId('contact')}>Contatos</li>
                    </ul>
                    <div className="flex items-center gap-x-4">
                        <button className="px-8 py-2 bg-white text-gray-800 hover:bg-white/70">Entrar</button>
                        <button className="px-8 py-2 bg-black text-white hover:bg-black/70">Cadastrar</button>
                    </div>
                </aside>
            
            <div className='sm:hidden flex flex-col sm:gap-4 sm:py-4 sm:pl-14'>
                <header className='sticky top-0 z-30 flex h-14 items-center gap-4 sm:static
                sm:h-auto sm:border-0 sm:bg-transparent sm:px-6
                '>
                    <Sheet open={isSheetOpen} onOpenChange={setIsSheetOpen}>
                        <SheetTrigger asChild>

                            <Button size="icon"  className='sm:hidden bg-transparent'>
                                <PanelBottom className='w-5 h-5' />
                                <span className='sr-only'>Abrir / Fechar menu</span>
                            </Button>

                        </SheetTrigger>

                        <SheetContent side="left" className="sm:max-w-x">
                            <nav className='grid gap-6 text-lg font-medium'>
                                <div
                                    className='flex h-10 w-10 bg-primary rounded-full text-lg
                                        items-center justify-center text-primary-foreground md:text-base
                                        gap-2'
                                >
                                    <Package className='w-5 h-5 transition-all' />
                                    <span className='sr-only'>Logo do projeto</span>
                                </div>
                                <div
                                    className={`flex items-center gap-4 px-2.5 text-muted-foreground hover:text-foreground cursor-pointer  ${selectedId === 'home' ? 'border-b-2' : ''}`}
                                    onClick={() => handleScrollToId('home')}
                                >
                                    <Home className='w-5 h-5 transition-all' />
                                    Home
                                </div>
                                <div
                                    className={`flex items-center gap-4 px-2.5 text-muted-foreground hover:text-foreground cursor-pointer ${selectedId === 'product' ? 'border-b-2' : ''}`}
                                    onClick={() => handleScrollToId('product')}
                                >
                                    <Projector className='w-5 h-5 transition-all' />
                                    Product
                                </div>
                                <div
                                    className={`flex items-center gap-4 px-2.5 text-muted-foreground hover:text-foreground cursor-pointer ${selectedId === 'contact' ? 'border-b-2' : ''}`}
                                    onClick={() => handleScrollToId('contact')}
                                >
                                    <Contact className='w-5 h-5 transition-all' />
                                    Contact
                                </div>
                                <div
                                    className={`flex items-center gap-4 px-2.5 text-muted-foreground hover:text-foreground cursor-pointer ${selectedId === 'about' ? 'border-b-2' : ''}`}
                                    onClick={() => handleScrollToId('about')}
                                >
                                    <AlignHorizontalDistributeCenter className='w-5 h-5 transition-all' />
                                    About
                                </div>
                                <div className="flex items-center gap-x-4">
                                    <button className="px-2 py-2 bg-white text-gray-800 hover:bg-white/70">Entrar</button>
                                    <button className="px-2 py-2 bg-black text-white hover:bg-black/70">Cadastrar</button>
                                </div>
                            </nav>
                        </SheetContent>
                    </Sheet>
                </header>
            </div>
            </div>



        </div>
    );
}
