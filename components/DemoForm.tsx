import { useState, useEffect } from 'react';
import { Send, CheckCircle, AlertCircle } from 'lucide-react';
import { projectId, publicAnonKey } from '../utils/supabase/info';
import { GAEvents } from './GoogleAnalytics';

export function DemoForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    phone: '',
    message: ''
  });
  
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');
  const [errorMessage, setErrorMessage] = useState('');

  // Track when demo form comes into view
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            GAEvents.demoFormView();
          }
        });
      },
      { threshold: 0.5 }
    );

    const demoSection = document.getElementById('demo');
    if (demoSection) {
      observer.observe(demoSection);
    }

    return () => {
      if (demoSection) {
        observer.unobserve(demoSection);
      }
    };
  }, []);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus('idle');
    setErrorMessage('');

    try {
      const response = await fetch(
        `https://${projectId}.supabase.co/functions/v1/make-server-101a5808/demo`,
        {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${publicAnonKey}`
          },
          body: JSON.stringify(formData)
        }
      );

      const data = await response.json();

      if (response.ok && data.success) {
        setSubmitStatus('success');
        setFormData({ name: '', email: '', company: '', phone: '', message: '' });
        console.log('Form submitted successfully:', data);
        
        // Track successful submission
        GAEvents.demoFormSubmit(true);
      } else {
        setSubmitStatus('error');
        setErrorMessage(data.error || 'Failed to submit form. Please try again.');
        console.error('Form submission error:', data);
        
        // Track failed submission
        GAEvents.demoFormSubmit(false);
      }
    } catch (error) {
      setSubmitStatus('error');
      setErrorMessage('Network error. Please check your connection and try again.');
      console.error('Network error:', error);
      
      // Track failed submission
      GAEvents.demoFormSubmit(false);
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <section id="demo" className="py-16 md:py-20 bg-[#E6E6E6]">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-8 md:mb-12">
            <h2 className="mb-4 md:mb-6 text-3xl md:text-5xl lg:text-6xl text-[#151719] px-4" style={{ fontFamily: 'Pragmatica Bold, sans-serif' }}>
              Request a Demo
            </h2>
            <p className="text-base md:text-xl text-[#151719]/70 leading-relaxed px-4" style={{ fontFamily: 'Pragmatica, sans-serif' }}>
              See how Super GRC can transform your governance, risk, and compliance operations. Fill out the form below and our team will reach out to schedule a personalized demo.
            </p>
          </div>

          <div className="bg-white rounded-xl shadow-2xl p-6 md:p-12">
            {/* Success Message */}
            {submitStatus === 'success' && (
              <div className="mb-6 p-4 bg-[#CFE928]/20 border border-[#CFE928] rounded-lg flex items-start gap-3">
                <CheckCircle className="w-6 h-6 text-[#151719] flex-shrink-0 mt-0.5" />
                <div>
                  <p className="text-[#151719]" style={{ fontFamily: 'Pragmatica Bold, sans-serif' }}>
                    Thank you for your interest!
                  </p>
                  <p className="text-[#151719]/70 text-sm mt-1" style={{ fontFamily: 'Pragmatica, sans-serif' }}>
                    Our team will contact you shortly to schedule your personalized demo.
                  </p>
                </div>
              </div>
            )}

            {/* Error Message */}
            {submitStatus === 'error' && (
              <div className="mb-6 p-4 bg-red-50 border border-red-300 rounded-lg flex items-start gap-3">
                <AlertCircle className="w-6 h-6 text-red-600 flex-shrink-0 mt-0.5" />
                <div>
                  <p className="text-red-800" style={{ fontFamily: 'Pragmatica Bold, sans-serif' }}>
                    Submission Failed
                  </p>
                  <p className="text-red-700 text-sm mt-1" style={{ fontFamily: 'Pragmatica, sans-serif' }}>
                    {errorMessage}
                  </p>
                </div>
              </div>
            )}

            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="name" className="block text-[#151719] mb-2" style={{ fontFamily: 'Pragmatica Bold, sans-serif' }}>
                    Full Name *
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    value={formData.name}
                    onChange={handleChange}
                    disabled={isSubmitting}
                    className="w-full px-4 py-3 border border-[#151719]/20 rounded-lg focus:outline-none focus:border-[#CFE928] focus:ring-2 focus:ring-[#CFE928]/20 transition-all disabled:bg-gray-100 disabled:cursor-not-allowed"
                    style={{ fontFamily: 'Pragmatica, sans-serif' }}
                    placeholder="John Doe"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-[#151719] mb-2" style={{ fontFamily: 'Pragmatica Bold, sans-serif' }}>
                    Email Address *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    value={formData.email}
                    onChange={handleChange}
                    disabled={isSubmitting}
                    className="w-full px-4 py-3 border border-[#151719]/20 rounded-lg focus:outline-none focus:border-[#CFE928] focus:ring-2 focus:ring-[#CFE928]/20 transition-all disabled:bg-gray-100 disabled:cursor-not-allowed"
                    style={{ fontFamily: 'Pragmatica, sans-serif' }}
                    placeholder="john@company.com"
                  />
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="company" className="block text-[#151719] mb-2" style={{ fontFamily: 'Pragmatica Bold, sans-serif' }}>
                    Company Name *
                  </label>
                  <input
                    type="text"
                    id="company"
                    name="company"
                    required
                    value={formData.company}
                    onChange={handleChange}
                    disabled={isSubmitting}
                    className="w-full px-4 py-3 border border-[#151719]/20 rounded-lg focus:outline-none focus:border-[#CFE928] focus:ring-2 focus:ring-[#CFE928]/20 transition-all disabled:bg-gray-100 disabled:cursor-not-allowed"
                    style={{ fontFamily: 'Pragmatica, sans-serif' }}
                    placeholder="Acme Corporation"
                  />
                </div>

                <div>
                  <label htmlFor="phone" className="block text-[#151719] mb-2" style={{ fontFamily: 'Pragmatica Bold, sans-serif' }}>
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    disabled={isSubmitting}
                    className="w-full px-4 py-3 border border-[#151719]/20 rounded-lg focus:outline-none focus:border-[#CFE928] focus:ring-2 focus:ring-[#CFE928]/20 transition-all disabled:bg-gray-100 disabled:cursor-not-allowed"
                    style={{ fontFamily: 'Pragmatica, sans-serif' }}
                    placeholder="+1 (555) 123-4567"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="message" className="block text-[#151719] mb-2" style={{ fontFamily: 'Pragmatica Bold, sans-serif' }}>
                  Tell us about your needs
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={5}
                  value={formData.message}
                  onChange={handleChange}
                  disabled={isSubmitting}
                  className="w-full px-4 py-3 border border-[#151719]/20 rounded-lg focus:outline-none focus:border-[#CFE928] focus:ring-2 focus:ring-[#CFE928]/20 transition-all resize-none disabled:bg-gray-100 disabled:cursor-not-allowed"
                  style={{ fontFamily: 'Pragmatica, sans-serif' }}
                  placeholder="Let us know what compliance frameworks you're working with and any specific requirements..."
                ></textarea>
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-[#CFE928] text-[#151719] py-4 rounded-lg hover:bg-[#CFE928]/90 transition-all shadow-lg flex items-center justify-center gap-2 group disabled:bg-[#CFE928]/50 disabled:cursor-not-allowed"
                style={{ fontFamily: 'Pragmatica Bold, sans-serif' }}
              >
                <span>{isSubmitting ? 'Submitting...' : 'Submit Request'}</span>
                {!isSubmitting && <Send className="w-5 h-5 group-hover:translate-x-1 transition-transform" />}
              </button>

              <p className="text-sm text-[#151719]/50 text-center" style={{ fontFamily: 'Pragmatica, sans-serif' }}>
                We respect your privacy. Your information will only be used to contact you about Super GRC.
              </p>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}