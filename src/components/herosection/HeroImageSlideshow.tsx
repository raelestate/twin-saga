import { useEffect, useState } from "react";

interface HeroImageSlideshowProps {
  images: readonly string[];
  interval?: number;
  className?: string;
}

export function HeroImageSlideshow({
  images,
  interval = 10_000,
  className = "",
}: HeroImageSlideshowProps) {
  const [index, setIndex] = useState(0);

  const hasImages = images.length > 0;

  useEffect(() => {
    if (!hasImages) return;

    const id = window.setInterval(() => {
      setIndex((prev) => (prev + 1) % images.length);
    }, interval);

    return () => window.clearInterval(id);
  }, [hasImages, images.length, interval]);

  if (!hasImages) return null;

  return (
    <div className="relative w-full h-full flex items-center justify-center pointer-events-none">
      <img
        src={images[index]}
        alt={`Hero slide ${index + 1}`}
        className={`w-auto h-auto max-h-[500px] md:max-h-[600px] lg:max-h-[700px] xl:max-h-[800px] object-contain transition-opacity duration-1000 ${className}`}
      />
    </div>
  );
}
