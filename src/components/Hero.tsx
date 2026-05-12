"use client";

import { motion } from "motion/react";
import Image from "next/image";
import Link from "next/link";

export function Hero() {
  return (
    <section className="relative w-full h-[85vh] min-h-[600px] flex items-center pt-20 overflow-hidden ">
      {/* Background container - global bg */}
      <div className="absolute inset-0 bg-[#fae6b6] " />

      <div className="container mx-auto px-6 md:px-12 relative z-10 grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        {/* Text Content */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="max-w-xl"
        >
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-title leading-[1.1] mb-6">
            Naturaleza en <br /> Forma y Alma
          </h1>
          <p className="text-lg md:text-xl text-moss/80 mb-8 leading-relaxed">
            Descubre piezas únicas talladas a mano. Unimos el
            arte tradicional con el diseño contemporáneo a
            través de tagua, madera y hueso.
          </p>

          <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
            <Link href="/productos" className="px-8 py-4 bg-moss text-cream rounded-full font-medium hover:bg-moss/90 transition-all shadow-sm hover:shadow-md flex items-center justify-center ">
              Explorar Colección

            </Link>
            <Link href="/nosotros" className="px-8 py-4 bg-transparent border-2 border-earth text-earth rounded-full font-medium hover:bg-earth/5 transition-all flex items-center justify-center ">
              Nuestra Historia
            </Link>
          </div>
        </motion.div>

        {/* Image Content */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{
            duration: 1,
            ease: "easeOut",
            delay: 0.2,
          }}
          className="relative h-[50vh] md:h-[70vh] w-full hidden md:block"
        >
          <div className="absolute inset-0 rounded-[2rem] overflow-hidden shadow-2xl ">
            <Image
              src="/Assets/Tagua_Catira.jpeg"
              alt="Artesano trabajando la madera"
              fill
              className="object-cover object-center "
              priority
            />
            {/* Soft overlay gradient */}
            <div className="absolute inset-0 bg-gradient-to-tr from-[#3E2723]/20 to-transparent mix-blend-overlay " />
          </div>

          {/* Decorative floating element */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8, duration: 0.8 }}
            className="absolute -bottom-8 -left-8 bg-white p-5 rounded-2xl shadow-xl border border-[#F9F6F0] z-10 "
          >
            <div className="flex items-center space-x-4 ">
              <div className="w-12 h-12 rounded-full bg-[#f2dd9f] flex items-center justify-center ">
                <span className="text-[#BC6C25] font-bold text-2xl">
                  100%
                </span>
              </div>
              <div>
                <p className="text-[#3E2723] font-bold text-sm ">
                  Hecho a mano
                </p>
                <p className="text-[#5D4037] text-xs ">
                  Piezas irrepetibles
                </p>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}