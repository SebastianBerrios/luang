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
    title: "Obras Civiles, Eléctricos, Mecánicos e Instrumentación",
    description:
      "Brindamos soluciones en mantenimiento y ejecución de trabajos en plantas operativas.",
    itemList: [
      "Asesoría Integral en Soluciones en los campos de Electricidad en Alta, Media y Baja Tensión, Control e instrumentación.",
      "Diseño de Proyectos Civiles, Mecánicos, Eléctricos, Control e instrumentación en Ingeniería Básica e Ingeniería de Detalle.",
      "Ejecución de proyectos de Electricidad en Alta, Media y Baja Tensión, Control e instrumentación, contamos con equipos de tecnología para dar soluciones.",
      "Ejecución de Obras eléctricas en edificaciones existentes y edificaciones nuevas en media y baja tensión, sistemas contraincendios, iluminación en LED y otros.",
      "Realización de obras Civiles, movimiento de tierras, estructuras metálicas de edificios y naves, Reforzamientos, otros.",
      "Montaje y Mantenimiento de equipos electromecánicos, transformadores, Centro de Control de Motores, Arrancadores, Variadores de Velocidad, Bombas, Grupos electrógenos, puentes Grúas, Equipos de Aire Acondicionado, Ventiladores, relés de protección, medidores de energía, DCs, PLCs. ",
      "Trabajos Ejecución de obras, topografía para líneas eléctricas, líneas de agua, fibra óptica, montaje de equipos, y servicios en general.",
    ],
  },
];
