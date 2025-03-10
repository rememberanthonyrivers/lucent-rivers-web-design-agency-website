
import React, { useState } from 'react';
import { Check } from 'lucide-react';
import PageLayout from '@/components/PageLayout';
import { Link } from 'react-router-dom';

const PricingPage = () => {
  const [billingCycle, setBillingCycle] = useState<'monthly' | 'annually'>('monthly');
  
  const toggleBillingCycle = () => {
    setBillingCycle(prev => prev === 'monthly' ? 'annually' : 'monthly');
  };
  
  const tiers = [
    {
      name: "Basic",
      description: "For small businesses starting their online journey",
      monthlyPrice: 499,
      annualPrice: 399,
      features: [
        "Responsive website design",
        "5 pages included",
        "Basic SEO optimization",
        "Contact form integration",
        "Social media integration",
        "3 months of support"
      ],
      cta: "Get Started",
      accent: "from-blue-400 to-blue-600"
    },
    {
      name: "Professional",
      description: "For growing businesses needing more features",
      monthlyPrice: 999,
      annualPrice: 799,
      features: [
        "Everything in Basic",
        "E-commerce functionality",
        "CMS integration",
        "Custom animations",
        "Advanced SEO package",
        "Performance optimization",
        "6 months of support"
      ],
      cta: "Choose Professional",
      accent: "from-lucent-400 to-lucent-600",
      highlighted: true
    },
    {
      name: "Enterprise",
      description: "For established businesses with custom requirements",
      monthlyPrice: 1999,
      annualPrice: 1599,
      features: [
        "Everything in Professional",
        "Custom web application",
        "API development",
        "Third-party integrations",
        "Advanced analytics",
        "Priority support",
        "12 months of support"
      ],
      cta: "Contact Sales",
      accent: "from-purple-400 to-purple-600"
    }
  ];

  return (
    <PageLayout>
      <section className="relative pt-32 pb-16 md:pt-40 md:pb-24">
        <div className="container mx-auto max-w-6xl px-4 md:px-8">
          <div className="text-center mb-16">
            <span className="inline-block px-3 py-1 mb-4 text-xs font-medium rounded-full bg-lucent-50 text-lucent-600">
              Pricing
            </span>
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Transparent Pricing Plans</h1>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Choose the perfect plan for your business needs with no hidden fees.
            </p>
            
            <div className="mt-8 inline-flex items-center p-1 bg-secondary/50 rounded-full">
              <button
                onClick={() => setBillingCycle('monthly')}
                className={`px-6 py-2 rounded-full text-sm font-medium transition-all ${
                  billingCycle === 'monthly' 
                    ? 'bg-white shadow-sm text-black' 
                    : 'text-muted-foreground'
                }`}
              >
                Monthly
              </button>
              <button
                onClick={() => setBillingCycle('annually')}
                className={`px-6 py-2 rounded-full text-sm font-medium transition-all ${
                  billingCycle === 'annually' 
                    ? 'bg-white shadow-sm text-black' 
                    : 'text-muted-foreground'
                }`}
              >
                Annually <span className="text-xs text-lucent-500 ml-1">Save 20%</span>
              </button>
            </div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {tiers.map((tier, index) => (
              <div key={index} className={`relative ${tier.highlighted ? 'mt-[-40px] mb-[-10px]' : ''}`}>
                {tier.highlighted && (
                  <div className="absolute top-0 inset-x-0 transform -translate-y-full flex justify-center pb-2">
                    <span className="bg-lucent-500 text-white text-xs font-bold px-3 py-1 rounded-full shadow-lg">
                      Most Popular
                    </span>
                  </div>
                )}
                
                <div className={`relative glass p-8 rounded-xl overflow-hidden hover-lift h-full flex flex-col ${
                  tier.highlighted ? 'shadow-xl border border-lucent-200' : ''
                }`}>
                  <div className="mb-6">
                    <h3 className="text-2xl font-bold mb-1">{tier.name}</h3>
                    <p className="text-muted-foreground text-sm mb-4">{tier.description}</p>
                    <div className="mb-4">
                      <span className="text-4xl font-bold">
                        ${billingCycle === 'monthly' 
                          ? tier.monthlyPrice 
                          : tier.annualPrice}
                      </span>
                      <span className="text-muted-foreground ml-2">
                        /{billingCycle === 'monthly' ? 'month' : 'month, billed annually'}
                      </span>
                    </div>
                  </div>
                  
                  <ul className="space-y-3 mb-8 flex-grow">
                    {tier.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-start">
                        <Check className="w-5 h-5 text-lucent-500 mt-0.5 mr-2 shrink-0" />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                  
                  <Link
                    to="/contact"
                    className={`w-full py-3 px-4 rounded-lg text-center font-medium transition-colors ${
                      tier.highlighted
                        ? 'bg-lucent-500 text-white hover:bg-lucent-600'
                        : 'bg-secondary hover:bg-secondary/70 text-foreground'
                    }`}
                  >
                    {tier.cta}
                  </Link>
                </div>
              </div>
            ))}
          </div>
          
          <div className="mt-16 text-center">
            <p className="text-muted-foreground max-w-2xl mx-auto mb-6">
              All plans include hosting, maintenance, and our commitment to quality. 
              Need a custom solution? Contact our sales team for a tailored quote.
            </p>
            <Link 
              to="/contact" 
              className="text-lucent-500 hover:text-lucent-600 font-medium"
            >
              Contact us for custom enterprise solutions →
            </Link>
          </div>
        </div>
      </section>
    </PageLayout>
  );
};

export default PricingPage;
