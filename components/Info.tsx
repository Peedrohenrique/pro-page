import Image from "next/image";
import IMGnegocio from "../public/assets/IMGnegocio.jpg";

export function InfoTitle() {
    return (
        <div className="flex flex-col lg:flex-row justify-between items-center p-4 lg:p-20 px-6 lg:px-40 gap-2 lg:gap-[100px]">
            <div className="flex-1 ml-0 lg:ml-10 max-w-full lg:max-w-md">
                <h1 className="text-3xl lg:text-6xl font-bold text-gray-900 mb-4 lg:mb-8">
                    Simplifique Seu Dia a Dia com Nossa Solução Prática
                </h1>

                <p className="mb-4 lg:mb-8 text-sm lg:text-base">
                Desenvolvido para facilitar suas tarefas diárias, nosso produto ajuda você a se organizar e a ser mais produtivo. Descubra como otimizar sua rotina com eficiência e mantenha a consistência visual em todos os dispositivos.
                </p>

                <div className="flex flex-col lg:flex-row items-start lg:items-center gap-y-4 lg:gap-x-4">
                    <button className="px-6 py-2 lg:px-20 lg:py-2 bg-black text-white hover:bg-black/70">CTA</button>
                    <p className="text-gray-500 text-xs lg:text-sm max-w-full lg:max-w-md text-center lg:text-left">
                        Mais de 5.000 pessoas já escolheram.<br />
                        Junte-se a elas e descubra o porquê!
                    </p>
                </div>
            </div>
            <div className="flex-shrink-0 mt-6">
                <Image src={IMGnegocio} width={500} height={500} alt="negocio" className="object-cover w-full max-w-[500px] max-h-[400px] lg:max-h-[600px]" />
            </div>
        </div>
    );
}
