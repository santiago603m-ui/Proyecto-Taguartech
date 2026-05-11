"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import Link from "next/link";
import { ChevronDown, Check } from "lucide-react";
import { services } from "@/data/services";

export default function ServicesClient() {
  return (
    <div className="pt-24 pb-20 bg-cream min-h-screen">
      {/* Hero */}
      <div className="bg-moss text-cream py-16 mb-12">
        <div className="container mx-auto px-6 md:px-12 text-center">
          <motion.span
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-earth font-semibold tracking-wider text-sm uppercase mb-3 block"
          >
            Lo que ofrecemos
          </motion.span>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-3xl md:text-5xl font-bold mb-4"
          >
            Nuestros Servicios
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-[#F9F6F0]/70 max-w-xl mx-auto text-lg leading-relaxed"
          >
            Más allá de los objetos, ofrecemos experiencias artesanales que conectan
            con la naturaleza, el oficio y la belleza de lo hecho a mano.
          </motion.p>
        </div>
      </div>

      <div className="container mx-auto px-6 md:px-12">
        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-20">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
                className="bg-white rounded-2xl p-8 border border-[#e0dcd3] shadow-md hover:shadow-xl transition-shadow duration-300 flex flex-col"
              >
                <div className="flex items-start gap-5 mb-6">
                  <div className="w-14 h-14 rounded-2xl bg-[#606C38]/10 text-[#606C38] flex items-center justify-center shrink-0">
                    <Icon size={26} strokeWidth={1.5} />
                  </div>
                  <div>
                    <h2 className="text-xl font-bold text-moss mb-1">{service.title}</h2>
                    <p className="text-moss/80 text-sm leading-relaxed">{service.shortDescription}</p>
                  </div>
                </div>

                <p className="text-moss/70 leading-relaxed mb-6 text-sm flex-1">
                  {service.fullDescription}
                </p>

                {/* Features */}
                <ul className="space-y-2 mb-6">
                  {service.features.map((feat, i) => (
                    <li key={i} className="flex items-start gap-2.5 text-moss/70 text-sm">
                      <Check size={14} className="text-[#606C38] mt-0.5 shrink-0" />
                      {feat}
                    </li>
                  ))}
                </ul>

                {service.actionHref === "/contacto" ? (
                  <button
                    onClick={() => window.dispatchEvent(new CustomEvent("open-email-modal"))}
                    className="inline-flex items-center gap-2 text-moss font-semibold hover:text-earth transition-colors text-sm mt-auto text-left"
                  >
                    {service.action}
                  </button>
                ) : (
                  <Link
                    href={service.actionHref}
                    className="inline-flex items-center gap-2 text-moss font-semibold hover:text-earth transition-colors text-sm mt-auto "
                  >
                    {service.action}
                  </Link>
                )}
              </motion.div>
            );
          })}
        </div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="rounded-3xl overflow-hidden relative"
          style={{ background: "linear-gradient(135deg, #606C38 0%, #3E2723 100%)" }}
        >
          <div className="px-10 py-12 md:py-16 text-center text-white relative z-10">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">¿No sabes por dónde empezar?</h2>
            <p className="text-white/70 max-w-lg mx-auto mb-8 leading-relaxed">
              Cuéntanos tu idea o necesidad y te orientamos sin compromiso.
              La primera consulta siempre es gratuita.
            </p>
            <button
              onClick={() => window.dispatchEvent(new CustomEvent("open-email-modal"))}
              className="inline-flex items-center gap-2 px-8 py-4 bg-white text-[#3E2723] font-bold rounded-full hover:bg-[#F9F6F0] transition-all shadow-lg hover:shadow-xl"
            >
              Hablar con un artesano
            </button>
          </div>
        </motion.div>
      </div>
    </div>
  );
}

function FaqItem({ question, answer }: { question: string; answer: string }) {
  const [open, setOpen] = useState(false);
  return (
    <div className="border-b border-[#5D4037]/10 last:border-0">
      <button
        onClick={() => setOpen(!open)}
        className="w-full flex items-center justify-between py-3 text-left text-sm text-[#3E2723] font-medium hover:text-[#606C38] transition-colors gap-3"
      >
        <span>{question}</span>
        <motion.div animate={{ rotate: open ? 180 : 0 }} transition={{ duration: 0.2 }}>
          <ChevronDown size={15} className="shrink-0 text-[#5D4037]/60" />
        </motion.div>
      </button>
      <AnimatePresence initial={false}>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.25 }}
            className="overflow-hidden"
          >
            <p className="text-[#5D4037] text-xs pb-3 leading-relaxed">{answer}</p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
