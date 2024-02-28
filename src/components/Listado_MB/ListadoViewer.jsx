import { StyledList, StyledItem } from './Listado'
import placeholder from './user.png'

const ListadoViewer = () => {
  const Listados = [{
    tipo: 'Encabezado',
    tamano: 'big',
    texto: 'Name',
    contenido: '',
    imgplaceholder: ''
  },
  {
    tipo: 'Encabezado',
    tamano: '',
    texto: 'Registered',
    contenido: '',
    imgplaceholder: ''
  },
  {
    tipo: 'Encabezado',
    tamano: '',
    texto: 'Avg. Order',
    contenido: '',
    imgplaceholder: ''
  },
  {
    tipo: 'Encabezado',
    tamano: '',
    texto: 'Spent',
    contenido: '',
    imgplaceholder: ''
  },
  {
    tipo: '',
    tamano: 'big',
    texto: 'John Anderson',
    contenido: 'user',
    imgplaceholder: placeholder
  },
  {
    tipo: '',
    tamano: '',
    texto: '24.05.2020',
    contenido: '',
    imgplaceholder: ''
  },
  {
    tipo: '',
    tamano: '',
    texto: '$75.50',
    contenido: '',
    imgplaceholder: ''
  },
  {
    tipo: '',
    tamano: '',
    texto: '225.90$',
    contenido: '',
    imgplaceholder: ''
  },
  {
    tipo: '',
    tamano: 'big',
    texto: 'Andrew Spencer',
    contenido: 'user',
    imgplaceholder: placeholder
  },
  {
    tipo: '',
    tamano: '',
    texto: '24.05.2020',
    contenido: '',
    placeholder: ''
  },
  {
    tipo: '',
    tamano: '',
    texto: '$54.60',
    contenido: '',
    placeholder: ''
  },
  {
    tipo: '',
    tamano: '',
    texto: '320.15$',
    contenido: '',
    placeholder: ''
  }
  ]
  return (
    <>
      <StyledList>
      {Listados.map((Listado) => (
          <StyledItem tipo={Listado.tipo} contenido={Listado.contenido} tamano={Listado.tamano} key={Listado.texto}>
            <img src={Listado.imgplaceholder}></img>{Listado.texto}</StyledItem>
      ))}
      </StyledList>
    </>
  )
}

export default ListadoViewer
