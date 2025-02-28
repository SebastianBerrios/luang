import type { IconKeys } from "./icons";

export interface ServicesProps {
  icon: IconKeys;
  title: string;
  description: string;
  itemList: string[];
}

export const services: ServicesProps[] = [
  {
    icon: "Factory",
    title: "Ingenieria conceptual básica e ingeniería de detalle",
    description:
      "Brindamos soluciones en mantenimiento y ejecución de trabajos en plantas operativas.",
    itemList: [
      "Paradas de Planta",
      "Tie-in Eléctrico",
      "Instrumentación y Mecánico",
    ],
  },
  {
    icon: "Bolt",
    title: "Ejecución de Proyectos Multidisciplinarios",
    description:
      "Servicios especializados de construcción para instalaciones industriales y plantas de fabricación.",
    itemList: [
      "Planificación y diseño",
      "Ejecución de proyectos",
      "Control de calidad",
      "Mantenimiento",
    ],
  },
];
