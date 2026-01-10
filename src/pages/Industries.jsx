import { motion } from 'framer-motion';
import { ShoppingCart, Heart, GraduationCap, Home, Briefcase, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const Industries = () => {
  const industries = [
    {
      icon: ShoppingCart,
      title: 'E-commerce',
      description: 'Revolutionize online retail with AI-powered automation',
      useCases: [
        'Automated inventory management and restocking',
        'Personalized product recommendations',
        'AI chatbots for instant customer support',
        'Automated order processing and fulfillment',
        'Smart pricing optimization',
        'Fraud detection and prevention',
      ],
      results: '45% increase in sales, 60% faster order processing',
      color: 'from-blue-500 to-cyan-500',
    },
    {
      icon: Heart,
      title: 'Healthcare',
      description: 'Enhance patient care and streamline medical operations',
      useCases: [
        'Automated appointment scheduling and reminders',
        'Patient data management and analysis',
        'Medical billing automation',
        'Prescription refill automation',
        'AI-powered diagnostic assistance',
        'Healthcare compliance monitoring',
      ],
      results: '50% reduction in admin time, improved patient satisfaction',
      color: 'from-red-500 to-pink-500',
    },
    {
      icon: GraduationCap,
      title: 'Education',
      description: 'Transform learning experiences with smart automation',
      useCases: [
        'Automated student enrollment and registration',
        'Personalized learning paths',
        'Automated grading and feedback',
        'Virtual tutoring assistants',
        'Attendance tracking and reporting',
        'Parent-teacher communication automation',
      ],
      results: '70% time saved on admin tasks, better student outcomes',
      color: 'from-purple-500 to-indigo-500',
    },
    {
      icon: Home,
      title: 'Real Estate',
      description: 'Accelerate property transactions and client management',
      useCases: [
        'Lead qualification',
        'Automated property matching',
        'Virtual property tours scheduling',
        'Document generation and management',
        'CRM automation for client follow-ups',
        'Market analysis and pricing suggestions',
      ],
      results: '3x more qualified leads, 40% faster closing time',
      color: 'from-green-500 to-emerald-500',
    },
    {
      icon: Briefcase,
      title: 'Small Businesses',
      description: 'Compete with enterprises through smart automation',
      useCases: [
        'Automated invoicing and expense tracking',
        'Social media scheduling and management',
        'Email marketing automation',
        'Customer relationship management',
        'Inventory and supply chain optimization',
        'HR and payroll automation',
      ],
      results: '80% cost reduction, 3x productivity increase',
      color: 'from-orange-500 to-yellow-500',
    },
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
              <span className="gradient-text">Industry Solutions</span>
              <br />
              <span className="text-gray-900 dark:text-white">Tailored for Your Sector</span>
            </h1>
            <p className="text-xl text-gray-600 dark:text-gray-300">
              Discover how AI automation is transforming businesses across different industries with customized solutions
            </p>
          </motion.div>
        </div>
      </section>

      {/* Industries Grid */}
      <section className="section-padding">
        <div className="container-custom space-y-16">
          {industries.map((industry, index) => {
            const Icon = industry.icon;

            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="bg-gradient-to-br from-gray-50 to-white dark:from-gray-800 dark:to-gray-900 rounded-3xl shadow-xl overflow-hidden border border-gray-100 dark:border-gray-800"
              >
                <div className="grid lg:grid-cols-3 gap-0">
                  {/* Left - Icon & Title */}
                  <div className={`bg-gradient-to-br ${industry.color} p-12 flex flex-col justify-center items-center text-center text-white`}>
                    <Icon className="w-24 h-24 mb-6" />
                    <h2 className="text-3xl font-bold mb-4">{industry.title}</h2>
                    <p className="text-lg opacity-90">{industry.description}</p>
                  </div>

                  {/* Middle - Use Cases */}
                  <div className="lg:col-span-2 p-12">
                    <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
                      Automation Use Cases
                    </h3>
                    <div className="grid md:grid-cols-2 gap-4 mb-8">
                      {industry.useCases.map((useCase, idx) => (
                        <div
                          key={idx}
                          className="flex items-start space-x-3 bg-white dark:bg-gray-800 p-4 rounded-lg border border-gray-200 dark:border-gray-700"
                        >
                          <div className={`w-2 h-2 rounded-full bg-gradient-to-r ${industry.color} mt-2`}></div>
                          <span className="text-gray-700 dark:text-gray-300">{useCase}</span>
                        </div>
                      ))}
                    </div>

                    {/* Results */}
                    <div className={`bg-gradient-to-r ${industry.color} bg-opacity-10 p-6 rounded-xl border-l-4`} style={{ borderColor: 'currentColor' }}>
                      <h4 className="font-semibold text-gray-900 dark:text-white mb-2">Expected Results</h4>
                      <p className="text-gray-700 dark:text-gray-300 text-lg">{industry.results}</p>
                    </div>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </section>

      {/* Custom Solutions CTA */}
      <section className="section-padding bg-gray-50 dark:bg-gray-800">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="bg-white dark:bg-gray-900 rounded-3xl p-12 shadow-xl text-center"
          >
            <h2 className="text-4xl font-bold mb-6">
              <span className="gradient-text">Don't See Your Industry?</span>
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300 mb-8 max-w-2xl mx-auto">
              We create custom automation solutions for businesses in any industry. Let's discuss your specific needs.
            </p>
            <Link
              to="/contact"
              className="inline-flex items-center bg-primary-600 hover:bg-primary-700 text-white font-semibold px-8 py-4 rounded-lg transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 group"
            >
              Request Custom Solution
              <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Link>
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding bg-gradient-to-r from-primary-600 to-accent-600">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center text-white"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Ready to Automate Your Industry?
            </h2>
            <p className="text-xl mb-8 opacity-90 max-w-2xl mx-auto">
              See real case studies from businesses like yours that transformed with AI automation
            </p>
            <Link
              to="/case-studies"
              className="inline-flex items-center bg-white text-primary-600 hover:bg-gray-100 font-semibold px-8 py-4 rounded-lg transition-all duration-300 shadow-lg"
            >
              View Case Studies
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Industries;
