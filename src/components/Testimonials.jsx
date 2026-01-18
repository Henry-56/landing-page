import React from 'react';
import { motion } from 'framer-motion';
import { Star, Quote } from 'lucide-react';

const testimonials = [
    {
        name: 'Carlos Mendoza',
        role: 'Gerente General',
        company: 'Importaciones del Norte SAC',
        content: 'EQUESFIN ha sido fundamental para el crecimiento de nuestra empresa. Su asesoría tributaria nos ayudó a optimizar nuestra carga fiscal de manera legal y eficiente.',
        rating: 5
    },
    {
        name: 'María Elena Ríos',
        role: 'Propietaria',
        company: 'Boutique Elegance EIRL',
        content: 'Como emprendedora, necesitaba un estudio contable que entendiera mis necesidades. El equipo de EQUESFIN me brinda tranquilidad con mis obligaciones ante SUNAT.',
        rating: 5
    },
    {
        name: 'Roberto Chávez',
        role: 'Director Administrativo',
        company: 'Constructora Lima Este',
        content: 'Profesionalismo y eficiencia. Llevan nuestra contabilidad desde hace 3 años y la atención siempre es personalizada y oportuna.',
        rating: 5
    }
];

const StarRating = ({ rating }) => {
    return (
        <div className="flex gap-1">
            {[...Array(rating)].map((_, i) => (
                <Star key={i} className="h-4 w-4 fill-yellow-400 text-yellow-400" />
            ))}
        </div>
    );
};

const Testimonials = () => {
    return (
        <section id="testimonios" className="py-20 bg-slate-100">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-16">
                    <h2 className="text-3xl font-bold text-slate-900 sm:text-4xl">
                        Lo Que Dicen Nuestros Clientes
                    </h2>
                    <p className="mt-4 text-lg text-slate-600">
                        Más de 500 empresas confían en EQUESFIN para su gestión contable
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {testimonials.map((testimonial, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            className="bg-white rounded-xl p-8 shadow-lg hover:shadow-xl transition-shadow duration-300 relative"
                        >
                            <Quote className="absolute top-4 right-4 h-8 w-8 text-primary/20" />

                            <StarRating rating={testimonial.rating} />

                            <p className="mt-4 text-slate-600 leading-relaxed italic">
                                "{testimonial.content}"
                            </p>

                            <div className="mt-6 pt-4 border-t border-slate-100">
                                <p className="font-bold text-slate-900">{testimonial.name}</p>
                                <p className="text-sm text-slate-500">
                                    {testimonial.role} - {testimonial.company}
                                </p>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Testimonials;
