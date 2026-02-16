import { motion } from 'framer-motion';
import { content } from '../data/content';

const Hero = () => {
    const { title, subtitle, startDate } = content.hero;

    return (
        <section className="min-h-screen flex flex-col justify-center items-center text-center p-6 relative overflow-hidden">
            {/* Ultra-subtle background gradients for premium feel */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[80vw] h-[50vh] bg-rose-500/10 rounded-full blur-[120px] dark:bg-rose-900/10 pointer-events-none" />
            <div className="absolute bottom-0 right-0 w-[60vw] h-[60vh] bg-orange-500/10 rounded-full blur-[100px] dark:bg-orange-900/10 pointer-events-none" />

            <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }} // Custom emotional easing
                className="z-10 relative"
            >
                {/* Premium Title Gradient */}
                <h1 className="text-6xl md:text-8xl font-bold mb-8 tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-rose-200 via-orange-100 to-rose-200 animate-gradient bg-300%">
                    {title}
                </h1>

                <motion.p
                    className="text-xl md:text-3xl text-gray-600 dark:text-gray-400 mb-12 font-light tracking-wide max-w-2xl mx-auto"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.3, duration: 1 }}
                >
                    {subtitle}
                </motion.p>

                <motion.div
                    className="inline-flex items-center px-8 py-3 rounded-full bg-white/40 dark:bg-white/5 border border-white/20 dark:border-white/10 shadow-xl backdrop-blur-md"
                    initial={{ scale: 0.9, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    transition={{ delay: 0.6, duration: 0.8 }}
                >
                    <span className="text-sm md:text-base uppercase tracking-[0.2em] text-gray-800 dark:text-rose-200/90 font-medium">
                        {startDate}
                    </span>
                </motion.div>
            </motion.div>

            {/* Scroll Indicator */}
            <motion.div
                className="absolute bottom-12 left-1/2 -translate-x-1/2 text-gray-400/50 dark:text-white/20"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1, y: [0, 10, 0] }}
                transition={{ delay: 1.5, duration: 2, repeat: Infinity, ease: "easeInOut" }}
            >
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M12 5v14M19 12l-7 7-7-7" />
                </svg>
            </motion.div>
        </section>
    );
};

export default Hero;
