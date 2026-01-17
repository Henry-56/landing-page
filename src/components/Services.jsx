import React from 'react';
import { motion } from 'framer-motion';
import { Calculator, Scale, TrendingUp, Users, FileText, Briefcase } from 'lucide-react';

const services = [
    {
        title: 'Asesoría Contable',
        description: 'Gestión precisa de registros contables, elaboración de estados financieros y análisis de rentabilidad para tu empresa.',
        icon: Calculator,
    },
    {
        title: 'Gestión Tributaria',
        description: 'Planificación fiscal estratégica y cumplimiento normativo ante la SUNAT para optimizar tu carga tributaria.',
        icon: Scale,
    },
    {
        title: 'Consultoría Financiera',
        description: 'Análisis de flujos de caja, presupuestos y estrategias de inversión para potenciar el crecimiento económico.',
        icon: TrendingUp,
    },
    {
        title: 'Asesoría Laboral',
        description: 'Gestión de planillas, contratos, beneficios sociales y cumplimiento de la normativa laboral vigente.',
        icon: Users,
    },
    {
        title: 'Trámites Administrativos',
        description: 'Soporte en gestiones ante entidades públicas y privadas, licencias y constitución de empresas.',
        icon: FileText,
    },
    {
        title: 'Acompañamiento Estratégico',
        description: 'Mentoría y dirección para la toma de decisiones informadas que aseguren la sostenibilidad de tu negocio.',
        icon: Briefcase,
    },
];

const Services = () => {
    return (
        <section id="servicios" className="py-20 bg-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center max-w-3xl mx-auto mb-16">
                    <h2 className="text-3xl font-bold text-slate-900 sm:text-4xl">
                        Soluciones Integrales para tu Negocio
                    </h2>
                    <p className="mt-4 text-lg text-slate-600">
                        Brindamos un servicio personalizado enfocado en la eficiencia, confianza y resultados medibles.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {services.map((service, index) => (
                        <motion.div
                            key={service.title}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            className="bg-slate-50 rounded-xl p-8 hover:shadow-xl transition-shadow duration-300 border border-slate-100"
                        >
                            <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-6">
                                <service.icon className="h-6 w-6 text-primary" />
                            </div>
                            <h3 className="text-xl font-bold text-slate-900 mb-3">{service.title}</h3>
                            <p className="text-slate-600 leading-relaxed">
                                {service.description}
                            </p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Services;
