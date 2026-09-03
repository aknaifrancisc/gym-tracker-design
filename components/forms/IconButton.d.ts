export interface IconButtonProps {
  /** Accessible label (required) */
  label: string;
  /** 'sm' (28px) | 'md' (36px) */
  size?: string;
  /** 'ghost' | 'outline' */
  variant?: string;
  /** The icon (16-20px) */
  children?: React.ReactNode;
  onClick?: () => void;
  style?: React.CSSProperties;
}