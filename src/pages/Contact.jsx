import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Send, Calendar } from 'lucide-react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { useState } from 'react';

// Form validation schema
const contactSchema = z.object({
  name: z.string().min(2, 'Name must be at least 2 characters'),
  email: z.string().email('Please enter a valid email address'),
  phone: z.string().min(10, 'Please enter a valid phone number').optional(),
  company: z.string().min(2, 'Company name must be at least 2 characters'),
  employees: z.string(),
  service: z.string().min(1, 'Please select a service'),
  message: z.string().min(10, 'Message must be at least 10 characters'),
});

const demoSchema = z.object({
  name: z.string().min(2, 'Name must be at least 2 characters'),
  email: z.string().email('Please enter a valid email address'),
  phone: z.string().min(10, 'Please enter a valid phone number'),
  company: z.string().min(2, 'Company name must be at least 2 characters'),
  date: z.string().min(1, 'Please select a date'),
  time: z.string().min(1, 'Please select a time'),
});

const Contact = () => {
  const [activeTab, setActiveTab] = useState('contact');
  const [submitStatus, setSubmitStatus] = useState(null);

  const {
    register: registerContact,
    handleSubmit: handleSubmitContact,
    formState: { errors: contactErrors },
    reset: resetContact,
  } = useForm({
    resolver: zodResolver(contactSchema),
  });

  const {
    register: registerDemo,
    handleSubmit: handleSubmitDemo,
    formState: { errors: demoErrors },
    reset: resetDemo,
  } = useForm({
    resolver: zodResolver(demoSchema),
  });

  const onContactSubmit = (data) => {
    console.log('Contact Form Data:', data);
    setSubmitStatus('success');
    resetContact();
    setTimeout(() => setSubmitStatus(null), 5000);
  };

  const onDemoSubmit = (data) => {
    console.log('Demo Form Data:', data);
    setSubmitStatus('success');
    resetDemo();
    setTimeout(() => setSubmitStatus(null), 5000);
  };

  const contactInfo = [
    {
      icon: Mail,
      title: 'Email Us',
      content: 'your@gmail.com',
      link: 'mailto:your@gmail.com',
    },
    {
      icon: Phone,
      title: 'Call Us',
      content: '+92 300 3456781',
      link: 'tel:+923003456781',
    },
    {
      icon: MapPin,
      title: 'Visit Us',
      content: 'Punjab, Pakistan',
      link: 'https://maps.google.com',
    },
  ];

  const services = [
    'AI Chatbots',
    'Workflow Automation',
    'CRM Automation',
    'Marketing Automation',
    'Data Analytics',
    'Custom Solution',
  ];

  return (
    <div className="min-h-screen bg-white dark:bg-gray-900 pt-20">
      {/* Hero Section */}
      <section className="section-padding bg-gradient-to-br from-blue-50 via-white to-purple-50 dark:from-gray-900 dark:via-gray-900 dark:to-gray-800">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center max-w-4xl mx-auto"
          >
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              <span className="text-gray-900 dark:text-white">Let's</span>{' '}
              <span className="gradient-text">Get Started</span>
            </h1>
            <p className="text-xl text-gray-600 dark:text-gray-300">
              Ready to transform your business with AI automation? Get in touch with our team today.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Contact Info Cards */}
      <section className="section-padding">
        <div className="container-custom">
          <div className="grid md:grid-cols-3 gap-8 mb-16">
            {contactInfo.map((info, index) => {
              const Icon = info.icon;
              return (
                <motion.a
                  key={index}
                  href={info.link}
                  target={info.title === 'Visit Us' ? '_blank' : '_self'}
                  rel={info.title === 'Visit Us' ? 'noopener noreferrer' : ''}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="bg-white dark:bg-gray-800 p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 card-hover text-center group"
                >
                  <div className="bg-gradient-to-r from-primary-600 to-accent-600 w-16 h-16 rounded-xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform">
                    <Icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">
                    {info.title}
                  </h3>
                  <p className="text-gray-600 dark:text-gray-400">{info.content}</p>
                </motion.a>
              );
            })}
          </div>

          {/* Form Section */}
          <div className="max-w-5xl mx-auto">
            {/* Tabs */}
            <div className="flex justify-center mb-8">
              <div className="inline-flex bg-gray-100 dark:bg-gray-800 p-2 rounded-lg">
                <button
                  onClick={() => setActiveTab('contact')}
                  className={`px-8 py-3 rounded-md transition-all font-semibold ${
                    activeTab === 'contact'
                      ? 'bg-white dark:bg-gray-700 text-primary-600 shadow-md'
                      : 'text-gray-600 dark:text-gray-400'
                  }`}
                >
                  Contact Us
                </button>
                <button
                  onClick={() => setActiveTab('demo')}
                  className={`px-8 py-3 rounded-md transition-all font-semibold ${
                    activeTab === 'demo'
                      ? 'bg-white dark:bg-gray-700 text-primary-600 shadow-md'
                      : 'text-gray-600 dark:text-gray-400'
                  }`}
                >
                  Book a Demo
                </button>
              </div>
            </div>

            {/* Success Message */}
            {submitStatus === 'success' && (
              <motion.div
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                className="bg-green-50 dark:bg-green-900/20 border border-green-500 text-green-700 dark:text-green-400 px-6 py-4 rounded-lg mb-8 text-center"
              >
                ✓ Thank you! We'll get back to you within 24 hours.
              </motion.div>
            )}

            {/* Contact Form */}
            {activeTab === 'contact' && (
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5 }}
                className="bg-white dark:bg-gray-800 p-8 md:p-12 rounded-3xl shadow-xl"
              >
                <form onSubmit={handleSubmitContact(onContactSubmit)} className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-6">
                    {/* Name */}
                    <div>
                      <label className="block text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2">
                        Full Name *
                      </label>
                      <input
                        {...registerContact('name')}
                        type="text"
                        className="w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all"
                        placeholder="Enter your Full Name"
                      />
                      {contactErrors.name && (
                        <p className="text-red-500 text-sm mt-1">{contactErrors.name.message}</p>
                      )}
                    </div>

                    {/* Email */}
                    <div>
                      <label className="block text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2">
                        Email Address *
                      </label>
                      <input
                        {...registerContact('email')}
                        type="email"
                        className="w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all"
                        placeholder="Your Email Address"
                      />
                      {contactErrors.email && (
                        <p className="text-red-500 text-sm mt-1">{contactErrors.email.message}</p>
                      )}
                    </div>

                    {/* Phone */}
                    <div>
                      <label className="block text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2">
                        Phone Number
                      </label>
                      <input
                        {...registerContact('phone')}
                        type="tel"
                        className="w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all"
                        placeholder="+92 --- ------- "
                      />
                      {contactErrors.phone && (
                        <p className="text-red-500 text-sm mt-1">{contactErrors.phone.message}</p>
                      )}
                    </div>

                    {/* Company */}
                    <div>
                      <label className="block text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2">
                        Company Name *
                      </label>
                      <input
                        {...registerContact('company')}
                        type="text"
                        className="w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all"
                        placeholder="Company Inc."
                      />
                      {contactErrors.company && (
                        <p className="text-red-500 text-sm mt-1">{contactErrors.company.message}</p>
                      )}
                    </div>

                    {/* Employees */}
                    <div>
                      <label className="block text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2">
                        Company Size *
                      </label>
                      <select
                        {...registerContact('employees')}
                        className="w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all"
                      >
                        <option value="">Select size</option>
                        <option value="1-10">1-10 employees</option>
                        <option value="11-50">11-50 employees</option>
                        <option value="51-200">51-200 employees</option>
                        <option value="201-500">201-500 employees</option>
                        <option value="500+">500+ employees</option>
                      </select>
                      {contactErrors.employees && (
                        <p className="text-red-500 text-sm mt-1">{contactErrors.employees.message}</p>
                      )}
                    </div>

                    {/* Service */}
                    <div>
                      <label className="block text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2">
                        Service Interested In *
                      </label>
                      <select
                        {...registerContact('service')}
                        className="w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all"
                      >
                        <option value="">Select service</option>
                        {services.map((service) => (
                          <option key={service} value={service}>
                            {service}
                          </option>
                        ))}
                      </select>
                      {contactErrors.service && (
                        <p className="text-red-500 text-sm mt-1">{contactErrors.service.message}</p>
                      )}
                    </div>
                  </div>

                  {/* Message */}
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2">
                      Message *
                    </label>
                    <textarea
                      {...registerContact('message')}
                      rows="6"
                      className="w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all resize-none"
                      placeholder="Tell us about your automation needs..."
                    />
                    {contactErrors.message && (
                      <p className="text-red-500 text-sm mt-1">{contactErrors.message.message}</p>
                    )}
                  </div>

                  {/* Submit Button */}
                  <button
                    type="submit"
                    className="w-full bg-gradient-to-r from-primary-600 to-accent-600 hover:from-primary-700 hover:to-accent-700 text-white font-semibold px-8 py-4 rounded-lg transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 flex items-center justify-center group"
                  >
                    <Send className="w-5 h-5 mr-2 group-hover:translate-x-1 transition-transform" />
                    Send Message
                  </button>
                </form>
              </motion.div>
            )}

            {/* Demo Form */}
            {activeTab === 'demo' && (
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5 }}
                className="bg-white dark:bg-gray-800 p-8 md:p-12 rounded-3xl shadow-xl"
              >
                <form onSubmit={handleSubmitDemo(onDemoSubmit)} className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-6">
                    {/* Name */}
                    <div>
                      <label className="block text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2">
                        Full Name *
                      </label>
                      <input
                        {...registerDemo('name')}
                        type="text"
                        className="w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all"
                        placeholder="Enter your Full Name"
                      />
                      {demoErrors.name && (
                        <p className="text-red-500 text-sm mt-1">{demoErrors.name.message}</p>
                      )}
                    </div>

                    {/* Email */}
                    <div>
                      <label className="block text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2">
                        Email Address *
                      </label>
                      <input
                        {...registerDemo('email')}
                        type="email"
                        className="w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all"
                        placeholder=" Your Email Address"
                      />
                      {demoErrors.email && (
                        <p className="text-red-500 text-sm mt-1">{demoErrors.email.message}</p>
                      )}
                    </div>

                    {/* Phone */}
                    <div>
                      <label className="block text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2">
                        Phone Number *
                      </label>
                      <input
                        {...registerDemo('phone')}
                        type="tel"
                        className="w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all"
                        placeholder="+92 --- -------"
                      />
                      {demoErrors.phone && (
                        <p className="text-red-500 text-sm mt-1">{demoErrors.phone.message}</p>
                      )}
                    </div>

                    {/* Company */}
                    <div>
                      <label className="block text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2">
                        Company Name *
                      </label>
                      <input
                        {...registerDemo('company')}
                        type="text"
                        className="w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all"
                        placeholder="Company Inc."
                      />
                      {demoErrors.company && (
                        <p className="text-red-500 text-sm mt-1">{demoErrors.company.message}</p>
                      )}
                    </div>

                    {/* Preferred Date */}
                    <div>
                      <label className="block text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2">
                        Preferred Date *
                      </label>
                      <input
                        {...registerDemo('date')}
                        type="date"
                        className="w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all"
                      />
                      {demoErrors.date && (
                        <p className="text-red-500 text-sm mt-1">{demoErrors.date.message}</p>
                      )}
                    </div>

                    {/* Preferred Time */}
                    <div>
                      <label className="block text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2">
                        Preferred Time *
                      </label>
                      <select
                        {...registerDemo('time')}
                        className="w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all"
                      >
                        <option value="">Select time</option>
                        <option value="9:00 AM">9:00 AM</option>
                        <option value="10:00 AM">10:00 AM</option>
                        <option value="11:00 AM">11:00 AM</option>
                        <option value="1:00 PM">1:00 PM</option>
                        <option value="2:00 PM">2:00 PM</option>
                        <option value="3:00 PM">3:00 PM</option>
                        <option value="4:00 PM">4:00 PM</option>
                      </select>
                      {demoErrors.time && (
                        <p className="text-red-500 text-sm mt-1">{demoErrors.time.message}</p>
                      )}
                    </div>
                  </div>

                  {/* Submit Button */}
                  <button
                    type="submit"
                    className="w-full bg-gradient-to-r from-primary-600 to-accent-600 hover:from-primary-700 hover:to-accent-700 text-white font-semibold px-8 py-4 rounded-lg transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 flex items-center justify-center group"
                  >
                    <Calendar className="w-5 h-5 mr-2 group-hover:scale-110 transition-transform" />
                    Book Demo Session
                  </button>
                </form>
              </motion.div>
            )}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
