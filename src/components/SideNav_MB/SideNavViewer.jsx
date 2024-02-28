import { StyledNav, StyledNavItem } from './SideNav'
import homesvg from './Icons/home.svg'
import orderssvg from './Icons/list-check.svg'
import productssvg from './Icons/bookmark.svg'
import categoriessvg from './Icons/folder.svg'
import useraltsvg from './Icons/users-alt.svg'
import reportssvg from './Icons/signal-alt-1.svg'
import couponssvg from './Icons/star.svg'
import appssvg from './Icons/apps.svg'
import kbsvg from './Icons/info.svg'
import updatesvg from './Icons/download.svg'
import usersvg from './Icons/user.svg'
import settingssvg from './Icons/settings.svg'
import empty from './Icons/empty.svg'

const SideNavViewer = () => {
  const Items = [
    { icono: homesvg, texto: 'Dashboard', modo: 'day', disabled: '' },
    { icono: orderssvg, texto: 'Orders', modo: 'day', disabled: '' },
    { icono: productssvg, texto: 'Products', modo: 'day', disabled: '' },
    { icono: categoriessvg, texto: 'Categories', modo: 'day', disabled: '' },
    { icono: useraltsvg, texto: 'Customers', modo: 'day', disabled: '' },
    { icono: reportssvg, texto: 'Reports', modo: 'day', disabled: '' },
    { icono: couponssvg, texto: 'Coupons', modo: 'day', disabled: '' },
    { icono: appssvg, texto: 'Aplications', modo: 'day', disabled: '' },
    { icono: empty, texto: 'Other Information', modo: 'day', disabled: 'disabled' },
    { icono: kbsvg, texto: 'Knowledge Base', modo: 'day', disabled: '' },
    { icono: updatesvg, texto: 'Products Update', modo: 'day', disabled: '' },
    { icono: empty, texto: 'Settings', modo: 'day', disabled: 'disabled' },
    { icono: usersvg, texto: 'Personal Settings', modo: 'day', disabled: '' },
    { icono: settingssvg, texto: 'Global Settings', modo: 'day', disabled: '' }]
  return (
    <>
      <StyledNav modo='day'>
      {Items.map((Item) => (
          <StyledNavItem disabled={Item.disabled} modo={Item.modo} key={Item.texto}>
            <img src={Item.icono}></img>{Item.texto}
          </StyledNavItem>
      ))}
</StyledNav>
    </>
  )
}

export default SideNavViewer
