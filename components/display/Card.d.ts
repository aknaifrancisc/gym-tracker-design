import * as React from 'react';
export interface CardProps {
  title?: React.ReactNode;
  icon?: React.ReactNode;
  action?: React.ReactNode;
  compact?: boolean;
  interactive?: boolean;
  /** Corner bloom: 'tl' | 'tr' | 'bl' | 'br', optional '-accent' suffix for the amber tint. */
  glow?: 'tl' | 'tr' | 'bl' | 'br' | 'tl-accent' | 'tr-accent' | 'bl-accent' | 'br-accent';
  children?: React.ReactNode;
  style?: React.CSSProperties;
}
export declare function Card(props: CardProps): JSX.Element;
