'use client'
import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/components/ui/accordion"

export function Pergunta() {
    return (
        <div className="flex flex-col justify-center items-center mt-40">
            <h1 className="text-3xl lg:text-5xl font-bold text-gray-900 mt-3 lg:mb-8">Perguntas Frequentes (FAQs)</h1>

            <p className="text-center mb-4 lg:mb-8 text-sm lg:text-base max-w-4xl">FAQ's (Frequenly Asked Questions) bem escritas podem entregar valor. Se você conhece seu
                público, sabe as perguntas frequentes - utilize aquelas que mais geram contato com o
                suporte. Não invente perguntas.
            </p>

            <div className="w-full mt-[80px]">
                <Accordion type="single" collapsible className="w-full">
                    <AccordionItem value="item-1">
                        <AccordionTrigger>Como funciona o processo de implementação?</AccordionTrigger>
                        <AccordionContent>
                            Nosso processo de implementação é simples e direto, guiado por uma equipe de especialistas que oferece suporte completo do início ao fim.
                        </AccordionContent>
                    </AccordionItem>
                    <AccordionItem value="item-2">
                        <AccordionTrigger>Qual é o prazo para começar a ver resultados?</AccordionTrigger>
                        <AccordionContent>
                            A maioria dos nossos clientes começa a ver resultados positivos em poucas semanas, dependendo do uso e do cenário específico.
                        </AccordionContent>
                    </AccordionItem>
                    <AccordionItem value="item-3">
                        <AccordionTrigger>O que diferencia o produto das outras soluções no mercado?</AccordionTrigger>
                        <AccordionContent>
                            Nossa solução se destaca pela facilidade de uso, integração completa e suporte contínuo, garantindo uma experiência sem igual.
                        </AccordionContent>
                    </AccordionItem>
                    <AccordionItem value="item-4">
                        <AccordionTrigger>Quais são os requisitos para usar a plataforma?</AccordionTrigger>
                        <AccordionContent>
                            Requisitos mínimos incluem um dispositivo com acesso à internet e uma conta registrada. Nossa equipe está disponível para ajudar com qualquer necessidade adicional.
                        </AccordionContent>
                    </AccordionItem>
                    <AccordionItem value="item-5">
                        <AccordionTrigger>Como posso obter suporte se encontrar problemas?</AccordionTrigger>
                        <AccordionContent>
                            Oferecemos suporte 24/7 através de chat, email e telefone, garantindo que suas dúvidas sejam resolvidas rapidamente.
                        </AccordionContent>
                    </AccordionItem>
                </Accordion>
            </div>
        </div>
    );
}
