import { Building2, Users, TrendingUp, CheckCircle, Quote } from 'lucide-react';

export interface CaseStudyData {
  id: string;
  title: string;
  subtitle: string;
  client: {
    name: string;
    industry: string;
    size: string;
    logo?: string;
  };
  challenge: string;
  solution: string[];
  results: {
    metric: string;
    value: string;
    description: string;
  }[];
  testimonial: {
    quote: string;
    author: string;
    role: string;
    avatar?: string;
  };
  featuredImage?: string;
  technologies: string[];
  timeline: string;
  slug: string;
}

interface CaseStudyProps {
  caseStudy: CaseStudyData;
}

export function CaseStudy({ caseStudy }: CaseStudyProps) {
  return (
    <div className="min-h-screen bg-[#E6E6E6] py-16 md:py-20">
      <div className="container mx-auto px-4 max-w-6xl">
        {/* Header */}
        <header className="text-center mb-12">
          <div className="mb-6">
            <span className="bg-[#CFE928] text-[#151719] px-4 py-2 rounded-full text-sm" style={{ fontFamily: 'Pragmatica Bold, sans-serif' }}>
              Case Study
            </span>
          </div>
          
          <h1 className="text-3xl md:text-5xl lg:text-6xl text-[#151719] mb-4" style={{ fontFamily: 'Pragmatica Bold, sans-serif' }}>
            {caseStudy.title}
          </h1>
          
          <p className="text-xl text-[#151719]/70 max-w-3xl mx-auto" style={{ fontFamily: 'Pragmatica, sans-serif' }}>
            {caseStudy.subtitle}
          </p>
        </header>

        {/* Client Overview */}
        <div className="bg-white rounded-xl shadow-lg p-8 md:p-12 mb-8">
          <div className="flex flex-col md:flex-row md:items-center gap-6 md:gap-8">
            {caseStudy.client.logo && (
              <div className="flex-shrink-0">
                <img
                  src={caseStudy.client.logo}
                  alt={caseStudy.client.name}
                  className="h-20 w-auto"
                  loading="eager"
                />
              </div>
            )}
            
            <div className="flex-1 grid md:grid-cols-3 gap-6">
              <div className="flex items-start gap-3">
                <Building2 className="w-6 h-6 text-[#CFE928] flex-shrink-0 mt-1" />
                <div>
                  <p className="text-sm text-[#151719]/60 mb-1" style={{ fontFamily: 'Pragmatica, sans-serif' }}>Company</p>
                  <p className="text-[#151719]" style={{ fontFamily: 'Pragmatica Bold, sans-serif' }}>{caseStudy.client.name}</p>
                </div>
              </div>
              
              <div className="flex items-start gap-3">
                <Users className="w-6 h-6 text-[#CFE928] flex-shrink-0 mt-1" />
                <div>
                  <p className="text-sm text-[#151719]/60 mb-1" style={{ fontFamily: 'Pragmatica, sans-serif' }}>Industry</p>
                  <p className="text-[#151719]" style={{ fontFamily: 'Pragmatica Bold, sans-serif' }}>{caseStudy.client.industry}</p>
                </div>
              </div>
              
              <div className="flex items-start gap-3">
                <TrendingUp className="w-6 h-6 text-[#CFE928] flex-shrink-0 mt-1" />
                <div>
                  <p className="text-sm text-[#151719]/60 mb-1" style={{ fontFamily: 'Pragmatica, sans-serif' }}>Company Size</p>
                  <p className="text-[#151719]" style={{ fontFamily: 'Pragmatica Bold, sans-serif' }}>{caseStudy.client.size}</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Featured Image */}
        {caseStudy.featuredImage && (
          <div className="rounded-xl overflow-hidden shadow-2xl mb-8">
            <img
              src={caseStudy.featuredImage}
              alt={caseStudy.title}
              className="w-full h-auto"
              loading="eager"
            />
          </div>
        )}

        {/* Challenge */}
        <div className="bg-white rounded-xl shadow-lg p-8 md:p-12 mb-8">
          <h2 className="text-3xl text-[#151719] mb-6" style={{ fontFamily: 'Pragmatica Bold, sans-serif' }}>
            The Challenge
          </h2>
          <p className="text-lg text-[#151719]/80 leading-relaxed" style={{ fontFamily: 'Pragmatica, sans-serif' }}>
            {caseStudy.challenge}
          </p>
        </div>

        {/* Solution */}
        <div className="bg-white rounded-xl shadow-lg p-8 md:p-12 mb-8">
          <h2 className="text-3xl text-[#151719] mb-6" style={{ fontFamily: 'Pragmatica Bold, sans-serif' }}>
            The Solution
          </h2>
          <div className="space-y-4">
            {caseStudy.solution.map((point, index) => (
              <div key={index} className="flex items-start gap-4">
                <CheckCircle className="w-6 h-6 text-[#CFE928] flex-shrink-0 mt-1" />
                <p className="text-lg text-[#151719]/80 leading-relaxed" style={{ fontFamily: 'Pragmatica, sans-serif' }}>
                  {point}
                </p>
              </div>
            ))}
          </div>
          
          {/* Technologies Used */}
          {caseStudy.technologies.length > 0 && (
            <div className="mt-8 pt-8 border-t border-[#151719]/10">
              <h3 className="text-xl text-[#151719] mb-4" style={{ fontFamily: 'Pragmatica Bold, sans-serif' }}>
                Technologies & Frameworks
              </h3>
              <div className="flex flex-wrap gap-3">
                {caseStudy.technologies.map((tech, index) => (
                  <span
                    key={index}
                    className="bg-[#CFE928]/20 text-[#151719] px-4 py-2 rounded-lg"
                    style={{ fontFamily: 'Pragmatica, sans-serif' }}
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          )}
        </div>

        {/* Results */}
        <div className="bg-gradient-to-br from-[#CFE928] to-[#9FCFD3] rounded-xl shadow-2xl p-8 md:p-12 mb-8">
          <h2 className="text-3xl text-[#151719] mb-8 text-center" style={{ fontFamily: 'Pragmatica Bold, sans-serif' }}>
            The Results
          </h2>
          
          <div className="grid md:grid-cols-3 gap-6 md:gap-8">
            {caseStudy.results.map((result, index) => (
              <div key={index} className="bg-white/90 backdrop-blur rounded-xl p-6 text-center">
                <div className="text-4xl md:text-5xl text-[#151719] mb-2" style={{ fontFamily: 'Pragmatica Bold, sans-serif' }}>
                  {result.value}
                </div>
                <div className="text-xl text-[#151719] mb-2" style={{ fontFamily: 'Pragmatica Bold, sans-serif' }}>
                  {result.metric}
                </div>
                <p className="text-[#151719]/70" style={{ fontFamily: 'Pragmatica, sans-serif' }}>
                  {result.description}
                </p>
              </div>
            ))}
          </div>
          
          <div className="mt-8 text-center">
            <p className="text-[#151719]/80 text-lg" style={{ fontFamily: 'Pragmatica, sans-serif' }}>
              Timeline: <span style={{ fontFamily: 'Pragmatica Bold, sans-serif' }}>{caseStudy.timeline}</span>
            </p>
          </div>
        </div>

        {/* Testimonial */}
        <div className="bg-[#151719] rounded-xl shadow-2xl p-8 md:p-12 relative overflow-hidden">
          <Quote className="absolute top-8 right-8 w-20 h-20 text-[#CFE928]/20" />
          
          <div className="relative z-10">
            <p className="text-xl md:text-2xl text-white mb-8 leading-relaxed italic" style={{ fontFamily: 'Pragmatica, sans-serif' }}>
              "{caseStudy.testimonial.quote}"
            </p>
            
            <div className="flex items-center gap-4">
              {caseStudy.testimonial.avatar && (
                <img
                  src={caseStudy.testimonial.avatar}
                  alt={caseStudy.testimonial.author}
                  className="w-16 h-16 rounded-full border-2 border-[#CFE928]"
                  loading="lazy"
                />
              )}
              <div>
                <p className="text-white text-lg" style={{ fontFamily: 'Pragmatica Bold, sans-serif' }}>
                  {caseStudy.testimonial.author}
                </p>
                <p className="text-[#CFE928]" style={{ fontFamily: 'Pragmatica, sans-serif' }}>
                  {caseStudy.testimonial.role}
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* CTA */}
        <div className="bg-white rounded-xl shadow-lg p-8 md:p-12 mt-8 text-center">
          <h3 className="text-2xl md:text-3xl text-[#151719] mb-4" style={{ fontFamily: 'Pragmatica Bold, sans-serif' }}>
            Ready for Similar Results?
          </h3>
          <p className="text-[#151719]/70 mb-6 text-lg" style={{ fontFamily: 'Pragmatica, sans-serif' }}>
            See how Super GRC can transform your organization's risk and compliance operations.
          </p>
          <button
            onClick={() => {
              document.getElementById('demo')?.scrollIntoView({ behavior: 'smooth' });
            }}
            className="bg-[#CFE928] text-[#151719] px-8 py-4 rounded-lg hover:bg-[#CFE928]/90 transition-all shadow-lg"
            style={{ fontFamily: 'Pragmatica Bold, sans-serif' }}
          >
            Request a Demo
          </button>
        </div>
      </div>
    </div>
  );
}

// Sample case study data
export const sampleCaseStudy: CaseStudyData = {
  id: '1',
  title: 'How TechCorp Achieved SOC 2 Compliance in 90 Days',
  subtitle: 'Streamlining compliance operations and reducing audit time by 70%',
  client: {
    name: 'TechCorp Solutions',
    industry: 'Financial Technology',
    size: '500-1000 employees',
    logo: 'https://images.unsplash.com/photo-1599305445671-ac291c95aaa9?w=200'
  },
  challenge: 'TechCorp was struggling with manual compliance processes, scattered documentation, and no centralized system for tracking controls. With aggressive growth targets and enterprise clients requiring SOC 2 certification, they needed a solution fast. Their legacy approach would have taken 12+ months and required 3 full-time employees.',
  solution: [
    'Implemented Super GRC platform with automated asset discovery across all cloud and on-premise infrastructure',
    'Mapped existing controls to SOC 2 Trust Service Criteria using AI-powered suggestions',
    'Automated evidence collection and continuous monitoring for 150+ controls',
    'Integrated with existing tools (AWS, Azure, GitHub, Jira) for real-time compliance tracking',
    'Established automated workflows for control testing and remediation',
    'Created centralized audit-ready documentation repository'
  ],
  results: [
    {
      metric: 'Time to Compliance',
      value: '90 Days',
      description: 'Achieved SOC 2 Type 1 certification'
    },
    {
      metric: 'Audit Time Reduced',
      value: '70%',
      description: 'From 6 weeks to under 2 weeks'
    },
    {
      metric: 'Cost Savings',
      value: '$400K',
      description: 'Annual compliance overhead reduction'
    }
  ],
  testimonial: {
    quote: 'Super GRC transformed how we approach compliance. What would have taken us over a year was completed in 90 days. The automation and AI-powered insights saved us countless hours and gave us confidence going into our SOC 2 audit.',
    author: 'David Martinez',
    role: 'CISO, TechCorp Solutions',
    avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100'
  },
  featuredImage: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=1200',
  technologies: ['SOC 2', 'AWS', 'Azure', 'GitHub', 'Jira', 'Slack'],
  timeline: '90 days from start to SOC 2 Type 1 certification',
  slug: 'techcorp-soc2-compliance-90-days'
};
