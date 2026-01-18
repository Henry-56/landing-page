import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, CheckCircle } from 'lucide-react';

const Hero = () => {
    return (
        <section id="inicio" className="relative bg-gradient-to-b from-slate-50 to-slate-100 pt-28 pb-20 lg:pt-36 lg:pb-28 overflow-hidden">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                <div className="grid lg:grid-cols-2 gap-12 items-center">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                    >
                        <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-slate-900 leading-tight">
                            ESTUDIO CONTABLE EN LIMA | <span className="text-primary">SOLUCIONES EMPRESARIALES</span>
                        </h1>
                        <p className="mt-6 text-lg text-slate-600 max-w-lg">
                            Somos el estudio contable que tu empresa necesita. Asesoría contable, tributaria y financiera diseñada para maximizar tu rentabilidad y garantizar el cumplimiento ante SUNAT.
                        </p>

                        <div className="mt-8 flex flex-col sm:flex-row gap-4">
                            <a
                                href="#contacto"
                                className="inline-flex items-center justify-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-primary hover:bg-primary-dark transition-colors duration-200 shadow-lg hover:shadow-xl"
                            >
                                Consulta Gratuita
                                <ArrowRight className="ml-2 h-5 w-5" />
                            </a>
                            <a
                                href="#servicios"
                                className="inline-flex items-center justify-center px-6 py-3 border border-slate-300 text-base font-medium rounded-md text-slate-700 bg-white hover:bg-slate-50 transition-colors duration-200"
                            >
                                Nuestros Servicios
                            </a>
                        </div>

                        <div className="mt-8 flex flex-wrap gap-4 text-sm text-slate-500">
                            <div className="flex items-center">
                                <CheckCircle className="h-4 w-4 text-secondary mr-2" />
                                <span>Asesoría Integral</span>
                            </div>
                            <div className="flex items-center">
                                <CheckCircle className="h-4 w-4 text-secondary mr-2" />
                                <span>Confianza Garantizada</span>
                            </div>
                            <div className="flex items-center">
                                <CheckCircle className="h-4 w-4 text-secondary mr-2" />
                                <span>Eficiencia Comprobada</span>
                            </div>
                        </div>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                        className="relative"
                    >
                        <div className="absolute top-0 right-0 -mr-20 -mt-20 w-80 h-80 bg-primary/10 rounded-full blur-3xl opacity-70"></div>
                        <div className="absolute bottom-0 left-0 -ml-20 -mb-20 w-80 h-80 bg-secondary/10 rounded-full blur-3xl opacity-70"></div>

                        <div className="relative rounded-2xl overflow-hidden shadow-2xl border-4 border-white">
                            <img
                                src="https://images.unsplash.com/photo-1554224155-6726b3ff858f?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80"
                                alt="Accountant working along with financial documents"
                                className="w-full h-full object-cover"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent flex items-end p-8">
                                <div className="text-white">
                                    <p className="font-bold text-xl">Tu éxito es nuestra prioridad</p>
                                    <p className="text-sm opacity-90">Gestión financiera estratégica</p>
                                </div>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default Hero;
