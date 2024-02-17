import { DivNav, DivNavItem, DivIcon } from './StyledSideNav'

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

const StyledIcon = ({ modo }) => {
  return (<DivIcon modo={modo}></DivIcon>)
}

export { StyledNav, StyledNavItem, StyledIcon }
