import { motion } from 'framer-motion';
import { content } from '../data/content';
import { Send, MessageCircle } from 'lucide-react';

const Contact = () => {
    const { contact } = content;

    // ----------------------------------------------------------------------
    // 📞 CONFIGURACIÓN WHATSAPP
    // ----------------------------------------------------------------------
    const PHONE_NUMBER = '34653449051'; // Reemplaza con tu número real
    const MESSAGE = 'Holaa! Vi tu página y... aquí estoy';

    const handleWhatsAppClick = (e) => {
        e.preventDefault();
        const url = `https://wa.me/${PHONE_NUMBER}?text=${encodeURIComponent(MESSAGE)}`;
        window.open(url, '_blank');
    };

    return (
        <section className="py-20 px-6 max-w-2xl mx-auto text-center">
            <motion.div
                className="relative bg-white/10 border border-white/20 shadow-lg backdrop-blur-xl p-10 rounded-3xl overflow-hidden group hover:border-white/30 transition-all duration-300"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
            >
                {/* Background Decor */}
                <div className="absolute top-0 right-0 w-32 h-32 bg-green-500/10 rounded-full blur-2xl -mr-16 -mt-16 pointer-events-none" />

                <h2 className="text-3xl font-bold mb-8 text-gray-900 dark:text-white">{contact.title}</h2>

                <motion.a
                    href="#"
                    onClick={handleWhatsAppClick}
                    className="inline-flex items-center gap-3 bg-gradient-to-r from-green-500 to-emerald-600 text-white px-8 py-4 rounded-full font-semibold shadow-lg hover:shadow-green-500/30 hover:scale-105 transition-all w-full md:w-auto justify-center"
                    whileTap={{ scale: 0.95 }}
                >
                    <span>{contact.buttonText}</span>
                    <MessageCircle className="w-5 h-5" />
                </motion.a>

                <p className="mt-6 text-sm text-gray-500 dark:text-gray-400">
                    O envíame un correo a: <a href="mailto:tuemail@example.com" className="hover:text-rose-500 transition-colors">tuemail@example.com</a>
                </p>
            </motion.div>


        </section>
    );
};

export default Contact;
