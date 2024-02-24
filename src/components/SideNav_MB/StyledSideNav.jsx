import styled from 'styled-components'
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

const home = homesvg
const orders = orderssvg
const products = productssvg
const categories = categoriessvg
const useralt = useraltsvg
const reports = reportssvg
const coupon = couponssvg
const apps = appssvg
const kb = kbsvg
const update = updatesvg
const user = usersvg
const settings = settingssvg

const DivNav = styled.div`
  width: 310px;
  height: auto;
  margin: 3px;
  border: 0px;
  height: auto;
  display: flex;
  flex-direction: column;
  flex-wrap: nowrap;
  align-items: center;
  justify-content: center;
  background: ${(props) =>
    props.modo === 'night' ? 'var(--general90)' : 'var(--general30)'};
`

const DivNavItem = styled.div`
border-radius:5px;
width:300px;
border:0px;
display:flex;
flex-direction:row;
margin:2px;
gap:6px;
padding:3px;

align-items:${(props) =>
  props.disabled === 'disabled' ? 'flex-end' : 'center'};

font-style:${(props) => (props.disabled === 'disabled' ? 'italic' : 'normal')};

height:${(props) => (props.disabled === 'disabled' ? '40px' : '30px')};
filter:${(props) => (props.modo === 'night' ? 'invert(1)' : 'invert(0)')};

color:${(props) =>
  props.disabled === 'disabled'
    ? 'var(--general80)'
    : 'var(--general100)'};
img{
  width:20px;
  height:20px;
}  
  &:hover{
img{
  filter: invert(1);}
  color:${(props) =>
    props.disabled === 'disabled' ? 'var(--general80)' : 'var(--general30)'};
  background:${(props) =>
    props.disabled === 'disabled' ? 'inherit' : 'var(--primary90)'}
}}`
export {
  DivNav,
  DivNavItem,
  home,
  orders,
  products,
  categories,
  useralt,
  reports,
  coupon,
  apps,
  kb,
  update,
  user,
  settings
}
