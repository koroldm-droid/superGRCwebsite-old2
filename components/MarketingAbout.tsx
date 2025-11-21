import { Shield, Lock, FileCheck, Sparkles } from "lucide-react";
import wingsImage from 'figma:asset/eee5e4a4c7ecebfdb1ad5ee3f0cfe3e40233620e.png';

export function MarketingAbout() {
  return (
    <section 
      id="about" 
      className="py-16 md:py-32 bg-gradient-to-b from-[#E6E6E6] to-white relative overflow-hidden"
    >
      {/* Animated Flying Wings Background with Parallax Effect - Hidden on Mobile */}
      <div 
        className="hidden md:block absolute inset-0 animate-fly opacity-40"
        style={{
          backgroundImage: `url(${wingsImage})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
          filter: 'blur(1px)'
        }}
      ></div>
      
      {/* Gradient Overlay for Depth */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#E6E6E6]/60 to-white/95"></div>
      
      {/* Decorative Elements */}
      <div className="absolute top-20 left-10 w-48 md:w-72 h-48 md:h-72 bg-[#CFE928]/10 rounded-full blur-3xl animate-float"></div>
      <div className="absolute bottom-20 right-10 w-64 md:w-96 h-64 md:h-96 bg-[#9FCFD3]/10 rounded-full blur-3xl animate-float" style={{ animationDelay: '2s' }}></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-6xl mx-auto">
          {/* Header Section */}
          <div className="text-center mb-12 md:mb-16">
            <h2 className="mb-4 md:mb-6 text-3xl md:text-5xl lg:text-6xl text-[#151719] bg-clip-text" style={{ fontFamily: 'Pragmatica Bold, sans-serif' }}>
              All-In-One Security Solution
            </h2>
            
            <p className="text-base md:text-xl text-[#151719]/70 leading-relaxed max-w-3xl mx-auto px-4" style={{ fontFamily: 'Pragmatica, sans-serif' }}>
              Super GRC simplifies and accelerates security operations with intuitive navigation and 
              intelligent automation. Discover and manage your assets, compliance, and cybersecurity risk assessments 
              seamlessly within a single interconnected ecosystem. Best risk management software with automated asset discovery.
            </p>
          </div>

          {/* Enhanced Features Grid */}
          <div className="grid md:grid-cols-3 gap-6 md:gap-8">
            {/* Governance Card */}
            <div className="group relative bg-white/70 backdrop-blur-md rounded-2xl p-8 hover:bg-white transition-all duration-500 border border-[#9FCFD3]/30 hover:border-[#9FCFD3] hover:shadow-2xl hover:shadow-[#9FCFD3]/20 hover:-translate-y-2">
              {/* Shimmer Effect on Hover */}
              <div className="absolute inset-0 rounded-2xl overflow-hidden opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                <div className="animate-shimmer absolute inset-0"></div>
              </div>
              
              <div className="relative">
                <div className="flex md:flex-col items-center md:items-start gap-3 md:gap-0">
                  <div className="w-12 h-12 md:w-16 md:h-16 bg-gradient-to-br from-[#9FCFD3] to-[#9FCFD3]/60 rounded-2xl flex items-center justify-center md:mb-6 group-hover:scale-110 group-hover:rotate-3 transition-transform duration-500 shadow-lg shadow-[#9FCFD3]/30 flex-shrink-0">
                    <Shield className="w-6 h-6 md:w-8 md:h-8 text-white" strokeWidth={2.5} />
                  </div>
                  
                  <h3 className="text-[#151719]" style={{ fontFamily: 'Pragmatica Bold, sans-serif' }}>
                    Governance
                  </h3>
                </div>
                
                <p className="text-[#151719]/70 leading-relaxed mt-3 md:mt-0" style={{ fontFamily: 'Pragmatica, sans-serif' }}>
                  Establish and maintain robust cybersecurity governance frameworks with automated policy management.
                </p>
                
                {/* Decorative Bottom Border */}
                <div className="absolute bottom-0 left-0 h-1 w-0 bg-gradient-to-r from-[#9FCFD3] to-transparent group-hover:w-full transition-all duration-500"></div>
              </div>
            </div>

            {/* Risk Management Card - Featured */}
            <div className="group relative bg-gradient-to-br from-white to-[#CFE928]/5 backdrop-blur-md rounded-2xl p-8 hover:from-white hover:to-[#CFE928]/10 transition-all duration-500 border-2 border-[#CFE928]/50 hover:border-[#CFE928] hover:shadow-2xl hover:shadow-[#CFE928]/30 hover:-translate-y-2 md:-translate-y-3">
              {/* Shimmer Effect on Hover */}
              <div className="absolute inset-0 rounded-2xl overflow-hidden opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                <div className="animate-shimmer absolute inset-0"></div>
              </div>
              
              {/* Featured Badge */}
              <div className="absolute -top-3 -right-3 bg-[#CFE928] text-[#151719] px-3 py-1 rounded-full text-xs shadow-lg" style={{ fontFamily: 'Pragmatica Bold, sans-serif' }}>
                Core Feature
              </div>
              
              <div className="relative">
                <div className="flex md:flex-col items-center md:items-start gap-3 md:gap-0">
                  <div className="w-12 h-12 md:w-16 md:h-16 bg-gradient-to-br from-[#CFE928] to-[#CFE928]/60 rounded-2xl flex items-center justify-center md:mb-6 group-hover:scale-110 group-hover:rotate-3 transition-transform duration-500 shadow-lg shadow-[#CFE928]/40 flex-shrink-0">
                    <Lock className="w-6 h-6 md:w-8 md:h-8 text-[#151719]" strokeWidth={2.5} />
                  </div>
                  
                  <h3 className="text-[#151719]" style={{ fontFamily: 'Pragmatica Bold, sans-serif' }}>
                    Risk Management
                  </h3>
                </div>
                
                <p className="text-[#151719]/70 leading-relaxed mt-3 md:mt-0" style={{ fontFamily: 'Pragmatica, sans-serif' }}>
                  Discover, assess, and manage risks with intelligent automation, integrated discovery and real-time monitoring.
                </p>
                
                {/* Decorative Bottom Border */}
                <div className="absolute bottom-0 left-0 h-1 w-0 bg-gradient-to-r from-[#CFE928] to-transparent group-hover:w-full transition-all duration-500"></div>
              </div>
            </div>

            {/* Compliance Card */}
            <div className="group relative bg-white/70 backdrop-blur-md rounded-2xl p-8 hover:bg-white transition-all duration-500 border border-[#9FCFD3]/30 hover:border-[#9FCFD3] hover:shadow-2xl hover:shadow-[#9FCFD3]/20 hover:-translate-y-2">
              {/* Shimmer Effect on Hover */}
              <div className="absolute inset-0 rounded-2xl overflow-hidden opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                <div className="animate-shimmer absolute inset-0"></div>
              </div>
              
              <div className="relative">
                <div className="flex md:flex-col items-center md:items-start gap-3 md:gap-0">
                  <div className="w-12 h-12 md:w-16 md:h-16 bg-gradient-to-br from-[#9FCFD3] to-[#9FCFD3]/60 rounded-2xl flex items-center justify-center md:mb-6 group-hover:scale-110 group-hover:rotate-3 transition-transform duration-500 shadow-lg shadow-[#9FCFD3]/30 flex-shrink-0">
                    <FileCheck className="w-6 h-6 md:w-8 md:h-8 text-white" strokeWidth={2.5} />
                  </div>
                  
                  <h3 className="text-[#151719]" style={{ fontFamily: 'Pragmatica Bold, sans-serif' }}>
                    Compliance
                  </h3>
                </div>
                
                <p className="text-[#151719]/70 leading-relaxed mt-3 md:mt-0" style={{ fontFamily: 'Pragmatica, sans-serif' }}>
                  Stay compliant with industry standards and regulations through automated tracking and reporting.
                </p>
                
                {/* Decorative Bottom Border */}
                <div className="absolute bottom-0 left-0 h-1 w-0 bg-gradient-to-r from-[#9FCFD3] to-transparent group-hover:w-full transition-all duration-500"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}