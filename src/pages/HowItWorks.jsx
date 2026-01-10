import { motion } from 'framer-motion';
import { Search, Lightbulb, Rocket, BarChart3, CheckCircle } from 'lucide-react';
import { Link } from 'react-router-dom';

const HowItWorks = () => {
  const steps = [
    {
      number: '01',
      icon: Search,
      title: 'Business Analysis',
      description: 'We start by understanding your unique business challenges, workflows, and goals through comprehensive analysis',
      details: [
        'In-depth consultation with stakeholders',
        'Process mapping and pain point identification',
        'Current workflow documentation',
        'ROI potential assessment',
      ],
      color: 'from-blue-500 to-cyan-500',
    },
    {
      number: '02',
      icon: Lightbulb,
      title: 'AI Model & Workflow Design',
      description: 'Our experts design custom AI models and automated workflows tailored specifically to your business needs',
      details: [
        'Custom AI model development',
        'Workflow architecture design',
        'Integration planning with existing systems',
        'User experience optimization',
      ],
      color: 'from-purple-500 to-pink-500',
    },
    {
      number: '03',
      icon: Rocket,
      title: 'Deployment & Integration',
      description: 'Seamless implementation of automation solutions with minimal disruption to your ongoing operations',
      details: [
        'Phased rollout strategy',
        'System integration and testing',
        'Team training and onboarding',
        'Quality assurance and validation',
      ],
      color: 'from-green-500 to-emerald-500',
    },
    {
      number: '04',
      icon: BarChart3,
      title: 'Monitoring & Optimization',
      description: 'Continuous performance monitoring and optimization to ensure maximum efficiency and ROI',
      details: [
        '24/7 system monitoring',
        'Performance analytics and reporting',
        'Continuous optimization based on data',
        'Ongoing support and maintenance',
      ],
      color: 'from-orange-500 to-red-500',
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
              <span className="text-gray-900 dark:text-white">How</span>{' '}
              <span className="gradient-text">We Work</span>
            </h1>
            <p className="text-xl text-gray-600 dark:text-gray-300">
              Our proven 4-step process ensures successful implementation of AI automation solutions from concept to optimization
            </p>
          </motion.div>
        </div>
      </section>

      {/* Steps Section */}
      <section className="section-padding">
        <div className="container-custom">
          <div className="relative">
            {/* Timeline Line */}
            <div className="hidden lg:block absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-gradient-to-b from-primary-500 to-accent-500"></div>

            <div className="space-y-24">
              {steps.map((step, index) => {
                const Icon = step.icon;
                const isEven = index % 2 === 0;

                return (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: isEven ? -50 : 50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="relative"
                  >
                    <div className={`grid lg:grid-cols-2 gap-12 items-center ${!isEven ? 'lg:flex-row-reverse' : ''}`}>
                      {/* Content */}
                      <div className={`${!isEven ? 'lg:order-2 lg:text-left' : 'lg:text-right'}`}>
                        <div className={`inline-block ${!isEven ? '' : 'lg:ml-auto'}`}>
                          <div className="flex items-center space-x-4 mb-6">
                            <span className={`text-6xl font-bold bg-gradient-to-r ${step.color} bg-clip-text text-transparent`}>
                              {step.number}
                            </span>
                          </div>
                          <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
                            {step.title}
                          </h2>
                          <p className="text-lg text-gray-600 dark:text-gray-300 mb-6">
                            {step.description}
                          </p>
                          <ul className="space-y-3">
                            {step.details.map((detail, idx) => (
                              <li key={idx} className={`flex items-center space-x-3 ${!isEven ? '' : 'lg:justify-end'}`}>
                                <CheckCircle className={`w-5 h-5 text-green-500 flex-shrink-0 ${!isEven ? '' : 'lg:order-2'}`} />
                                <span className="text-gray-700 dark:text-gray-300">{detail}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                      </div>

                      {/* Icon Circle */}
                      <div className={`flex justify-center ${!isEven ? 'lg:order-1' : ''}`}>
                        <div className={`relative w-64 h-64 bg-gradient-to-br ${step.color} rounded-full flex items-center justify-center shadow-2xl`}>
                          <Icon className="w-32 h-32 text-white" />
                          {/* Timeline Dot */}
                          <div className="hidden lg:block absolute top-1/2 transform -translate-y-1/2 w-6 h-6 bg-white dark:bg-gray-900 border-4 border-primary-500 rounded-full" style={{ [isEven ? 'right' : 'left']: '-100px' }}></div>
                        </div>
                      </div>
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="section-padding bg-gray-50 dark:bg-gray-800">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              <span className="gradient-text">Why Choose Our Process?</span>
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: 'Proven Methodology',
                description: 'Battle-tested process refined through hundreds of successful implementations',
                icon: '🎯',
              },
              {
                title: 'Minimal Disruption',
                description: 'Phased rollout ensures your business operations continue smoothly',
                icon: '⚡',
              },
              {
                title: 'Guaranteed Results',
                description: 'We stand behind our work with measurable KPIs and performance guarantees',
                icon: '✅',
              },
            ].map((benefit, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-white dark:bg-gray-900 p-8 rounded-2xl shadow-lg card-hover"
              >
                <div className="text-5xl mb-4">{benefit.icon}</div>
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3">
                  {benefit.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-400">{benefit.description}</p>
              </motion.div>
            ))}
          </div>
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
              Ready to Get Started?
            </h2>
            <p className="text-xl mb-8 opacity-90 max-w-2xl mx-auto">
              Let's discuss how we can automate your business processes and drive growth
            </p>
            <Link
              to="/contact"
              className="inline-flex items-center bg-white text-primary-600 hover:bg-gray-100 font-semibold px-8 py-4 rounded-lg transition-all duration-300 shadow-lg"
            >
              Schedule a Consultation
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default HowItWorks;
