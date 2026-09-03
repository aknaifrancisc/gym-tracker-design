export interface ProgressRingProps {
  value?: number;
  max?: number;
  /** Outer px, default 120 */
  size?: number;
  stroke?: number;
  /** CSS color, default var(--primary) */
  color?: string;
  /** Center text; defaults to value */
  label?: React.ReactNode;
  sublabel?: React.ReactNode;
  /** Center label color, default var(--text-1). Pass '#fff' on dark/gradient panels. */
  textColor?: string;
  /** Sublabel color, default var(--text-2). */
  sublabelColor?: string;
  style?: React.CSSProperties;
}