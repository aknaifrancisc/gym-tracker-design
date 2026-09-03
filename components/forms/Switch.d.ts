export interface SwitchProps {
  label?: React.ReactNode;
  checked?: boolean;
  onChange?: (e: any) => void;
  disabled?: boolean;
  style?: React.CSSProperties;
}