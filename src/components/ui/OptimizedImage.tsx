'use client';

import { useState, useRef, useEffect } from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { ImageIcon, Loader2 } from 'lucide-react';

interface OptimizedImageProps {
  src: string;
  alt: string;
  width?: number;
  height?: number;
  fill?: boolean;
  className?: string;
  priority?: boolean;
  quality?: number;
  placeholder?: 'blur' | 'empty';
  blurDataURL?: string;
  sizes?: string;
  aspectRatio?: string;
  objectFit?: 'contain' | 'cover' | 'fill' | 'none' | 'scale-down';
  loading?: 'lazy' | 'eager';
  onLoad?: () => void;
  onError?: () => void;
  fallbackSrc?: string;
  showPlaceholder?: boolean;
}

export default function OptimizedImage({
  src,
  alt,
  width,
  height,
  fill = false,
  className = '',
  priority = false,
  quality = 80,
  placeholder = 'empty',
  blurDataURL,
  sizes = '100vw',
  aspectRatio,
  objectFit = 'cover',
  loading = 'lazy',
  onLoad,
  onError,
  fallbackSrc = '/images/placeholder.svg',
  showPlaceholder = true,
}: OptimizedImageProps) {
  const [isLoading, setIsLoading] = useState(true);
  const [hasError, setHasError] = useState(false);
  const [isInView, setIsInView] = useState(false);
  const imageRef = useRef<HTMLDivElement>(null);

  // Intersection Observer for lazy loading
  useEffect(() => {
    if (priority || !imageRef.current) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsInView(true);
          observer.disconnect();
        }
      },
      { threshold: 0.1, rootMargin: '50px' }
    );

    observer.observe(imageRef.current);
    return () => observer.disconnect();
  }, [priority]);

  const handleLoad = () => {
    setIsLoading(false);
    onLoad?.();
  };

  const handleError = () => {
    setHasError(true);
    setIsLoading(false);
    onError?.();
  };

  // Generate blur data URL for placeholder
  const generateBlurDataURL = (w: number, h: number) => {
    return `data:image/svg+xml;base64,${btoa(
      `<svg width="${w}" height="${h}" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <linearGradient id="g">
            <stop stop-color="#f1f5f9" offset="20%" />
            <stop stop-color="#e2e8f0" offset="50%" />
            <stop stop-color="#f1f5f9" offset="70%" />
          </linearGradient>
        </defs>
        <rect width="${w}" height="${h}" fill="url(#g)" />
      </svg>`
    )}`;
  };

  // Container styles
  const containerStyle = aspectRatio 
    ? { aspectRatio } 
    : width && height 
      ? { width, height } 
      : {};

  // Should load image
  const shouldLoadImage = priority || isInView;

  return (
    <div 
      ref={imageRef}
      className={`relative overflow-hidden ${className}`}
      style={containerStyle}
    >
      {/* Loading placeholder */}
      {isLoading && showPlaceholder && (
        <div className="absolute inset-0 flex items-center justify-center bg-gray-100 animate-pulse">
          <div className="flex flex-col items-center">
            <Loader2 className="w-8 h-8 text-gray-400 animate-spin" />
            <span className="text-xs text-gray-500 mt-2">Loading...</span>
          </div>
        </div>
      )}

      {/* Error fallback */}
      {hasError && (
        <div className="absolute inset-0 flex items-center justify-center bg-gray-100">
          <div className="flex flex-col items-center text-gray-500">
            <ImageIcon className="w-12 h-12 mb-2" />
            <span className="text-sm">Image unavailable</span>
          </div>
        </div>
      )}

      {/* Main image */}
      {shouldLoadImage && !hasError && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: isLoading ? 0 : 1 }}
          transition={{ duration: 0.3 }}
          className="relative w-full h-full"
        >
          <Image
            src={hasError ? fallbackSrc : src}
            alt={alt}
            width={fill ? undefined : width}
            height={fill ? undefined : height}
            fill={fill}
            priority={priority}
            quality={quality}
            placeholder={placeholder}
            blurDataURL={blurDataURL || (width && height ? generateBlurDataURL(width, height) : undefined)}
            sizes={sizes}
            loading={priority ? 'eager' : 'lazy'}
            style={{
              objectFit: objectFit,
            }}
            onLoad={handleLoad}
            onError={handleError}
            className="transition-all duration-300"
          />
        </motion.div>
      )}
    </div>
  );
}

// Progressive Image Component with multiple qualities
export function ProgressiveImage({
  src,
  alt,
  width,
  height,
  className = '',
  quality = 80,
  ...props
}: OptimizedImageProps) {
  const [currentQuality, setCurrentQuality] = useState(10);

  useEffect(() => {
    const timer = setTimeout(() => {
      setCurrentQuality(quality);
    }, 100);

    return () => clearTimeout(timer);
  }, [quality]);

  return (
    <OptimizedImage
      src={src}
      alt={alt}
      width={width}
      height={height}
      quality={currentQuality}
      className={className}
      {...props}
    />
  );
}

