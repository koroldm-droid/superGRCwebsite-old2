import { ArrowRight, Shield, CheckCircle2 } from "lucide-react";
import { useState } from "react";
import { Interactive3DOrb } from "./Interactive3DOrb";
import dashboardImage from 'figma:asset/3e5e83d7e429ac8276f75b54164bb0937b963cab.png';
import logoImage from 'figma:asset/9edb72c929dd34177eafe046c4cc8f06e28ed558.png';
import superGRCLogo from 'figma:asset/b0067d28fcbb91803c9f38ebfd6c6316d2947eaa.png';

export function MarketingHero() {
  const [imagePosition, setImagePosition] = useState({ x: 50, y: 50 });
  const [isZoomed, setIsZoomed] = useState(false);
  const [isLogoHovered, setIsLogoHovered] = useState(false);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = ((e.clientX - rect.left) / rect.width) * 100;
    const y = ((e.clientY - rect.top) / rect.height) * 100;
    setImagePosition({ x, y });
  };

  return (
    <section className="relative min-h-screen flex items-center overflow-hidden bg-gradient-to-b from-white via-[#CFE928]/5 to-white pt-16 md:pt-0" style={{ fontFamily: 'Pragmatica, sans-serif', WebkitTapHighlightColor: 'transparent' }}>
      {/* Subtle Background Pattern */}
      <div className="absolute inset-0 opacity-[0.02]">
        <div className="absolute inset-0" style={{
          backgroundImage: `radial-gradient(circle at 2px 2px, #151719 1px, transparent 0)`,
          backgroundSize: '40px 40px'
        }} />
      </div>
      
      {/* Gradient Accent - Top Right */}
      <div className="absolute top-0 right-0 w-[400px] md:w-[800px] h-[400px] md:h-[800px] bg-gradient-to-br from-[#CFE928]/10 via-[#9FCFD3]/5 to-transparent rounded-full blur-3xl pointer-events-none"></div>
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-2 md:py-12 lg:py-20 relative z-10">
        {/* Logo - Top Center - Responsive: Wings on Mobile, Full Logo on Desktop */}
        <div 
          className="flex justify-center mb-1.5 md:mb-12 lg:mb-16 relative cursor-pointer group"
          onMouseEnter={() => setIsLogoHovered(true)}
          onMouseLeave={() => setIsLogoHovered(false)}
        >
          {/* 3D Orb Background - Behind Logo - Interactive with hover */}
          <div className={`absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-0 scale-75 md:scale-90 transition-all duration-700 ${isLogoHovered ? 'opacity-100 scale-100 md:scale-110' : 'opacity-70'}`}>
            <Interactive3DOrb />
          </div>
          
          {/* Electric Lime Glow Effect on Hover */}
          <div className={`absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] rounded-full bg-[#CFE928]/20 blur-3xl transition-opacity duration-700 -z-10 ${isLogoHovered ? 'opacity-100' : 'opacity-0'}`}></div>
          
          {/* Mobile Logo - Wings Only */}
          <img 
            src={logoImage} 
            alt="Super GRC"
            className={`w-56 sm:w-64 md:hidden h-auto opacity-90 transition-all duration-500 relative z-10 ${isLogoHovered ? 'opacity-100 scale-105' : ''}`}
            loading="eager"
          />
          {/* Desktop Logo - Full Super GRC */}
          <img 
            src={superGRCLogo} 
            alt="Super GRC - Engineered for Security"
            className={`hidden md:block w-96 lg:w-[28rem] h-auto opacity-90 transition-all duration-500 relative z-10 ${isLogoHovered ? 'opacity-100 scale-105' : ''}`}
            loading="eager"
          />
        </div>
        
        {/* Main Content - Centered */}
        <div className="max-w-7xl mx-auto">
          {/* Headline Section */}
          <div className="text-center mb-8 md:mb-12 lg:mb-16 space-y-4 md:space-y-6">
            <h1 className="text-[#151719] tracking-tight" style={{ fontFamily: 'Pragmatica Bold, sans-serif' }}>
              <div className="text-3xl sm:text-4xl md:text-6xl lg:text-7xl xl:text-8xl mb-2 md:mb-4 leading-tight">
                Full Scope Cybersecurity
              </div>
              <div className="text-xl sm:text-2xl md:text-4xl lg:text-5xl xl:text-6xl text-[#151719]/70 leading-tight">
                Risk Management, Governance & Compliance
              </div>
            </h1>
            
            <div className="inline-flex items-center gap-2 px-3 md:px-4 py-2 bg-[#CFE928]/10 border border-[#CFE928]/30 rounded-full">
              <Shield className="w-3 h-3 md:w-4 md:h-4 text-[#151719]" />
              <span className="text-xs md:text-sm text-[#151719]" style={{ fontFamily: 'Pragmatica Bold, sans-serif' }}>
                Super GRC is created by and for Cybersecurity Practitioners
              </span>
            </div>
            
            <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-[#151719]/60 max-w-4xl mx-auto leading-relaxed px-4">
              Unify your entire GRC program in one intelligent platform. From SOC 2 to FedRAMP, 
              asset discovery to third-party risk management, from Data Elements to Manage APIs — Super GRC streamlines compliance for modern enterprises. 
              Available as SaaS or on-premise deployment. The best risk management software for cybersecurity teams.
            </p>
            
            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
              <a href="#demo" className="bg-[#CFE928] text-[#151719] px-6 md:px-8 py-3 md:py-4 rounded-xl hover:bg-[#CFE928]/90 hover:scale-105 transition-all shadow-lg flex items-center gap-3 group w-full sm:w-auto justify-center" style={{ fontFamily: 'Pragmatica Bold, sans-serif' }}>
                <span>Request Demo</span>
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </a>
            </div>
          </div>
          
          {/* Laptop Mockup */}
          <div className="max-w-6xl mx-auto">
            <div className="relative group">
              {/* Laptop Container */}
              <div className="relative bg-gradient-to-b from-[#2a2d31] to-[#1a1d21] rounded-t-2xl p-4 shadow-2xl">
                {/* Screen Bezel */}
                <div className="bg-black rounded-t-xl p-3 relative">
                  {/* Webcam Notch */}
                  <div className="absolute top-0 left-1/2 -translate-x-1/2 w-32 h-6 bg-black rounded-b-2xl z-10 flex items-center justify-center">
                    <div className="w-2 h-2 rounded-full bg-[#151719]/50"></div>
                  </div>
                  
                  {/* Screen Content */}
                  <div 
                    className="relative bg-white rounded-lg overflow-hidden cursor-zoom-in"
                    onMouseMove={handleMouseMove}
                    onMouseEnter={() => setIsZoomed(true)}
                    onMouseLeave={() => setIsZoomed(false)}
                  >
                    {/* Logo Overlay */}
                    <div className="absolute top-4 left-1/2 -translate-x-1/2 z-20">
                      <img 
                        src={logoImage} 
                        alt="Super GRC Logo"
                        className="w-32 md:w-40 h-auto drop-shadow-lg"
                      />
                    </div>
                    
                    {/* Hover to Explore Hint */}
                    <div className="absolute bottom-4 left-1/2 -translate-x-1/2 z-20 flex items-center gap-2 bg-[#151719]/90 backdrop-blur-sm text-[#CFE928] px-4 py-2 rounded-lg shadow-lg">
                      <span className="text-sm" style={{ fontFamily: 'Pragmatica Bold, sans-serif' }}>Hover to explore the dashboard</span>
                      <svg className="w-4 h-4 animate-bounce" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v3m0 0v3m0-3h3m-3 0H7" />
                      </svg>
                    </div>
                    
                    {/* Dashboard Screenshot */}
                    <img 
                      src={dashboardImage} 
                      alt="Super GRC Dashboard Interface"
                      className={`w-full h-auto transition-transform duration-500 ease-out ${isZoomed ? 'scale-150' : 'scale-100'}`}
                      style={{
                        transformOrigin: `${imagePosition.x}% ${imagePosition.y}%`
                      }}
                    />
                    
                    {/* Subtle Gradient Overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-[#CFE928]/5 via-transparent to-transparent pointer-events-none"></div>
                  </div>
                </div>
              </div>
              
              {/* Laptop Base */}
              <div className="h-3 bg-gradient-to-b from-[#3a3d41] to-[#2a2d31] rounded-b-2xl shadow-xl"></div>
              <div className="h-8 bg-gradient-to-b from-[#3a3d41] to-[#2f3236] mx-auto w-[95%] rounded-b-xl shadow-2xl relative">
                <div className="absolute inset-x-0 top-0 h-4 bg-gradient-to-b from-[#454850] to-transparent"></div>
              </div>
              
              {/* Shadow */}
              <div className="absolute inset-x-20 -bottom-8 h-20 bg-black/20 blur-3xl rounded-full"></div>
              
              {/* Accent Glow */}
              <div className="absolute -inset-8 bg-gradient-to-r from-[#CFE928]/10 via-[#9FCFD3]/10 to-[#CFE928]/10 rounded-3xl blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 -z-10"></div>
            </div>
          </div>
          
          {/* Trust Indicators */}
          <div className="mt-16 lg:mt-20 border-t border-[#151719]/10 pt-12">
            <p className="text-center text-xs md:text-sm text-[#CFE928] mb-6 md:mb-8" style={{ fontFamily: 'Pragmatica Bold, sans-serif' }}>
              TRUSTED FOR COMPLIANCE EXCELLENCE
            </p>
            
            <div className="grid grid-cols-3 md:grid-cols-4 gap-3 md:gap-8 max-w-4xl mx-auto">
              {/* Compliance Framework Badges */}
              <div className="flex flex-col items-center justify-center p-3 md:p-6 bg-white border border-[#151719]/5 rounded-xl hover:border-[#CFE928]/30 hover:shadow-lg transition-all">
                <div className="w-8 h-8 md:w-12 md:h-12 bg-[#CFE928]/10 rounded-lg flex items-center justify-center mb-2 md:mb-3">
                  <Shield className="w-4 h-4 md:w-6 md:h-6 text-[#151719]" />
                </div>
                <span className="text-xs md:text-sm text-[#151719]/70 text-center" style={{ fontFamily: 'Pragmatica Bold, sans-serif' }}>SOC 2</span>
                <span className="text-[10px] md:text-xs text-[#151719]/40 hidden md:block">Full Coverage</span>
              </div>
              
              <div className="flex flex-col items-center justify-center p-3 md:p-6 bg-white border border-[#151719]/5 rounded-xl hover:border-[#CFE928]/30 hover:shadow-lg transition-all">
                <div className="w-8 h-8 md:w-12 md:h-12 bg-[#9FCFD3]/10 rounded-lg flex items-center justify-center mb-2 md:mb-3">
                  <Shield className="w-4 h-4 md:w-6 md:h-6 text-[#151719]" />
                </div>
                <span className="text-xs md:text-sm text-[#151719]/70 text-center" style={{ fontFamily: 'Pragmatica Bold, sans-serif' }}>ISO 27001</span>
                <span className="text-[10px] md:text-xs text-[#151719]/40 hidden md:block">Full Coverage</span>
              </div>
              
              <div className="flex flex-col items-center justify-center p-3 md:p-6 bg-white border border-[#151719]/5 rounded-xl hover:border-[#CFE928]/30 hover:shadow-lg transition-all">
                <div className="w-8 h-8 md:w-12 md:h-12 bg-[#CFE928]/10 rounded-lg flex items-center justify-center mb-2 md:mb-3">
                  <Shield className="w-4 h-4 md:w-6 md:h-6 text-[#151719]" />
                </div>
                <span className="text-xs md:text-sm text-[#151719]/70 text-center" style={{ fontFamily: 'Pragmatica Bold, sans-serif' }}>FedRAMP</span>
                <span className="text-[10px] md:text-xs text-[#151719]/40 hidden md:block">Full Coverage</span>
              </div>
              
              <div className="flex flex-col items-center justify-center p-3 md:p-6 bg-white border border-[#151719]/5 rounded-xl hover:border-[#CFE928]/30 hover:shadow-lg transition-all">
                <div className="w-8 h-8 md:w-12 md:h-12 bg-[#9FCFD3]/10 rounded-lg flex items-center justify-center mb-2 md:mb-3">
                  <Shield className="w-4 h-4 md:w-6 md:h-6 text-[#151719]" />
                </div>
                <span className="text-xs md:text-sm text-[#151719]/70 text-center" style={{ fontFamily: 'Pragmatica Bold, sans-serif' }}>HIPAA</span>
                <span className="text-[10px] md:text-xs text-[#151719]/40 hidden md:block">Full Coverage</span>
              </div>
              
              <div className="flex flex-col items-center justify-center p-3 md:p-6 bg-white border border-[#151719]/5 rounded-xl hover:border-[#CFE928]/30 hover:shadow-lg transition-all">
                <div className="w-8 h-8 md:w-12 md:h-12 bg-[#CFE928]/10 rounded-lg flex items-center justify-center mb-2 md:mb-3">
                  <Shield className="w-4 h-4 md:w-6 md:h-6 text-[#151719]" />
                </div>
                <span className="text-xs md:text-sm text-[#151719]/70 text-center" style={{ fontFamily: 'Pragmatica Bold, sans-serif' }}>PCI DSS</span>
                <span className="text-[10px] md:text-xs text-[#151719]/40 hidden md:block">Full Coverage</span>
              </div>
              
              <div className="flex flex-col items-center justify-center p-3 md:p-6 bg-white border border-[#151719]/5 rounded-xl hover:border-[#CFE928]/30 hover:shadow-lg transition-all">
                <div className="w-8 h-8 md:w-12 md:h-12 bg-[#9FCFD3]/10 rounded-lg flex items-center justify-center mb-2 md:mb-3">
                  <Shield className="w-4 h-4 md:w-6 md:h-6 text-[#151719]" />
                </div>
                <span className="text-xs md:text-sm text-[#151719]/70 text-center" style={{ fontFamily: 'Pragmatica Bold, sans-serif' }}>Privacy</span>
                <span className="text-[10px] md:text-xs text-[#151719]/40 hidden md:block">Full Coverage</span>
              </div>
              
              <div className="flex flex-col items-center justify-center p-3 md:p-6 bg-white border border-[#151719]/5 rounded-xl hover:border-[#CFE928]/30 hover:shadow-lg transition-all">
                <div className="w-8 h-8 md:w-12 md:h-12 bg-[#CFE928]/10 rounded-lg flex items-center justify-center mb-2 md:mb-3">
                  <Shield className="w-4 h-4 md:w-6 md:h-6 text-[#151719]" />
                </div>
                <span className="text-xs md:text-sm text-[#151719]/70 text-center" style={{ fontFamily: 'Pragmatica Bold, sans-serif' }}>NIST CSF</span>
                <span className="text-[10px] md:text-xs text-[#151719]/40 hidden md:block">Full Coverage</span>
              </div>
              
              <div className="flex flex-col items-center justify-center p-3 md:p-6 bg-white border border-[#151719]/5 rounded-xl hover:border-[#CFE928]/30 hover:shadow-lg transition-all">
                <div className="w-8 h-8 md:w-12 md:h-12 bg-[#9FCFD3]/10 rounded-lg flex items-center justify-center mb-2 md:mb-3">
                  <Shield className="w-4 h-4 md:w-6 md:h-6 text-[#151719]" />
                </div>
                <span className="text-xs md:text-sm text-[#151719]/70 text-center" style={{ fontFamily: 'Pragmatica Bold, sans-serif' }}>CMMC</span>
                <span className="text-[10px] md:text-xs text-[#151719]/40 hidden md:block">Full Coverage</span>
              </div>
              
              <div className="flex flex-col items-center justify-center p-3 md:p-6 bg-white border border-[#151719]/5 rounded-xl hover:border-[#CFE928]/30 hover:shadow-lg transition-all">
                <div className="w-8 h-8 md:w-12 md:h-12 bg-[#CFE928]/10 rounded-lg flex items-center justify-center mb-2 md:mb-3">
                  <Shield className="w-4 h-4 md:w-6 md:h-6 text-[#151719]" />
                </div>
                <span className="text-xs md:text-sm text-[#151719]/70 text-center leading-tight" style={{ fontFamily: 'Pragmatica Bold, sans-serif' }}>Risk Posture</span>
                <span className="text-[10px] md:text-xs text-[#151719]/40 hidden md:block">Full Coverage</span>
              </div>
              
              <div className="flex flex-col items-center justify-center p-3 md:p-6 bg-white border border-[#151719]/5 rounded-xl hover:border-[#CFE928]/30 hover:shadow-lg transition-all">
                <div className="w-8 h-8 md:w-12 md:h-12 bg-[#9FCFD3]/10 rounded-lg flex items-center justify-center mb-2 md:mb-3">
                  <Shield className="w-4 h-4 md:w-6 md:h-6 text-[#151719]" />
                </div>
                <span className="text-xs md:text-sm text-[#151719]/70 text-center leading-tight" style={{ fontFamily: 'Pragmatica Bold, sans-serif' }}>Vulnerability Mgmt</span>
                <span className="text-[10px] md:text-xs text-[#151719]/40 hidden md:block">Full Coverage</span>
              </div>
              
              <div className="flex flex-col items-center justify-center p-3 md:p-6 bg-white border border-[#151719]/5 rounded-xl hover:border-[#CFE928]/30 hover:shadow-lg transition-all">
                <div className="w-8 h-8 md:w-12 md:h-12 bg-[#CFE928]/10 rounded-lg flex items-center justify-center mb-2 md:mb-3">
                  <Shield className="w-4 h-4 md:w-6 md:h-6 text-[#151719]" />
                </div>
                <span className="text-xs md:text-sm text-[#151719]/70 text-center" style={{ fontFamily: 'Pragmatica Bold, sans-serif' }}>Secure AI</span>
                <span className="text-[10px] md:text-xs text-[#151719]/40 hidden md:block">Full Coverage</span>
              </div>
              
              <div className="flex flex-col items-center justify-center p-3 md:p-6 bg-white border border-[#151719]/5 rounded-xl hover:border-[#CFE928]/30 hover:shadow-lg transition-all">
                <div className="w-8 h-8 md:w-12 md:h-12 bg-[#9FCFD3]/10 rounded-lg flex items-center justify-center mb-2 md:mb-3">
                  <Shield className="w-4 h-4 md:w-6 md:h-6 text-[#151719]" />
                </div>
                <span className="text-xs md:text-sm text-[#151719]/70 text-center leading-tight" style={{ fontFamily: 'Pragmatica Bold, sans-serif' }}>Issue Mgmt</span>
                <span className="text-[10px] md:text-xs text-[#151719]/40 hidden md:block">Full Coverage</span>
              </div>
            </div>
          </div>
          
          {/* Key Benefits - Quick Scan */}
          <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6 max-w-5xl mx-auto px-4">
            <div className="flex items-start gap-3 p-3 md:p-4 bg-white/50 rounded-lg">
              <CheckCircle2 className="w-5 h-5 md:w-6 md:h-6 text-[#CFE928] flex-shrink-0 mt-0.5" />
              <div>
                <h3 className="text-sm md:text-base text-[#151719] mb-0.5 md:mb-1" style={{ fontFamily: 'Pragmatica Bold, sans-serif' }}>Unified Platform</h3>
                <p className="text-xs md:text-sm text-[#151719]/60" style={{ fontFamily: 'Pragmatica, sans-serif' }}>All GRC functions in one intelligent interface</p>
              </div>
            </div>
            
            <div className="flex items-start gap-3 p-3 md:p-4 bg-white/50 rounded-lg">
              <CheckCircle2 className="w-5 h-5 md:w-6 md:h-6 text-[#CFE928] flex-shrink-0 mt-0.5" />
              <div>
                <h3 className="text-sm md:text-base text-[#151719] mb-0.5 md:mb-1" style={{ fontFamily: 'Pragmatica Bold, sans-serif' }}>AI-Powered</h3>
                <p className="text-xs md:text-sm text-[#151719]/60" style={{ fontFamily: 'Pragmatica, sans-serif' }}>Intelligent automation and risk analysis</p>
              </div>
            </div>
            
            <div className="flex items-start gap-3 p-3 md:p-4 bg-white/50 rounded-lg">
              <CheckCircle2 className="w-5 h-5 md:w-6 md:h-6 text-[#CFE928] flex-shrink-0 mt-0.5" />
              <div>
                <h3 className="text-sm md:text-base text-[#151719] mb-0.5 md:mb-1" style={{ fontFamily: 'Pragmatica Bold, sans-serif' }}>Enterprise Ready</h3>
                <p className="text-xs md:text-sm text-[#151719]/60" style={{ fontFamily: 'Pragmatica, sans-serif' }}>Scales with your business growth</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}