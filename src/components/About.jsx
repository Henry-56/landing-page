import React from 'react';
import { Check } from 'lucide-react';

const About = () => {
    return (
        <section id="nosotros" className="py-20 bg-slate-50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="lg:grid lg:grid-cols-2 lg:gap-16 items-center">
                    <div className="mb-12 lg:mb-0">
                        <h2 className="text-3xl font-bold text-slate-900 sm:text-4xl mb-6">
                            Sobre EQUESFIN
                        </h2>
                        <p className="text-lg text-slate-600 mb-6">
                            Somos un estudio contable especializado en brindar soluciones contables, tributarias, financieras y laborales. Nuestro objetivo es la correcta gestión y el crecimiento sostenido de empresas y profesionales.
                        </p>
                        <p className="text-lg text-slate-600 mb-8">
                            Nos diferenciamos por ofrecer una asesoría integral y un acompañamiento estratégico constante, permitiendo a nuestros clientes tomar decisiones informadas con total confianza.
                        </p>

                        <div className="space-y-4">
                            {[
                                'Equipo de expertos calificados',
                                'Enfoque en resultados y eficiencia',
                                'Atención personalizada y cercana',
                                'Tecnología aplicada a la gestión'
                            ].map((item, index) => (
                                <div key={index} className="flex items-center">
                                    <div className="flex-shrink-0 w-6 h-6 rounded-full bg-secondary/20 flex items-center justify-center mr-3">
                                        <Check className="h-4 w-4 text-secondary" />
                                    </div>
                                    <span className="text-slate-700 font-medium">{item}</span>
                                </div>
                            ))}
                        </div>
                    </div>

                    <div className="relative">
                        <div className="aspect-w-3 aspect-h-2 rounded-2xl overflow-hidden shadow-2xl bg-white p-2">
                            {/* Placeholder for an office image or team image */}
                            <img
                                src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80"
                                alt="Modern office team meeting"
                                className="w-full h-full object-cover rounded-xl"
                            />
                        </div>

                        <div className="absolute -bottom-6 -left-6 bg-white p-6 rounded-xl shadow-xl border border-slate-100 max-w-xs hidden sm:block">
                            <p className="text-4xl font-bold text-primary mb-2">+500</p>
                            <p className="text-sm text-slate-600 font-medium">Clientes satisfechos confían en nuestra gestión</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default About;