// Hero Image Component with optimized loading
export function HeroImage({
  src,
  alt,
  className = '',
  ...props
}: OptimizedImageProps) {
  return (
    <OptimizedImage
      src={src}
      alt={alt}
      priority={true}
      quality={90}
      sizes="100vw"
      fill={true}
      objectFit="cover"
      placeholder="blur"
      className={`${className} z-0`}
      {...props}
    />
  );
}

// Product Image Component with hover effects
export function ProductImage({
  src,
  alt,
  hoverSrc,
  width = 400,
  height = 400,
  className = '',
  ...props
}: OptimizedImageProps & { hoverSrc?: string }) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      className={`relative overflow-hidden ${className}`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <OptimizedImage
        src={src}
        alt={alt}
        width={width}
        height={height}
        quality={85}
        className="transition-transform duration-300 hover:scale-105"
        {...props}
      />
      
      {hoverSrc && (
        <div className={`absolute inset-0 transition-opacity duration-300 ${isHovered ? 'opacity-100' : 'opacity-0'}`}>
          <OptimizedImage
            src={hoverSrc}
            alt={`${alt} - alternate view`}
            width={width}
            height={height}
            quality={85}
            className="w-full h-full"
            objectFit="cover"
          />
        </div>
      )}
    </div>
  );
}

// Gallery Image Component with click to enlarge
export function GalleryImage({
  src,
  alt,
  thumbnailSrc,
  width = 300,
  height = 300,
  className = '',
  onClick,
  ...props
}: OptimizedImageProps & { 
  thumbnailSrc?: string; 
  onClick?: () => void; 
}) {
  const [isEnlarged, setIsEnlarged] = useState(false);

  const handleClick = () => {
    setIsEnlarged(true);
    onClick?.();
  };

  return (
    <>
      <div
        className={`relative cursor-pointer overflow-hidden rounded-lg ${className}`}
        onClick={handleClick}
      >
        <OptimizedImage
          src={thumbnailSrc || src}
          alt={alt}
          width={width}
          height={height}
          quality={75}
          className="transition-all duration-300 hover:scale-105 hover:brightness-110"
          {...props}
        />
        
        <div className="absolute inset-0 bg-black bg-opacity-0 hover:bg-opacity-20 transition-all duration-300 flex items-center justify-center">
          <div className="text-white opacity-0 hover:opacity-100 transition-opacity duration-300">
            <ImageIcon className="w-8 h-8" />
          </div>
        </div>
      </div>

      {/* Enlarged view modal */}
      {isEnlarged && (
        <div
          className="fixed inset-0 bg-black bg-opacity-90 z-50 flex items-center justify-center p-4"
          onClick={() => setIsEnlarged(false)}
        >
          <div className="relative max-w-4xl max-h-full">
            <OptimizedImage
              src={src}
              alt={alt}
              width={800}
              height={600}
              quality={95}
              className="max-w-full max-h-full object-contain"
              priority={true}
            />
            <button
              onClick={() => setIsEnlarged(false)}
              className="absolute top-4 right-4 text-white text-xl font-bold w-8 h-8 flex items-center justify-center bg-black bg-opacity-50 rounded-full hover:bg-opacity-70"
            >
              ×
            </button>
          </div>
        </div>
      )}
    </>
  );
}

// Avatar Image Component
export function AvatarImage({
  src,
  alt,
  size = 40,
  className = '',
  fallbackInitials,
  ...props
}: OptimizedImageProps & { 
  size?: number; 
  fallbackInitials?: string; 
}) {
  const [hasError, setHasError] = useState(false);

  return (
    <div
      className={`relative overflow-hidden rounded-full ${className}`}
      style={{ width: size, height: size }}
    >
      {!hasError ? (
        <OptimizedImage
          src={src}
          alt={alt}
          width={size}
          height={size}
          quality={80}
          className="rounded-full"
          onError={() => setHasError(true)}
          {...props}
        />
      ) : (
        <div className="w-full h-full bg-gray-300 flex items-center justify-center text-gray-600 font-semibold">
          {fallbackInitials || alt?.charAt(0)?.toUpperCase() || '?'}
        </div>
      )}
    </div>
  );
}

// Background Image Component
export function BackgroundImage({
  src,
  alt,
  className = '',
  overlay = false,
  overlayOpacity = 0.5,
  children,
  ...props
}: OptimizedImageProps & { 
  overlay?: boolean; 
  overlayOpacity?: number; 
  children?: React.ReactNode; 
}) {
  return (
    <div className={`relative ${className}`}>
      <OptimizedImage
        src={src}
        alt={alt}
        fill={true}
        quality={85}
        className="absolute inset-0 z-0"
        objectFit="cover"
        {...props}
      />
      
      {overlay && (
        <div
          className="absolute inset-0 bg-black z-10"
          style={{ opacity: overlayOpacity }}
        />
      )}
      
      {children && (
        <div className="relative z-20">
          {children}
        </div>
      )}
    </div>
  );
} 