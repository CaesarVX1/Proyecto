import { motion } from 'framer-motion';
import { content } from '../data/content';
import { Sparkles, Mountain, PartyPopper, Heart } from 'lucide-react';

const iconMap = {
    Sparkles: Sparkles,
    Mountain: Mountain,
    PartyPopper: PartyPopper,
    Heart: Heart,
};

const TimelineItem = ({ data, index }) => {
    const Icon = iconMap[data.icon] || Heart;
    const isEven = index % 2 === 0;

    return (
        <motion.div
            className={`flex flex-col md:flex-row items-center justify-between mb-24 w-full relative ${isEven ? 'md:flex-row-reverse' : ''}`}
            initial={{ opacity: 0, y: 50, filter: "blur(10px)" }}
            whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
            viewport={{ once: true, margin: "-10%" }}
            transition={{ duration: 0.8, delay: index * 0.1, ease: "easeOut" }}
        >
            <div className="w-full md:w-5/12" />

            {/* Glowing Node */}
            <div className="z-20 flex items-center justify-center w-14 h-14 bg-white/80 dark:bg-zinc-900 rounded-full shadow-[0_0_20px_rgba(251,113,133,0.4)] border border-white/20 dark:border-white/10 backdrop-blur-sm mb-6 md:mb-0 relative group">
                <div className="absolute inset-0 rounded-full bg-rose-500/20 dark:bg-rose-500/10 blur-md opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                <Icon className="w-5 h-5 text-gray-700 dark:text-rose-200 transition-transform duration-300 group-hover:scale-110" />
            </div>

            {/* Glassmorphism Card */}
            <div className="w-full md:w-5/12 relative group">
                <div className="absolute inset-0 bg-gradient-to-r from-rose-500/5 to-orange-500/5 rounded-2xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                <div className="relative bg-white/10 border border-white/20 shadow-lg backdrop-blur-xl p-8 rounded-2xl hover:bg-white/15 hover:border-white/30 transition-all duration-300">
                    <span className="text-xs font-bold text-gray-400 dark:text-white/40 uppercase tracking-[0.15em] block mb-3">
                        {data.date}
                    </span>
                    <h3 className="text-2xl font-semibold mb-3 text-gray-900 dark:text-white/90">
                        {data.title}
                    </h3>
                    <p className="text-gray-600 dark:text-gray-300/80 leading-relaxed font-light">
                        {data.description}
                    </p>
                </div>
            </div>
        </motion.div>
    );
};

const Timeline = () => {
    const { timeline } = content;

    return (
        <section className="py-32 px-6 max-w-6xl mx-auto relative">
            {/* Subtle Central Line */}
            <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-[1px] bg-gradient-to-b from-transparent via-gray-300/50 to-transparent dark:via-white/10 top-0 hidden md:block" />

            <motion.h2
                className="text-3xl md:text-5xl font-bold text-center mb-24 bg-clip-text text-transparent bg-gradient-to-r from-rose-200 via-orange-100 to-rose-200 animate-gradient bg-300%"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
            >
                Nuestra Historia
            </motion.h2>

            <div className="relative">
                {timeline.map((item, index) => (
                    <TimelineItem key={index} data={item} index={index} />
                ))}
            </div>
        </section>
    );
};

export default Timeline;
