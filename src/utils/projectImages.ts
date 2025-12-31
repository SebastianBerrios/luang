import fs from "fs";
import path from "path";

/**
 * Escanea el directorio de un proyecto y retorna las rutas de las imágenes que realmente existen.
 * Esta función se ejecuta en build time (servidor), no en el cliente.
 */
export function getProjectImagesFromDisk(folderPath: string): string[] {
  try {
    // Remover el prefijo /images/projects/ si existe
    const folderName = folderPath.replace(/^\/images\/projects\//, "");

    // Construir la ruta absoluta al directorio en public
    const publicPath = path.join(
      process.cwd(),
      "public",
      "images",
      "projects",
      folderName
    );

    // Verificar si el directorio existe
    if (!fs.existsSync(publicPath)) {
      console.warn(`Directorio no encontrado: ${publicPath}`);
      return [];
    }

    // Leer los archivos del directorio
    const files = fs.readdirSync(publicPath);

    // Filtrar solo archivos .webp y ordenarlos
    const imageFiles = files
      .filter((file) => file.endsWith(".webp") && file.startsWith("image"))
      .sort((a, b) => {
        // Extraer números de los nombres de archivo (image01.webp -> 1, image02.webp -> 2)
        const numA = parseInt(a.match(/\d+/)?.[0] || "0");
        const numB = parseInt(b.match(/\d+/)?.[0] || "0");
        return numA - numB;
      });

    // Construir las rutas relativas (como se servirán desde /images/projects/...)
    const imagePaths = imageFiles.map(
      (file) => `/images/projects/${folderName}/${file}`
    );

    return imagePaths;
  } catch (error) {
    console.error(`Error al escanear imágenes para ${folderPath}:`, error);
    return [];
  }
}

/**
 * Obtiene las imágenes válidas para todos los proyectos.
 * Retorna un mapa donde la clave es la ruta de la carpeta del proyecto
 * y el valor es un array de rutas de imágenes válidas.
 */
export function getAllProjectImages(
  projects: Array<{ image: string }>
): Map<string, string[]> {
  const imageMap = new Map<string, string[]>();

  for (const project of projects) {
    const images = getProjectImagesFromDisk(project.image);
    imageMap.set(project.image, images);
  }

  return imageMap;
}
