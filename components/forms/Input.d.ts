export interface InputProps {
  label?: string;
  /** Unit suffix rendered in mono, e.g. "kg", "kcal" */
  unit?: string;
  hint?: string;
  /** Error message; also colors the border */
  error?: string;
  placeholder?: string;
  value?: string;
  onChange?: (e: any) => void;
  type?: string;
  style?: React.CSSProperties;
  inputStyle?: React.CSSProperties;
}