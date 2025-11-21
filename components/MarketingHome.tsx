import { Shield, Lock, FileCheck, CheckCircle, ArrowRight, Building2, Users, Building } from "lucide-react";
import { ImageWithFallback } from './figma/ImageWithFallback';

export function MarketingHome() {
  
  const scrollToPrototype = () => {
    document.getElementById('live-prototype')?.scrollIntoView({ behavior: 'smooth' });
  };
  
  return (
    <div className="min-h-screen bg-[#151719]">
      {/* Hero Section */}
      <section className="relative py-20 md:py-32 flex items-center justify-center overflow-hidden bg-[#CFE928]" style={{ fontFamily: 'Pragmatica Bold, sans-serif' }}>
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0" style={{
            backgroundImage: 'radial-gradient(circle at 2px 2px, #151719 1px, transparent 0)',
            backgroundSize: '40px 40px'
          }} />
        </div>
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            {/* Logo */}
            <div className="mb-8">
              <div className="inline-flex flex-col items-center">
                <h1 className="text-5xl md:text-7xl text-[#151719] mb-2" style={{ fontFamily: 'Pragati Narrow, sans-serif', fontWeight: 700 }}>
                  Super GRC
                </h1>
                <p className="text-lg text-[#151719]/80" style={{ fontFamily: 'Pragati Narrow, sans-serif' }}>
                  Engineered for Security
                </p>
              </div>
            </div>
            
            {/* Main Headline */}
            <h2 className="text-[#151719] mb-6 text-3xl md:text-4xl">
              Full Scope Cybersecurity Risk Management, Governance & Compliance
            </h2>
            
            <p className="text-xl text-[#151719]/80 mb-12 leading-relaxed">
              The revolutionary platform that redefines Cybersecurity Governance, Risk, and Compliance. 
              Tailored for small to medium-sized enterprises.
            </p>
            
            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button 
                onClick={scrollToPrototype}
                className="bg-[#151719] text-[#CFE928] px-8 py-4 rounded-lg hover:bg-[#151719]/90 transition-all shadow-lg flex items-center justify-center gap-2 group"
              >
                View Demo Dashboard
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </button>
              <button className="bg-transparent text-[#151719] px-8 py-4 rounded-lg border-2 border-[#151719] hover:bg-[#151719] hover:text-[#CFE928] transition-all">
                Learn More
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-20 bg-[#E6E6E6]">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-16">
              <h1 className="mb-6 text-[#151719]">
                All-In-One Security Solution
              </h1>
              <p className="text-xl text-[#151719]/70 leading-relaxed max-w-3xl mx-auto">
                Super GRC simplifies and accelerates security operations with intuitive navigation and 
                intelligent automation. Discover and manage your assets, compliance, and risk assessments 
                seamlessly within a single interconnected ecosystem.
              </p>
            </div>

            {/* Features Grid */}
            <div className="grid md:grid-cols-3 gap-8">
              <div className="bg-white rounded-xl p-8 hover:shadow-xl transition-shadow border-2 border-[#9FCFD3]">
                <div className="w-14 h-14 bg-[#9FCFD3] rounded-lg flex items-center justify-center mb-6">
                  <Shield className="w-7 h-7 text-[#151719]" />
                </div>
                <h3 className="mb-3 text-[#151719]">
                  Governance
                </h3>
                <p className="text-[#151719]/70">
                  Establish and maintain robust cybersecurity governance frameworks with automated policy management.
                </p>
              </div>

              <div className="bg-white rounded-xl p-8 hover:shadow-xl transition-shadow border-2 border-[#CFE928]">
                <div className="w-14 h-14 bg-[#CFE928] rounded-lg flex items-center justify-center mb-6">
                  <Lock className="w-7 h-7 text-[#151719]" />
                </div>
                <h3 className="mb-3 text-[#151719]">
                  Risk Management
                </h3>
                <p className="text-[#151719]/70">
                  Discover, assess, and manage risks with intelligent automation, integrated discovery and real-time monitoring.
                </p>
              </div>

              <div className="bg-white rounded-xl p-8 hover:shadow-xl transition-shadow border-2 border-[#9FCFD3]">
                <div className="w-14 h-14 bg-[#9FCFD3] rounded-lg flex items-center justify-center mb-6">
                  <FileCheck className="w-7 h-7 text-[#151719]" />
                </div>
                <h3 className="mb-3 text-[#151719]">
                  Compliance
                </h3>
                <p className="text-[#151719]/70">
                  Stay compliant with industry standards and regulations through automated tracking and reporting.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Products Section */}
      <section className="py-20 bg-white relative overflow-hidden">
        {/* Decorative Background Elements */}
        <div className="absolute top-0 left-0 w-full h-full opacity-5 pointer-events-none">
          <div className="absolute top-20 left-10 w-64 h-64 bg-[#CFE928] rounded-full blur-3xl"></div>
          <div className="absolute bottom-20 right-10 w-64 h-64 bg-[#9FCFD3] rounded-full blur-3xl"></div>
        </div>
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="mb-6 text-[#151719]">
                Choose Your Super GRC Solution
              </h2>
              <p className="text-xl text-[#151719]/70 leading-relaxed max-w-3xl mx-auto">
                Whether you're a small startup or a large enterprise, we have the perfect solution tailored to your needs.
              </p>
            </div>

            <div className="grid lg:grid-cols-3 gap-8">
              {/* Small Business - SaaS */}
              <div className="bg-[#E6E6E6] rounded-xl overflow-hidden hover:shadow-2xl transition-all group">
                <div className="relative h-48 overflow-hidden">
                  <ImageWithFallback
                    src="https://images.unsplash.com/photo-1590097521824-d20a96b7504e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzbWFsbCUyMGJ1c2luZXNzJTIwc3RhcnR1cHxlbnwxfHx8fDE3NjI3OTc3NTZ8MA&ixlib=rb-4.1.0&q=80&w=1080"
                    alt="Small Business Solution"
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute top-4 right-4 bg-[#CFE928] text-[#151719] px-4 py-2 rounded-full">
                    SaaS
                  </div>
                </div>
                <div className="p-8">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-12 h-12 bg-[#9FCFD3] rounded-lg flex items-center justify-center">
                      <Building2 className="w-6 h-6 text-[#151719]" />
                    </div>
                    <h3 className="text-[#151719]">Small Business</h3>
                  </div>
                  <p className="text-[#151719]/70 mb-6">
                    Cloud-based SaaS solution perfect for startups and small businesses looking for comprehensive GRC capabilities without the complexity.
                  </p>
                  <ul className="space-y-3 mb-8">
                    <li className="flex items-start gap-2">
                      <CheckCircle className="w-5 h-5 text-[#CFE928] flex-shrink-0 mt-0.5" />
                      <span className="text-[#151719]/70">Quick setup and deployment</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="w-5 h-5 text-[#CFE928] flex-shrink-0 mt-0.5" />
                      <span className="text-[#151719]/70">Affordable monthly subscription</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="w-5 h-5 text-[#CFE928] flex-shrink-0 mt-0.5" />
                      <span className="text-[#151719]/70">Essential GRC features</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="w-5 h-5 text-[#CFE928] flex-shrink-0 mt-0.5" />
                      <span className="text-[#151719]/70">24/7 cloud access</span>
                    </li>
                  </ul>
                  <button className="w-full bg-[#9FCFD3] text-[#151719] py-3 rounded-lg hover:bg-[#9FCFD3]/80 transition-all">
                    Learn More
                  </button>
                </div>
              </div>

              {/* Small to Medium - Custom */}
              <div className="bg-[#E6E6E6] rounded-xl overflow-hidden hover:shadow-2xl transition-all group border-2 border-[#CFE928]">
                <div className="relative h-48 overflow-hidden">
                  <ImageWithFallback
                    src="https://images.unsplash.com/photo-1601058660898-82c168404c88?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtZWRpdW0lMjBidXNpbmVzcyUyMG9mZmljZXxlbnwxfHx8fDE3NjI3OTc3NTd8MA&ixlib=rb-4.1.0&q=80&w=1080"
                    alt="Medium Business Solution"
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute top-4 right-4 bg-[#CFE928] text-[#151719] px-4 py-2 rounded-full">
                    Popular
                  </div>
                </div>
                <div className="p-8">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-12 h-12 bg-[#CFE928] rounded-lg flex items-center justify-center">
                      <Users className="w-6 h-6 text-[#151719]" />
                    </div>
                    <h3 className="text-[#151719]">Small to Medium</h3>
                  </div>
                  <p className="text-[#151719]/70 mb-6">
                    Semi-customized solution for growing businesses that need tailored features and workflows to match their specific requirements.
                  </p>
                  <ul className="space-y-3 mb-8">
                    <li className="flex items-start gap-2">
                      <CheckCircle className="w-5 h-5 text-[#CFE928] flex-shrink-0 mt-0.5" />
                      <span className="text-[#151719]/70">Minor custom development</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="w-5 h-5 text-[#CFE928] flex-shrink-0 mt-0.5" />
                      <span className="text-[#151719]/70">Tailored workflows</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="w-5 h-5 text-[#CFE928] flex-shrink-0 mt-0.5" />
                      <span className="text-[#151719]/70">Priority support</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="w-5 h-5 text-[#CFE928] flex-shrink-0 mt-0.5" />
                      <span className="text-[#151719]/70">Integration assistance</span>
                    </li>
                  </ul>
                  <button 
                    onClick={scrollToPrototype}
                    className="w-full bg-[#CFE928] text-[#151719] py-3 rounded-lg hover:bg-[#CFE928]/90 transition-all"
                  >
                    Try Demo
                  </button>
                </div>
              </div>

              {/* Large Enterprise - Full Custom */}
              <div className="bg-[#E6E6E6] rounded-xl overflow-hidden hover:shadow-2xl transition-all group">
                <div className="relative h-48 overflow-hidden">
                  <ImageWithFallback
                    src="https://images.unsplash.com/photo-1590856225823-7ce81eea3bda?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsYXJnZSUyMGVudGVycHJpc2UlMjBjb3Jwb3JhdGV8ZW58MXx8fHwxNzYyNzk3NzU3fDA&ixlib=rb-4.1.0&q=80&w=1080"
                    alt="Enterprise Solution"
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute top-4 right-4 bg-[#9FCFD3] text-[#151719] px-4 py-2 rounded-full">
                    Enterprise
                  </div>
                </div>
                <div className="p-8">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-12 h-12 bg-[#9FCFD3] rounded-lg flex items-center justify-center">
                      <Building className="w-6 h-6 text-[#151719]" />
                    </div>
                    <h3 className="text-[#151719]">Large Enterprise</h3>
                  </div>
                  <p className="text-[#151719]/70 mb-6">
                    Fully customized enterprise solution with extensive development to meet complex organizational needs and compliance requirements.
                  </p>
                  <ul className="space-y-3 mb-8">
                    <li className="flex items-start gap-2">
                      <CheckCircle className="w-5 h-5 text-[#CFE928] flex-shrink-0 mt-0.5" />
                      <span className="text-[#151719]/70">Major custom development</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="w-5 h-5 text-[#CFE928] flex-shrink-0 mt-0.5" />
                      <span className="text-[#151719]/70">Dedicated support team</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="w-5 h-5 text-[#CFE928] flex-shrink-0 mt-0.5" />
                      <span className="text-[#151719]/70">On-premise or hybrid deployment</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="w-5 h-5 text-[#CFE928] flex-shrink-0 mt-0.5" />
                      <span className="text-[#151719]/70">Advanced integrations</span>
                    </li>
                  </ul>
                  <button className="w-full bg-[#9FCFD3] text-[#151719] py-3 rounded-lg hover:bg-[#9FCFD3]/80 transition-all">
                    Contact Sales
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SuperGRC Features Section */}
      <section className="py-20 bg-[#E6E6E6]">
        <div className="container mx-auto px-4">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="mb-6 text-[#151719]">
                Exclusive all-in-one solution like no other
              </h2>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {[
                { title: "System Onboarding Made Easy", desc: "Rapidly onboard any system, subsystem, network appliance, application, or vendor—seamlessly mapping your entire infrastructure.", color: "CFE928" },
                { title: "Universal Unique IDs for Total Visibility", desc: "Every component (app, server, vendor, etc.) receives a permanent, trackable identifier, powering end-to-end asset intelligence.", color: "9FCFD3" },
                { title: "Orphan Asset Discovery & Remediation", desc: "Instantly uncover and reclaim untracked servers, cloud zones, clusters, or appliances with automated scans and smart ITAM integrations.", color: "CFE928" },
                { title: "Predefined Data Element Classification", desc: "Effortlessly tag sensitive items (NPI, PII, privacy, network data) for compliance readiness out-of-the-box.", color: "9FCFD3" },
                { title: "Control Self-Questionnaire Engine", desc: "Empower teams to self-assess security controls and compliance posture directly within the platform.", color: "CFE928" },
                { title: "Role-Based Access Control (RBAC)", desc: "Granular permissions ensure only authorized users access the right features and assets.", color: "9FCFD3" },
                { title: "Privacy Compliance Made Simple", desc: "Built-in GDPR/CCPA privacy questionnaires help automate and simplify regulatory alignment.", color: "CFE928" },
                { title: "Risk Assessments – Upload and Manage", desc: "Centralized repository for uploading, organizing, and monitoring all risk assessments.", color: "9FCFD3" },
                { title: "Risk Control Matrix & Evidence Collection", desc: "Map controls to risks, collect supporting evidence, and drive audit preparation from a unified dashboard.", color: "CFE928" },
                { title: "Control Design Studio", desc: "Design and implement controls fit for your unique environment, tailor-made or using expert templates.", color: "9FCFD3" },
                { title: "Automated Issue Management", desc: "Instantly create, assign, track, and remediate findings—minimizing manual follow-up.", color: "CFE928" },
                { title: "Third-Party Risk Management", desc: "Monitor vendor and partner risks, automate questionnaires, and manage external dependencies seamlessly.", color: "9FCFD3" },
                { title: "AI-Powered Answer Generator", desc: "Speed up RFPs, questionnaires, and client communications with instant, context-aware AI assistance.", color: "CFE928" },
                { title: "Optional Legal Holds", desc: "Enforce data preservation on demand for investigations, audits, or litigation.", color: "9FCFD3" },
                { title: "Flexible Data Retention Policies", desc: "Configure and automate data lifecycle rules to meet regulatory needs.", color: "CFE928" },
                { title: "Availability Domains & DR Planning", desc: "Visualize and monitor redundancy, disaster recovery, backup completeness, and exercise results in one view.", color: "9FCFD3" },
                { title: "Business Impact Analysis Toolkit", desc: "Evaluate and quantify how assets, processes, and risks affect business criticality—driving smarter priorities.", color: "CFE928" },
                { title: "API Management Hub", desc: "Manage integrations, data flows, and developer access with robust API controls.", color: "9FCFD3" },
                { title: "Deep Integrations Across Layers", desc: "Connect instantly to ITAMs, asset inventories, application scanners, database/middleware posture, and OS-level insights.", color: "CFE928" },
                { title: "Risk Appetite Dashboard", desc: "Quantify risk across every layer (application, database, middleware, network, OS) to align with enterprise tolerances.", color: "9FCFD3" },
                { title: "Built-In Enforcement Mechanisms", desc: "Proactively block risky or non-compliant activity with embedded enforcement tools—reduce manual intervention.", color: "CFE928" },
                { title: "Next-Gen Policy Management", desc: "AI-powered suggestions accelerate policy authoring, prevent gaps, and improve policy lifecycle management.", color: "9FCFD3" },
                { title: "AI Governance Module", desc: "Ensure ethical, secure, and compliant use of AI models and automated decision-making.", color: "CFE928" },
                { title: "Advanced Reporting Suite", desc: "Generate built-in and ad-hoc reports for any stakeholder—visualize trends, gaps, or audit results with one click.", color: "9FCFD3" },
                { title: "Formal Offboarding for All Assets", desc: "Ensure compliant, secure removal of systems, apps, and infrastructure components with end-to-end traceability.", color: "CFE928" },
              ].map((feature, index) => (
                <div key={index} className={`bg-white rounded-lg p-6 hover:shadow-xl transition-all border-2 border-[#${feature.color}]`}>
                  <h4 className="text-[#151719] mb-3">{feature.title}</h4>
                  <p className="text-[#151719]/70">{feature.desc}</p>
                </div>
              ))}
            </div>

            {/* Why SuperGRC Section */}
            <div className="mt-20 bg-gradient-to-br from-[#CFE928]/20 to-[#9FCFD3]/20 rounded-2xl p-12 border-2 border-[#CFE928]">
              <h3 className="text-[#151719] mb-6 text-center">Why SuperGRC?</h3>
              <p className="text-[#151719] text-lg leading-relaxed text-center max-w-5xl mx-auto">
                SuperGRC transforms risk management from a check-the-box exercise into a dynamic, intelligent control layer for modern organizations. With deep automation, unique asset tracking, and robust AI features, SuperGRC helps you stay ahead of today's security, compliance, and operational challenges—no matter your infrastructure complexity.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-center mb-12 text-[#151719]">
              Why Choose Super GRC?
            </h2>
            
            <div className="grid sm:grid-cols-2 gap-6">
              <div className="flex gap-4">
                <CheckCircle className="w-6 h-6 text-[#CFE928] flex-shrink-0 mt-1" />
                <div>
                  <h4 className="mb-2 text-[#151719]">Intuitive Navigation</h4>
                  <p className="text-[#151719]/70">User-friendly interface designed for ease of use</p>
                </div>
              </div>

              <div className="flex gap-4">
                <CheckCircle className="w-6 h-6 text-[#CFE928] flex-shrink-0 mt-1" />
                <div>
                  <h4 className="mb-2 text-[#151719]">Intelligent Automation</h4>
                  <p className="text-[#151719]/70">Streamline operations with smart automation</p>
                </div>
              </div>

              <div className="flex gap-4">
                <CheckCircle className="w-6 h-6 text-[#CFE928] flex-shrink-0 mt-1" />
                <div>
                  <h4 className="mb-2 text-[#151719]">Single Ecosystem</h4>
                  <p className="text-[#151719]/70">All tools interconnected in one platform</p>
                </div>
              </div>

              <div className="flex gap-4">
                <CheckCircle className="w-6 h-6 text-[#CFE928] flex-shrink-0 mt-1" />
                <div>
                  <h4 className="mb-2 text-[#151719]">SME Focused</h4>
                  <p className="text-[#151719]/70">Tailored for small to medium enterprises</p>
                </div>
              </div>

              <div className="flex gap-4">
                <CheckCircle className="w-6 h-6 text-[#CFE928] flex-shrink-0 mt-1" />
                <div>
                  <h4 className="mb-2 text-[#151719]">Asset Management</h4>
                  <p className="text-[#151719]/70">Comprehensive discovery and tracking</p>
                </div>
              </div>

              <div className="flex gap-4">
                <CheckCircle className="w-6 h-6 text-[#CFE928] flex-shrink-0 mt-1" />
                <div>
                  <h4 className="mb-2 text-[#151719]">Proactive Approach</h4>
                  <p className="text-[#151719]/70">Stay ahead of threats with predictive insights</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Branded CTA Section */}
      <section className="py-20 bg-[#9FCFD3] relative overflow-hidden">
        <div className="absolute inset-0 opacity-5">
          <div className="absolute inset-0" style={{
            backgroundImage: 'linear-gradient(45deg, #151719 25%, transparent 25%, transparent 75%, #151719 75%, #151719), linear-gradient(45deg, #151719 25%, transparent 25%, transparent 75%, #151719 75%, #151719)',
            backgroundSize: '60px 60px',
            backgroundPosition: '0 0, 30px 30px'
          }} />
        </div>
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-[#151719] mb-6">
              Transform Your Approach to Risk Management
            </h2>
            <p className="text-xl text-[#151719]/80 mb-8">
              Join us in building a proactive future in cybersecurity. Make the switch to Super GRC today!
            </p>
            <button 
              onClick={scrollToPrototype}
              className="bg-[#CFE928] text-[#151719] px-10 py-4 rounded-lg hover:bg-[#CFE928]/90 transition-all shadow-xl"
            >
              Request a Demo
            </button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-[#151719] text-[#E6E6E6] py-12 border-t border-[#9FCFD3]/20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <div className="mb-6">
              <h3 className="text-3xl text-[#CFE928]" style={{ fontFamily: 'Pragati Narrow, sans-serif', fontWeight: 700 }}>
                Super GRC
              </h3>
              <p className="text-[#9FCFD3] mt-2">Engineered for Security</p>
            </div>
            <p className="text-[#9FCFD3] mb-6">
              Super GRC is created by and for Cybersecurity Practitioners
            </p>
            <p className="text-[#E6E6E6]/50 text-sm">
              © 2025 Super GRC. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}