export interface TrendChartProps {
  data?: number[];
  /** Chart height px, default 120. Width fills the container. */
  height?: number;
  /** Series color, default var(--chart-1) */
  color?: string;
  /** Gradient area fill under the line, default true */
  fill?: boolean;
  /** Dots on data points (auto-thinned past 12 points) */
  showDots?: boolean;
  /** Grow to fill remaining card height (height becomes the minimum) */
  grow?: boolean;
  xLabels?: string[];
  /** Y tick formatter, default locale number */
  yFormat?: (v: number) => string;
  style?: React.CSSProperties;
}