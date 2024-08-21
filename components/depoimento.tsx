import { Star } from "lucide-react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

export function Depoimento() {
    return (
        <div className="flex flex-col justify-center items-center mt-40">
            <h1 className="text-5xl lg:text-5xl font-bold text-gray-900 mt-3 lg:mb-8">Depoimentos</h1>
            <p className="text-center mb-4 lg:mb-8 text-sm lg:text-base">
                Mais social proof com testemunhos de clientes ou review do<br />
                produtos/serviços prestados
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-1 lg:grid-cols-3 xl:grid-cols-3 max-w-6xl gap-20 mt-20">
                {Array.from({ length: 3 }, (_, index) => (
                    <div className="flex-col justify-center items-center" key={index}>
                        
                        <div className="flex justify-center lg:justify-start items-center text-3xl lg:text-5xl font-bold text-gray-900 mt-3 lg:mb-8">
                            {Array.from({ length: 5 }, (_, index) => (
                                <span key={index} className="text-sm lg:text-base flex"><Star /></span>
                            ))}
                        </div>

                        {/* Depoimento 1 */}
                        {index === 0 && (
                            <>
                               <p className="text-sm lg:text-base font-bold">&quot;O produto transformou minha rotina, tornando-a mais organizada e eficiente!&quot;</p>
                                <Avatar className="mt-7">
                                    <AvatarImage src="https://github.com/Peedrohenrique.png" />
                                    <AvatarFallback>JD</AvatarFallback>
                                </Avatar>
                                <p className="text-sm lg:text-base font-bold mt-2">Pedro Henrique</p>
                                <p className="text-sm lg:text-base text-gray-500">Tech Solutions</p>
                            </>
                        )}

                        {/* Depoimento 2 */}
                        {index === 1 && (
                            <>
                                <p className="text-sm lg:text-base font-bold">&quot;Melhor escolha que fiz para minha empresa! A produtividade disparou!&quot;</p>
                                <Avatar className="mt-7">
                                    <AvatarImage src="https://github.com/paulohmt.png" />
                                    <AvatarFallback>AG</AvatarFallback>
                                </Avatar>
                                <p className="text-sm lg:text-base font-bold mt-2">Paulo Henrique</p>
                                <p className="text-sm lg:text-base text-gray-500">Inovação Tech</p>
                            </>
                        )}

                        {/* Depoimento 3 */}
                        {index === 2 && (
                            <>
                                <p className="text-sm lg:text-base font-bold">&quot;A experiência visual é impecável, se adapta a todos os dispositivos!&quot;</p>
                                <Avatar className="mt-7">
                                    <AvatarImage src="https://github.com/shadcn.png" />
                                    <AvatarFallback>RF</AvatarFallback>
                                </Avatar>
                                <p className="text-sm lg:text-base font-bold mt-2">Ricardo Ferreira</p>
                                <p className="text-sm lg:text-base text-gray-500">Design Studio</p>
                            </>
                        )}
                    </div>
                ))}
            </div>
        </div>
    );
}
