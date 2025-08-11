import type { IconKeys } from "./icons";

export interface CertificationsProps {
  icon: IconKeys;
  name: string;
  description: string;
  color: string;
}

export const certificationsCourses: CertificationsProps[] = [
  {
    icon: "Building",
    name: "ISO 9001:2015",
    description: "Sistema de Gestión de Calidad",
    color: "blue",
  },
  {
    icon: "Earth",
    name: "ISO 14001:2015",
    description: "Sistema de Gestión Ambiental",
    color: "green",
  },
  {
    icon: "ShieldCheck",
    name: "ISO 45001:2018",
    description: "Sistema de Gestión de Seguridad y Salud Ocupacional",
    color: "red",
  },
];
