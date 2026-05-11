"use client";

import { motion } from "motion/react";
import Link from "next/link";
import { Store, GraduationCap, Users } from "lucide-react";

const services = [
  {
    id: "tienda",
    title: "Tienda Artesanal",
    description:
      "Explora nuestra colección curada de joyas, utensilios y esculturas hechas a mano por maestros artesanos.",
    icon: Store,
    action: "Ver Catálogo",
    href: "/productos",
    color: "bg-[#FAF9F6]",
  },
  {
    id: "cursos",
    title: "Cursos y Talleres",
    description:
      "Aprende el arte del tallado y el manejo de materiales orgánicos con nuestros expertos en el oficio.",
    icon: GraduationCap,
    action: "Consultar Fechas",
    href: "/contacto",
    color: "bg-white",
  },
  {
    id: "asesoria",
    title: "Diseño a Medida",
    description:
      "Asesoría personalizada para crear piezas únicas adaptadas a tus necesidades o proyectos de diseño interior.",
    icon: Users,
    action: "Agendar Cita",
    href: "/contacto",
    color: "bg-[#FAF9F6]",
  },
];

export function ServicesSection() {
  return (
    <section id="servicios" className="py-16 bg-[#E9EDC9]">
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
              className="text-3xl md:text-4xl font-bold text-title"
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
            const Icon = service.icon;
            return (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.15, duration: 0.5 }}
                className="bg-white p-8 rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300 border-2 border-moss/10 group"
              >
                <div className="w-14 h-14 rounded-full bg-[#F9F6F0] text-[#606C38] flex items-center justify-center mb-6 group-hover:bg-[#606C38] group-hover:text-white transition-colors duration-300">
                  <Icon size={28} strokeWidth={1.5} />
                </div>
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
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
