import { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';

interface FAQItem {
  question: string;
  answer: string;
  category: string;
}

const faqData: FAQItem[] = [
  // General Questions
  {
    category: 'General',
    question: 'What is Super GRC?',
    answer: 'Super GRC is a comprehensive cybersecurity risk management and GRC (Governance, Risk, and Compliance) platform that unifies compliance, risk assessment, asset discovery, and governance in one intelligent solution. Built by cybersecurity practitioners for security teams, it streamlines complex compliance workflows and automates risk management processes. Available as both SaaS and on-premise deployment.'
  },
  {
    category: 'General',
    question: 'Who is Super GRC designed for?',
    answer: 'Super GRC is designed for CISOs, security teams, compliance officers, risk managers, and IT professionals at organizations of all sizes. Whether you\'re a startup preparing for your first SOC 2 audit or an enterprise managing multiple compliance frameworks, Super GRC scales to meet your needs.'
  },
  {
    category: 'General',
    question: 'What makes Super GRC different from other GRC platforms?',
    answer: 'Super GRC stands out with its AI-powered risk assessment, automated asset discovery, practitioner-focused design, and true multi-framework support. Unlike legacy GRC tools, we offer modern integrations, real-time continuous monitoring, and an intuitive interface that doesn\'t require extensive training. Our platform is built by former CISOs who understand the real challenges of compliance and risk management.'
  },

  // Compliance & Frameworks
  {
    category: 'Compliance',
    question: 'What compliance frameworks does Super GRC support?',
    answer: 'Super GRC supports all major compliance frameworks including SOC 2 Type 1 & 2, ISO 27001, HIPAA/HITRUST, FedRAMP/NIST 800-53, PCI DSS, GDPR, CCPA, NIST Cybersecurity Framework (CSF), CMMC, and more. We also support custom frameworks and can map controls across multiple standards simultaneously.'
  },
  {
    category: 'Compliance',
    question: 'Can Super GRC handle multiple compliance frameworks simultaneously?',
    answer: 'Yes! Super GRC excels at multi-framework compliance management. Our control mapping engine automatically identifies overlapping controls across different frameworks, eliminating duplicate work. For example, a single control implementation can satisfy requirements for SOC 2, ISO 27001, and HIPAA simultaneously, reducing your compliance burden by up to 60%.'
  },
  {
    category: 'Compliance',
    question: 'How long does it take to achieve compliance with Super GRC?',
    answer: 'Timeline varies based on your starting point and target framework, but Super GRC typically reduces time-to-compliance by 50-70%. Organizations have achieved SOC 2 Type 1 certification in as little as 90 days using our platform. Our automated evidence collection, pre-built control templates, and AI-powered gap analysis significantly accelerate the compliance process.'
  },
  {
    category: 'Compliance',
    question: 'Does Super GRC provide audit support?',
    answer: 'Yes. Super GRC generates audit-ready documentation, centralizes all evidence in one location, provides automated evidence collection, and creates compliance reports that auditors love. Our customers report 60-70% reduction in audit preparation time. We also offer optional audit readiness reviews and can connect you with our network of trusted auditors.'
  },

  // Technical Questions
  {
    category: 'Technical',
    question: 'Is Super GRC available as SaaS or on-premise?',
    answer: 'Both! Super GRC is available as a cloud-based SaaS solution for quick deployment and automatic updates, or as an on-premise installation for organizations with strict data residency requirements or air-gapped environments. Both versions offer the same feature set and receive regular updates.'
  },
  {
    category: 'Technical',
    question: 'What integrations does Super GRC support?',
    answer: 'Super GRC integrates with 100+ tools including AWS, Azure, GCP, GitHub, GitLab, Jira, ServiceNow, Slack, Microsoft Teams, Okta, Active Directory, and many more. Our REST API and webhooks enable custom integrations. We also support SAML/SSO for authentication and SCIM for user provisioning.'
  },
  {
    category: 'Technical',
    question: 'How does automated asset discovery work?',
    answer: 'Our asset discovery engine continuously scans your infrastructure across cloud providers (AWS, Azure, GCP), on-premise systems, SaaS applications, containers, and endpoints. It automatically identifies servers, databases, applications, APIs, and network devices, maintaining a real-time inventory. Discovery runs on schedules you define (hourly, daily, weekly) and alerts you to new or changed assets.'
  },
  {
    category: 'Technical',
    question: 'Is my data secure in Super GRC?',
    answer: 'Absolutely. Super GRC is built with security-first principles. We use AES-256 encryption at rest, TLS 1.3 in transit, support customer-managed encryption keys (CMEK), maintain SOC 2 Type 2 certification, undergo annual penetration testing, and follow OWASP security best practices. Our infrastructure is hosted in certified data centers with 24/7 monitoring.'
  },

  // Pricing & Plans
  {
    category: 'Pricing',
    question: 'How much does Super GRC cost?',
    answer: 'Super GRC offers flexible pricing based on your organization\'s size and needs. We have plans for startups, mid-market companies, and enterprises. Pricing is transparent with no hidden fees. Contact us for a personalized quote and demo. We also offer annual discounts and special pricing for non-profits and early-stage startups.'
  },
  {
    category: 'Pricing',
    question: 'Is there a free trial?',
    answer: 'Yes! We offer a 14-day free trial with full platform access (no credit card required). During the trial, you\'ll have access to all features, integrations, and our support team. We also provide onboarding assistance to help you get the most value from your trial period.'
  },
  {
    category: 'Pricing',
    question: 'What\'s included in each plan?',
    answer: 'All plans include core features like asset discovery, risk management, and compliance frameworks. Higher tiers add advanced features like AI-powered insights, custom frameworks, API access, premium integrations, dedicated support, and custom SLAs. Enterprise plans include white-glove onboarding, dedicated account management, and custom development options.'
  },

  // Implementation & Support
  {
    category: 'Implementation',
    question: 'How long does implementation take?',
    answer: 'Basic setup takes 1-2 hours. Full implementation with all integrations typically takes 1-2 weeks. Enterprise deployments with custom requirements may take 4-6 weeks. We provide guided onboarding, implementation support, and training to ensure smooth deployment. Our fastest customer was fully operational in 3 hours.'
  },
  {
    category: 'Implementation',
    question: 'Do you provide training and onboarding?',
    answer: 'Yes! All plans include comprehensive onboarding with live training sessions, documentation, video tutorials, and ongoing support. Enterprise customers get dedicated onboarding specialists, custom training programs, and quarterly business reviews. We also offer certification programs for power users.'
  },
  {
    category: 'Implementation',
    question: 'What kind of support do you offer?',
    answer: 'We offer email support (all plans), chat support (Business+), and phone support (Enterprise). Our average response time is under 2 hours for critical issues. Enterprise customers get dedicated support channels, named support engineers, and 24/7 emergency support with guaranteed SLAs.'
  },

  // Features & Capabilities
  {
    category: 'Features',
    question: 'What is AI-powered risk assessment?',
    answer: 'Our AI engine analyzes your infrastructure, historical data, and industry benchmarks to automatically identify risks, suggest controls, predict potential vulnerabilities, and prioritize remediation. It learns from your environment and continuously improves its recommendations, reducing manual risk assessment work by 80%.'
  },
  {
    category: 'Features',
    question: 'Does Super GRC support third-party risk management?',
    answer: 'Yes! Super GRC includes comprehensive vendor risk management with automated questionnaires, risk scoring, continuous monitoring, contract management, and vendor performance tracking. You can manage unlimited vendors and customize risk assessments for different vendor types.'
  },
  {
    category: 'Features',
    question: 'Can I customize Super GRC for my organization?',
    answer: 'Absolutely. Super GRC supports custom frameworks, policies, controls, risk matrices, workflows, reports, and dashboards. You can white-label the platform (Enterprise), create custom integrations via API, and extend functionality with webhooks and automation rules.'
  },
  {
    category: 'Features',
    question: 'How does continuous monitoring work?',
    answer: 'Super GRC continuously monitors your infrastructure, applications, and controls 24/7. When changes are detected (new assets, configuration changes, policy violations), you receive instant alerts. This ensures you maintain compliance between audits and can quickly respond to risks. You can configure monitoring frequency and alert thresholds.'
  },

  // Migration & Data
  {
    category: 'Migration',
    question: 'Can I migrate from another GRC platform?',
    answer: 'Yes! We offer migration assistance from major GRC platforms including ServiceNow GRC, Archer, Vanta, Drata, and others. Our migration process includes data mapping, automated imports, validation, and parallel operation during transition. Most migrations complete in 2-4 weeks with no data loss.'
  },
  {
    category: 'Migration',
    question: 'Can I export my data from Super GRC?',
    answer: 'Absolutely. You own your data. Super GRC provides comprehensive export capabilities in multiple formats (CSV, JSON, PDF). You can export compliance reports, audit evidence, risk assessments, asset inventories, and all other data at any time. No lock-in or export fees.'
  }
];

export function ExpandedFAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  const [selectedCategory, setSelectedCategory] = useState<string>('All');

  const categories = ['All', ...Array.from(new Set(faqData.map(faq => faq.category)))];
  
  const filteredFAQs = selectedCategory === 'All' 
    ? faqData 
    : faqData.filter(faq => faq.category === selectedCategory);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="py-16 md:py-20 bg-[#E6E6E6]">
      <div className="container mx-auto px-4 max-w-5xl">
        {/* Header */}
        <div className="text-center mb-12 md:mb-16">
          <h2 className="mb-4 md:mb-6 text-3xl md:text-5xl lg:text-6xl text-[#151719]" style={{ fontFamily: 'Pragmatica Bold, sans-serif' }}>
            Frequently Asked Questions
          </h2>
          <p className="text-base md:text-xl text-[#151719]/70 leading-relaxed max-w-3xl mx-auto px-4" style={{ fontFamily: 'Pragmatica, sans-serif' }}>
            Everything you need to know about Super GRC. Can't find your answer? Contact our team.
          </p>
        </div>

        {/* Category Filter */}
        <div className="mb-8 flex flex-wrap gap-2 justify-center">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => {
                setSelectedCategory(category);
                setOpenIndex(null);
              }}
              className={`px-6 py-2 rounded-lg transition-all ${
                selectedCategory === category
                  ? 'bg-[#CFE928] text-[#151719] shadow-lg'
                  : 'bg-white text-[#151719]/70 hover:bg-white/80'
              }`}
              style={{ fontFamily: 'Pragmatica Bold, sans-serif' }}
            >
              {category}
            </button>
          ))}
        </div>

        {/* FAQ Items */}
        <div className="space-y-4">
          {filteredFAQs.map((faq, index) => (
            <div
              key={index}
              className="bg-white rounded-xl shadow-lg overflow-hidden transition-all duration-300 hover:shadow-xl"
            >
              <button
                onClick={() => toggleFAQ(index)}
                className="w-full px-6 md:px-8 py-6 flex items-start justify-between gap-4 text-left hover:bg-gray-50 transition-colors"
              >
                <div className="flex-1">
                  <div className="flex items-center gap-3 mb-2">
                    <span className="text-xs bg-[#CFE928]/20 text-[#151719] px-3 py-1 rounded-full" style={{ fontFamily: 'Pragmatica Bold, sans-serif' }}>
                      {faq.category}
                    </span>
                  </div>
                  <h3 className="text-lg md:text-xl text-[#151719]" style={{ fontFamily: 'Pragmatica Bold, sans-serif' }}>
                    {faq.question}
                  </h3>
                </div>
                <div className="flex-shrink-0">
                  {openIndex === index ? (
                    <ChevronUp className="w-6 h-6 text-[#CFE928]" />
                  ) : (
                    <ChevronDown className="w-6 h-6 text-[#151719]/40" />
                  )}
                </div>
              </button>
              
              {openIndex === index && (
                <div className="px-6 md:px-8 pb-6 pt-2">
                  <p className="text-[#151719]/80 leading-relaxed" style={{ fontFamily: 'Pragmatica, sans-serif' }}>
                    {faq.answer}
                  </p>
                </div>
              )}
            </div>
          ))}
        </div>

        {/* CTA Section */}
        <div className="mt-12 bg-gradient-to-r from-[#CFE928] to-[#9FCFD3] rounded-xl shadow-2xl p-8 md:p-12 text-center">
          <h3 className="text-2xl md:text-3xl text-[#151719] mb-4" style={{ fontFamily: 'Pragmatica Bold, sans-serif' }}>
            Still Have Questions?
          </h3>
          <p className="text-[#151719]/80 mb-6 text-lg" style={{ fontFamily: 'Pragmatica, sans-serif' }}>
            Our team is here to help. Schedule a personalized demo and get all your questions answered.
          </p>
          <button
            onClick={() => {
              document.getElementById('demo')?.scrollIntoView({ behavior: 'smooth' });
            }}
            className="bg-[#151719] text-white px-8 py-4 rounded-lg hover:bg-[#151719]/90 transition-all shadow-lg"
            style={{ fontFamily: 'Pragmatica Bold, sans-serif' }}
          >
            Request a Demo
          </button>
        </div>
      </div>
    </section>
  );
}
