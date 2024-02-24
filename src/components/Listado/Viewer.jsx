import { StyledList, StyledItem } from './Listado'
import placeholder from './user.png'

const ListadoViewer = () => {
  return (
    <>
      <StyledList>
      <StyledItem tipo={'Encabezado'} tamano={'big'}>Name</StyledItem>
      <StyledItem tipo={'Encabezado'}>Registered</StyledItem>
      <StyledItem tipo={'Encabezado'}>Avg. Order</StyledItem>
      <StyledItem tipo={'Encabezado'}>Spent</StyledItem>
      <StyledItem contenido={'user'} tamano={'big'}><img src={placeholder}></img> John Anderson</StyledItem>
      <StyledItem >24.05.2020</StyledItem>
      <StyledItem >$75.50</StyledItem>
      <StyledItem >225.90$</StyledItem>
      <StyledItem contenido={'user'} tamano={'big'}><img src={placeholder}></img>Andrew Spenser</StyledItem>
      <StyledItem >24.05.2020</StyledItem>
      <StyledItem >$54.60</StyledItem>
      <StyledItem >320.15$</StyledItem>
      </StyledList>
    </>
  )
}

export default ListadoViewer
