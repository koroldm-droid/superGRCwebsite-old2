import { useState } from 'react';
import { 
  Shield, FileText, Workflow, BarChart, CheckCircle, Users, 
  Server, Database, Lock, FileSearch, Brain, Cloud, 
  AlertTriangle, Network, Settings, Zap, Target, FileCheck,
  GitBranch, Layers, Activity, Clock, Sparkles, TrendingUp, ChevronDown
} from "lucide-react";

export function MarketingFeatures() {
  const [activeCategory, setActiveCategory] = useState('all');
  const [showAllFeatures, setShowAllFeatures] = useState(false);

  const features = [
    { 
      title: "System Onboarding Made Easy", 
      desc: "Rapidly onboard any system, subsystem, network appliance, application, or vendor—seamlessly mapping your entire infrastructure.", 
      icon: Server,
      category: "asset-management"
    },
    { 
      title: "Universal Unique IDs for Total Visibility", 
      desc: "Every component (app, server, vendor, etc.) receives a permanent, trackable identifier, powering end-to-end asset intelligence.", 
      icon: FileSearch,
      category: "asset-management"
    },
    { 
      title: "Orphan Asset Discovery & Remediation", 
      desc: "Instantly uncover and reclaim untracked servers, cloud zones, clusters, or appliances with automated scans and smart ITAM integrations.", 
      icon: Network,
      category: "asset-management"
    },
    { 
      title: "Predefined Data Element Classification", 
      desc: "Effortlessly tag sensitive items (NPI, PII, privacy, network data) for compliance readiness out-of-the-box.", 
      icon: Database,
      category: "compliance"
    },
    { 
      title: "Control Self-Questionnaire Engine", 
      desc: "Empower teams to self-assess security controls and compliance posture directly within the platform.", 
      icon: FileCheck,
      category: "compliance"
    },
    { 
      title: "Role-Based Access Control (RBAC)", 
      desc: "Granular permissions ensure only authorized users access the right features and assets.", 
      icon: Lock,
      category: "security"
    },
    { 
      title: "Privacy Compliance Made Simple", 
      desc: "Built-in GDPR/CCPA privacy questionnaires help automate and simplify regulatory alignment.", 
      icon: Shield,
      category: "compliance"
    },
    { 
      title: "Risk Assessments – Upload and Manage", 
      desc: "Centralized repository for uploading, organizing, and monitoring all risk assessments.", 
      icon: AlertTriangle,
      category: "risk-management"
    },
    { 
      title: "Risk Control Matrix & Evidence Collection", 
      desc: "Map controls to risks, collect supporting evidence, and drive audit preparation from a unified dashboard.", 
      icon: Layers,
      category: "risk-management"
    },
    { 
      title: "Control Design Studio", 
      desc: "Design and implement controls fit for your unique environment, tailor-made or using expert templates.", 
      icon: Settings,
      category: "security"
    },
    { 
      title: "Automated Issue Management", 
      desc: "Instantly create, assign, track, and remediate findings—minimizing manual follow-up.", 
      icon: Zap,
      category: "automation"
    },
    { 
      title: "Third-Party Risk Management", 
      desc: "Monitor vendor and partner risks, automate questionnaires, and manage external dependencies seamlessly.", 
      icon: Users,
      category: "risk-management"
    },
    { 
      title: "AI-Powered Intelligence & Governance", 
      desc: "Speed up RFPs and questionnaires with instant, context-aware AI assistance while ensuring ethical, secure, and compliant use of AI models and automated decision-making.", 
      icon: Brain,
      category: "ai-automation"
    },
    { 
      title: "Optional Legal Holds", 
      desc: "Enforce data preservation on demand for investigations, audits, or litigation.", 
      icon: FileText,
      category: "compliance"
    },
    { 
      title: "Flexible Data Retention Policies", 
      desc: "Configure and automate data lifecycle rules to meet regulatory needs.", 
      icon: Clock,
      category: "compliance"
    },
    { 
      title: "Availability Domains & DR Planning", 
      desc: "Visualize and monitor redundancy, disaster recovery, backup completeness, and exercise results in one view.", 
      icon: Cloud,
      category: "business-continuity"
    },
    { 
      title: "Business Impact Analysis Toolkit", 
      desc: "Evaluate and quantify how assets, processes, and risks affect business criticality—driving smarter priorities.", 
      icon: Target,
      category: "business-continuity"
    },
    { 
      title: "API Management Hub", 
      desc: "Manage integrations, data flows, and developer access with robust API controls.", 
      icon: GitBranch,
      category: "automation"
    },
    { 
      title: "Deep Integrations Across Layers", 
      desc: "Connect instantly to ITAMs, asset inventories, application scanners, database/middleware posture, and OS-level insights.", 
      icon: Workflow,
      category: "automation"
    },
    { 
      title: "Risk Appetite Dashboard", 
      desc: "Quantify risk across every layer (application, database, middleware, network, OS) to align with enterprise tolerances.", 
      icon: BarChart,
      category: "risk-management"
    },
    { 
      title: "Built-In Enforcement Mechanisms", 
      desc: "Proactively block risky or non-compliant activity with embedded enforcement tools—reduce manual intervention.", 
      icon: Shield,
      category: "security"
    },
    { 
      title: "Next-Gen Policy Management", 
      desc: "AI-powered suggestions accelerate policy authoring, prevent gaps, and improve policy lifecycle management.", 
      icon: Sparkles,
      category: "ai-automation"
    },
    { 
      title: "Advanced Reporting Suite", 
      desc: "Generate built-in and ad-hoc reports for any stakeholder—visualize trends, gaps, or audit results with one click.", 
      icon: TrendingUp,
      category: "automation"
    },
    { 
      title: "Formal Offboarding for All Assets", 
      desc: "Ensure compliant, secure removal of systems, apps, and infrastructure components with end-to-end traceability.", 
      icon: Activity,
      category: "asset-management"
    },
  ];

  const categories = [
    { id: 'all', label: 'All Features', count: features.length },
    { id: 'asset-management', label: 'Asset Management', count: features.filter(f => f.category === 'asset-management').length },
    { id: 'compliance', label: 'Compliance', count: features.filter(f => f.category === 'compliance').length },
    { id: 'risk-management', label: 'Risk Management', count: features.filter(f => f.category === 'risk-management').length },
    { id: 'security', label: 'Security', count: features.filter(f => f.category === 'security').length },
    { id: 'automation', label: 'Automation', count: features.filter(f => f.category === 'automation').length },
    { id: 'ai-automation', label: 'AI & Intelligence', count: features.filter(f => f.category === 'ai-automation').length },
    { id: 'business-continuity', label: 'Business Continuity', mobileLabel: 'Availability', count: features.filter(f => f.category === 'business-continuity').length },
  ];

  const filteredFeatures = activeCategory === 'all' 
    ? features 
    : features.filter(f => f.category === activeCategory);
  
  // For mobile: show only 3 features initially, then show all on button click
  const mobileFeaturesToShow = showAllFeatures ? filteredFeatures : filteredFeatures.slice(0, 3);

  const stats = [
    { value: "24+", label: "Enterprise Features", icon: Sparkles },
    { value: "12+", label: "Compliance Frameworks", icon: Shield },
    { value: "100%", label: "Asset Coverage", icon: Target },
    { value: "24/7", label: "Automated Monitoring", icon: Activity },
  ];

  return (
    <>
      {/* SuperGRC Features Section */}
      <section id="features" className="py-12 md:py-20 bg-[#E6E6E6]">
        <div className="container mx-auto px-4">
          <div className="max-w-7xl mx-auto">
            {/* Header */}
            <div className="text-center mb-12 md:mb-16">
              <div className="inline-block px-4 md:px-6 py-2 bg-[#CFE928]/20 rounded-full mb-4">
                <span className="text-xs md:text-base text-[#151719]" style={{ fontFamily: 'Pragmatica Bold, sans-serif' }}>
                  Platform Capabilities
                </span>
              </div>
              <h2 className="mb-4 md:mb-6 text-2xl md:text-5xl lg:text-6xl text-[#151719] px-4" style={{ fontFamily: 'Pragmatica Bold, sans-serif' }}>
                Exclusive all-in-one solution like no other
              </h2>
              <p className="text-sm md:text-xl text-[#151719]/70 max-w-3xl mx-auto px-4" style={{ fontFamily: 'Pragmatica, sans-serif' }}>
                Comprehensive GRC platform with 24+ enterprise-grade features designed by cybersecurity practitioners for cybersecurity practitioners
              </p>
            </div>

            {/* Stats Section */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6 mb-12 md:mb-16">
              {stats.map((stat, index) => {
                const Icon = stat.icon;
                return (
                  <div 
                    key={index}
                    className="bg-white rounded-xl p-6 text-center hover:shadow-xl transition-all border-2 border-[#CFE928]/20 hover:border-[#CFE928] group"
                  >
                    <div className="w-12 h-12 bg-[#CFE928]/10 rounded-lg flex items-center justify-center mx-auto mb-3 group-hover:bg-[#CFE928]/20 transition-all">
                      <Icon className="w-6 h-6 text-[#151719]" />
                    </div>
                    <div className="text-3xl mb-2 text-[#151719] group-hover:text-[#CFE928] transition-colors" style={{ fontFamily: 'Pragmatica Bold, sans-serif' }}>
                      {stat.value}
                    </div>
                    <div className="text-sm text-[#151719]/70" style={{ fontFamily: 'Pragmatica, sans-serif' }}>
                      {stat.label}
                    </div>
                  </div>
                );
              })}
            </div>

            {/* Category Filter */}
            <div className="flex flex-wrap justify-center gap-2 md:gap-3 mb-8 md:mb-12">
              {categories.map((category) => (
                <button
                  key={category.id}
                  onClick={() => {
                    setActiveCategory(category.id);
                    setShowAllFeatures(false); // Reset when changing category
                  }}
                  className={`px-3 md:px-6 py-2 md:py-3 rounded-lg transition-all text-sm md:text-base ${
                    activeCategory === category.id
                      ? 'bg-[#CFE928] text-[#151719] shadow-lg scale-105'
                      : 'bg-white text-[#151719]/70 hover:bg-white/80 border border-[#151719]/10'
                  }`}
                  style={{ fontFamily: 'Pragmatica Bold, sans-serif' }}
                >
                  <span className="hidden sm:inline">{category.label}</span>
                  <span className="sm:hidden">{category.mobileLabel || category.label.split(' ')[0]}</span>
                  <span className={`ml-1 md:ml-2 px-1.5 md:px-2 py-0.5 rounded-full text-xs ${
                    activeCategory === category.id
                      ? 'bg-[#151719]/10'
                      : 'bg-[#CFE928]/20'
                  }`}>
                    {category.count}
                  </span>
                </button>
              ))}
            </div>

            {/* Features Grid - Desktop shows all, Mobile shows limited initially */}
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
              {/* Desktop: show all | Mobile: show limited or all based on state */}
              {(typeof window !== 'undefined' && window.innerWidth >= 768 ? filteredFeatures : mobileFeaturesToShow).map((feature, index) => {
                const Icon = feature.icon;
                const isLime = index % 2 === 0;
                return (
                  <div 
                    key={index} 
                    className={`bg-white rounded-xl p-5 md:p-6 hover:shadow-2xl transition-all duration-300 border-2 ${
                      isLime ? 'border-[#CFE928]/30' : 'border-[#9FCFD3]/30'
                    } hover:border-[#CFE928] group hover:-translate-y-1`}
                  >
                    <div className="flex items-center gap-2 md:gap-3 mb-2 md:mb-3">
                      <div className={`w-10 h-10 md:w-12 md:h-12 rounded-xl flex items-center justify-center ${
                        isLime ? 'bg-[#CFE928]/10' : 'bg-[#9FCFD3]/10'
                      } group-hover:bg-[#CFE928]/20 transition-all flex-shrink-0`}>
                        <Icon className="w-5 h-5 md:w-6 md:h-6 text-[#151719]" />
                      </div>
                      <h4 className="text-sm md:text-base text-[#151719] group-hover:text-[#151719] transition-colors" style={{ fontFamily: 'Pragmatica Bold, sans-serif' }}>
                        {feature.title}
                      </h4>
                    </div>
                    <p className="text-xs md:text-sm text-[#151719]/70 leading-relaxed" style={{ fontFamily: 'Pragmatica, sans-serif' }}>
                      {feature.desc}
                    </p>
                  </div>
                );
              })}
            </div>

            {/* Show More Button - Only on Mobile */}
            {!showAllFeatures && filteredFeatures.length > 3 && (
              <div className="md:hidden flex justify-center mt-8">
                <button
                  onClick={() => setShowAllFeatures(true)}
                  className="bg-[#CFE928] text-[#151719] px-8 py-3 rounded-lg hover:bg-[#CFE928]/90 transition-all shadow-lg flex items-center gap-2"
                  style={{ fontFamily: 'Pragmatica Bold, sans-serif' }}
                >
                  <span>Show {filteredFeatures.length - 3} More Features</span>
                  <ChevronDown className="w-5 h-5" />
                </button>
              </div>
            )}

            {/* Why SuperGRC Section */}
            <div className="mt-12 md:mt-20 bg-gradient-to-br from-[#CFE928]/10 via-[#9FCFD3]/5 to-[#CFE928]/10 rounded-2xl p-6 md:p-12 border-2 border-[#CFE928]/30 relative overflow-hidden">
              <div className="absolute top-0 right-0 w-64 h-64 bg-[#9FCFD3]/5 rounded-full blur-3xl"></div>
              <div className="absolute bottom-0 left-0 w-64 h-64 bg-[#CFE928]/5 rounded-full blur-3xl"></div>
              
              <div className="relative z-10">
                <div className="flex items-center justify-center gap-2 md:gap-3 mb-4 md:mb-6">
                  <Sparkles className="w-6 h-6 md:w-8 md:h-8 text-[#CFE928]" />
                  <h3 className="text-xl md:text-3xl lg:text-4xl text-[#151719] text-center" style={{ fontFamily: 'Pragmatica Bold, sans-serif' }}>
                    Why SuperGRC?
                  </h3>
                  <Sparkles className="w-6 h-6 md:w-8 md:h-8 text-[#CFE928]" />
                </div>
                <p className="text-sm md:text-lg text-[#151719] leading-relaxed text-center max-w-5xl mx-auto" style={{ fontFamily: 'Pragmatica, sans-serif' }}>
                  SuperGRC transforms risk management from a check-the-box exercise into a dynamic, intelligent control layer for modern organizations. With deep automation, unique asset tracking, and robust AI features, SuperGRC helps you stay ahead of today's security, compliance, and operational challenges—no matter your infrastructure complexity.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Section */}
      <section className="py-12 md:py-20 bg-gradient-to-b from-white to-[#E6E6E6]/30">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-8 md:mb-16">
              <h2 className="mb-6 text-[#151719]" style={{ fontFamily: 'Pragmatica Bold, sans-serif' }}>
                Why Choose Super GRC?
              </h2>
              <p className="text-base md:text-xl text-[#151719]/70 max-w-3xl mx-auto px-4" style={{ fontFamily: 'Pragmatica, sans-serif' }}>
                Built from the ground up to solve real-world GRC challenges with enterprise-grade capabilities
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
              {[
                {
                  icon: Workflow,
                  title: "Intuitive Navigation",
                  desc: "User-friendly interface designed for ease of use and rapid adoption across teams"
                },
                {
                  icon: Zap,
                  title: "Intelligent Automation",
                  desc: "Streamline operations with smart automation that reduces manual work by 80%"
                },
                {
                  icon: Layers,
                  title: "Single Ecosystem",
                  desc: "All tools interconnected in one platform—no more context switching or data silos"
                },
                {
                  icon: Target,
                  title: "SME Focused",
                  desc: "Tailored for small to medium enterprises with scalable, flexible deployment options"
                },
                {
                  icon: Database,
                  title: "Asset Management",
                  desc: "Comprehensive discovery and tracking with universal unique IDs for total visibility"
                },
                {
                  icon: TrendingUp,
                  title: "Proactive Approach",
                  desc: "Stay ahead of threats with predictive insights and continuous monitoring"
                },
              ].map((item, index) => {
                const Icon = item.icon;
                return (
                  <div 
                    key={index}
                    className="bg-white rounded-xl p-4 md:p-8 hover:shadow-2xl transition-all duration-300 border border-[#151719]/5 hover:border-[#CFE928] group hover:-translate-y-1"
                  >
                    <div className="flex items-center gap-2 md:gap-4 mb-3 md:mb-5">
                      <div className="w-10 h-10 md:w-16 md:h-16 bg-gradient-to-br from-[#CFE928]/20 to-[#9FCFD3]/20 rounded-xl flex items-center justify-center group-hover:from-[#CFE928]/30 group-hover:to-[#9FCFD3]/30 transition-all flex-shrink-0">
                        <Icon className="w-5 h-5 md:w-8 md:h-8 text-[#151719]" />
                      </div>
                      <h4 className="text-sm md:text-lg text-[#151719]" style={{ fontFamily: 'Pragmatica Bold, sans-serif' }}>
                        {item.title}
                      </h4>
                    </div>
                    <p className="text-xs md:text-base text-[#151719]/70 leading-relaxed" style={{ fontFamily: 'Pragmatica, sans-serif' }}>
                      {item.desc}
                    </p>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* Branded CTA Section */}
      <section className="py-12 md:py-20 bg-[#151719] relative overflow-hidden">
        <div className="absolute inset-0 opacity-5">
          <div className="absolute inset-0" style={{
            backgroundImage: 'linear-gradient(45deg, #CFE928 25%, transparent 25%, transparent 75%, #CFE928 75%, #CFE928), linear-gradient(45deg, #CFE928 25%, transparent 25%, transparent 75%, #CFE928 75%, #CFE928)',
            backgroundSize: '60px 60px',
            backgroundPosition: '0 0, 30px 30px'
          }} />
        </div>
        
        <div className="absolute top-10 left-10 w-96 h-96 bg-[#CFE928]/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-10 right-10 w-96 h-96 bg-[#9FCFD3]/5 rounded-full blur-3xl"></div>
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 px-4 md:px-6 py-2 bg-[#CFE928]/10 rounded-full mb-4 md:mb-6">
              <Sparkles className="w-4 h-4 md:w-5 md:h-5 text-[#CFE928]" />
              <span className="text-sm md:text-base text-[#CFE928]" style={{ fontFamily: 'Pragmatica Bold, sans-serif' }}>
                Ready to Transform?
              </span>
            </div>
            <h2 className="text-2xl md:text-4xl lg:text-5xl text-[#E6E6E6] mb-4 md:mb-6 px-4" style={{ fontFamily: 'Pragmatica Bold, sans-serif' }}>
              Transform Your Approach to Risk Management
            </h2>
            <p className="text-base md:text-xl text-[#9FCFD3] mb-6 md:mb-8 leading-relaxed px-4" style={{ fontFamily: 'Pragmatica, sans-serif' }}>
              Join us in building a proactive future in cybersecurity. Make the switch to Super GRC today!
            </p>
            <a 
              href="#demo"
              className="bg-[#CFE928] text-[#151719] px-6 py-3 md:px-10 md:py-4 rounded-lg hover:bg-[#CFE928]/90 transition-all shadow-xl inline-block hover:scale-105 text-sm md:text-base"
              style={{ fontFamily: 'Pragmatica Bold, sans-serif' }}
            >
              Request a Demo
            </a>
          </div>
        </div>
      </section>
    </>
  );
}