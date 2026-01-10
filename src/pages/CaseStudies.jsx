import { motion } from 'framer-motion';
import { TrendingUp, Clock, DollarSign, Users, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const CaseStudies = () => {
  const caseStudies = [
    {
      company: 'TechRetail Inc.',
      industry: 'E-commerce',
      logo: '🛍️',
      problem: 'TechRetail was struggling with high customer support costs and slow response times. Their support team was overwhelmed with repetitive queries, leading to customer dissatisfaction and lost sales. Manual order processing was causing delays and errors.',
      solution: 'We implemented an AI-powered chatbot that handles 80% of customer queries automatically, integrated workflow automation for order processing, and deployed predictive analytics for inventory management. The chatbot was trained on thousands of past customer interactions to provide accurate, contextual responses.',
      implementation: '6 weeks from consultation to full deployment',
      results: {
        metrics: [
          { icon: TrendingUp, value: '150%', label: 'Sales Increase' },
          { icon: Clock, value: '90%', label: 'Faster Response' },
          { icon: DollarSign, value: '$2.4M', label: 'Annual Savings' },
          { icon: Users, value: '95%', label: 'Customer Satisfaction' },
        ],
        details: [
          'Reduced customer support costs by 70%',
          'Improved response time from 2 hours to 30 seconds',
          'Increased customer retention by 45%',
          'Eliminated order processing errors completely',
        ],
      },
      testimonial: {
        text: 'AI Automate transformed our business. The AI chatbot alone saved us over $2M annually, and customer satisfaction scores hit all-time highs.',
        author: 'Insha Habib',
        position: 'CEO, TechRetail Inc.',
      },
      color: 'from-blue-500 to-cyan-500',
    },
    {
      company: 'MediCare Plus',
      industry: 'Healthcare',
      logo: '🏥',
      problem: 'MediCare Plus faced challenges with appointment scheduling, patient record management, and billing processes. Staff spent 60% of their time on administrative tasks instead of patient care. Missed appointments were costing the practice significant revenue.',
      solution: 'We deployed an integrated automation system including automated appointment scheduling with smart reminders, digital patient record management with AI-powered data entry, and streamlined billing automation. The system integrated seamlessly with their existing EMR software.',
      implementation: '8 weeks including staff training and data migration',
      results: {
        metrics: [
          { icon: Clock, value: '65%', label: 'Time Saved' },
          { icon: Users, value: '40%', label: 'More Patients' },
          { icon: DollarSign, value: '$800K', label: 'Revenue Increase' },
          { icon: TrendingUp, value: '85%', label: 'Show-up Rate' },
        ],
        details: [
          'Reduced no-shows from 30% to 5% with automated reminders',
          'Staff now spends 80% time on patient care vs 40% before',
          'Billing accuracy improved from 85% to 99.5%',
          'Patient satisfaction scores increased by 35%',
        ],
      },
      testimonial: {
        text: 'The automation system gave us our practice back. We can now focus on what matters - caring for patients. The ROI was realized in just 4 months.',
        author: 'Dr. Maryam',
        position: 'Director, MediCare Plus',
      },
      color: 'from-red-500 to-pink-500',
    },
    {
      company: 'PropMax Realty',
      industry: 'Real Estate',
      logo: '🏘️',
      problem: 'PropMax Realty was losing leads due to slow response times and inefficient follow-up processes. Their agents were spending too much time on administrative tasks and struggling to manage multiple clients simultaneously. Lead conversion rate was below industry average at 2.5%.',
      solution: 'We implemented an AI-powered CRM system with automated lead qualification, personalized email campaigns, and smart property matching. The system automatically assigns leads to agents based on expertise and availability, sends follow-up reminders, and generates required documents.',
      implementation: '5 weeks with phased rollout across 3 offices',
      results: {
        metrics: [
          { icon: TrendingUp, value: '280%', label: 'Lead Conversion' },
          { icon: Clock, value: '50%', label: 'Faster Closing' },
          { icon: DollarSign, value: '$3.2M', label: 'Additional Revenue' },
          { icon: Users, value: '200%', label: 'Agent Productivity' },
        ],
        details: [
          'Lead conversion rate increased from 2.5% to 7%',
          'Average closing time reduced from 60 to 30 days',
          'Agent capacity increased from 5 to 15 active clients',
          'Customer satisfaction score jumped to 4.8/5',
        ],
      },
      testimonial: {
        text: 'Game-changing! Our agents are closing deals faster than ever. The automated lead nurturing alone has tripled our conversion rate.',
        author: 'Shanza Zaib',
        position: 'Managing Partner, PropMax Realty',
      },
      color: 'from-green-500 to-emerald-500',
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
              <span className="gradient-text">Success Stories</span>
              <br />
              <span className="text-gray-900 dark:text-white">Real Results, Real Impact</span>
            </h1>
            <p className="text-xl text-gray-600 dark:text-gray-300">
              See how businesses like yours achieved remarkable transformation through AI automation
            </p>
          </motion.div>
        </div>
      </section>

      {/* Case Studies */}
      <section className="section-padding">
        <div className="container-custom space-y-32">
          {caseStudies.map((study, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="space-y-12"
            >
              {/* Company Header */}
              <div className="text-center">
                <div className="text-6xl mb-4">{study.logo}</div>
                <h2 className="text-4xl font-bold mb-2 text-gray-900 dark:text-white">
                  {study.company}
                </h2>
                <p className="text-xl text-gray-600 dark:text-gray-400">{study.industry}</p>
              </div>

              {/* Problem - Solution - Results Grid */}
              <div className="grid lg:grid-cols-3 gap-8">
                {/* Problem */}
                <div className="bg-red-50 dark:bg-red-900/20 p-8 rounded-2xl border-2 border-red-200 dark:border-red-800">
                  <h3 className="text-2xl font-bold text-red-700 dark:text-red-400 mb-4">
                    The Problem
                  </h3>
                  <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                    {study.problem}
                  </p>
                </div>

                {/* Solution */}
                <div className="bg-blue-50 dark:bg-blue-900/20 p-8 rounded-2xl border-2 border-blue-200 dark:border-blue-800">
                  <h3 className="text-2xl font-bold text-blue-700 dark:text-blue-400 mb-4">
                    Our Solution
                  </h3>
                  <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-4">
                    {study.solution}
                  </p>
                  <div className="bg-white dark:bg-gray-800 p-3 rounded-lg">
                    <p className="text-sm text-gray-600 dark:text-gray-400">
                      <strong>Timeline:</strong> {study.implementation}
                    </p>
                  </div>
                </div>

                {/* Results Preview */}
                <div className="bg-green-50 dark:bg-green-900/20 p-8 rounded-2xl border-2 border-green-200 dark:border-green-800">
                  <h3 className="text-2xl font-bold text-green-700 dark:text-green-400 mb-4">
                    The Results
                  </h3>
                  <div className="space-y-4">
                    {study.results.details.slice(0, 3).map((detail, idx) => (
                      <div key={idx} className="flex items-start space-x-2">
                        <div className="w-2 h-2 bg-green-500 rounded-full mt-2"></div>
                        <p className="text-gray-700 dark:text-gray-300 text-sm">{detail}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Metrics */}
              <div className={`bg-gradient-to-r ${study.color} p-12 rounded-3xl`}>
                <h3 className="text-3xl font-bold text-white text-center mb-12">
                  Key Metrics
                </h3>
                <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
                  {study.results.metrics.map((metric, idx) => {
                    const Icon = metric.icon;
                    return (
                      <div key={idx} className="text-center">
                        <Icon className="w-12 h-12 text-white/80 mx-auto mb-4" />
                        <div className="text-5xl font-bold text-white mb-2">
                          {metric.value}
                        </div>
                        <div className="text-white/90 font-medium">{metric.label}</div>
                      </div>
                    );
                  })}
                </div>
              </div>

              {/* Testimonial */}
              <div className="bg-white dark:bg-gray-800 p-10 rounded-2xl shadow-xl border-l-4 border-primary-500">
                <p className="text-2xl text-gray-700 dark:text-gray-300 italic mb-6">
                  "{study.testimonial.text}"
                </p>
                <div>
                  <p className="font-bold text-gray-900 dark:text-white">
                    {study.testimonial.author}
                  </p>
                  <p className="text-gray-600 dark:text-gray-400">
                    {study.testimonial.position}
                  </p>
                </div>
              </div>

              {/* Divider */}
              {index < caseStudies.length - 1 && (
                <div className="border-t-2 border-gray-200 dark:border-gray-800 pt-8"></div>
              )}
            </motion.div>
          ))}
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
              Ready to Write Your Success Story?
            </h2>
            <p className="text-xl mb-8 opacity-90 max-w-2xl mx-auto">
              Join hundreds of businesses achieving extraordinary results with AI automation
            </p>
            <Link
              to="/contact"
              className="inline-flex items-center bg-white text-primary-600 hover:bg-gray-100 font-semibold px-8 py-4 rounded-lg transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 group"
            >
              Start Your Transformation
              <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default CaseStudies;
