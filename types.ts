export interface NavItem {
  label: string;
  href: string;
}

export interface PillarProps {
  number: string;
  title: string;
  description: string;
  colorClass: string;
}

export interface ProductProps {
  name: string;
  tagline: string;
  description: string;
  image: string;
  align: 'left' | 'right';
}