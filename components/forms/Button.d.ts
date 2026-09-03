/** @startingPoint section="Forms" subtitle="Primary, secondary, ghost, danger button" viewport="360x120" */
export interface ButtonProps {
  /** 'primary' | 'secondary' | 'ghost' | 'danger' */
  variant?: string;
  /** 'sm' | 'md' | 'lg' */
  size?: string;
  disabled?: boolean;
  /** Leading icon node (16px) */
  icon?: React.ReactNode;
  children?: React.ReactNode;
  onClick?: () => void;
  style?: React.CSSProperties;
}