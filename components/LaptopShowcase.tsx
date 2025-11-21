// Dashboard image - using placeholder for deployment
const dashboardImage = "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1200 800'%3E%3Crect fill='%23151719' width='1200' height='800'/%3E%3Ctext x='50%25' y='50%25' fill='%23CFE928' font-size='48' text-anchor='middle' dominant-baseline='middle'%3ESuper GRC Dashboard%3C/text%3E%3C/svg%3E";

export function LaptopShowcase() {
  return (
    <section className="py-20 bg-gradient-to-b from-[#151719] to-[#1a1d1f]">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-[#CFE928] mb-4">See Super GRC in Action</h2>
          <p className="text-[#E6E6E6] text-xl max-w-3xl mx-auto">
            A comprehensive platform designed to streamline your risk and compliance operations
          </p>
        </div>
        
        <div className="max-w-6xl mx-auto">
          {/* Laptop Frame */}
          <div className="relative">
            {/* Laptop Screen */}
            <div className="bg-gradient-to-b from-gray-800 to-gray-900 rounded-t-2xl p-3 shadow-2xl">
              {/* Screen Bezel */}
              <div className="bg-black rounded-t-lg p-1">
                {/* Webcam */}
                <div className="flex justify-center mb-1">
                  <div className="w-1.5 h-1.5 rounded-full bg-gray-700"></div>
                </div>
                {/* Screen Content */}
                <div className="bg-white rounded-sm overflow-hidden">
                  <img 
                    src={dashboardImage} 
                    alt="Super GRC Dashboard Interface"
                    className="w-full h-auto"
                  />
                </div>
              </div>
            </div>
            
            {/* Laptop Base */}
            <div className="relative h-6">
              {/* Top of base */}
              <div className="absolute inset-0 bg-gradient-to-b from-gray-700 to-gray-800 rounded-b-2xl"></div>
              {/* Keyboard area hint */}
              <div className="absolute inset-x-0 top-0 h-3 bg-gradient-to-b from-gray-600 to-gray-700"></div>
              {/* Trackpad area */}
              <div className="absolute left-1/2 transform -translate-x-1/2 top-1 w-20 h-3 bg-gray-800 rounded-sm border border-gray-900"></div>
            </div>
            
            {/* Shadow under laptop */}
            <div className="absolute inset-x-0 -bottom-4 h-20 bg-gradient-radial from-black/40 to-transparent blur-2xl"></div>
          </div>
        </div>
      </div>
    </section>
  );
}