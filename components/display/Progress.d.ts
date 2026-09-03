export interface ProgressProps {
  value?: number;
  max?: number;
  /** 'primary' | 'success' | 'warning' | 'danger' | any CSS color */
  tone?: string;
  /** Bar height px, default 6 */
  height?: number;
  style?: React.CSSProperties;
}