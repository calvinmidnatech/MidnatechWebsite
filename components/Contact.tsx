import React from 'react';
import { Mail, ArrowRight } from 'lucide-react';

const Contact: React.FC = () => {
  return (
    <section id="contact" className="relative py-32 bg-gray-100 text-midna-charcoal overflow-hidden">
      
      {/* Background Faded Text */}
      <div className="absolute top-0 right-0 pointer-events-none select-none opacity-[0.03]">
        <span className="text-[20vw] font-display font-bold text-black leading-none">
          CONNECT
        </span>
      </div>

      <div className="container mx-auto px-6 lg:px-12 relative z-10">
        <div className="flex flex-col lg:flex-row gap-20">
          
          {/* Header & Info */}
          <div className="lg:w-5/12">
            <h2 className="text-4xl md:text-6xl font-display font-light mb-8 text-midna-dark">
              Questions? <br />
              <span className="font-medium text-transparent bg-clip-text bg-gradient-to-r from-midna-violet to-midna-accent">
                Let's talk fleet.
              </span>
            </h2>
            <p className="text-xl text-gray-600 font-light mb-12">
              No pitch decks. No pressure. Just a conversation about what you're dealing with and whether we can help.
            </p>

            <div className="flex items-start gap-4">
              <div className="p-3 bg-white rounded-full shadow-sm">
                <Mail className="w-6 h-6 text-midna-violet" />
              </div>
              <div>
                <h4 className="font-semibold text-midna-dark">Email Us</h4>
                <p className="text-gray-500">Midna@midnatech.com</p>
              </div>
            </div>
          </div>

          {/* Form */}
          <div className="lg:w-7/12">
            <form
              action="https://formspree.io/f/mzznyjep"
              method="POST"
              className="bg-white p-8 md:p-12 shadow-2xl shadow-gray-200/50 rounded-sm"
            >
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
                <div className="space-y-2">
                  <label className="text-sm font-semibold uppercase tracking-wider text-gray-500">First Name</label>
                  <input type="text" name="firstName" required className="w-full border-b border-gray-300 py-2 focus:outline-none focus:border-midna-violet transition-colors bg-transparent" placeholder="Jane" />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-semibold uppercase tracking-wider text-gray-500">Last Name</label>
                  <input type="text" name="lastName" required className="w-full border-b border-gray-300 py-2 focus:outline-none focus:border-midna-violet transition-colors bg-transparent" placeholder="Doe" />
                </div>
              </div>

              <div className="space-y-2 mb-8">
                <label className="text-sm font-semibold uppercase tracking-wider text-gray-500">Work Email</label>
                <input type="email" name="email" required className="w-full border-b border-gray-300 py-2 focus:outline-none focus:border-midna-violet transition-colors bg-transparent" placeholder="jane@company.com" />
              </div>

              <div className="space-y-2 mb-12">
                <label className="text-sm font-semibold uppercase tracking-wider text-gray-500">Message</label>
                <textarea name="message" rows={4} required className="w-full border-b border-gray-300 py-2 focus:outline-none focus:border-midna-violet transition-colors bg-transparent resize-none" placeholder="Tell us about your fleet challenges..."></textarea>
              </div>

              <button type="submit" className="group w-full md:w-auto bg-midna-dark text-white px-8 py-4 flex items-center justify-center gap-3 hover:bg-midna-violet transition-colors duration-300">
                <span>Start the Conversation</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </button>
            </form>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Contact;