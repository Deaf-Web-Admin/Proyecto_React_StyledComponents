import { DivTabla, DivCelda } from './StyledTabla'

const StyledTabla = ({ children, cantceldas }) => {
  return (<DivTabla cantceldas={cantceldas}>
        {children}
        </DivTabla>)
}

const StyledCelda = ({ children, tipo, fondo }) => {
  return (<DivCelda tipo={tipo} fondo={fondo}>
      {children}
      </DivCelda>)
}

export { StyledTabla, StyledCelda }
