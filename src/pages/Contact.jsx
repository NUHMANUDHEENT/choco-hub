import React, { useEffect } from 'react';
import { MapPin, Phone, Mail, MessageSquare } from 'lucide-react';
import Button from '../components/UI/Button';

const Contact = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <div className="animate-fade-in bg-[#fdfbf7]">
            <div className="bg-[#fdfbf7] py-16 text-center border-b border-[#e6ded8]">
                <div className="max-w-7xl mx-auto px-6">
                    <h1 className="text-4xl md:text-5xl font-extrabold text-[#3e2615] mb-4">Contact Us</h1>
                    <p className="text-lg text-[#6e5c53]">Get in touch for bulk inquiries and partnership opportunities.</p>
                </div>
            </div>

            <div className="max-w-7xl mx-auto px-6 py-20">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
                    {/* Contact Information */}
                    <div>
                        <h2 className="text-3xl font-bold text-[#5c3a21] mb-6">Get In Touch</h2>
                        <p className="text-[#6e5c53] text-lg mb-12 leading-relaxed">
                            Have questions about pricing, bulk orders, or becoming a retail partner? Our team is ready to assist you.
                        </p>

                        <div className="flex flex-col gap-6">
                            {[
                                { icon: <Phone size={24} />, title: 'Phone', desc: '+1 (234) 567-8900', hint: 'Mon-Fri from 8am to 6pm.' },
                                { icon: <Mail size={24} />, title: 'Email', desc: 'supply@chocohub.com', hint: 'We respond within 24 hours.' },
                                { icon: <MapPin size={24} />, title: 'Warehouse Center', desc: '123 Wholesale Market, City Name, 12345', hint: '' }
                            ].map((item, i) => (
                                <div key={i} className="flex flex-col sm:flex-row items-start sm:items-center gap-6 p-6 bg-white rounded-xl border border-[#e6ded8]">
                                    <div className="text-[#5c3a21] bg-[#fdfbf7] p-4 rounded-full">
                                        {item.icon}
                                    </div>
                                    <div>
                                        <h3 className="text-xl font-bold text-[#2b1f17] mb-1">{item.title}</h3>
                                        <p className="text-[#3e2615] font-medium mb-1">{item.desc}</p>
                                        {item.hint && <span className="text-sm text-[#6e5c53]">{item.hint}</span>}
                                    </div>
                                </div>
                            ))}
                        </div>

                        <div className="mt-10">
                            <a href="https://wa.me/12345678900" target="_blank" rel="noreferrer">
                                <Button variant="primary" size="lg" className="w-full sm:w-auto bg-[#25D366] text-white border-[#25D366] hover:bg-[#20bd5a]">
                                    <MessageSquare size={20} /> Chat with us on WhatsApp
                                </Button>
                            </a>
                        </div>
                    </div>

                    {/* Simple Inquiry Form */}
                    <div className="bg-white p-10 py-12 rounded-2xl border border-[#e6ded8] shadow-sm">
                        <h3 className="text-2xl font-bold text-[#3e2615] mb-8">Send an Inquiry</h3>
                        <form className="flex flex-col gap-6" onSubmit={(e) => e.preventDefault()}>
                            <div className="flex flex-col gap-2">
                                <label htmlFor="name" className="font-medium text-[#2b1f17] text-sm">Shop / Business Name</label>
                                <input type="text" id="name" placeholder="Enter your business name" className="w-full p-3 border border-[#e6ded8] rounded-lg bg-white focus:outline-none focus:border-[#5c3a21] focus:ring-4 focus:ring-[#5c3a21]/10 transition-all font-sans text-base" required />
                            </div>

                            <div className="flex flex-col gap-2">
                                <label htmlFor="email" className="font-medium text-[#2b1f17] text-sm">Email Address</label>
                                <input type="email" id="email" placeholder="contact@yourshop.com" className="w-full p-3 border border-[#e6ded8] rounded-lg bg-white focus:outline-none focus:border-[#5c3a21] focus:ring-4 focus:ring-[#5c3a21]/10 transition-all font-sans text-base" required />
                            </div>

                            <div className="flex flex-col gap-2">
                                <label htmlFor="phone" className="font-medium text-[#2b1f17] text-sm">Phone Number</label>
                                <input type="tel" id="phone" placeholder="+1 (234) 567-8900" className="w-full p-3 border border-[#e6ded8] rounded-lg bg-white focus:outline-none focus:border-[#5c3a21] focus:ring-4 focus:ring-[#5c3a21]/10 transition-all font-sans text-base" />
                            </div>

                            <div className="flex flex-col gap-2">
                                <label htmlFor="message" className="font-medium text-[#2b1f17] text-sm">How can we help?</label>
                                <textarea id="message" rows="5" placeholder="Tell us about the products you are interested in..." className="w-full p-3 border border-[#e6ded8] rounded-lg bg-white focus:outline-none focus:border-[#5c3a21] focus:ring-4 focus:ring-[#5c3a21]/10 transition-all font-sans text-base" required></textarea>
                            </div>

                            <Button variant="primary" type="submit" size="lg" className="w-full mt-4" onClick={() => alert('Thanks for your inquiry! This is a demo.')}>
                                Send Message
                            </Button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Contact;
