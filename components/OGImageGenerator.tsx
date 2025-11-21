/**
 * OG Image Generator Component
 * 
 * This component renders a 1200x630px Open Graph image that you can screenshot
 * to create og-image.png for iMessage, WhatsApp, and other platforms.
 * 
 * INSTRUCTIONS:
 * 1. Navigate to /#og-generator in your app
 * 2. Click the "Download Screenshot Guide" button for instructions
 * 3. Take a screenshot at exactly 1200x630px of the dark card
 * 4. Save as /public/og-image.png
 */

import { useState } from 'react';
import heroImage from 'figma:asset/52c361cdb5a207889df1a2539f7c4a6a5fc9c1c8.png';

export function OGImageGenerator() {
  const [showGuide, setShowGuide] = useState(false);

  return (
    <div className="min-h-screen bg-[#E6E6E6] flex items-center justify-center p-8">
      <div className="bg-white rounded-lg shadow-2xl p-8 max-w-[1300px]">
        <h1 className="text-3xl mb-6 text-[#151719]" style={{ fontFamily: 'Pragmatica Bold, sans-serif' }}>
          📸 OG Image Generator - Screenshot This Card
        </h1>
        
        <div className="mb-4 flex gap-4 items-center">
          <p className="text-[#151719]/70 flex-1" style={{ fontFamily: 'Pragmatica, sans-serif' }}>
            Screenshot the card below at exactly <strong>1200×630px</strong> and save as <code className="bg-[#CFE928]/20 px-2 py-1 rounded font-mono text-sm">/public/og-image.png</code>
          </p>
          <button
            onClick={() => setShowGuide(!showGuide)}
            className="px-6 py-3 bg-[#CFE928] text-[#151719] rounded-lg hover:bg-[#bdd425] transition-colors"
            style={{ fontFamily: 'Pragmatica Bold, sans-serif' }}
          >
            {showGuide ? '📖 Hide Guide' : '📖 Screenshot Guide'}
          </button>
        </div>

        {showGuide && (
          <div className="mb-6 p-4 bg-[#9FCFD3]/10 border border-[#9FCFD3]/30 rounded-lg" style={{ fontFamily: 'Pragmatica, sans-serif' }}>
            <h3 className="font-bold mb-3 text-[#151719]">📸 How to Screenshot at 1200×630px:</h3>
            <div className="space-y-3 text-sm text-[#151719]/70">
              <div>
                <strong className="text-[#151719]">Browser DevTools (Most Accurate - RECOMMENDED):</strong>
                <ol className="list-decimal ml-5 mt-1">
                  <li>Right-click the dark card below → "Inspect Element"</li>
                  <li>In DevTools, find the div with id="og-card-image"</li>
                  <li>Right-click on that element in DevTools → "Capture node screenshot"</li>
                  <li>This guarantees exact 1200×630px dimensions!</li>
                </ol>
              </div>
              <div>
                <strong className="text-[#151719]">Mac:</strong>
                <ol className="list-decimal ml-5 mt-1">
                  <li>Press <code className="bg-white px-2 py-1 rounded">⌘ + Shift + 4</code></li>
                  <li>Drag to select the dark card area precisely</li>
                </ol>
              </div>
              <div>
                <strong className="text-[#151719]">Windows:</strong>
                <ol className="list-decimal ml-5 mt-1">
                  <li>Press <code className="bg-white px-2 py-1 rounded">Win + Shift + S</code></li>
                  <li>Select the dark card area precisely</li>
                </ol>
              </div>
            </div>
          </div>
        )}
        
        {/* THE OG IMAGE - EXACTLY 1200x630px */}
        <div 
          id="og-card-image"
          className="relative overflow-hidden bg-black"
          style={{ 
            width: '1200px', 
            height: '630px',
            fontFamily: 'Pragmatica, sans-serif'
          }}
        >
          {/* Hero Background Image - Centered and Contained */}
          <div 
            className="absolute inset-0 flex items-center justify-center"
            style={{
              backgroundImage: `url(${heroImage})`,
              backgroundSize: 'contain',
              backgroundPosition: 'center',
              backgroundRepeat: 'no-repeat'
            }}
          />
          
          {/* Bottom Gradient Overlay for Text Readability */}
          <div className="absolute bottom-0 left-0 right-0 h-48 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />
          
          {/* Content Container */}
          <div className="relative z-10 h-full flex flex-col justify-between p-12">
            {/* Top Section - Empty for clean look */}
            <div />
            
            {/* Bottom Section - Minimal Branding */}
            <div className="space-y-4">
              {/* Feature Pills */}
              <div className="flex gap-3 flex-wrap">
                <div className="px-5 py-2 bg-[#CFE928]/90 rounded-full text-[#151719]" style={{ fontFamily: 'Pragmatica Bold, sans-serif' }}>
                  Asset Discovery
                </div>
                <div className="px-5 py-2 bg-[#9FCFD3]/90 rounded-full text-[#151719]" style={{ fontFamily: 'Pragmatica Bold, sans-serif' }}>
                  Risk Management
                </div>
                <div className="px-5 py-2 bg-white/90 rounded-full text-[#151719]" style={{ fontFamily: 'Pragmatica Bold, sans-serif' }}>
                  AI-Powered Intelligence
                </div>
              </div>
              
              {/* Footer URL */}
              <div className="pt-4 flex items-center justify-between">
                <p className="text-[#CFE928] text-2xl" style={{ fontFamily: 'Pragmatica Bold, sans-serif' }}>
                  supergrc.com
                </p>
                <p className="text-white/80 text-lg" style={{ fontFamily: 'Pragmatica, sans-serif' }}>
                  SaaS & On-Premise Available
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}