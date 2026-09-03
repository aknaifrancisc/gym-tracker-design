export interface TableColumn {
  key: string;
  label: string;
  /** 'left' | 'right' | 'center' */
  align?: string;
  /** Render cells in mono with tabular numerals */
  numeric?: boolean;
}
export interface TableProps {
  columns?: TableColumn[];
  rows?: Record<string, React.ReactNode>[];
  compact?: boolean;
  style?: React.CSSProperties;
}