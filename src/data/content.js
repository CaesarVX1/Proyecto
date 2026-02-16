
// ----------------------------------------------------------------------
// 📸 AREA DE IMPORTACIÓN DE IMÁGENES
// ----------------------------------------------------------------------
// Importa aquí tus fotos. Vite las procesará y las incluirá en el HTML final.
// Si no tienes la foto aún, usa los placeholders comentados o añade una URL externa.

// Ejemplo: import miFoto from '../assets/mifoto.jpg';

// Placeholders (Elimina esto cuando tengas tus fotos reales en src/assets)
const placeholderImg = "https://via.placeholder.com/600x400";

// ----------------------------------------------------------------------
// 📝 CONFIGURACIÓN DE CONTENIDO
// ----------------------------------------------------------------------

export const content = {
    hero: {
        title: "Nuestro Viaje",
        subtitle: "Una cápsula del tiempo para nosotros.",
        startDate: "26/10/2026",
        buttonText: "Revivir momentos",
    },
    timeline: [
        {
            date: "26 de Octubre, 2026",
            title: "El comienzo",
            description: "El día que todo cambió. Nuestro primer encuentro bajo las luces de la ciudad.",
            icon: "Sparkles", // Iconos disponibles: Sparkles, Mountain, PartyPopper, Heart
        },
        {
            date: "15 de Noviembre, 2026",
            title: "Primera aventura",
            description: "Esa escapada improvisada a la montaña. El frío solo nos unió más.",
            icon: "Mountain",
        },
        {
            date: "31 de Diciembre, 2026",
            title: "Año Nuevo, Vida Nueva",
            description: "Brindando por todo lo que vendrá. Prometo estar a tu lado en cada paso.",
            icon: "PartyPopper",
        },
    ],
    qualities: [
        {
            title: "Tu Risa",
            description: "Es la melodía que ilumina mis días más oscuros.",
            gridClass: "col-span-1 md:col-span-2 row-span-1",
            color: "bg-rose-500/10", // Opcional si quieres override
        },
        {
            title: "Paciencia",
            description: "Cómo me enseñas a ver el mundo con calma.",
            gridClass: "col-span-1 row-span-2",
            color: "bg-blue-500/10",
        },
        {
            title: "Creatividad",
            description: "Tu forma única de resolver problemas y crear belleza.",
            gridClass: "col-span-1 row-span-1",
            color: "bg-amber-500/10",
        },
        {
            title: "Apoyo Incondicional",
            description: "Siempre estás ahí, sin importar qué.",
            gridClass: "col-span-1 md:col-span-2 row-span-1",
            color: "bg-emerald-500/10",
        },
    ],
    gift: {
        blurText: "Un regalo para ti...",
        revealText: "¡Te Amo!",
        message: "Gracias por ser mi compañera de vida. Este es solo el comienzo de nuestra historia.",
        // IMPORTANTE: Cambia 'placeholderImg' por la variable importada arriba (ej: miFoto)
        image: placeholderImg,
    },
    contact: {
        title: "Háblame",
        buttonText: "Envíame un mensaje",
        // El número y mensaje se configuran en el componente Contact.jsx para la lógica de WhatsApp
    }
};
