import { Interactive3DOrb } from './Interactive3DOrb';
import { Sparkles } from 'lucide-react';

export function Interactive3DSection() {
  return (
    <section className="py-12 md:py-20 bg-gradient-to-b from-[#151719] to-[#151719] relative overflow-hidden">
      {/* Background effects */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0" style={{
          backgroundImage: 'radial-gradient(circle at 2px 2px, #CFE928 1px, transparent 0)',
          backgroundSize: '40px 40px'
        }} />
      </div>
      
      <div className="absolute top-20 left-10 w-96 h-96 bg-[#CFE928]/5 rounded-full blur-3xl"></div>
      <div className="absolute bottom-20 right-10 w-96 h-96 bg-[#9FCFD3]/5 rounded-full blur-3xl"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-5xl mx-auto">
          {/* Header */}
          <div className="text-center mb-8 md:mb-12">
            <div className="inline-flex items-center gap-2 px-4 md:px-6 py-2 bg-[#CFE928]/10 rounded-full mb-4 md:mb-6">
              <Sparkles className="w-4 h-4 md:w-5 md:h-5 text-[#CFE928]" />
              <span className="text-sm md:text-base text-[#CFE928]" style={{ fontFamily: 'Pragmatica Bold, sans-serif' }}>
                Interactive Experience
              </span>
            </div>
            <h2 className="text-2xl md:text-4xl lg:text-5xl text-[#E6E6E6] mb-4 md:mb-6 px-4" style={{ fontFamily: 'Pragmatica Bold, sans-serif' }}>
              Experience Dynamic Intelligence
            </h2>
            <p className="text-base md:text-xl text-[#9FCFD3] max-w-3xl mx-auto px-4 mb-8" style={{ fontFamily: 'Pragmatica, sans-serif' }}>
              Just like our platform adapts to your needs, watch this visualization morph and transform. Click to change shapes and interact with it.
            </p>
          </div>

          {/* 3D Orb */}
          <Interactive3DOrb />

          {/* Feature Cards Below */}
          <div className="grid md:grid-cols-3 gap-4 md:gap-6 mt-12 md:mt-16">
            <div className="bg-[#151719]/50 backdrop-blur-sm border border-[#CFE928]/20 rounded-xl p-4 md:p-6 hover:border-[#CFE928]/50 transition-all">
              <div className="w-10 h-10 md:w-12 md:h-12 bg-[#CFE928]/10 rounded-lg flex items-center justify-center mb-3 md:mb-4">
                <Sparkles className="w-5 h-5 md:w-6 md:h-6 text-[#CFE928]" />
              </div>
              <h3 className="text-base md:text-lg text-[#E6E6E6] mb-2" style={{ fontFamily: 'Pragmatica Bold, sans-serif' }}>
                Adaptive Intelligence
              </h3>
              <p className="text-sm md:text-base text-[#E6E6E6]/70" style={{ fontFamily: 'Pragmatica, sans-serif' }}>
                AI-powered insights that evolve with your security landscape
              </p>
            </div>

            <div className="bg-[#151719]/50 backdrop-blur-sm border border-[#9FCFD3]/20 rounded-xl p-4 md:p-6 hover:border-[#9FCFD3]/50 transition-all">
              <div className="w-10 h-10 md:w-12 md:h-12 bg-[#9FCFD3]/10 rounded-lg flex items-center justify-center mb-3 md:mb-4">
                <Sparkles className="w-5 h-5 md:w-6 md:h-6 text-[#9FCFD3]" />
              </div>
              <h3 className="text-base md:text-lg text-[#E6E6E6] mb-2" style={{ fontFamily: 'Pragmatica Bold, sans-serif' }}>
                Real-Time Visualization
              </h3>
              <p className="text-sm md:text-base text-[#E6E6E6]/70" style={{ fontFamily: 'Pragmatica, sans-serif' }}>
                Live dashboards showing your compliance and risk posture
              </p>
            </div>

            <div className="bg-[#151719]/50 backdrop-blur-sm border border-[#CFE928]/20 rounded-xl p-4 md:p-6 hover:border-[#CFE928]/50 transition-all">
              <div className="w-10 h-10 md:w-12 md:h-12 bg-[#CFE928]/10 rounded-lg flex items-center justify-center mb-3 md:mb-4">
                <Sparkles className="w-5 h-5 md:w-6 md:h-6 text-[#CFE928]" />
              </div>
              <h3 className="text-base md:text-lg text-[#E6E6E6] mb-2" style={{ fontFamily: 'Pragmatica Bold, sans-serif' }}>
                Flexible Architecture
              </h3>
              <p className="text-sm md:text-base text-[#E6E6E6]/70" style={{ fontFamily: 'Pragmatica, sans-serif' }}>
                Platform that transforms to fit your unique requirements
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
