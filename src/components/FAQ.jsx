import React, { useState } from 'react';
import { ChevronDown, ChevronUp, HelpCircle } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const faqs = [
    {
        question: '¿Cuánto cuesta contratar un estudio contable en Lima?',
        answer: 'El costo varía según el tamaño de tu empresa y servicios requeridos. En EQUESFIN ofrecemos planes personalizados para MYPES, pequeñas y medianas empresas. Solicita tu cotización personalizada sin compromiso a través de nuestro formulario de contacto.'
    },
    {
        question: '¿Qué servicios incluye la asesoría contable para empresas?',
        answer: 'Nuestra asesoría contable incluye registro de operaciones, elaboración de estados financieros, análisis de rentabilidad, cumplimiento tributario ante SUNAT, gestión de planillas y asesoría laboral integral. Todo adaptado a las necesidades específicas de tu negocio.'
    },
    {
        question: '¿Cómo pueden ayudarme con las declaraciones ante SUNAT?',
        answer: 'Nos encargamos de todas tus obligaciones tributarias: declaraciones mensuales (PDT), declaración anual, fraccionamientos, atención de fiscalizaciones y planificación tributaria estratégica para optimizar tu carga fiscal de manera legal.'
    },
    {
        question: '¿Trabajan con empresas de todos los tamaños?',
        answer: 'Sí, atendemos desde emprendedores individuales y MYPES hasta medianas empresas. Cada cliente recibe atención personalizada según sus necesidades específicas, con planes escalables que crecen junto a tu negocio.'
    },
    {
        question: '¿Cuál es el proceso para comenzar a trabajar con EQUESFIN?',
        answer: 'Es muy sencillo: 1) Solicita tu consulta gratuita a través de nuestro formulario, 2) Evaluamos tus necesidades contables y tributarias, 3) Te presentamos una propuesta personalizada, 4) Comenzamos a trabajar juntos. Todo el proceso inicial es sin compromiso.'
    }
];

// JSON-LD Schema for FAQPage - helps with rich snippets in Google
const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": faqs.map(faq => ({
        "@type": "Question",
        "name": faq.question,
        "acceptedAnswer": {
            "@type": "Answer",
            "text": faq.answer
        }
    }))
};

const FAQItem = ({ question, answer, isOpen, onClick }) => {
    return (
        <div className="border border-slate-200 rounded-lg overflow-hidden mb-4">
            <button
                onClick={onClick}
                className="w-full px-6 py-4 text-left flex items-center justify-between bg-white hover:bg-slate-50 transition-colors duration-200"
                aria-expanded={isOpen}
            >
                <span className="font-semibold text-slate-900 pr-4">{question}</span>
                {isOpen ? (
                    <ChevronUp className="h-5 w-5 text-primary flex-shrink-0" />
                ) : (
                    <ChevronDown className="h-5 w-5 text-slate-400 flex-shrink-0" />
                )}
            </button>
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: 'auto', opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3 }}
                    >
                        <div className="px-6 py-4 bg-slate-50 border-t border-slate-200">
                            <p className="text-slate-600 leading-relaxed">{answer}</p>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    );
};

const FAQ = () => {
    const [openIndex, setOpenIndex] = useState(0);

    const handleClick = (index) => {
        setOpenIndex(openIndex === index ? -1 : index);
    };

    return (
        <section id="faq" className="py-20 bg-white">
            {/* JSON-LD Schema for SEO */}
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
            />

            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-12">
                    <div className="flex items-center justify-center mb-4">
                        <HelpCircle className="h-8 w-8 text-primary mr-3" />
                        <h2 className="text-3xl font-bold text-slate-900 sm:text-4xl">
                            Preguntas Frecuentes
                        </h2>
                    </div>
                    <p className="mt-4 text-lg text-slate-600">
                        Resolvemos tus dudas sobre nuestros servicios contables y tributarios
                    </p>
                </div>

                <div className="max-w-3xl mx-auto">
                    {faqs.map((faq, index) => (
                        <FAQItem
                            key={index}
                            question={faq.question}
                            answer={faq.answer}
                            isOpen={openIndex === index}
                            onClick={() => handleClick(index)}
                        />
                    ))}
                </div>

                <div className="text-center mt-12">
                    <p className="text-slate-600 mb-4">
                        ¿Tienes más preguntas? Estamos aquí para ayudarte
                    </p>
                    <a
                        href="#contacto-form"
                        className="inline-flex items-center justify-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-primary hover:bg-primary-dark transition-colors duration-200 shadow-lg hover:shadow-xl"
                    >
                        Contáctanos
                    </a>
                </div>
            </div>
        </section>
    );
};

export default FAQ;
