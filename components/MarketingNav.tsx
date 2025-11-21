import horizontalLogo from 'figma:asset/710782100269a767693ea5131362aed950b519c0.png';
import { Menu, X } from 'lucide-react';
import { useState, useEffect } from 'react';

export function MarketingNav() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const closeMenu = () => setIsMenuOpen(false);

  // Prevent body scroll when menu is open
  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isMenuOpen]);

  return (
    <>
      <nav className="bg-[#151719] border-b border-[#CFE928]/20 sticky top-0 z-50 backdrop-blur-lg">
        <div className="container mx-auto px-4 py-3">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <div className="flex items-center relative z-[60]">
              <img src={horizontalLogo} alt="Super GRC - Engineered for Security" className="h-12 md:h-14" loading="eager" />
            </div>
            
            {/* Desktop Navigation Links */}
            <div className="hidden md:flex items-center gap-8">
              <a href="#about" className="text-[#E6E6E6] hover:text-[#CFE928] transition-colors" style={{ fontFamily: 'Pragmatica, sans-serif' }}>
                About
              </a>
              <a href="#products" className="text-[#E6E6E6] hover:text-[#CFE928] transition-colors" style={{ fontFamily: 'Pragmatica, sans-serif' }}>
                Products
              </a>
              <a href="#features" className="text-[#E6E6E6] hover:text-[#CFE928] transition-colors" style={{ fontFamily: 'Pragmatica, sans-serif' }}>
                Features
              </a>
              <a 
                href="#demo"
                className="bg-[#CFE928] text-[#151719] px-6 py-2 rounded-lg hover:bg-[#CFE928]/90 transition-all"
                style={{ fontFamily: 'Pragmatica Bold, sans-serif' }}
              >
                Request Demo
              </a>
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="md:hidden relative z-[60] text-[#E6E6E6] hover:text-[#CFE928] transition-colors p-2"
              aria-label="Toggle menu"
            >
              {isMenuOpen ? (
                <X className="w-7 h-7" />
              ) : (
                <Menu className="w-7 h-7" />
              )}
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Menu Overlay - Outside nav for proper stacking */}
      {isMenuOpen && (
        <div 
          className="fixed inset-0 bg-[#151719] md:hidden z-40 flex items-center justify-center"
          style={{ paddingTop: '64px' }}
        >
          <div className="flex flex-col items-center justify-center space-y-12 px-8 w-full">
            <a 
              href="#about" 
              onClick={closeMenu}
              className="text-[#E6E6E6] hover:text-[#CFE928] transition-colors text-4xl"
              style={{ fontFamily: 'Pragmatica Bold, sans-serif' }}
            >
              About
            </a>
            <a 
              href="#products" 
              onClick={closeMenu}
              className="text-[#E6E6E6] hover:text-[#CFE928] transition-colors text-4xl"
              style={{ fontFamily: 'Pragmatica Bold, sans-serif' }}
            >
              Products
            </a>
            <a 
              href="#features" 
              onClick={closeMenu}
              className="text-[#E6E6E6] hover:text-[#CFE928] transition-colors text-4xl"
              style={{ fontFamily: 'Pragmatica Bold, sans-serif' }}
            >
              Features
            </a>
            <a 
              href="#demo"
              onClick={closeMenu}
              className="bg-[#CFE928] text-[#151719] px-16 py-6 rounded-2xl hover:bg-[#CFE928]/90 transition-all shadow-2xl shadow-[#CFE928]/30 text-3xl mt-4"
              style={{ fontFamily: 'Pragmatica Bold, sans-serif' }}
            >
              Request Demo
            </a>

            {/* Decorative Elements */}
            <div className="absolute top-1/4 left-10 w-48 h-48 bg-[#CFE928]/10 rounded-full blur-3xl pointer-events-none"></div>
            <div className="absolute bottom-1/4 right-10 w-48 h-48 bg-[#9FCFD3]/10 rounded-full blur-3xl pointer-events-none"></div>
          </div>
        </div>
      )}
    </>
  );
}