import { Phone, MapPin, MessageCircle, Clock, FileText, MapPinned, HelpCircle } from "lucide-react";
import Hero from "@/components/Hero";
import ContactForm from "@/components/ContactForm";
import { businessInfo } from "@/lib/data";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact - Solicită ofertă cadastru și topografie | Cadastre & Topography",
  description: "Contactează-ne pentru servicii de cadastru și topografie în Ploiești și Prahova. Telefon: 0745 003 470, WhatsApp disponibil. Răspuns rapid la solicitări.",
};

export default function ContactPage() {
  return (
    <main>
      <Hero
        title="Contact"
        subtitle="Suntem aici să te ajutăm cu serviciile de cadastru și topografie"
      />

      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
            <div className="space-y-6">
              <div className="bg-white rounded-xl p-8 border border-gray-200 shadow-lg">
                <h2 className="text-2xl font-bold text-gray-900 mb-6">
                  Contact rapid
                </h2>

                <div className="flex flex-col gap-3 mb-6">
                  <a
                    href={`tel:${businessInfo.phoneLink}`}
                    className="bg-[#d4af37] text-[#0b0f14] px-6 py-4 rounded-lg font-semibold hover:bg-[#c5a028] transition-all text-center flex items-center justify-center gap-2 shadow-md hover:shadow-xl"
                  >
                    <Phone className="h-5 w-5" />
                    Sună acum
                  </a>
                  <a
                    href={`https://wa.me/${businessInfo.whatsapp}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-[#25D366] text-white px-6 py-4 rounded-lg font-semibold hover:bg-[#20BA5A] transition-all text-center flex items-center justify-center gap-2 shadow-md hover:shadow-xl"
                  >
                    <MessageCircle className="h-5 w-5" />
                    WhatsApp
                  </a>
                </div>

                <div className="space-y-4 mb-6">
                  <div className="flex items-start gap-3">
                    <Clock className="h-5 w-5 text-[#d4af37] mt-1 flex-shrink-0" />
                    <div>
                      <p className="text-gray-900 font-medium">Program</p>
                      <p className="text-gray-700 text-sm">Luni–Vineri: 08:00–18:00</p>
                      <p className="text-gray-700 text-sm">Sâmbătă: la programare</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <MapPin className="h-5 w-5 text-[#d4af37] mt-1 flex-shrink-0" />
                    <div>
                      <p className="text-gray-900 font-medium">Adresă</p>
                      <p className="text-gray-700 text-sm">Strada Miorița 11, Ploiești 100336</p>
                    </div>
                  </div>
                </div>

                <div className="bg-gradient-to-br from-[#d4af37]/10 to-[#c5a028]/5 rounded-lg p-4 border border-[#d4af37]/20">
                  <p className="text-sm text-gray-800 font-medium">
                    Răspund în aceeași zi lucrătoare.
                  </p>
                </div>
              </div>

              <div className="bg-white rounded-xl p-6 border border-gray-200 shadow-md">
                <div className="flex items-start gap-3 mb-3">
                  <MapPinned className="h-5 w-5 text-[#d4af37] mt-1 flex-shrink-0" />
                  <h3 className="text-lg font-bold text-gray-900">Zone acoperite</h3>
                </div>
                <p className="text-gray-700 text-sm">
                  Tot județul Prahova și la cerere și în împrejurimi.
                </p>
              </div>

              <div className="bg-white rounded-xl p-6 border border-gray-200 shadow-md">
                <div className="flex items-start gap-3 mb-4">
                  <FileText className="h-5 w-5 text-[#d4af37] mt-1 flex-shrink-0" />
                  <h3 className="text-lg font-bold text-gray-900">Acte necesare (orientativ)</h3>
                </div>

                <div className="space-y-4">
                  <div>
                    <p className="font-semibold text-gray-900 text-sm mb-2">Pentru teren:</p>
                    <ul className="text-sm text-gray-700 space-y-1 ml-4">
                      <li className="flex items-start gap-2">
                        <span className="text-[#d4af37] mt-1">•</span>
                        <span>Carte de identitate</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-[#d4af37] mt-1">•</span>
                        <span>Act de proprietate</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-[#d4af37] mt-1">•</span>
                        <span>Plan/schiță dacă există</span>
                      </li>
                    </ul>
                  </div>

                  <div>
                    <p className="font-semibold text-gray-900 text-sm mb-2">Pentru construcții:</p>
                    <ul className="text-sm text-gray-700 space-y-1 ml-4">
                      <li className="flex items-start gap-2">
                        <span className="text-[#d4af37] mt-1">•</span>
                        <span>Carte de identitate</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-[#d4af37] mt-1">•</span>
                        <span>Act de proprietate</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-[#d4af37] mt-1">•</span>
                        <span>Documente construcție dacă există</span>
                      </li>
                    </ul>
                  </div>
                </div>

                <div className="bg-gradient-to-br from-gray-50 to-white rounded-lg p-3 border border-gray-200 mt-4">
                  <p className="text-xs text-gray-700 italic">
                    Dacă lipsește ceva, te ghidez cu pașii.
                  </p>
                </div>
              </div>
            </div>

            <div className="space-y-6">
              <ContactForm />

              <div className="bg-white rounded-xl p-6 border border-gray-200 shadow-md">
                <div className="flex items-start gap-3 mb-4">
                  <HelpCircle className="h-5 w-5 text-[#d4af37] mt-1 flex-shrink-0" />
                  <h3 className="text-lg font-bold text-gray-900">Întrebări rapide</h3>
                </div>

                <div className="space-y-3">
                  <div>
                    <p className="font-semibold text-gray-900 text-sm mb-1">Cât durează?</p>
                    <p className="text-sm text-gray-700">În funcție de lucrare și acte.</p>
                  </div>

                  <div>
                    <p className="font-semibold text-gray-900 text-sm mb-1">Cum primesc oferta?</p>
                    <p className="text-sm text-gray-700">Prin telefon/WhatsApp după analiză.</p>
                  </div>

                  <div>
                    <p className="font-semibold text-gray-900 text-sm mb-1">Pot trimite poze cu actele?</p>
                    <p className="text-sm text-gray-700">Da, pe WhatsApp.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
