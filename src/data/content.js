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
            icon: "Sparkles", // Lucide icon name
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
            icon: "PartyPopper", // Check if this icon exists, or use generic
        },
    ],
    qualities: [
        {
            title: "Tu Risa",
            description: "Es la melodía que ilumina mis días más oscuros.",
            gridClass: "col-span-1 md:col-span-2 row-span-1", // Bento grid sizing
            color: "bg-red-50 dark:bg-rose-900/20",
        },
        {
            title: "Paciencia",
            description: "Cómo me enseñas a ver el mundo con calma.",
            gridClass: "col-span-1 row-span-2",
            color: "bg-blue-50 dark:bg-blue-900/20",
        },
        {
            title: "Creatividad",
            description: "Tu forma única de resolver problemas y crear belleza.",
            gridClass: "col-span-1 row-span-1",
            color: "bg-yellow-50 dark:bg-yellow-900/20",
        },
        {
            title: "Apoyo Incondicional",
            description: "Siempre estás ahí, sin importar qué.",
            gridClass: "col-span-1 md:col-span-2 row-span-1",
            color: "bg-green-50 dark:bg-emerald-900/20",
        },
    ],
    gift: {
        blurText: "Un regalo para ti...",
        revealText: "¡Te Amo!",
        message: "Gracias por ser mi compañera de vida. Este es solo el comienzo de nuestra historia.",
        imagePlaceholder: "https://via.placeholder.com/600x400", // User will replace this
    },
    contact: {
        title: "Háblame",
        buttonText: "Envíame un mensaje",
        link: "mailto:tuemail@example.com", // Placeholder
    }
};
