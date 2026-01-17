import React, { useState } from 'react';
import { Send, User, Mail, Phone, MessageSquare } from 'lucide-react';

const ContactForm = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
        message: ''
    });

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        // Número a donde llegará el mensaje (formato internacional sin +)
        const phoneNumber = '51937557779';

        // Construir el mensaje
        const text = `Hola EQUESFIN, vengo de su página web.%0A%0A*Mis datos son:*%0A👤 Nombre: ${formData.name}%0A📧 Correo: ${formData.email}%0A📱 Teléfono: ${formData.phone}%0A%0A💬 *Mensaje:*%0A${formData.message}`;

        // Crear la URL de WhatsApp
        const whatsappUrl = `https://wa.me/${phoneNumber}?text=${text}`;

        // Abrir en nueva pestaña
        window.open(whatsappUrl, '_blank');

        // Limpiar formulario (opcional, dependiendo de la UX deseada)
        setFormData({ name: '', email: '', phone: '', message: '' });
    };

    return (
        <section id="contacto-form" className="py-20 bg-slate-50">
            <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-12">
                    <h2 className="text-3xl font-bold text-slate-900 sm:text-4xl">Contáctanos por WhatsApp</h2>
                    <p className="mt-4 text-lg text-slate-600">
                        Llena tus datos y envíanos un mensaje directo a nuestro WhatsApp oficial.
                    </p>
                </div>

                <div className="bg-white rounded-2xl shadow-xl p-8 border border-slate-100">
                    <form onSubmit={handleSubmit} className="space-y-6">
                        <div>
                            <label htmlFor="name" className="block text-sm font-medium text-slate-700 mb-2">Nombre Completo</label>
                            <div className="relative">
                                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                                    <User className="h-5 w-5 text-slate-400" />
                                </div>
                                <input
                                    type="text"
                                    name="name"
                                    id="name"
                                    required
                                    value={formData.name}
                                    onChange={handleChange}
                                    className="block w-full pl-10 pr-3 py-3 border border-slate-300 rounded-lg focus:ring-primary focus:border-primary transition-colors"
                                    placeholder="Juan Pérez"
                                />
                            </div>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            <div>
                                <label htmlFor="email" className="block text-sm font-medium text-slate-700 mb-2">Correo Electrónico</label>
                                <div className="relative">
                                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                                        <Mail className="h-5 w-5 text-slate-400" />
                                    </div>
                                    <input
                                        type="email"
                                        name="email"
                                        id="email"
                                        required
                                        value={formData.email}
                                        onChange={handleChange}
                                        className="block w-full pl-10 pr-3 py-3 border border-slate-300 rounded-lg focus:ring-primary focus:border-primary transition-colors"
                                        placeholder="juan@ejemplo.com"
                                    />
                                </div>
                            </div>

                            <div>
                                <label htmlFor="phone" className="block text-sm font-medium text-slate-700 mb-2">Teléfono</label>
                                <div className="relative">
                                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                                        <Phone className="h-5 w-5 text-slate-400" />
                                    </div>
                                    <input
                                        type="tel"
                                        name="phone"
                                        id="phone"
                                        value={formData.phone}
                                        onChange={handleChange}
                                        className="block w-full pl-10 pr-3 py-3 border border-slate-300 rounded-lg focus:ring-primary focus:border-primary transition-colors"
                                        placeholder="999 999 999"
                                    />
                                </div>
                            </div>
                        </div>

                        <div>
                            <label htmlFor="message" className="block text-sm font-medium text-slate-700 mb-2">Mensaje</label>
                            <div className="relative">
                                <div className="absolute top-3 left-3 pointer-events-none">
                                    <MessageSquare className="h-5 w-5 text-slate-400" />
                                </div>
                                <textarea
                                    name="message"
                                    id="message"
                                    rows="4"
                                    required
                                    value={formData.message}
                                    onChange={handleChange}
                                    className="block w-full pl-10 pr-3 py-3 border border-slate-300 rounded-lg focus:ring-primary focus:border-primary transition-colors"
                                    placeholder="¿En qué podemos ayudarte?"
                                ></textarea>
                            </div>
                        </div>

                        <button
                            type="submit"
                            className="w-full flex justify-center items-center px-6 py-4 border border-transparent text-lg font-medium rounded-lg text-white bg-[#25D366] hover:bg-[#128C7E] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#25D366] transition-all duration-200 shadow-lg hover:shadow-xl transform hover:-translate-y-0.5"
                        >
                            <Send className="w-5 h-5 mr-2" />
                            Enviar a WhatsApp
                        </button>
                    </form>
                </div>
            </div>
        </section>
    );
};

export default ContactForm;
