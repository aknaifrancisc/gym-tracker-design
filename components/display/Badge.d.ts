export interface BadgeProps {
  /** 'neutral' | 'primary' | 'success' | 'warning' | 'danger' */
  tone?: string;
  children?: React.ReactNode;
  style?: React.CSSProperties;
}