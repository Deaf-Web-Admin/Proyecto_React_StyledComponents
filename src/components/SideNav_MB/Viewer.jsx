import { StyledNav, StyledNavItem } from './SideNav'
import { home, products, orders, categories, useralt, reports, coupon, apps, kb, update, user, settings } from './StyledSideNav'

const SideNavViewer = () => {
  return (
    <>
    <StyledNav>
      <StyledNavItem><img src={home}></img>Dashboard</StyledNavItem>
      <StyledNavItem><img src={orders}></img>Orders</StyledNavItem>
      <StyledNavItem><img src={products}></img>Products</StyledNavItem>
      <StyledNavItem><img src={categories}></img>Categories</StyledNavItem>
      <StyledNavItem><img src={useralt}></img>Customers</StyledNavItem>
      <StyledNavItem><img src={reports}></img>Reports</StyledNavItem>
      <StyledNavItem><img src={coupon}></img>Coupons</StyledNavItem>
      <StyledNavItem><img src={apps}></img>Aplications</StyledNavItem>
      <StyledNavItem disabled='disabled'>Other Information</StyledNavItem>
      <StyledNavItem><img src={kb}></img>Knowledge Base</StyledNavItem>
      <StyledNavItem><img src={update}></img>Products Update</StyledNavItem>
      <StyledNavItem disabled='disabled'>Settings</StyledNavItem>
      <StyledNavItem><img src={user}></img>Personal Settings</StyledNavItem>
      <StyledNavItem><img src={settings}></img>Global Settings</StyledNavItem>
    </StyledNav>

    <StyledNav modo='night'>
      <StyledNavItem modo='night'><img src={home}></img>Dashboard</StyledNavItem>
      <StyledNavItem modo='night'><img src={orders}></img>Orders</StyledNavItem>
      <StyledNavItem modo='night'><img src={products}></img>Products</StyledNavItem>
      <StyledNavItem modo='night'><img src={categories}></img>Categories</StyledNavItem>
      <StyledNavItem modo='night'><img src={useralt}></img>Customers</StyledNavItem>
      <StyledNavItem modo='night'><img src={reports}></img>Reports</StyledNavItem>
      <StyledNavItem modo='night'><img src={coupon}></img>Coupons</StyledNavItem>
      <StyledNavItem modo='night'><img src={apps}></img>Aplications</StyledNavItem>
      <StyledNavItem disabled='disabled'>Other Information</StyledNavItem>
      <StyledNavItem modo='night'><img src={kb}></img>Knowledge Base</StyledNavItem>
      <StyledNavItem modo='night'><img src={update}></img>Products Update</StyledNavItem>
      <StyledNavItem disabled='disabled'>Settings</StyledNavItem>
      <StyledNavItem modo='night'><img src={user}></img>Personal Settings</StyledNavItem>
      <StyledNavItem modo='night'><img src={settings}></img>Global Settings</StyledNavItem>
    </StyledNav>
    </>
  )
}

export default SideNavViewer
