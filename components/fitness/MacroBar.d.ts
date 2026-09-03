export interface MacroSegment {
  label: string;
  value: number;
  /** Shown in legend instead of raw value, e.g. "180 g" */
  display?: string;
  /** Defaults to chart palette in order */
  color?: string;
}
export interface MacroBarProps {
  segments?: MacroSegment[];
  height?: number;
  legend?: boolean;
  style?: React.CSSProperties;
}