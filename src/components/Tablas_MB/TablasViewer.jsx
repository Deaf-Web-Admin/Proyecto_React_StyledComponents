import { StyledTabla, StyledCelda } from './Tabla'

const TablaViewer = () => {
  const ContenidoCeldas = [
    { tipo: 'Encabezado', texto: 'Uno', fondo: '' },
    { tipo: 'Encabezado', texto: 'Dos', fondo: '' },
    { tipo: 'Encabezado', texto: 'Tres', fondo: '' },
    { tipo: 'Encabezado', texto: 'Cuatro', fondo: '' },
    { tipo: 'Encabezado', texto: 'Cinco', fondo: '' },
    { tipo: 'Encabezado', texto: 'Seis', fondo: '' },
    { tipo: 'Encabezado', texto: 'Siete', fondo: '' },
    { tipo: 'Encabezado', texto: 'Ocho', fondo: '' },
    { tipo: 'Encabezado', texto: 'Nueve', fondo: '' },
    { tipo: 'Encabezado', texto: 'Diez', fondo: '' },
    { tipo: '', texto: 'Uno', fondo: 'amarillo' },
    { tipo: '', texto: 'Dos', fondo: 'azul' },
    { tipo: '', texto: 'Tres', fondo: 'verde' },
    { tipo: '', texto: 'Cuatro', fondo: 'rojo' },
    { tipo: '', texto: 'Cinco', fondo: 'gris' },
    { tipo: '', texto: 'Seis', fondo: 'amarillo' },
    { tipo: '', texto: 'Siete', fondo: 'azul' },
    { tipo: '', texto: 'Ocho', fondo: 'verde' },
    { tipo: '', texto: 'Nueve', fondo: 'rojo' },
    { tipo: '', texto: 'Diez', fondo: 'gris' },
    { tipo: '', texto: 'Uno', fondo: 'amarillo' },
    { tipo: '', texto: 'Dos', fondo: 'azul' },
    { tipo: '', texto: 'Tres', fondo: 'verde' },
    { tipo: '', texto: 'Cuatro', fondo: 'rojo' },
    { tipo: '', texto: 'Cinco', fondo: 'gris' },
    { tipo: '', texto: 'Seis', fondo: 'amarillo' },
    { tipo: '', texto: 'Siete', fondo: 'azul' },
    { tipo: '', texto: 'Ocho', fondo: 'verde' },
    { tipo: '', texto: 'Nueve', fondo: 'rojo' },
    { tipo: '', texto: 'Diez', fondo: 'gris' },
    { tipo: '', texto: 'Uno', fondo: 'amarillo' },
    { tipo: '', texto: 'Dos', fondo: 'azul' },
    { tipo: '', texto: 'Tres', fondo: 'verde' },
    { tipo: '', texto: 'Cuatro', fondo: 'rojo' },
    { tipo: '', texto: 'Cinco', fondo: 'gris' },
    { tipo: '', texto: 'Seis', fondo: 'amarillo' },
    { tipo: '', texto: 'Siete', fondo: 'azul' },
    { tipo: '', texto: 'Ocho', fondo: 'verde' },
    { tipo: '', texto: 'Nueve', fondo: 'rojo' },
    { tipo: '', texto: 'Diez', fondo: 'gris' },
    { tipo: '', texto: 'Uno', fondo: 'amarillo' },
    { tipo: '', texto: 'Dos', fondo: 'azul' },
    { tipo: '', texto: 'Tres', fondo: 'verde' },
    { tipo: '', texto: 'Cuatro', fondo: 'rojo' },
    { tipo: '', texto: 'Cinco', fondo: 'gris' },
    { tipo: '', texto: 'Seis', fondo: 'amarillo' },
    { tipo: '', texto: 'Siete', fondo: 'azul' },
    { tipo: '', texto: 'Ocho', fondo: 'verde' },
    { tipo: '', texto: 'Nueve', fondo: 'rojo' },
    { tipo: '', texto: 'Diez', fondo: 'gris' }]
  return (
    <>
      <StyledTabla cantceldas="diez">
      {ContenidoCeldas.map((ContenidoCelda) => (
          <StyledCelda tipo={ContenidoCelda.tipo} fondo={ContenidoCelda.fondo} key={ContenidoCelda.texto}>
            {ContenidoCelda.texto}
          </StyledCelda>
      ))}
          </StyledTabla>
    </>
  )
}
export default TablaViewer
