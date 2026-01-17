import Link from "next/link";
import { CheckCircle2 } from "lucide-react";
import Hero from "@/components/Hero";
import Stats from "@/components/Stats";
import { values, whyCorrectDocumentation, stats } from "@/lib/data";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Despre Ghita Alin - Expert cadastru și topografie Ploiești | Cadastre & Topography",
  description: "Expert în cadastru și topografie cu focus pe claritate, precizie și seriozitate. Servicii profesionale în Ploiești și județul Prahova.",
};

export default function DesprePage() {
  return (
    <main>
      <Hero
        title="Despre"
        subtitle="Servicii profesionale de cadastru și topografie în tot județul Prahova și la cerere în împrejurimi"
      />

      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              Cine sunt
            </h2>
            <div className="prose prose-lg max-w-none text-gray-700 leading-relaxed space-y-4">
              <p>
                Sunt Ghita Alin și oferim servicii de cadastru și topografie în tot județul Prahova și la cerere și în împrejurimi.
                Activitatea mea se concentrează pe furnizarea de măsurători precise și documentații complete,
                necesare pentru regularizarea proprietăților, proiecte de construcție și autorizații.
              </p>
              <p>
                Lucrez cu proprietari de terenuri și construcții, dezvoltatori și constructori, oferind
                servicii de cadastru, intabulare, ridicări topografice, releveu, trasări pentru construcții
                și consultanță pentru obținerea documentelor necesare.
              </p>
              <p>
                Înțeleg că documentațiile cadastrale și topografice pot părea complexe, de aceea pun accent
                pe comunicare clară și explicații detaliate pentru fiecare pas al procesului. Obiectivul meu
                este ca fiecare client să înțeleagă ce se întâmplă cu lucrarea sa și ce urmează să se realizeze.
              </p>
            </div>
          </div>

          <div className="mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-8">
              Cum lucrez
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {values.map((value, index) => (
                <div
                  key={index}
                  className="bg-gradient-to-br from-gray-50 to-white rounded-xl p-6 border border-gray-200 shadow-sm"
                >
                  <h3 className="text-xl font-bold text-gray-900 mb-3">
                    {value.title}
                  </h3>
                  <p className="text-gray-700 leading-relaxed">
                    {value.description}
                  </p>
                </div>
              ))}
            </div>
          </div>

          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              De ce contează documentația corectă
            </h2>
            <p className="text-gray-700 mb-6 leading-relaxed">
              O documentație cadastrală și topografică corectă nu este doar o formalitate birocratică.
              Este fundamentul pentru securitatea juridică a proprietății tale și evitarea problemelor viitoare.
            </p>
            <div className="space-y-4">
              {whyCorrectDocumentation.map((reason, index) => (
                <div key={index} className="flex items-start gap-4">
                  <CheckCircle2 className="h-6 w-6 text-[#d4af37] flex-shrink-0 mt-1" />
                  <p className="text-gray-700 leading-relaxed">{reason}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <Stats stats={stats} />

      <section className="py-16 bg-gradient-to-br from-[#0b0f14] via-[#0f172a] to-[#0b0f14]">
        <div className="container mx-auto px-4 max-w-4xl text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Contactează-mă
          </h2>
          <p className="text-gray-300 text-lg mb-8">
            Ai nevoie de servicii de cadastru sau topografie? Hai să discutăm despre proiectul tău.
          </p>
          <Link
            href="/contact#formular"
            className="inline-block bg-[#d4af37] text-[#0b0f14] px-8 py-4 rounded-lg font-semibold hover:bg-[#c5a028] transition-all shadow-lg hover:shadow-xl"
          >
            Solicită ofertă
          </Link>
        </div>
      </section>
    </main>
  );
}
