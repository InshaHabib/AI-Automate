import { motion } from 'framer-motion';
import { Check, X, ArrowRight, Zap, Rocket, Crown } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useState } from 'react';

const Pricing = () => {
  const [billingCycle, setBillingCycle] = useState('monthly');

  const plans = [
    {
      name: 'Starter',
      icon: Zap,
      description: 'Perfect for small businesses getting started with automation',
      monthlyPrice: 499,
      annualPrice: 4990,
      color: 'from-blue-500 to-cyan-500',
      features: [
        { name: '1 AI Chatbot', included: true },
        { name: 'Basic Workflow Automation', included: true },
        { name: 'Email Support', included: true },
        { name: '1,000 Conversations/month', included: true },
        { name: 'Basic Analytics Dashboard', included: true },
        { name: 'Advanced CRM Integration', included: false },
        { name: 'Custom AI Model Training', included: false },
        { name: 'Dedicated Account Manager', included: false },
        { name: 'API Access', included: false },
      ],
      popular: false,
    },
    {
      name: 'Business',
      icon: Rocket,
      description: 'For growing businesses ready to scale with advanced automation',
      monthlyPrice: 1499,
      annualPrice: 14990,
      color: 'from-purple-500 to-pink-500',
      features: [
        { name: '5 AI Chatbots', included: true },
        { name: 'Advanced Workflow Automation', included: true },
        { name: 'Priority Support 24/7', included: true },
        { name: '10,000 Conversations/month', included: true },
        { name: 'Advanced Analytics & Reports', included: true },
        { name: 'Full CRM Integration', included: true },
        { name: 'Custom AI Model Training', included: true },
        { name: 'Dedicated Account Manager', included: false },
        { name: 'Full API Access', included: true },
      ],
      popular: true,
    },
    {
      name: 'Enterprise',
      icon: Crown,
      description: 'Custom solutions for large organizations with complex needs',
      monthlyPrice: 'Custom',
      annualPrice: 'Custom',
      color: 'from-orange-500 to-red-500',
      features: [
        { name: 'Unlimited AI Chatbots', included: true },
        { name: 'Enterprise Workflow Automation', included: true },
        { name: 'White-Glove Support', included: true },
        { name: 'Unlimited Conversations', included: true },
        { name: 'Custom Analytics & BI Integration', included: true },
        { name: 'Full CRM Integration', included: true },
        { name: 'Custom AI Model Development', included: true },
        { name: 'Dedicated Account Manager', included: true },
        { name: 'Full API Access + Custom Endpoints', included: true },
      ],
      popular: false,
    },
  ];

  const allFeatures = [
    {
      category: 'AI Chatbots',
      features: [
        { name: 'Number of Chatbots', starter: '1', business: '5', enterprise: 'Unlimited' },
        { name: 'Conversations/month', starter: '1,000', business: '10,000', enterprise: 'Unlimited' },
        { name: 'Multi-language Support', starter: '3 Languages', business: '10+ Languages', enterprise: 'All Languages' },
        { name: 'Custom Training Data', starter: false, business: true, enterprise: true },
      ],
    },
    {
      category: 'Automation',
      features: [
        { name: 'Workflow Automation', starter: 'Basic', business: 'Advanced', enterprise: 'Enterprise' },
        { name: 'CRM Integration', starter: false, business: true, enterprise: true },
        { name: 'Marketing Automation', starter: false, business: true, enterprise: true },
        { name: 'Custom Integrations', starter: false, business: '5', enterprise: 'Unlimited' },
      ],
    },
    {
      category: 'Analytics & Reporting',
      features: [
        { name: 'Dashboard Analytics', starter: true, business: true, enterprise: true },
        { name: 'Custom Reports', starter: false, business: true, enterprise: true },
        { name: 'BI Integration', starter: false, business: false, enterprise: true },
        { name: 'Real-time Alerts', starter: false, business: true, enterprise: true },
      ],
    },
    {
      category: 'Support & Services',
      features: [
        { name: 'Support Level', starter: 'Email', business: '24/7 Priority', enterprise: 'White-Glove' },
        { name: 'Onboarding', starter: 'Self-Service', business: 'Guided', enterprise: 'Dedicated' },
        { name: 'Account Manager', starter: false, business: false, enterprise: true },
        { name: 'SLA Guarantee', starter: false, business: '99.5%', enterprise: '99.9%' },
      ],
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
              <span className="text-gray-900 dark:text-white">Simple,</span>{' '}
              <span className="gradient-text">Transparent Pricing</span>
            </h1>
            <p className="text-xl text-gray-600 dark:text-gray-300 mb-8">
              Choose the perfect plan for your business. No hidden fees, cancel anytime.
            </p>

            {/* Billing Toggle */}
            <div className="inline-flex items-center bg-white dark:bg-gray-800 p-2 rounded-lg shadow-md">
              <button
                onClick={() => setBillingCycle('monthly')}
                className={`px-6 py-2 rounded-md transition-all ${
                  billingCycle === 'monthly'
                    ? 'bg-primary-600 text-white'
                    : 'text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white'
                }`}
              >
                Monthly
              </button>
              <button
                onClick={() => setBillingCycle('annual')}
                className={`px-6 py-2 rounded-md transition-all ${
                  billingCycle === 'annual'
                    ? 'bg-primary-600 text-white'
                    : 'text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white'
                }`}
              >
                Annual <span className="text-green-500 text-sm ml-1">(Save 17%)</span>
              </button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Pricing Cards */}
      <section className="section-padding">
        <div className="container-custom">
          <div className="grid md:grid-cols-3 gap-8 max-w-7xl mx-auto">
            {plans.map((plan, index) => {
              const Icon = plan.icon;
              const price = billingCycle === 'monthly' ? plan.monthlyPrice : plan.annualPrice;

              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className={`relative bg-white dark:bg-gray-800 rounded-3xl shadow-xl overflow-hidden border-2 ${
                    plan.popular
                      ? 'border-primary-500 scale-105'
                      : 'border-gray-200 dark:border-gray-700'
                  }`}
                >
                  {plan.popular && (
                    <div className="bg-gradient-to-r from-primary-600 to-accent-600 text-white text-center py-2 font-semibold">
                      Most Popular
                    </div>
                  )}

                  <div className="p-8">
                    {/* Icon & Name */}
                    <div className={`bg-gradient-to-r ${plan.color} w-16 h-16 rounded-xl flex items-center justify-center mb-6`}>
                      <Icon className="w-8 h-8 text-white" />
                    </div>
                    <h3 className="text-3xl font-bold text-gray-900 dark:text-white mb-2">
                      {plan.name}
                    </h3>
                    <p className="text-gray-600 dark:text-gray-400 mb-6">{plan.description}</p>

                    {/* Price */}
                    <div className="mb-8">
                      {typeof price === 'number' ? (
                        <>
                          <div className="flex items-baseline">
                            <span className="text-5xl font-bold gradient-text">${price}</span>
                            <span className="text-gray-600 dark:text-gray-400 ml-2">
                              /{billingCycle === 'monthly' ? 'mo' : 'yr'}
                            </span>
                          </div>
                          {billingCycle === 'annual' && (
                            <p className="text-sm text-green-600 dark:text-green-400 mt-2">
                              Save ${(plan.monthlyPrice * 12 - plan.annualPrice).toFixed(0)} annually
                            </p>
                          )}
                        </>
                      ) : (
                        <div className="text-4xl font-bold gradient-text">Custom Pricing</div>
                      )}
                    </div>

                    {/* Features */}
                    <ul className="space-y-4 mb-8">
                      {plan.features.map((feature, idx) => (
                        <li key={idx} className="flex items-start space-x-3">
                          {feature.included ? (
                            <Check className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                          ) : (
                            <X className="w-5 h-5 text-gray-400 flex-shrink-0 mt-0.5" />
                          )}
                          <span className={feature.included ? 'text-gray-700 dark:text-gray-300' : 'text-gray-400 line-through'}>
                            {feature.name}
                          </span>
                        </li>
                      ))}
                    </ul>

                    {/* CTA Button */}
                    <Link
                      to="/contact"
                      className={`block text-center font-semibold px-8 py-4 rounded-lg transition-all duration-300 ${
                        plan.popular
                          ? 'bg-primary-600 hover:bg-primary-700 text-white shadow-lg hover:shadow-xl'
                          : 'bg-gray-100 hover:bg-gray-200 dark:bg-gray-700 dark:hover:bg-gray-600 text-gray-900 dark:text-white'
                      }`}
                    >
                      {plan.name === 'Enterprise' ? 'Contact Sales' : 'Get Started'}
                    </Link>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Feature Comparison Table */}
      <section className="section-padding bg-gray-50 dark:bg-gray-800">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl font-bold mb-4">
              <span className="gradient-text">Detailed Feature Comparison</span>
            </h2>
          </motion.div>

          <div className="bg-white dark:bg-gray-900 rounded-3xl shadow-xl overflow-hidden">
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="border-b-2 border-gray-200 dark:border-gray-700">
                    <th className="text-left p-6 font-semibold text-gray-900 dark:text-white">Features</th>
                    <th className="p-6 font-semibold text-gray-900 dark:text-white">Starter</th>
                    <th className="p-6 font-semibold text-primary-600">Business</th>
                    <th className="p-6 font-semibold text-gray-900 dark:text-white">Enterprise</th>
                  </tr>
                </thead>
                <tbody>
                  {allFeatures.map((category, catIdx) => (
                    <>
                      <tr key={catIdx} className="bg-gray-50 dark:bg-gray-800">
                        <td colSpan="4" className="p-4 font-bold text-gray-900 dark:text-white">
                          {category.category}
                        </td>
                      </tr>
                      {category.features.map((feature, featIdx) => (
                        <tr key={featIdx} className="border-b border-gray-100 dark:border-gray-800">
                          <td className="p-4 text-gray-700 dark:text-gray-300">{feature.name}</td>
                          <td className="p-4 text-center">
                            {typeof feature.starter === 'boolean' ? (
                              feature.starter ? (
                                <Check className="w-5 h-5 text-green-500 mx-auto" />
                              ) : (
                                <X className="w-5 h-5 text-gray-400 mx-auto" />
                              )
                            ) : (
                              <span className="text-gray-700 dark:text-gray-300">{feature.starter}</span>
                            )}
                          </td>
                          <td className="p-4 text-center bg-primary-50 dark:bg-primary-900/10">
                            {typeof feature.business === 'boolean' ? (
                              feature.business ? (
                                <Check className="w-5 h-5 text-green-500 mx-auto" />
                              ) : (
                                <X className="w-5 h-5 text-gray-400 mx-auto" />
                              )
                            ) : (
                              <span className="text-gray-700 dark:text-gray-300 font-semibold">{feature.business}</span>
                            )}
                          </td>
                          <td className="p-4 text-center">
                            {typeof feature.enterprise === 'boolean' ? (
                              feature.enterprise ? (
                                <Check className="w-5 h-5 text-green-500 mx-auto" />
                              ) : (
                                <X className="w-5 h-5 text-gray-400 mx-auto" />
                              )
                            ) : (
                              <span className="text-gray-700 dark:text-gray-300">{feature.enterprise}</span>
                            )}
                          </td>
                        </tr>
                      ))}
                    </>
                  ))}
                </tbody>
              </table>
            </div>
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
              Still Have Questions?
            </h2>
            <p className="text-xl mb-8 opacity-90 max-w-2xl mx-auto">
              Our team is here to help you choose the right plan and answer all your questions
            </p>
            <Link
              to="/contact"
              className="inline-flex items-center bg-white text-primary-600 hover:bg-gray-100 font-semibold px-8 py-4 rounded-lg transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 group"
            >
              Contact Sales Team
              <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Pricing;
