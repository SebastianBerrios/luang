export interface HomeProps {
  title?: string;
  description: string;
  image: string;
}

export interface InfoCardProps {
  title: string;
  description: string;
}

export interface ClientProps {
  name: string;
  logo: string;
}

export const projects: HomeProps[] = [
  {
    title:
      "REEMPLAZO E INSTALACIÓN DE COLECTORES DE POLVO 05, 06 Y 07 CHANCADO SECUNDARIO - TOQUEPALA",
    description:
      "Este proyecto se enfoca en el desmontaje de tres colectores de polvo obsoletos y la ingeniería, suministro e instalación de tres nuevos sistemas de alta eficiencia en el área de Chancado Secundario de la concentradora de Toquepala. El objetivo es mejorar drásticamente el control de emisiones de polvo fugitivo generado en los procesos de trituración, transferencia en fajas y clasificación de mineral. Con esto se busca asegurar el cumplimiento de las normativas ambientales y de salud ocupacional, proteger los equipos mecánicos y eléctricos del área y crear un ambiente de trabajo más seguro.",
    image: "/images/projects/colectores-polvo",
  },
  {
    title: "CAMBIO DE SISTEMAS DE ENFRIAMIENTO - CHANCADORAS HP800-TOQUEPALA",
    description:
      "Este proyecto se centra en la actualización y reemplazo de los sistemas de enfriamiento de las chancadoras (trituradoras) de cono modelo HP800 en la mina de Toquepala. En esencia, el objetivo es mejorar la eficiencia y la confiabilidad de estas máquinas, que son cruciales para el procesamiento de mineral. El sistema de enfriamiento es vital para mantener la temperatura de operación adecuada de los componentes principales de la chancadora, como los sistemas de lubricación y los cojinetes.",
    image: "/images/projects/sistema-enfriamiento",
  },
  {
    title: "INSTALACIÓN DE CHILLER HPGR CONCENTRADORA",
    description:
      "Este proyecto se enfoca en la ingeniería, suministro e instalación de un sistema de enfriamiento (chiller) para los Rodillos de Molienda de Alta Presión (HPGR) dentro de una planta concentradora.",
    image: "/images/projects/chiller-concentradora",
  },
  {
    title: "MANTENIMIENTO DE LA INFRAESTRUCTURA DEL VERTEDERO TACALAYA",
    description:
      "Este proyecto se refiere a un conjunto de trabajos cruciales para asegurar la correcta operación y la integridad estructural de las instalaciones de captación de agua ubicadas en el río Tacalaya, en la provincia de Candarave, Tacna. En resumen, este proyecto es una labor de mantenimiento preventivo y correctivo, indispensable para garantizar la captación y derivación eficiente de los recursos hídricos del río Tacalaya, los cuales son vitales para las operaciones mineras y, posiblemente, para el uso agrícola en la región.",
    image: "/images/projects/vertedero-catalaya",
  },
  {
    title:
      "MEJORAMIENTO DEL SISTEMA DE ILUMINACION, SISTEMA DE ALARMA PERIMETRAL, INSTALACION DE CAMARAS CCTV EN QH",
    description:
      "Este proyecto busca modernizar y fortalecer la seguridad y la vigilancia operativa en el área de Quebrada Honda, Toquepala, a través de la implementación y mejora. El objetivo es incrementar la capacidad de disuasión, detección y respuesta ante incidentes, robos o accesos no autorizados, así como mejorar la seguridad del personal y la supervisión de las operaciones, especialmente durante la noche o en condiciones de baja visibilidad.",
    image: "/images/projects/sistema-seguridad",
  },
  {
    title:
      "MIGRACIÓN SISTEMA DE COMUNICACIÓN DE RADIOS - RECURSOS HÍDRICOS CUAJONE",
    description:
      "El objetivo es garantizar comunicaciones de voz y datos, confiables y con mayor cobertura para todo el personal que opera y mantiene la infraestructura hídrica de la mina. Esto es crucial para mejorar la seguridad del personal, optimizar la coordinación operativa y agilizar la respuesta ante emergencias en un área con equipos e instalaciones geográficamente dispersos",
    image: "/images/projects/sistema-radio",
  },
  {
    title: "NUEVO EQUIPO SEPARADOR CENTRIFUGO TRICANTER - LESDE",
    description:
      "El proyecto representa una mejora tecnológica significativa para la optimización de procesos y la gestión ambiental en la planta de Lixiviación, Extracción por Solventes y Electrodeposición (LESDE) de Toquepala. En resumen, la instalación de un nuevo separador centrífugo Tricanter es una inversión estratégica para maximizar la recuperación de reactivos costosos, mejorar la eficiencia operativa de la planta SX, y fortalecer la gestión ambiental del complejo hidrometalúrgico de Toquepala.",
    image: "/images/projects/centrifugo-tricanter",
  },
  {
    title: "REEMPLAZO DE CALDERA KEEWANEE LESDE",
    description:
      "Este proyecto consiste en el desmontaje de una caldera industrial marca Kewanee existente y su sustitución por una unidad nueva y de alta eficiencia para proveer de vapor/agua caliente a la planta de Lixiviación, Extracción por Solventes y Deposición Electrolítica (LESDE) en la mina Toquepala",
    image: "/images/projects/caldera-keewanee",
  },
  {
    title:
      "REEMPLAZO DE COMPRESORA CPT12 PARA PLANTA DE FILTRO CONCENTRADORA #1 TOQUEPALA",
    description:
      "El proyecto consiste en reemplazar la compresora CPT12 en la Planta de Filtro Concentradora #1 de Toquepala. Este equipo es vital para la operación de filtros prensa (deshidratación de mineral), aire de instrumentación y tareas de mantenimiento. La sustitución busca modernizar la infraestructura para mejorar la eficiencia energética, reducir costos operativos y garantizar la fiabilidad del sistema. Así, se minimizan las paradas no programadas y se asegura la continuidad del procesamiento de minerales.",
    image: "/images/projects/compresora-cpt12",
  },
  /*{
    title: "MODIFICACIONES AUXILIARES EN LA PLANTA DE FILTRADO",
    description: "",
    image: "/images/projects/auxiliares-planta",
  },*/
];

export const clients: ClientProps[] = [
  {
    name: "Southern Peru Copper Corporation",
    logo: "/images/clients/southern.webp",
  },
  {
    name: "Gobierno Regional de Tacna",
    logo: "/images/clients/goretacna.webp",
  },
  {
    name: "SUNAT",
    logo: "/images/clients/sunat.webp",
  },
  {
    name: "Minera Betas",
    logo: "/images/clients/minerabetas.webp",
  },
  {
    name: "Fortuna Silver Mines",
    logo: "/images/clients/fortunasilvermines.webp",
  },
];

export const whyChooseUs: InfoCardProps[] = [
  {
    title: "Experiencia",
    description:
      "Más de 15 años de experiencia en el sector de la construcción y la ingeniería.",
  },
  {
    title: "Calidad",
    description:
      "Personal altamente calificado y comprometido con la excelencia.",
  },
  {
    title: "Seguridad",
    description:
      "Utilizamos la última tecnología y equipos para garantizar resultados óptimos.",
  },
];
