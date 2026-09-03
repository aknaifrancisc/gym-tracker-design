export interface WorkoutStat { value: React.ReactNode; label: string; }
export interface WorkoutRowProps {
  /** Icon chip node */
  icon?: React.ReactNode;
  title: React.ReactNode;
  /** Secondary line, e.g. "Upper body · 45 min" */
  meta?: React.ReactNode;
  /** Right-aligned mono stat columns */
  stats?: WorkoutStat[];
  badge?: React.ReactNode;
  onClick?: () => void;
  style?: React.CSSProperties;
}