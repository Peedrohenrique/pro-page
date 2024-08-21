import { Facebook, Instagram, Linkedin, Twitter } from "lucide-react";

function Footer() {
    return (
        <div className="flex flex-col w-full">
            <div className="flex flex-col lg:flex-row justify-left px-6 lg:px-40 py-10 lg:py-20 gap-10 lg:gap-20 w-full">
                <h1 className="text-2xl lg:text-3xl font-bold text-gray-900">ProPage</h1>
                <div className="flex flex-col lg:flex-row lg:gap-24 w-full">
                    <div className="flex flex-col lg:flex-row gap-10 lg:gap-[100px]">
                        {/* Colunas de links */}
                        <div className="flex flex-col gap-7">
                            <p className="text-sm font-bold">Nossos Serviços</p>
                            <ul className="flex flex-col gap-4 text-sm">
                                <li><a href="#">Consultoria</a></li>
                                <li><a href="#">Desenvolvimento</a></li>
                                <li><a href="#">Design</a></li>
                                <li><a href="#">Suporte</a></li>
                                <li><a href="#">Treinamento</a></li>
                            </ul>
                        </div>
                        <div className="flex flex-col gap-7">
                            <p className="text-sm font-bold">Sobre Nós</p>
                            <ul className="flex flex-col gap-4 text-sm">
                                <li><a href="#">Quem Somos</a></li>
                                <li><a href="#">Nossa Missão</a></li>
                                <li><a href="#">Nossos Valores</a></li>
                                <li><a href="#">Carreiras</a></li>
                                <li><a href="#">Blog</a></li>
                            </ul>
                        </div>
                        <div className="flex flex-col gap-7">
                            <p className="text-sm font-bold">Ajuda e Suporte</p>
                            <ul className="flex flex-col gap-4 text-sm">
                                <li><a href="#">FAQ</a></li>
                                <li><a href="#">Contato</a></li>
                                <li><a href="#">Guias</a></li>
                                <li><a href="#">Termos de Serviço</a></li>
                                <li><a href="#">Política de Privacidade</a></li>
                            </ul>
                        </div>
                    </div>
                    <div className="flex flex-col gap-5 mt-10 lg:mt-0">
                        <p className="font-bold">Subscreva a nossa Newsletter</p>
                        <p className="text-sm">Inscreva-se na nossa newsletter e fique por dentro de todas as novidades.</p>
                        <div className="flex flex-col lg:flex-row justify-center items-center w-full gap-2">
                            <input type="email" placeholder="Insira seu email" className="w-full py-3 px-6 text-sm font-medium rounded-md border-2 border-gray-300 focus:outline-none focus:ring-black-500 focus:border-black-500" />
                            <button className="mt-2 lg:mt-0 px-5 py-3 bg-black text-white hover:bg-black/70">Subscrever</button>
                        </div>
                    </div>
                </div>
            </div>

            <div className="flex flex-col lg:flex-row justify-between items-center px-6 lg:px-20 py-10 lg:py-20 border-t border-black">
                <div className="flex flex-col lg:flex-row items-center gap-5 lg:gap-10 w-full lg:w-auto">
                    <p className="text-sm">© 2023. Todos os direitos reservados.</p>
                    <ul className="flex flex-col lg:flex-row gap-5 lg:ml-10 underline decoration-1 underline-offset-2">
                        <li><a href="#">Política de Privacidade</a></li>
                        <li><a href="#">Termos e Condições</a></li>
                        <li><a href="#">Política de Cookies</a></li>
                    </ul>
                </div>
                <div className="flex gap-5 mt-5 lg:mt-0">
                    <Facebook />
                    <Instagram />
                    <Twitter />
                    <Linkedin />
                </div>
            </div>
        </div>
    );
}

export default Footer;
