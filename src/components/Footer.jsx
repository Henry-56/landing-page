import React from 'react';
import { Facebook, Instagram, Mail, MapPin, Phone } from 'lucide-react';

const Footer = () => {
    return (
        <footer id="contacto" className="bg-slate-900 text-white pt-16 pb-8">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
                    <div>
                        <div className="flex items-center mb-6">
                            <img className="h-10 w-auto bg-white rounded p-1" src="/logo.png" alt="EQUESFIN Logo" />
                            <span className="ml-3 text-xl font-bold text-white">EQUESFIN</span>
                        </div>
                        <p className="text-slate-400 mb-6">
                            Tu aliado estratégico para el crecimiento financiero y cumplimiento normativo.
                        </p>
                        <div className="flex space-x-4">
                            <a
                                href="https://www.facebook.com/profile.php?id=61568597334556"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="w-10 h-10 rounded-full bg-slate-800 flex items-center justify-center hover:bg-primary transition-colors"
                            >
                                <Facebook className="h-5 w-5" />
                            </a>
                            <a
                                href="https://www.instagram.com/equipoestrategicofinanciero"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="w-10 h-10 rounded-full bg-slate-800 flex items-center justify-center hover:bg-primary transition-colors"
                            >
                                <Instagram className="h-5 w-5" />
                            </a>
                        </div>
                    </div>

                    <div>
                        <h3 className="text-lg font-bold mb-6 border-b border-primary w-min pb-2">Servicios</h3>
                        <ul className="space-y-3 text-slate-400">
                            <li><a href="#" className="hover:text-secondary transition-colors">Contabilidad</a></li>
                            <li><a href="#" className="hover:text-secondary transition-colors">Tributación</a></li>
                            <li><a href="#" className="hover:text-secondary transition-colors">Finanzas</a></li>
                            <li><a href="#" className="hover:text-secondary transition-colors">Laboral</a></li>
                        </ul>
                    </div>

                    <div>
                        <h3 className="text-lg font-bold mb-6 border-b border-primary w-min pb-2">Enlaces</h3>
                        <ul className="space-y-3 text-slate-400">
                            <li><a href="#inicio" className="hover:text-secondary transition-colors">Inicio</a></li>
                            <li><a href="#nosotros" className="hover:text-secondary transition-colors">Sobre Nosotros</a></li>
                            <li><a href="#servicios" className="hover:text-secondary transition-colors">Servicios</a></li>
                            <li><a href="#contacto" className="hover:text-secondary transition-colors">Contacto</a></li>
                        </ul>
                    </div>

                    <div>
                        <h3 className="text-lg font-bold mb-6 border-b border-primary w-min pb-2">Contacto</h3>
                        <ul className="space-y-4 text-slate-400">
                            <li className="flex items-start">
                                <MapPin className="h-5 w-5 mr-3 text-secondary flex-shrink-0 mt-1" />
                                <span>Cal. Los Canarios Mza. D2 Lote. 07, Lima (Huachipa)</span>
                            </li>
                            <li className="flex items-center">
                                <Phone className="h-5 w-5 mr-3 text-secondary flex-shrink-0" />
                                <span>937 557 779</span>
                            </li>
                            <li className="flex items-center">
                                <Mail className="h-5 w-5 mr-3 text-secondary flex-shrink-0" />
                                <span>Equesfin@gmail.com</span>
                            </li>
                        </ul>
                    </div>
                </div>

                <div className="border-t border-slate-800 pt-8 text-center text-slate-500 text-sm">
                    <p className="mb-2">RUC: 20613319736 - EQUESFIN E.I.R.L.</p>
                    <p>&copy; {new Date().getFullYear()} EQUESFIN. Todos los derechos reservados.</p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
