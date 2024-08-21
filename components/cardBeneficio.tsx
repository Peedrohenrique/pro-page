'use client'
import beneficio1 from '../public/assets/beneficio1.png'
import beneficio2 from '../public/assets/beneficio2.png'
import Image from 'next/image'
export function CardBeneficio() {
    return (
        <div className='w-full bg-gray-100 lg:bg-gray-100'>

            <div className="flex flex-col lg:flex-row  lg:justify-center justify-between items-center px-4 lg:p-20  gap-4 lg:gap-24 ">
                <div className="flex-1 ml-0 lg:ml-10 max-w-full lg:max-w-md">
                    <span className='text-gray-500 mb-3'>Melhor Organização</span>
                    <h1 className="text-3xl lg:text-4xl font-bold text-gray-900 mt-3 lg:mb-4">
                        Organize Suas Tarefas de Forma Eficiente
                    </h1>

                    <p className="mb-4 lg:mb-6 text-sm lg:text-base">
                        Nossa solução simplifica suas tarefas, facilitando a organização e aumentando a eficiência.
                    </p>

                    <ul className='list-disc mb-4 lg:mb-6 lg:text-base ml-3'>
                        <li>Simplifica a gestão de tarefas</li>
                        <li>Facilita a organização diária</li>
                        <li>Aumenta a eficiência no trabalho</li>
                    </ul>

                    <button className='px-6 py-2 bg-transparent border-2 border-black text-black hover:bg-gray-300/70'>
                        Saiba Mais
                    </button>
                </div>

                <div className="flex-shrink-0 mt-6 lg:mt-0">
                    <Image src={beneficio1} width={500} height={500} alt="Organização" className="object-cover w-full max-w-[500px] max-h-[400px] lg:max-h-[500px]" />
                </div>
            </div>

            <div className="flex flex-col lg:flex-row lg:justify-center justify-between items-center px-4 lg:p-20  gap-4 lg:gap-24 ">
            <div className="flex-shrink-0 mt-6 lg:mt-0">
                    <Image src={beneficio2} width={500} height={500} alt="Produtividade" className="object-cover w-full max-w-[500px] max-h-[400px] lg:max-h-[500px]" />
                </div>
                <div className="flex-1 ml-0 lg:ml-10 max-w-full lg:max-w-md">
                    <span className='text-gray-500 mb-3'>Maior Produtividade</span>
                    <h1 className="text-3xl lg:text-4xl font-bold text-gray-900 mt-3 lg:mb-4">
                        Aumente sua Produtividade com Ferramentas Integradas
                    </h1>

                    <p className="mb-4 lg:mb-6 text-sm lg:text-base">
                        Com uma plataforma integrada, você realiza suas tarefas de forma mais rápida e eficiente.
                    </p>

                    <ul className='list-disc mb-4 lg:mb-6 lg:text-base ml-3'>
                        <li>Ferramentas centralizadas em uma única plataforma</li>
                        <li>Reduz o tempo gasto com múltiplas ferramentas</li>
                        <li>Aprimora o fluxo de trabalho</li>
                    </ul>

                    <button className='px-6 py-2 bg-transparent border-2 border-black text-black hover:bg-gray-300/70'>
                        Saiba Mais
                    </button>
                </div>
            </div>
        </div>
    );
}
