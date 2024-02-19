import { DivNav, DivNavItem } from './StyledSideNav'

const StyledNav = ({ children, modo }) => {
  return (<DivNav modo={modo}>
        {children}
        </DivNav>)
}
const StyledNavItem = ({ children, modo, disabled }) => {
  return (<DivNavItem modo={modo} disabled={disabled}>
        {children}
        </DivNavItem>)
}

export { StyledNav, StyledNavItem }
