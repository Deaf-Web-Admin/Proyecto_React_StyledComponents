import { StyledNav, StyledNavItem, StyledIcon } from './SideNav'

const SideNavViewer = () => {
  return (
    <>
    <StyledNav >
      <StyledNavItem ><StyledIcon></StyledIcon>Dashboard</StyledNavItem>
      <StyledNavItem ><StyledIcon></StyledIcon>Orders</StyledNavItem>
      <StyledNavItem ><StyledIcon></StyledIcon>Products</StyledNavItem>
      <StyledNavItem ><StyledIcon></StyledIcon>Categories</StyledNavItem>
      <StyledNavItem ><StyledIcon></StyledIcon>Customers</StyledNavItem>
      <StyledNavItem ><StyledIcon></StyledIcon>Reports</StyledNavItem>
      <StyledNavItem ><StyledIcon></StyledIcon>Coupons</StyledNavItem>
      <StyledNavItem ><StyledIcon></StyledIcon>Aplications</StyledNavItem>
      <StyledNavItem disabled='disabled'><StyledIcon></StyledIcon>Other Information</StyledNavItem>
      <StyledNavItem ><StyledIcon></StyledIcon>Knowledge Base</StyledNavItem>
      <StyledNavItem ><StyledIcon></StyledIcon>Products Update</StyledNavItem>
      <StyledNavItem disabled='disabled'><StyledIcon></StyledIcon>Settings</StyledNavItem>
      <StyledNavItem ><StyledIcon></StyledIcon>Personal Settings</StyledNavItem>
      <StyledNavItem ><StyledIcon></StyledIcon>Global Settings</StyledNavItem>
    </StyledNav>
    </>
  )
}

export default SideNavViewer
