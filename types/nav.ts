export interface NavItem {
  title: string
  href?: string
  disabled?: boolean
  external?: boolean
}

export interface MenuItem {
  label: string
  submenu?: JSX.Element | null
  icon?: JSX.Element | null
  url?: string | null
  info?: string | JSX.Element | null
  href?: string
}
export interface MenuMobileItems {
  label: string
  submenu?: JSX.Element | null
  icon?: JSX.Element | null
  url?: string | null
  info?: string | JSX.Element | null
  href?: string
}
export interface FlyoutProps {
  submenu: MenuItem[] | null
}

export interface FlyoutWithColsProps {
  submenu: {
    col1?: MenuItem[]
    col2?: MenuItem[]
  }
}

export interface MenuBottomSectionProps {
  bothsections?: boolean
  className?: string
}

export interface FlyoutMobileProps {
  hidden: boolean
  menuItems: MenuItem[]
}
export interface MobileNavProps {
  MenuMobileItems: MenuMobileItems[]
  hidden: boolean
}

export interface HeaderProps {
  loggedIn?: boolean
}
