import { DivList, DivItem } from './StyledListado'
const StyledList = ({ children, cantceldas }) => {
  return (<DivList cantceldas={cantceldas}>
        {children}
        </DivList>)
}

const StyledItem = ({ children, tipo, contenido, tamano }) => {
  return (<DivItem tipo={tipo} contenido={contenido} tamano={tamano}>
      {children}
      </DivItem>)
}

export { StyledList, StyledItem }
