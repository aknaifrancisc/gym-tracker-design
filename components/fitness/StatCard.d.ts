/** @startingPoint section="Fitness" subtitle="Metric card: label, mono value, unit, delta badge" viewport="360x140" */
export interface StatCardProps {
  label: string;
  value: React.ReactNode;
  /** e.g. "kg", "kcal", "steps" */
  unit?: string;
  /** e.g. "↓ 6.2 kg" */
  delta?: React.ReactNode;
  /** Badge tone for the delta, default 'success' */
  deltaTone?: string;
  /** Icon chip node */
  icon?: React.ReactNode;
  /** 46px hero value instead of 34px */
  hero?: boolean;
  /** Slot under the value (Progress, caption) */
  footer?: React.ReactNode;
  /** Corner bloom: 'tl' | 'tr' | 'bl' | 'br', optional '-accent' suffix for the amber tint. */
  glow?: string;
  style?: React.CSSProperties;
}