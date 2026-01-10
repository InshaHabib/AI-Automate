import { motion } from 'framer-motion';
import { Bot, Workflow, Database, TrendingUp, BarChart, CheckCircle, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const Solutions = () => {
  const solutions = [
    {
      icon: Bot,
      title: 'AI Chatbots',
      problem: 'High customer support costs and slow response times leading to customer dissatisfaction',
      solution: 'Deploy intelligent AI chatbots that understand context, provide instant responses, and learn from every interaction',
      benefits: [
        '24/7 customer support availability',
        '90% reduction in response time',
        'Handle unlimited conversations simultaneously',
        'Natural language understanding in multiple languages',
        'Seamless handoff to human agents when needed',
      ],
      color: 'from-blue-500 to-cyan-500',
    },
    {
      icon: Workflow,
      title: 'Workflow Automation',
      problem: 'Manual, repetitive tasks consuming valuable time and prone to human errors',
      solution: 'Intelligent workflow automation that handles repetitive tasks, data entry, and process orchestration automatically',
      benefits: [
        'Eliminate manual data entry and processing',
        '75% reduction in processing time',
        'Zero human errors in automated workflows',
        'Real-time task tracking and notifications',
        'Easy integration with existing tools',
      ],
      color: 'from-purple-500 to-pink-500',
    },
    {
      icon: Database,
      title: 'CRM Automation',
      problem: 'Scattered customer data, missed follow-ups, and inefficient sales processes',
      solution: 'AI-powered CRM that automatically captures interactions, predicts customer needs, and automates follow-ups',
      benefits: [
        'Automatic data capture and updates',
        'Predictive lead scoring and prioritization',
        'Automated follow-up reminders',
        '360° customer view across all touchpoints',
        'Smart insights for better decision making',
      ],
      color: 'from-green-500 to-emerald-500',
    },
    {
      icon: TrendingUp,
      title: 'Marketing Automation',
      problem: 'Inefficient marketing campaigns with poor targeting and low conversion rates',
      solution: 'AI-driven marketing automation that personalizes campaigns, optimizes timing, and maximizes ROI',
      benefits: [
        'Personalized customer journeys at scale',
        'A/B testing and optimization',
        'Automated email and social media campaigns',
        '3x increase in conversion rates',
        'Real-time performance analytics',
      ],
      color: 'from-orange-500 to-red-500',
    },
    {
      icon: BarChart,
      title: 'Data Analytics',
      problem: 'Overwhelmed by data but lacking actionable insights for strategic decisions',
      solution: 'Advanced analytics platform that transforms raw data into visual insights and predictive intelligence',
      benefits: [
        'Real-time dashboards and reports',
        'Predictive analytics and forecasting',
        'Automated anomaly detection',
        'Custom KPI tracking',
        'Data-driven decision recommendations',
      ],
      color: 'from-indigo-500 to-purple-500',
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
              <span className="gradient-text">AI-Powered Solutions</span>
              <br />
              <span className="text-gray-900 dark:text-white">For Every Business Need</span>
            </h1>
            <p className="text-xl text-gray-600 dark:text-gray-300">
              Transform your business operations with our comprehensive suite of AI automation solutions designed to save time, reduce costs, and drive growth
            </p>
          </motion.div>
        </div>
      </section>

      {/* Solutions Grid */}
      <section className="section-padding">
        <div className="container-custom space-y-24">
          {solutions.map((solution, index) => {
            const Icon = solution.icon;
            const isEven = index % 2 === 0;

            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className={`grid lg:grid-cols-2 gap-12 items-center ${!isEven ? 'lg:flex-row-reverse' : ''}`}
              >
                {/* Content */}
                <div className={`space-y-6 ${!isEven ? 'lg:order-2' : ''}`}>
                  <div className={`bg-gradient-to-r ${solution.color} w-16 h-16 rounded-xl flex items-center justify-center`}>
                    <Icon className="w-8 h-8 text-white" />
                  </div>

                  <h2 className="text-4xl font-bold text-gray-900 dark:text-white">
                    {solution.title}
                  </h2>

                  {/* Problem */}
                  <div className="bg-red-50 dark:bg-red-900/20 border-l-4 border-red-500 p-4 rounded">
                    <h3 className="font-semibold text-red-700 dark:text-red-400 mb-2">Problem</h3>
                    <p className="text-gray-700 dark:text-gray-300">{solution.problem}</p>
                  </div>

                  {/* Solution */}
                  <div className="bg-green-50 dark:bg-green-900/20 border-l-4 border-green-500 p-4 rounded">
                    <h3 className="font-semibold text-green-700 dark:text-green-400 mb-2">Solution</h3>
                    <p className="text-gray-700 dark:text-gray-300">{solution.solution}</p>
                  </div>

                  {/* Benefits */}
                  <div>
                    <h3 className="font-semibold text-xl text-gray-900 dark:text-white mb-4">Key Benefits</h3>
                    <ul className="space-y-3">
                      {solution.benefits.map((benefit, idx) => (
                        <li key={idx} className="flex items-start space-x-3">
                          <CheckCircle className="w-6 h-6 text-green-500 flex-shrink-0 mt-0.5" />
                          <span className="text-gray-700 dark:text-gray-300">{benefit}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                {/* Visual */}
                <div className={`${!isEven ? 'lg:order-1' : ''}`}>
                  <div className={`bg-gradient-to-br ${solution.color} p-12 rounded-3xl shadow-2xl aspect-square flex items-center justify-center`}>
                    <Icon className="w-48 h-48 text-white/20" />
                  </div>
                </div>
              </motion.div>
            );
          })}
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
              Ready to Transform Your Business?
            </h2>
            <p className="text-xl mb-8 opacity-90 max-w-2xl mx-auto">
              Schedule a free consultation to discover which automation solutions are right for your business
            </p>
            <Link
              to="/contact"
              className="inline-flex items-center bg-white text-primary-600 hover:bg-gray-100 font-semibold px-8 py-4 rounded-lg transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 group"
            >
              Book a Free Demo
              <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Solutions;
