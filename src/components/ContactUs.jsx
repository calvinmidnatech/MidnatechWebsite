import React, { useState } from 'react';
import Button from './Button';
import { Send, Mail, Phone, MapPin } from 'lucide-react';

const ContactUs = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    alert('Thank you for your message! We\'ll get back to you soon.');
    setFormData({ name: '', email: '', message: '' });
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <section id="contact" className="py-20 px-6 bg-gradient-to-br from-blue-900 via-blue-800 to-purple-800 text-white relative overflow-hidden">
      {/* Background patterns */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 left-20 w-64 h-64 border border-white rounded-full"></div>
        <div className="absolute bottom-20 right-20 w-96 h-96 border border-white rounded-full"></div>
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6 text-balance">
            Let's Work Together
          </h2>
          <p className="text-xl text-blue-100 max-w-2xl mx-auto leading-relaxed">
            Ready to transform your data infrastructure? Let's discuss how we can help you unlock the full potential of your data.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <div className="bg-white/10 backdrop-blur-md rounded-2xl p-8 border border-white/20 shadow-2xl">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-blue-100 mb-2">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 bg-white/10 border border-white/30 rounded-xl text-white placeholder-blue-200 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-transparent transition-all"
                  placeholder="Your name"
                />
              </div>
              
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-blue-100 mb-2">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 bg-white/10 border border-white/30 rounded-xl text-white placeholder-blue-200 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-transparent transition-all"
                  placeholder="your.email@example.com"
                />
              </div>
              
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-blue-100 mb-2">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows="5"
                  className="w-full px-4 py-3 bg-white/10 border border-white/30 rounded-xl text-white placeholder-blue-200 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-transparent transition-all resize-none"
                  placeholder="Tell us about your data challenges and goals..."
                ></textarea>
              </div>
              
              <Button type="submit" variant="primary" className="w-full bg-white text-blue-600 hover:bg-blue-50" icon={<Send className="w-5 h-5" />}>
                Send Message
              </Button>
            </form>
          </div>

          {/* Company Details */}
          <div className="space-y-6">
            <div className="bg-white/10 backdrop-blur-md rounded-2xl p-8 border border-white/20 shadow-2xl">
              <h3 className="text-2xl font-bold text-white mb-6">Get in Touch</h3>
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-blue-600/30 rounded-xl flex items-center justify-center flex-shrink-0 backdrop-blur-sm">
                    <Mail className="w-6 h-6 text-blue-200" />
                  </div>
                  <div>
                    <div className="text-sm text-blue-200 mb-1">Email</div>
                    <div className="text-white font-medium">contact@midnatech.com</div>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-purple-600/30 rounded-xl flex items-center justify-center flex-shrink-0 backdrop-blur-sm">
                    <Phone className="w-6 h-6 text-purple-200" />
                  </div>
                  <div>
                    <div className="text-sm text-blue-200 mb-1">Phone</div>
                    <div className="text-white font-medium">+1 (555) 123-4567</div>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-purple-600/30 rounded-xl flex items-center justify-center flex-shrink-0 backdrop-blur-sm">
                    <MapPin className="w-6 h-6 text-purple-200" />
                  </div>
                  <div>
                    <div className="text-sm text-blue-200 mb-1">Location</div>
                    <div className="text-white font-medium">Toronto, Canada</div>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-br from-blue-600/25 via-purple-600/20 to-blue-600/25 backdrop-blur-md rounded-2xl p-8 border border-white/30 shadow-2xl">
              <h3 className="text-2xl font-bold text-white mb-4">Office Hours</h3>
              <div className="space-y-3">
                <div className="flex justify-between items-center">
                  <span className="text-blue-100">Monday - Friday</span>
                  <span className="text-white font-medium">9:00 AM - 6:00 PM PST</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-blue-100">Weekend</span>
                  <span className="text-white font-medium">By Appointment</span>
                </div>
              </div>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};

export default ContactUs;

