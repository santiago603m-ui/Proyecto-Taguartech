import { Metadata } from "next";
import AboutClient from "./AboutClient";

export const metadata: Metadata = {
  title: "Sobre Nosotros | Taguartech",
  description: "Conoce la historia detrás de Taguartech, nuestro compromiso con el origen responsable y el oficio ancestral del tallado natural.",
};

export default function Page() {
  return <AboutClient />;
}
