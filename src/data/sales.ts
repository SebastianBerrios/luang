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
    image: "/src/assets/images/products/electricalmaterials.webp",
    name: "Materiales Eléctricos",
    description:
      "Comercialización de interruptores, tableros y componentes eléctricos de alta calidad de marcas reconocidas como Square D y Schneider Electric.",
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
