import StyledTabla from './StyledTabla'

const Tabla = ({ children, primary }) => {
  return <StyledTabla primary={primary}>{children}</StyledTabla>
}

export default Tabla
