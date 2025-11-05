export interface SaleEquipmentProps {
  image: string;
  name: string;
  description: string;
}

export interface BenefitsBuyingUsProps {
  title: string;
  description: string;
}

export const saleEquipment: SaleEquipmentProps[] = [
  {
    image: "/images/products/electricalmaterials.webp",
    name: "Materiales Eléctricos",
    description:
      "Venta de Componentes Eléctricos e Instrumentación Schneider Electric. Ofrecemos una completa gama de componentes eléctricos y de instrumentación de la marca Schneider Electric, líder mundial en la transformación digital de la energía y la automatización. Nuestra oferta está diseñada para garantizar la seguridad, confiabilidad y máxima eficiencia en sus instalaciones, abarcando desde el sector residencial hasta las aplicaciones industriales más exigentes.",
  },
];

export const benefitsBuyingUs: BenefitsBuyingUsProps[] = [
  {
    title: "Garantía Extendida",
    description:
      "Todos nuestros equipos cuentan con garantía y soporte técnico especializado.",
  },
  {
    title: "Financiamiento",
    description:
      "Opciones flexibles de financiamiento adaptadas a sus necesidades.",
  },
  {
    title: "Servicio Post-Venta",
    description:
      "Mantenimiento y soporte técnico disponible para nuestros clientes.",
  },
];
