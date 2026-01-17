import React, { useState } from 'react';
import { Menu, X } from 'lucide-react';

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);

    const navLinks = [
        { name: 'Inicio', href: '#inicio' },
        { name: 'Servicios', href: '#servicios' },
        { name: 'Nosotros', href: '#nosotros' },
        { name: 'Contacto', href: '#contacto' },
    ];

    return (
        <nav className="bg-white shadow-md fixed w-full z-50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between h-20">
                    <div className="flex items-center">
                        <a href="#" className="flex-shrink-0 flex items-center">
                            <img className="h-12 w-auto" src="/logo.png" alt="EQUESFIN Logo" />
                            <span className="ml-3 text-xl font-bold text-primary-dark hidden md:block">
                                EQUESFIN
                            </span>
                        </a>
                    </div>

                    <div className="hidden md:flex items-center space-x-8">
                        {navLinks.map((link) => (
                            <a
                                key={link.name}
                                href={link.href}
                                className="text-gray-700 hover:text-primary-light font-medium transition-colors duration-200"
                            >
                                {link.name}
                            </a>
                        ))}
                        <a
                            href="#contacto"
                            className="bg-primary hover:bg-primary-dark text-white px-5 py-2 rounded-md font-medium transition-colors duration-200"
                        >
                            Agenda una Cita
                        </a>
                    </div>

                    <div className="md:hidden flex items-center">
                        <button
                            onClick={() => setIsOpen(!isOpen)}
                            className="text-gray-700 hover:text-primary focus:outline-none"
                        >
                            {isOpen ? <X size={28} /> : <Menu size={28} />}
                        </button>
                    </div>
                </div>
            </div>

            {/* Mobile menu */}
            {isOpen && (
                <div className="md:hidden bg-white border-t">
                    <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
                        {navLinks.map((link) => (
                            <a
                                key={link.name}
                                href={link.href}
                                onClick={() => setIsOpen(false)}
                                className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-primary hover:bg-gray-50"
                            >
                                {link.name}
                            </a>
                        ))}
                        <a
                            href="#contacto"
                            onClick={() => setIsOpen(false)}
                            className="block px-3 py-2 mt-4 text-center rounded-md text-base font-medium bg-primary text-white hover:bg-primary-dark"
                        >
                            Agenda una Cita
                        </a>
                    </div>
                </div>
            )}
        </nav>
    );
};

export default Navbar;
