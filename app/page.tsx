import { InfoTitle } from "@/components/Info";
import { Beneficio } from "@/components/beneficio";
import { CardBeneficio } from "@/components/cardBeneficio";
import { Pergunta } from "@/components/pergunta";
import { Depoimento } from "@/components/depoimento";
import { Vantagem } from "@/components/vantagem";
export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center ">
      <InfoTitle />
      <Beneficio />
      <CardBeneficio />
      <Depoimento />
      <Pergunta />
      <Vantagem />
    </main>
  );
}