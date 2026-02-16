import { motion } from 'framer-motion';
import { content } from '../data/content';
import { Send } from 'lucide-react';

const Contact = () => {
    const { contact } = content;

    return (
        <section className="py-20 px-6 max-w-2xl mx-auto text-center">
            <motion.div
                className="glass p-10 rounded-3xl"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
            >
                <h2 className="text-3xl font-bold mb-8">{contact.title}</h2>

                <motion.a
                    href={contact.link}
                    className="inline-flex items-center gap-3 bg-terracotta text-white px-8 py-4 rounded-full font-semibold shadow-lg hover:shadow-xl hover:scale-105 transition-all"
                    whileTap={{ scale: 0.95 }}
                >
                    <span>{contact.buttonText}</span>
                    <Send className="w-5 h-5" />
                </motion.a>
            </motion.div>

            <footer className="mt-20 text-sm text-gray-400">
                <p>Hecho con ❤️ para ti.</p>
            </footer>
        </section>
    );
};

export default Contact;
