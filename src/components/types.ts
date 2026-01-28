import type { IconType } from 'react-icons';
import type { ChangelogCard } from '../types';

export interface NavItem {
  label: string;
  href: string;
}



export interface ChangelogSectionProps {
  heroImage: string;
  cards: ChangelogCard[];
}


export interface HeroImageSlideshowProps {
  images: string[];
  interval?: number; 
}

export interface SidebarItem {
  label: string;
  href?: string;
  icon: IconType;
  onClick?: () => void;
}
export interface FloatingElement {
  src: string;
  size: number | string;
  opacity?: number;
  top?: string;
  left?: string;
  right?: string;
  bottom?: string;
  transform?: string;
}

export interface HeroSectionWithImagesProps {
  floatingElements?: FloatingElement[];
  rotatingCircleSrc?: string;
  rotatingCircleSize?: number;
  circleFilter?: string;
}

