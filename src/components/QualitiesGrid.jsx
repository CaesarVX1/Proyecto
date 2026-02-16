import { motion } from 'framer-motion';
import { content } from '../data/content';

const QualityCard = ({ data, index }) => {
    // Determine gradient based on index or data props if available, otherwise default to subtle ones
    const gradients = [
        "from-rose-500/10 to-orange-500/10",
        "from-blue-500/10 to-indigo-500/10",
        "from-emerald-500/10 to-teal-500/10",
        "from-purple-500/10 to-pink-500/10",
    ];

    const gradient = gradients[index % gradients.length];

    return (
        <motion.div
            className={`p-8 rounded-3xl relative overflow-hidden group bg-white/10 border border-white/20 shadow-lg backdrop-blur-xl hover:bg-white/15 hover:border-white/30 transition-all duration-300 hover:shadow-2xl hover:scale-[1.02] ${data.gridClass} bg-gradient-to-br ${gradient}`}
            initial={{ opacity: 0, scale: 0.9, y: 20 }}
            whileInView={{ opacity: 1, scale: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: index * 0.05 }}
        >
            {/* Dynamic Glow Effect */}
            <div className="absolute -right-10 -top-10 w-40 h-40 bg-white/20 dark:bg-white/5 rounded-full blur-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none" />

            <div className="relative z-10 h-full flex flex-col justify-between">
                <div>
                    {/* Optional: Icon placeholder space */}
                </div>

                <div>
                    <h3 className="text-2xl font-semibold mb-3 text-gray-900 dark:text-white tracking-tight">
                        {data.title}
                    </h3>
                    <p className="text-gray-600 dark:text-gray-300/70 font-light leading-relaxed">
                        {data.description}
                    </p>
                </div>
            </div>
        </motion.div>
    );
};

const QualitiesGrid = () => {
    const { qualities } = content;

    return (
        <section className="py-32 px-6 max-w-6xl mx-auto">
            <motion.div
                className="text-center mb-20"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
            >
                <h2 className="text-4xl md:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-rose-200 via-orange-100 to-rose-200 animate-gradient bg-300% mb-4 tracking-tight">
                    Lo Que Amo De Ti
                </h2>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 auto-rows-[250px]">
                {qualities.map((quality, index) => (
                    <QualityCard key={index} data={quality} index={index} />
                ))}
            </div>
        </section>
    );
};

export default QualitiesGrid;
