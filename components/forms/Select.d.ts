export interface SelectProps {
  label?: string;
  options?: string[];
  value?: string;
  onChange?: (e: any) => void;
  style?: React.CSSProperties;
}