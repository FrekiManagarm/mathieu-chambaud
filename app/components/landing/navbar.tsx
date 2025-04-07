import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Button } from "~/components/ui/button";
import { Menu, X } from "lucide-react";

// Liste des sections pour la navigation
const navItems = [
  { name: "Accueil", href: "#" },
  { name: "À propos", href: "#about" },
  { name: "Compétences", href: "#skills" },
  { name: "Expérience", href: "#experience" },
  { name: "Projets", href: "#projects" },
  { name: "Contact", href: "#contact" },
];

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  // Effet pour détecter le scroll
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Effet pour empêcher le défilement lorsque le menu mobile est ouvert
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [mobileMenuOpen]);

  return (
    <>
      {/* Navbar principale */}
      <motion.header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled
            ? "bg-slate-900/90 backdrop-blur-md shadow-md py-3"
            : "bg-transparent py-5"
        }`}
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <a
              href="#"
              className="text-white font-bold text-xl tracking-tight flex items-center"
            >
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-purple-500">
                Mathieu
              </span>
              <span className="ml-1">Chambaud</span>
            </a>

            {/* Navigation desktop */}
            <nav className="hidden md:flex items-center space-x-1">
              {navItems.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  className="px-3 py-2 text-sm text-gray-300 hover:text-white rounded-md hover:bg-slate-800/50 transition-all duration-200"
                >
                  {item.name}
                </a>
              ))}
              <Button
                size="sm"
                className="ml-4 bg-indigo-600 hover:bg-indigo-700 text-white transition-all duration-300"
                asChild
              >
                <a href="/cv.pdf" target="_blank" rel="noopener noreferrer">
                  CV
                </a>
              </Button>
            </nav>

            {/* Bouton menu mobile */}
            <button
              className="md:hidden text-gray-300 hover:text-white"
              onClick={() => setMobileMenuOpen(true)}
            >
              <Menu className="h-6 w-6" />
            </button>
          </div>
        </div>
      </motion.header>

      {/* Menu mobile */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            className="fixed inset-0 z-50 bg-slate-900/95 backdrop-blur-sm md:hidden"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
          >
            <div className="flex flex-col h-full">
              <div className="flex justify-between items-center px-4 py-4">
                <a href="#" className="text-white font-bold text-xl">
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-purple-500">
                    Mathieu
                  </span>
                  <span className="ml-1">Chambaud</span>
                </a>
                <button
                  className="text-gray-300 hover:text-white"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  <X className="h-6 w-6" />
                </button>
              </div>
              <div className="flex-1 flex flex-col justify-center px-4 space-y-4">
                {navItems.map((item, index) => (
                  <motion.a
                    key={item.name}
                    href={item.href}
                    className="py-3 text-center text-lg text-gray-300 hover:text-white border-b border-slate-800"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{
                      opacity: 1,
                      y: 0,
                      transition: {
                        delay: 0.1 + index * 0.1,
                      },
                    }}
                    exit={{ opacity: 0, y: 10 }}
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    {item.name}
                  </motion.a>
                ))}
                <motion.div
                  className="pt-6 flex justify-center"
                  initial={{ opacity: 0 }}
                  animate={{
                    opacity: 1,
                    transition: {
                      delay: 0.7,
                    },
                  }}
                >
                  <Button
                    className="bg-indigo-600 hover:bg-indigo-700 text-white transition-all duration-300 w-full"
                    asChild
                  >
                    <a href="/cv.pdf" target="_blank" rel="noopener noreferrer">
                      Télécharger mon CV
                    </a>
                  </Button>
                </motion.div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
