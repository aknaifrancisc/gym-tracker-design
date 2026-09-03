export interface RadioProps {
  label?: React.ReactNode;
  checked?: boolean;
  onChange?: (e: any) => void;
  name?: string;
  value?: string;
  disabled?: boolean;
  style?: React.CSSProperties;
}