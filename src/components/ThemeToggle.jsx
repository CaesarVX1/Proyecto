import { useState, useEffect } from 'react';
import { Sun, Moon } from 'lucide-react';
import { motion } from 'framer-motion';

const ThemeToggle = () => {
    const [theme, setTheme] = useState(
        localStorage.getItem('theme') ||
        (window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light')
    );

    useEffect(() => {
        if (theme === 'dark') {
            document.documentElement.classList.add('dark');
        } else {
            document.documentElement.classList.remove('dark');
        }
        localStorage.setItem('theme', theme);
    }, [theme]);

    const toggleTheme = () => {
        setTheme(theme === 'light' ? 'dark' : 'light');
    };

    return (
        <motion.button
            onClick={toggleTheme}
            className="fixed top-6 right-6 z-50 p-3 rounded-full bg-white/80 dark:bg-slate-800/80 shadow-lg backdrop-blur-sm hover:scale-110 transition-all border border-gray-200 dark:border-gray-700"
            whileTap={{ scale: 0.9 }}
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
        >
            {theme === 'light' ? (
                <Sun className="text-orange-400 w-6 h-6" />
            ) : (
                <Moon className="text-indigo-400 w-6 h-6" />
            )}
        </motion.button>
    );
};

export default ThemeToggle;
