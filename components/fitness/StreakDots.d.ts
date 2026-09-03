export interface StreakDotsProps {
  /** Array of 'done' | 'partial' | 'missed' | 'today' */
  days?: string[];
  /** Day labels, default M T W T F S S */
  labels?: string[];
  /** Dot px, default 24 */
  size?: number;
  style?: React.CSSProperties;
}