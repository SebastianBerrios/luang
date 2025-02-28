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
    description: "Colectores de polvo",
    image: "/images/projects/colectorpolvo.webp",
  },
  {
    description: "Planta de Operaciones",
    image: "/images/projects/plantaoperaciones.webp",
  },
  {
    description: "Migración de motores",
    image: "/images/projects/migracionmotores.webp",
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
