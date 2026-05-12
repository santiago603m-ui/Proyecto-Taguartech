"use client";

import Image from "next/image";
import { motion } from "motion/react";
import Link from "next/link";

const services = [
  {
    id: "tienda",
    title: "Tienda Artesanal",
    description:
      "Explora nuestra colección curada de joyas, utensilios y esculturas hechas a mano por maestros artesanos.",
    image: "https://images.unsplash.com/photo-1590736910118-243884803947?q=80&w=600",
    action: "Ver Catálogo",
    href: "/productos",
    color: "bg-[#FAF9F6]",
  },
  {
    id: "cursos",
    title: "Cursos y Talleres",
    description:
      "Aprende el arte del tallado y el manejo de materiales orgánicos con nuestros expertos en el oficio.",
    image: "https://images.unsplash.com/photo-1513364776144-60967b0f800f?q=80&w=600",
    action: "Consultar Fechas",
    href: "/contacto",
    color: "bg-white",
  },
  {
    id: "asesoria",
    title: "Diseño a Medida",
    description:
      "Asesoría personalizada para crear piezas únicas adaptadas a tus necesidades o proyectos de diseño interior.",
    image: "https://images.unsplash.com/photo-1459411552884-841db9b3cc2a?q=80&w=600",
    action: "Agendar Cita",
    href: "/contacto",
    color: "bg-[#FAF9F6]",
  },
];

export function ServicesSection() {
  return (
    <section id="servicios" className="py-16 bg-[#F9F6F0]">
      <div className="container mx-auto px-6 md:px-12">
        <div className="flex flex-col md:flex-row justify-between items-end mb-12">
          <div className="max-w-2xl">
            <span className="text-earth font-semibold tracking-wider text-sm uppercase mb-2 block">
              Nuestros Servicios
            </span>
            <motion.h2
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="text-2xl md:text-3xl font-bold text-title"
            >
              Más allá del objeto
            </motion.h2>
          </div>
          <Link
            href="/servicios"
            className="hidden md:inline-flex items-center gap-2 px-6 py-3 border border-title text-title rounded-full hover:bg-title hover:text-white transition-colors mt-6 md:mt-0"
          >
            Ver todos los servicios
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {services.map((service, index) => {
            return (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.15, duration: 0.5 }}
                className="bg-white rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300 border-2 border-moss/10 group overflow-hidden"
              >
                <div className="h-48 relative overflow-hidden">
                  <Image
                    src={service.image}
                    alt={service.title}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-moss/10 group-hover:bg-transparent transition-colors duration-300 " />
                </div>
                <div className="p-8">
                  <h3 className="text-xl font-bold text-title mb-3">{service.title}</h3>
                  <p className="text-title/80 mb-8 leading-relaxed">{service.description}</p>
                  {service.href === "/contacto" ? (
                    <button
                      onClick={() => window.dispatchEvent(new CustomEvent("open-email-modal"))}
                      className="flex items-center text-[#3E2723] font-medium group-hover:text-[#BC6C25] transition-colors"
                    >
                      {service.action}
                    </button>
                  ) : (
                    <Link
                      href={service.href}
                      className="flex items-center text-title font-medium group-hover:text-earth transition-colors"
                    >
                      {service.action}
                    </Link>
                  )}
                </div>
              </motion.div>
            );
          })}
        </div>

        <div className="mt-12 text-center md:hidden lg:block">
          <Link
            href="/servicios"
            className="inline-flex items-center gap-2 px-8 py-3 bg-title text-white rounded-full hover:bg-title/90 transition-all shadow-md"
          >
            Ver todos los servicios
          </Link>
        </div>
      </div>
    </section>
  );
}
