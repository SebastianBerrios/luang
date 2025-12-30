export interface HomeProps {
  description: string;
  image: string;
}

export interface InfoCardProps {
  title: string;
  description: string;
}

export const projects: HomeProps[] = [
  {
    description:
      "REEMPLAZO E INSTALACIÓN DE COLECTORES DE POLVO 05, 06 Y 07 CHANCADO SECUNDARIO - TOQUEPALA",
    image: "/images/projects/colectorpolvo.webp",
  },
  {
    description:
      "CAMBIO DE SISTEMAS DE ENFRIAMIENTO - CHANCADORAS HP800 - TOQUEPALA",
    image: "/images/projects/sistemaenfriamiento.webp",
  },
  {
    description: "MANTENIMIENTO DE LA INFRAESTRUCTURA DEL VERTEDERO - TACALAYA",
    image: "/images/projects/mantenimientoinfraestructura.webp",
  },
  {
    description:
      "MIGRACIÓN SISTEMA DE COMUNICACIÓN DE RADIOS - RECURSOS HÍDRICOS CUAJONE",
    image: "/images/projects/sistemacomunicacion.webp",
  },
  {
    description: "NUEVO EQUIPO SEPARADOR CENTRIFUGO TRICANTER - LESDE",
    image: "/images/projects/separadorcentrifugo.webp",
  },
  {
    description: "REEMPLAZO DE CALDERA KEEWANEE LESDE",
    image: "/images/projects/reemplazocalderas.webp",
  },
  {
    description:
      "REEMPLAZO DE COMPRESORA CPT12 PARA PLANTA  DE FILTRO CONCENTRADORA #1 TOQUEPALA",
    image: "/images/projects/reemplazocompresora.webp",
  },
  {
    description: "PLANTA DE OPERACIONES",
    image: "/images/projects/plantaoperaciones.webp",
  },
  {
    description: "MIGRACIÓN DE MOTORES",
    image: "/images/projects/migracionmotores.webp",
  },
  {
    description: "TABLEROS DE CONTROL",
    image: "/images/projects/tableroscontrol.webp",
  },
  {
    description: "TRABAJOS ELECTRICOS",
    image: "/images/projects/trabajoselectricos.webp",
  },
  {
    description: "OBRAS CIVILES",
    image: "/images/projects/obrasciviles.webp",
  },
];

export const clients: HomeProps[] = [
  {
    description:
      "Empresa de clase minero–metalúrgica mundial, productora de cobre y subproductos valiosos.",
    image: "/images/clients/southern.webp",
  },
  {
    description:
      "Órgano público encargado de la administración superior del departamento de Tacna, Perú.",
    image: "/images/clients/goretacna.webp",
  },
  {
    description:
      "Organo público encargado de administrar los tributos internos del Gobierno Nacional.",
    image: "/images/clients/sunat.webp",
  },
  {
    description:
      "Compañia dedicada a la extracción de minerales polimetálicos y con presencia en el sur del país.",
    image: "/images/clients/minerabetas.webp",
  },
  {
    description:
      "Empresa minera canadiense de metales preciosos con minas y proyectos en América y África Occidental.",
    image: "/images/clients/fortunasilvermines.webp",
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
