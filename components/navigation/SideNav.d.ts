export interface SideNavItem {
  id: string;
  /** Navigate to this URL instead of firing onSelect */
  href?: string;
  label: string;
  icon?: React.ReactNode;
  children?: SideNavItem[];
  /** Initial expanded state for parents, default true */
  open?: boolean;
}
export interface SideNavProps {
  items?: SideNavItem[];
  activeId?: string;
  onSelect?: (id: string) => void;
  /** Replaces the default wordmark */
  header?: React.ReactNode;
  /** Pinned bottom slot (user row, upgrade card) */
  footer?: React.ReactNode;
  style?: React.CSSProperties;
}