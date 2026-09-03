/** Surface container: 16px radius, hairline border, soft shadow. */
export interface CardProps {
  children?: React.ReactNode;
  /** flat = no shadow (inside lists); raised = hover-lifted; inverse/brand = ink or blue fill. */
  variant?: 'default' | 'flat' | 'raised' | 'inverse' | 'brand';
  /** none | sm (12) | md (16, default) | lg (24) */
  padding?: 'none' | 'sm' | 'md' | 'lg';
  /** Adds hover lift + press feedback; use only when the whole card is a link. */
  interactive?: boolean;
  /** Corner glow: which corner the bloom bleeds in from, '-accent' for the amber tint.
   *  Dashboard/marketing data widgets only — one per card, alternate corners across a
   *  grid, never behind a table or a paragraph. */
  glow?: 'tl' | 'tr' | 'bl' | 'br' | 'tl-accent' | 'tr-accent' | 'bl-accent' | 'br-accent';
  onClick?: (e: React.MouseEvent) => void;
  style?: React.CSSProperties;
  className?: string;
}
export function Card(props: CardProps): JSX.Element;
