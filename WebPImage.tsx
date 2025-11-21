import { useState } from 'react';

interface WebPImageProps {
  src: string;
  webpSrc?: string;
  alt: string;
  className?: string;
  style?: React.CSSProperties;
  loading?: 'lazy' | 'eager';
  sizes?: string;
  // Optional responsive sources
  srcSet?: {
    png: {
      small?: string;
      medium?: string;
      large?: string;
      xlarge?: string;
    };
    webp: {
      small?: string;
      medium?: string;
      large?: string;
      xlarge?: string;
    };
  };
}

/**
 * WebPImage Component - Serves WebP images with PNG/JPG fallback
 * 
 * Benefits:
 * - 25-35% smaller file sizes than PNG
 * - 25-34% smaller than JPG
 * - Automatic fallback for older browsers
 * - Supports responsive images with srcset
 * 
 * Usage:
 * <WebPImage 
 *   src="image.png" 
 *   webpSrc="image.webp" 
 *   alt="Description" 
 * />
 */
export function WebPImage({
  src,
  webpSrc,
  alt,
  className = '',
  style,
  loading = 'lazy',
  sizes = '100vw',
  srcSet
}: WebPImageProps) {
  const [imageError, setImageError] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  const handleError = () => {
    setImageError(true);
    setIsLoading(false);
  };

  const handleLoad = () => {
    setIsLoading(false);
  };

  // Build srcset strings for responsive images
  const buildSrcSet = (sources: typeof srcSet.png | typeof srcSet.webp) => {
    if (!sources) return undefined;

    const srcSetArray = [];
    if (sources.small) srcSetArray.push(`${sources.small} 480w`);
    if (sources.medium) srcSetArray.push(`${sources.medium} 768w`);
    if (sources.large) srcSetArray.push(`${sources.large} 1080w`);
    if (sources.xlarge) srcSetArray.push(`${sources.xlarge} 1920w`);

    return srcSetArray.length > 0 ? srcSetArray.join(', ') : undefined;
  };

  const webpSrcSet = srcSet?.webp ? buildSrcSet(srcSet.webp) : undefined;
  const pngSrcSet = srcSet?.png ? buildSrcSet(srcSet.png) : undefined;

  // Fallback UI for failed images
  if (imageError) {
    return (
      <div
        className={`flex items-center justify-center bg-gray-200 ${className}`}
        style={style}
        role="img"
        aria-label={alt}
      >
        <div className="text-center p-4">
          <svg
            className="w-12 h-12 mx-auto text-gray-400 mb-2"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"
            />
          </svg>
          <p className="text-sm text-gray-500">Image unavailable</p>
        </div>
      </div>
    );
  }

  return (
    <div className="relative">
      {/* Loading skeleton */}
      {isLoading && (
        <div
          className={`absolute inset-0 bg-gray-200 animate-pulse rounded ${className}`}
          style={style}
          aria-hidden="true"
        />
      )}

      {/* Picture element for WebP support with fallback */}
      <picture>
        {/* WebP source - modern browsers */}
        {(webpSrc || webpSrcSet) && (
          <source
            type="image/webp"
            srcSet={webpSrcSet || webpSrc}
            sizes={sizes}
          />
        )}

        {/* PNG/JPG fallback - older browsers */}
        {pngSrcSet && (
          <source
            type="image/png"
            srcSet={pngSrcSet}
            sizes={sizes}
          />
        )}

        {/* Default img tag - required */}
        <img
          src={src}
          alt={alt}
          className={`${className} ${isLoading ? 'opacity-0' : 'opacity-100'} transition-opacity duration-300`}
          style={style}
          loading={loading}
          onError={handleError}
          onLoad={handleLoad}
        />
      </picture>
    </div>
  );
}

/**
 * Convert PNG to WebP Instructions
 * 
 * OPTION 1: Online Converter (Easiest)
 * 1. Go to https://cloudconvert.com/png-to-webp
 * 2. Upload your PNG files
 * 3. Convert to WebP (quality: 80-90)
 * 4. Download and save with same filename + .webp
 * 
 * OPTION 2: Batch Conversion (Node.js)
 * 1. Install: npm install sharp
 * 2. Run conversion script:
 * 
 * ```javascript
 * const sharp = require('sharp');
 * const fs = require('fs');
 * const path = require('path');
 * 
 * const inputDir = './public/images';
 * const files = fs.readdirSync(inputDir);
 * 
 * files.forEach(file => {
 *   if (file.endsWith('.png') || file.endsWith('.jpg')) {
 *     const inputPath = path.join(inputDir, file);
 *     const outputPath = inputPath.replace(/\.(png|jpg)$/, '.webp');
 *     
 *     sharp(inputPath)
 *       .webp({ quality: 85 })
 *       .toFile(outputPath)
 *       .then(() => console.log(`Converted: ${file}`));
 *   }
 * });
 * ```
 * 
 * OPTION 3: Figma Export
 * If using Figma:
 * 1. Select your image
 * 2. Export settings → Add format
 * 3. Choose WebP
 * 4. Export alongside PNG
 */

/**
 * Example Usage:
 * 
 * // Basic usage (PNG with WebP)
 * <WebPImage 
 *   src="logo.png" 
 *   webpSrc="logo.webp" 
 *   alt="Super GRC Logo" 
 * />
 * 
 * // Responsive images with multiple sizes
 * <WebPImage 
 *   src="hero.png"
 *   alt="Hero Image"
 *   loading="eager"
 *   sizes="(max-width: 640px) 480px, (max-width: 1024px) 768px, 1080px"
 *   srcSet={{
 *     png: {
 *       small: "hero-480.png",
 *       medium: "hero-768.png",
 *       large: "hero-1080.png",
 *       xlarge: "hero-1920.png"
 *     },
 *     webp: {
 *       small: "hero-480.webp",
 *       medium: "hero-768.webp",
 *       large: "hero-1080.webp",
 *       xlarge: "hero-1920.webp"
 *     }
 *   }}
 * />
 */
