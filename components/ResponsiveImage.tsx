import { useState } from 'react';

interface ResponsiveImageProps {
  src: string;
  alt: string;
  className?: string;
  style?: React.CSSProperties;
  sizes?: string;
  loading?: 'lazy' | 'eager';
  // Optional: Provide multiple source sizes for true responsive images
  srcSet?: {
    small?: string;   // 480w
    medium?: string;  // 768w
    large?: string;   // 1080w
    xlarge?: string;  // 1920w
  };
}

export function ResponsiveImage({
  src,
  alt,
  className = '',
  style,
  sizes = '100vw',
  loading = 'lazy',
  srcSet
}: ResponsiveImageProps) {
  const [imageError, setImageError] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  const handleError = () => {
    setImageError(true);
    setIsLoading(false);
  };

  const handleLoad = () => {
    setIsLoading(false);
  };

  // Build srcset string if multiple sources provided
  const buildSrcSet = () => {
    if (!srcSet) return undefined;

    const sources = [];
    if (srcSet.small) sources.push(`${srcSet.small} 480w`);
    if (srcSet.medium) sources.push(`${srcSet.medium} 768w`);
    if (srcSet.large) sources.push(`${srcSet.large} 1080w`);
    if (srcSet.xlarge) sources.push(`${srcSet.xlarge} 1920w`);

    return sources.length > 0 ? sources.join(', ') : undefined;
  };

  const srcSetString = buildSrcSet();

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
      {isLoading && (
        <div
          className={`absolute inset-0 bg-gray-200 animate-pulse ${className}`}
          style={style}
          aria-hidden="true"
        />
      )}
      <img
        src={src}
        srcSet={srcSetString}
        sizes={sizes}
        alt={alt}
        className={`${className} ${isLoading ? 'opacity-0' : 'opacity-100'} transition-opacity duration-300`}
        style={style}
        loading={loading}
        onError={handleError}
        onLoad={handleLoad}
      />
    </div>
  );
}

// Helper function to generate responsive image URLs (for future use with image CDN)
export function generateResponsiveSources(baseUrl: string, format: 'webp' | 'png' | 'jpg' = 'webp') {
  // Example: If you move to an image CDN like Cloudinary or ImgIx
  // This would generate multiple sizes automatically
  return {
    small: `${baseUrl}?w=480&f=${format}`,
    medium: `${baseUrl}?w=768&f=${format}`,
    large: `${baseUrl}?w=1080&f=${format}`,
    xlarge: `${baseUrl}?w=1920&f=${format}`
  };
}

// WebP support detection hook
export function useWebPSupport() {
  const [supportsWebP, setSupportsWebP] = useState<boolean | null>(null);

  useState(() => {
    const checkWebPSupport = () => {
      const canvas = document.createElement('canvas');
      if (canvas.getContext && canvas.getContext('2d')) {
        // Check if browser supports WebP
        return canvas.toDataURL('image/webp').indexOf('data:image/webp') === 0;
      }
      return false;
    };

    setSupportsWebP(checkWebPSupport());
  });

  return supportsWebP;
}
