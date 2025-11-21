import { Check, Building2, Users, Building, CheckCircle, ChevronLeft, ChevronRight } from "lucide-react";
import { ImageWithFallback } from "./figma/ImageWithFallback";
import { useState, useRef } from "react";

export function MarketingProducts() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const scrollContainerRef = useRef<HTMLDivElement>(null);

  const products = [
    {
      image: "https://images.unsplash.com/photo-1590097521824-d20a96b7504e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzbWFsbCUyMGJ1c2luZXNzJTIwc3RhcnR1cHxlbnwxfHx8fDE3NjI3OTc3NTZ8MA&ixlib=rb-4.1.0&q=80&w=1080",
      alt: "Small Business Solution",
      badge: "SaaS",
      badgeBg: "bg-[#CFE928]",
      icon: Building2,
      iconBg: "bg-[#9FCFD3]",
      buttonBg: "bg-[#9FCFD3]",
      title: "Small Business",
      description: "Cloud-based SaaS solution perfect for startups and small businesses looking for comprehensive GRC capabilities without the complexity.",
      features: [
        "Quick setup and deployment",
        "Affordable monthly subscription",
        "Essential GRC features",
        "24/7 cloud access"
      ],
      border: false
    },
    {
      image: "https://images.unsplash.com/photo-1601058660898-82c168404c88?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtZWRpdW0lMjBidXNpbmVzcyUyMG9mZmljZXxlbnwxfHx8fDE3NjI3OTc3NTd8MA&ixlib=rb-4.1.0&q=80&w=1080",
      alt: "Medium Business Solution",
      badge: "Popular",
      badgeBg: "bg-[#CFE928]",
      icon: Users,
      iconBg: "bg-[#CFE928]",
      buttonBg: "bg-[#CFE928]",
      title: "Small to Medium",
      description: "Semi-customized solution for growing businesses that need tailored features and workflows to match their specific requirements.",
      features: [
        "Minor custom development",
        "Tailored workflows",
        "Priority support",
        "Integration assistance"
      ],
      border: true
    },
    {
      image: "https://images.unsplash.com/photo-1590856225823-7ce81eea3bda?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsYXJnZSUyMGVudGVycHJpc2UlMjBjb3Jwb3JhdGV8ZW58MXx8fHwxNzYyNzk3NzU3fDA&ixlib=rb-4.1.0&q=80&w=1080",
      alt: "Enterprise Solution",
      badge: "Enterprise",
      badgeBg: "bg-[#9FCFD3]",
      icon: Building,
      iconBg: "bg-[#9FCFD3]",
      buttonBg: "bg-[#9FCFD3]",
      title: "Large Enterprise",
      description: "Fully customized enterprise solution with extensive development to meet complex organizational needs and compliance requirements.",
      features: [
        "Major custom development",
        "Dedicated support team",
        "On-premise or hybrid deployment",
        "Advanced integrations"
      ],
      border: false
    }
  ];

  const scrollToSlide = (index: number) => {
    if (scrollContainerRef.current) {
      const slideWidth = scrollContainerRef.current.offsetWidth;
      scrollContainerRef.current.scrollTo({
        left: slideWidth * index,
        behavior: 'smooth'
      });
      setCurrentSlide(index);
    }
  };

  const handleScroll = () => {
    if (scrollContainerRef.current) {
      const slideWidth = scrollContainerRef.current.offsetWidth;
      const scrollLeft = scrollContainerRef.current.scrollLeft;
      const newSlide = Math.round(scrollLeft / slideWidth);
      setCurrentSlide(newSlide);
    }
  };

  return (
    <section id="products" className="py-12 md:py-20 bg-[#151719]">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-8 md:mb-16">
            <h2 className="mb-4 md:mb-6 text-3xl md:text-5xl lg:text-6xl text-[#CFE928]" style={{ fontFamily: 'Pragmatica Bold, sans-serif' }}>
              Choose Your Super GRC Solution
            </h2>
            <p className="text-base md:text-xl text-[#CFE928]/70 leading-relaxed max-w-3xl mx-auto px-4" style={{ fontFamily: 'Pragmatica, sans-serif' }}>
              Whether you're a small startup or a large enterprise, we have the perfect cybersecurity risk management solution tailored to your needs. Available as SaaS or on-premise deployment.
            </p>
          </div>

          {/* Desktop Grid - Hidden on Mobile */}
          <div className="hidden lg:grid lg:grid-cols-3 gap-6 md:gap-8">
            {products.map((product, index) => {
              const Icon = product.icon;
              return (
                <div key={index} className={`bg-[#E6E6E6] rounded-xl overflow-hidden hover:shadow-2xl transition-all group ${product.border ? 'border-2 border-[#CFE928]' : ''}`}>
                  <div className="relative h-48 overflow-hidden">
                    <ImageWithFallback
                      src={product.image}
                      alt={product.alt}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                    <div className={`absolute top-4 right-4 ${product.badgeBg} text-[#151719] px-4 py-2 rounded-full`} style={{ fontFamily: 'Pragmatica Bold, sans-serif' }}>
                      {product.badge}
                    </div>
                  </div>
                  <div className="p-8">
                    <div className="flex items-center gap-3 mb-4">
                      <div className={`w-12 h-12 ${product.iconBg} rounded-lg flex items-center justify-center`}>
                        <Icon className="w-6 h-6 text-[#151719]" />
                      </div>
                      <h3 className="text-[#151719]" style={{ fontFamily: 'Pragmatica Bold, sans-serif' }}>{product.title}</h3>
                    </div>
                    <p className="text-[#151719]/70 mb-6" style={{ fontFamily: 'Pragmatica, sans-serif' }}>
                      {product.description}
                    </p>
                    <ul className="space-y-3 mb-8">
                      {product.features.map((feature, idx) => (
                        <li key={idx} className="flex items-start gap-2">
                          <CheckCircle className="w-5 h-5 text-[#CFE928] flex-shrink-0 mt-0.5" />
                          <span className="text-[#151719]/70" style={{ fontFamily: 'Pragmatica, sans-serif' }}>{feature}</span>
                        </li>
                      ))}
                    </ul>
                    <a 
                      href="#demo" 
                      className={`w-full ${product.buttonBg} text-[#151719] py-3 rounded-lg hover:opacity-80 transition-all flex items-center justify-center`}
                      style={{ fontFamily: 'Pragmatica Bold, sans-serif' }}
                    >
                      Learn More
                    </a>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Mobile Carousel - Visible on Mobile/Tablet */}
          <div className="lg:hidden">
            {/* Carousel Container */}
            <div 
              ref={scrollContainerRef}
              onScroll={handleScroll}
              className="flex overflow-x-auto snap-x snap-mandatory scrollbar-hide gap-4 pb-4"
              style={{ 
                scrollbarWidth: 'none',
                msOverflowStyle: 'none',
                WebkitOverflowScrolling: 'touch'
              }}
            >
              {products.map((product, index) => {
                const Icon = product.icon;
                return (
                  <div 
                    key={index} 
                    className={`flex-shrink-0 w-[85%] sm:w-[70%] snap-center bg-[#E6E6E6] rounded-xl overflow-hidden shadow-xl ${product.border ? 'border-2 border-[#CFE928]' : ''}`}
                  >
                    <div className="relative h-40 overflow-hidden">
                      <ImageWithFallback
                        src={product.image}
                        alt={product.alt}
                        className="w-full h-full object-cover"
                      />
                      <div className={`absolute top-3 right-3 ${product.badgeBg} text-[#151719] px-3 py-1.5 rounded-full text-sm`} style={{ fontFamily: 'Pragmatica Bold, sans-serif' }}>
                        {product.badge}
                      </div>
                    </div>
                    <div className="p-6">
                      <div className="flex items-center gap-3 mb-3">
                        <div className={`w-10 h-10 ${product.iconBg} rounded-lg flex items-center justify-center`}>
                          <Icon className="w-5 h-5 text-[#151719]" />
                        </div>
                        <h3 className="text-lg text-[#151719]" style={{ fontFamily: 'Pragmatica Bold, sans-serif' }}>{product.title}</h3>
                      </div>
                      <p className="text-sm text-[#151719]/70 mb-4 leading-relaxed" style={{ fontFamily: 'Pragmatica, sans-serif' }}>
                        {product.description}
                      </p>
                      <ul className="space-y-2 mb-6">
                        {product.features.map((feature, idx) => (
                          <li key={idx} className="flex items-start gap-2">
                            <CheckCircle className="w-4 h-4 text-[#CFE928] flex-shrink-0 mt-0.5" />
                            <span className="text-sm text-[#151719]/70" style={{ fontFamily: 'Pragmatica, sans-serif' }}>{feature}</span>
                          </li>
                        ))}
                      </ul>
                      <a 
                        href="#demo" 
                        className={`w-full ${product.buttonBg} text-[#151719] py-2.5 rounded-lg hover:opacity-80 transition-all flex items-center justify-center text-sm`}
                        style={{ fontFamily: 'Pragmatica Bold, sans-serif' }}
                      >
                        Learn More
                      </a>
                    </div>
                  </div>
                );
              })}
            </div>

            {/* Carousel Indicators */}
            <div className="flex justify-center gap-2 mt-6">
              {products.map((_, index) => (
                <button
                  key={index}
                  onClick={() => scrollToSlide(index)}
                  className={`h-2 rounded-full transition-all ${
                    currentSlide === index 
                      ? 'w-8 bg-[#CFE928]' 
                      : 'w-2 bg-[#CFE928]/30'
                  }`}
                  aria-label={`Go to slide ${index + 1}`}
                />
              ))}
            </div>

            {/* Swipe Hint */}
            <div className="flex items-center justify-center gap-2 mt-4 text-[#CFE928]/50 text-sm" style={{ fontFamily: 'Pragmatica, sans-serif' }}>
              <ChevronLeft className="w-4 h-4 animate-pulse" />
              <span>Swipe to explore</span>
              <ChevronRight className="w-4 h-4 animate-pulse" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}