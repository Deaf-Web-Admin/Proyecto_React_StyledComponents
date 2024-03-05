import { StyledList, StyledItem } from './Listado'
import placeholder from './user.png'

const ListadoViewer = () => {
  const Listados = [{
    tipo: 'Encabezado',
    tamano: 'big',
    texto: 'Name',
    contenido: '',
    imgplaceholder: '',
    clave: '1'
  },
  {
    tipo: 'Encabezado',
    tamano: '',
    texto: 'Registered',
    contenido: '',
    imgplaceholder: '',
    clave: '2'
  },
  {
    tipo: 'Encabezado',
    tamano: '',
    texto: 'Avg. Order',
    contenido: '',
    imgplaceholder: '',
    clave: '3'
  },
  {
    tipo: 'Encabezado',
    tamano: '',
    texto: 'Spent',
    contenido: '',
    imgplaceholder: '',
    clave: '4'
  },
  {
    tipo: '',
    tamano: 'big',
    texto: 'John Anderson',
    contenido: 'user',
    imgplaceholder: placeholder,
    clave: '5'
  },
  {
    tipo: '',
    tamano: '',
    texto: '24.05.2020',
    contenido: '',
    imgplaceholder: '',
    clave: '6'
  },
  {
    tipo: '',
    tamano: '',
    texto: '$75.50',
    contenido: '',
    imgplaceholder: '',
    clave: '7'
  },
  {
    tipo: '',
    tamano: '',
    texto: '225.90$',
    contenido: '',
    imgplaceholder: '',
    clave: '8'
  },
  {
    tipo: '',
    tamano: 'big',
    texto: 'Andrew Spencer',
    contenido: 'user',
    imgplaceholder: placeholder,
    clave: '9'
  },
  {
    tipo: '',
    tamano: '',
    texto: '24.05.2020',
    contenido: '',
    placeholder: '',
    clave: '10'
  },
  {
    tipo: '',
    tamano: '',
    texto: '$54.60',
    contenido: '',
    placeholder: '',
    clave: '11'
  },
  {
    tipo: '',
    tamano: '',
    texto: '320.15$',
    contenido: '',
    placeholder: '',
    clave: '12'
  }
  ]
  return (
    <>
      <StyledList>
      {Listados.map((Listado) => (
          <StyledItem tipo={Listado.tipo} contenido={Listado.contenido} tamano={Listado.tamano} key={Listado.clave}>
            <img src={Listado.imgplaceholder}></img>{Listado.texto}</StyledItem>
      ))}
      </StyledList>
    </>
  )
}

export default ListadoViewer
