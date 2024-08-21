import { ClipboardListIcon, RocketIcon, LayoutGridIcon } from "lucide-react";

export function Beneficio() {
    return (
        <div className="w-full bg-gray-100 flex flex-col items-center p-10 lg:p-40">
            <h2 className="text-4xl font-bold text-center mb-32 max-w-6xl">
                Entenda as Vantagens da Nossa Solução <br />
            </h2>

            <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-1 lg:grid-cols-3 xl:grid-cols-3 max-w-6xl gap-20 text-center">
                <div className="flex flex-col items-center gap-5">
                    <ClipboardListIcon size={40} />
                    <h6 className="text-2xl font-bold">Eficiência na Organização</h6>
                    <p>Resolve a confusão causada por ferramentas complicadas, oferecendo uma interface simples e funcional.</p>
                </div>
                <div className="flex flex-col items-center gap-5">
                    <RocketIcon size={40} />
                    <h6 className="text-2xl font-bold">Aumento da Produtividade</h6>
                    <p>Elimina a necessidade de múltiplas ferramentas, integrando tudo em uma única plataforma eficiente.</p>
                </div>
                <div className="flex flex-col items-center gap-5">
                    <LayoutGridIcon size={40} />
                    <h6 className="text-2xl font-bold">Consistência Visual</h6>
                    <p>Garante uma experiência visual uniforme em todos os dispositivos, melhorando a usabilidade.</p>
                </div>
            </div>
        </div>
    );
}
