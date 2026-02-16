import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { content } from '../data/content';
import { Gift } from 'lucide-react';

const GiftReveal = () => {
    const [isRevealed, setIsRevealed] = useState(false);
    const { gift } = content;

    return (
        <section className="py-32 px-6 max-w-4xl mx-auto text-center perspective-1000">
            <motion.h2
                className="text-3xl md:text-5xl font-bold text-center mb-16 bg-clip-text text-transparent bg-gradient-to-r from-rose-200 via-orange-100 to-rose-200 animate-gradient bg-300%"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
            >
                Una Sorpresa
            </motion.h2>

            <motion.div
                className="relative w-full max-w-lg mx-auto aspect-[4/5] md:aspect-[4/3] rounded-[2.5rem] overflow-hidden shadow-2xl ring-1 ring-white/20 bg-gray-100 dark:bg-zinc-900"
                initial={{ opacity: 0, y: 40, rotateX: 10 }}
                whileInView={{ opacity: 1, y: 0, rotateX: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 1, type: "spring", bounce: 0.3 }}
            >
                <AnimatePresence>
                    {!isRevealed && (
                        <motion.div
                            className="absolute inset-0 z-20 flex flex-col items-center justify-center bg-white/10 dark:bg-black/40 backdrop-blur-2xl cursor-pointer group"
                            onClick={() => setIsRevealed(true)}
                            exit={{ opacity: 0, scale: 1.1, filter: "blur(20px)" }}
                            initial={{ opacity: 1 }}
                            transition={{ duration: 0.8 }}
                        >
                            <div className="p-8 rounded-full bg-white/10 border border-white/20 shadow-lg mb-8 group-hover:scale-110 transition-transform duration-500">
                                <Gift className="w-12 h-12 text-rose-500 dark:text-rose-200" />
                            </div>

                            <p className="text-xl font-medium text-white dark:text-white tracking-[0.2em] uppercase">
                                {gift.blurText}
                            </p>
                            <p className="text-sm text-gray-300 dark:text-gray-300 mt-4 tracking-wide group-hover:text-white/80 transition-colors">
                                Click para descubrir
                            </p>
                        </motion.div>
                    )}
                </AnimatePresence>

                <motion.div
                    className="w-full h-full relative"
                    animate={{
                        filter: isRevealed ? "blur(0px) brightness(1)" : "blur(40px) brightness(0.8)",
                        scale: isRevealed ? 1 : 1.1
                    }}
                    transition={{ duration: 1.2, ease: "easeInOut" }}
                >
                    <img
                        src={gift.imagePlaceholder}
                        alt="Gift"
                        className="w-full h-full object-cover"
                    />

                    {isRevealed && (
                        <motion.div
                            className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent flex flex-col justify-end p-12 text-left"
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.6, duration: 1 }}
                        >
                            <h3 className="text-3xl md:text-4xl font-bold text-white mb-4 tracking-tight">
                                {gift.revealText}
                            </h3>
                            <p className="text-white/80 text-lg md:text-xl font-light leading-relaxed">
                                {gift.message}
                            </p>
                        </motion.div>
                    )}
                </motion.div>
            </motion.div>
        </section>
    );
};

export default GiftReveal;
