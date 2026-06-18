import React, { useEffect, useState } from 'react';
import { MapPin, Phone, Mail, MessageSquare, Send, CheckCircle2, Loader2 } from 'lucide-react';
import Button from '../components/UI/Button';

const Contact = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
        message: ''
    });
    const [status, setStatus] = useState({ loading: false, submitted: false, error: null });

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    const handleChange = (e) => {
        const { id, value } = e.target;
        setFormData(prev => ({ ...prev, [id]: value }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setStatus({ loading: true, submitted: false, error: null });

        // Replace this URL with your Google Apps Script Web App URL
        const SCRIPT_URL = "YOUR_GOOGLE_SCRIPT_WEB_APP_URL";

        try {
            // If URL is not set, simulate success for demo purposes
            if (SCRIPT_URL === "YOUR_GOOGLE_SCRIPT_WEB_APP_URL") {
                await new Promise(resolve => setTimeout(resolve, 1500));
                setStatus({ loading: false, submitted: true, error: null });
                return;
            }

            const response = await fetch(SCRIPT_URL, {
                method: 'POST',
                mode: 'no-cors',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(formData)
            });

            setStatus({ loading: false, submitted: true, error: null });
            setFormData({ name: '', email: '', phone: '', message: '' });
        } catch (error) {
            console.error('Error submitting form:', error);
            setStatus({ loading: false, submitted: false, error: 'Something went wrong. Please try again later.' });
        }
    };

    return (
        <div className="animate-fade-in bg-[#fdfbf7] dark:bg-[#1a120b]">
            <div className="bg-[#fdfbf7] dark:bg-[#1a120b] py-16 text-center border-b border-[#e6ded8] dark:border-[#3e2615]">
                <div className="max-w-7xl mx-auto px-6">
                    <h1 className="text-4xl md:text-5xl font-extrabold text-[#3e2615] dark:text-[#f7f4ef] mb-4">Contact Us</h1>
                    <p className="text-lg text-[#6e5c53] dark:text-[#d6ccc2]">Get in touch for bulk inquiries and partnership opportunities.</p>
                </div>
            </div>

            <div className="max-w-7xl mx-auto px-6 py-20">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
                    {/* Contact Information */}
                    <div>
                        <h2 className="text-3xl font-bold text-[#5c3a21] dark:text-[#d4a373] mb-6">Get In Touch</h2>
                        <p className="text-[#6e5c53] dark:text-[#d6ccc2] text-lg mb-12 leading-relaxed">
                            Have questions about pricing, bulk orders, or becoming a retail partner? Our team is ready to assist you.
                        </p>

                        <div className="flex flex-col gap-6">
                            {[
                                { icon: <Phone size={24} />, title: 'Phone', desc: '+91 7558959580', hint: 'Mon-Fri from 8am to 6pm.' },
                                { icon: <Mail size={24} />, title: 'Email', desc: 'supply@chocohub.com', hint: 'We respond within 24 hours.' },
                                { icon: <MapPin size={24} />, title: 'Warehouse Center', desc: '123 Wholesale Market, City Name, 12345', hint: '' }
                            ].map((item, i) => (
                                <div key={i} className="flex flex-col sm:flex-row items-start sm:items-center gap-6 p-6 bg-white dark:bg-[#23180d] rounded-xl border border-[#e6ded8] dark:border-[#3e2615]">
                                    <div className="text-[#5c3a21] dark:text-[#d4a373] bg-[#fdfbf7] dark:bg-[#1a120b] p-4 rounded-full">
                                        {item.icon}
                                    </div>
                                    <div>
                                        <h3 className="text-xl font-bold text-[#2b1f17] dark:text-white mb-1">{item.title}</h3>
                                        <p className="text-[#3e2615] dark:text-[#d4a373] font-medium mb-1">{item.desc}</p>
                                        {item.hint && <span className="text-sm text-[#6e5c53] dark:text-[#d6ccc2]">{item.hint}</span>}
                                    </div>
                                </div>
                            ))}
                        </div>

                        <div className="mt-10">
                            <a href="https://wa.me/+917558959580" target="_blank" rel="noreferrer">
                                <Button variant="primary" size="lg" className="w-full sm:w-auto bg-[#25D366] text-white border-[#25D366] hover:bg-[#20bd5a]">
                                    <MessageSquare size={20} /> Chat with us on WhatsApp
                                </Button>
                            </a>
                        </div>
                    </div>

                    {/* Simple Inquiry Form */}
                    <div className="bg-white dark:bg-[#23180d] p-10 py-12 rounded-2xl border border-[#e6ded8] dark:border-[#3e2615] shadow-[0_8px_30px_rgb(0,0,0,0.04)] dark:shadow-none relative overflow-hidden">
                        {status.submitted ? (
                            <div className="flex flex-col items-center justify-center py-12 text-center animate-in fade-in zoom-in duration-500">
                                <div className="w-20 h-20 bg-green-50 dark:bg-green-900/20 rounded-full flex items-center justify-center mb-6 text-green-600 dark:text-green-400">
                                    <CheckCircle2 size={48} />
                                </div>
                                <h3 className="text-3xl font-bold text-[#3e2615] dark:text-[#f7f4ef] mb-4">Inquiry Received!</h3>
                                <p className="text-[#6e5c53] dark:text-[#d6ccc2] text-lg max-w-sm mb-8">
                                    Thank you for reaching out. A wholesale specialist will contact you shortly.
                                </p>
                                <Button variant="outline" onClick={() => setStatus({ loading: false, submitted: false, error: null })}>
                                    Send Another Message
                                </Button>
                            </div>
                        ) : (
                            <>
                                <h3 className="text-2xl font-bold text-[#3e2615] dark:text-[#f7f4ef] mb-8">Send an Inquiry</h3>
                                <form className="flex flex-col gap-6" onSubmit={handleSubmit}>
                                    <div className="flex flex-col gap-2">
                                        <label htmlFor="name" className="font-medium text-[#2b1f17] dark:text-[#d6ccc2] text-sm">Shop / Business Name</label>
                                        <input
                                            type="text"
                                            id="name"
                                            value={formData.name}
                                            onChange={handleChange}
                                            placeholder="Enter your business name"
                                            className="w-full p-3 border border-[#e6ded8] dark:border-[#3e2615] rounded-lg bg-white dark:bg-[#1a120b] dark:text-[#f7f4ef] focus:outline-none focus:border-[#5c3a21] dark:focus:border-[#d4a373] focus:ring-4 focus:ring-[#5c3a21]/10 transition-all font-sans text-base"
                                            required
                                        />
                                    </div>

                                    <div className="flex flex-col gap-2">
                                        <label htmlFor="email" className="font-medium text-[#2b1f17] dark:text-[#d6ccc2] text-sm">Email Address</label>
                                        <input
                                            type="email"
                                            id="email"
                                            value={formData.email}
                                            onChange={handleChange}
                                            placeholder="contact@yourshop.com"
                                            className="w-full p-3 border border-[#e6ded8] dark:border-[#3e2615] rounded-lg bg-white dark:bg-[#1a120b] dark:text-[#f7f4ef] focus:outline-none focus:border-[#5c3a21] dark:focus:border-[#d4a373] focus:ring-4 focus:ring-[#5c3a21]/10 transition-all font-sans text-base"
                                            required
                                        />
                                    </div>

                                    <div className="flex flex-col gap-2">
                                        <label htmlFor="phone" className="font-medium text-[#2b1f17] dark:text-[#d6ccc2] text-sm">Phone Number</label>
                                        <input
                                            type="tel"
                                            id="phone"
                                            value={formData.phone}
                                            onChange={handleChange}
                                            placeholder="+91 7558959580"
                                            className="w-full p-3 border border-[#e6ded8] dark:border-[#3e2615] rounded-lg bg-white dark:bg-[#1a120b] dark:text-[#f7f4ef] focus:outline-none focus:border-[#5c3a21] dark:focus:border-[#d4a373] focus:ring-4 focus:ring-[#5c3a21]/10 transition-all font-sans text-base"
                                        />
                                    </div>

                                    <div className="flex flex-col gap-2">
                                        <label htmlFor="message" className="font-medium text-[#2b1f17] dark:text-[#d6ccc2] text-sm">How can we help?</label>
                                        <textarea
                                            id="message"
                                            rows="5"
                                            value={formData.message}
                                            onChange={handleChange}
                                            placeholder="Tell us about the products you are interested in..."
                                            className="w-full p-3 border border-[#e6ded8] dark:border-[#3e2615] rounded-lg bg-white dark:bg-[#1a120b] dark:text-[#f7f4ef] focus:outline-none focus:border-[#5c3a21] dark:focus:border-[#d4a373] focus:ring-4 focus:ring-[#5c3a21]/10 transition-all font-sans text-base"
                                            required
                                        ></textarea>
                                    </div>

                                    {status.error && (
                                        <p className="text-red-500 text-sm bg-red-50 p-3 rounded-lg border border-red-100 italic">
                                            {status.error}
                                        </p>
                                    )}

                                    <Button
                                        variant="primary"
                                        type="submit"
                                        size="lg"
                                        className="w-full mt-4 h-14"
                                        disabled={status.loading}
                                    >
                                        {status.loading ? (
                                            <>
                                                <Loader2 size={20} className="animate-spin" /> Sending...
                                            </>
                                        ) : (
                                            <>
                                                <Send size={18} /> Send Inquiry
                                            </>
                                        )}
                                    </Button>
                                </form>
                            </>
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Contact;

