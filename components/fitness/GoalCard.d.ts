export interface GoalCardProps {
  title: string;
  current: React.ReactNode;
  target: React.ReactNode;
  unit?: string;
  /** 0-100; bar turns success at 100 */
  progress?: number;
  dateLabel?: string;
  badge?: React.ReactNode;
  style?: React.CSSProperties;
}