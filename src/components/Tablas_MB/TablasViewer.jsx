import { StyledTabla, StyledCelda } from './Tabla'

const TablaViewer = () => {
  const ContenidoCeldas = [
    { tipo: 'Encabezado', texto: 'Uno', fondo: '', clave: '1' },
    { tipo: 'Encabezado', texto: 'Dos', fondo: '', clave: '2' },
    { tipo: 'Encabezado', texto: 'Tres', fondo: '', clave: '3' },
    { tipo: 'Encabezado', texto: 'Cuatro', fondo: '', clave: '4' },
    { tipo: 'Encabezado', texto: 'Cinco', fondo: '', clave: '5' },
    { tipo: 'Encabezado', texto: 'Seis', fondo: '', clave: '6' },
    { tipo: 'Encabezado', texto: 'Siete', fondo: '', clave: '7' },
    { tipo: 'Encabezado', texto: 'Ocho', fondo: '', clave: '8' },
    { tipo: 'Encabezado', texto: 'Nueve', fondo: '', clave: '9' },
    { tipo: 'Encabezado', texto: 'Diez', fondo: '', clave: '10' },
    { tipo: '', texto: 'Uno', fondo: 'amarillo', clave: '11' },
    { tipo: '', texto: 'Dos', fondo: 'azul', clave: '12' },
    { tipo: '', texto: 'Tres', fondo: 'verde', clave: '13' },
    { tipo: '', texto: 'Cuatro', fondo: 'rojo', clave: '14' },
    { tipo: '', texto: 'Cinco', fondo: 'gris', clave: '15' },
    { tipo: '', texto: 'Seis', fondo: 'amarillo', clave: '16' },
    { tipo: '', texto: 'Siete', fondo: 'azul', clave: '17' },
    { tipo: '', texto: 'Ocho', fondo: 'verde', clave: '18' },
    { tipo: '', texto: 'Nueve', fondo: 'rojo', clave: '19' },
    { tipo: '', texto: 'Diez', fondo: 'gris', clave: '20' },
    { tipo: '', texto: 'Uno', fondo: 'amarillo', clave: '21' },
    { tipo: '', texto: 'Dos', fondo: 'azul', clave: '22' },
    { tipo: '', texto: 'Tres', fondo: 'verde', clave: '23' },
    { tipo: '', texto: 'Cuatro', fondo: 'rojo', clave: '24' },
    { tipo: '', texto: 'Cinco', fondo: 'gris', clave: '25' },
    { tipo: '', texto: 'Seis', fondo: 'amarillo', clave: '26' },
    { tipo: '', texto: 'Siete', fondo: 'azul', clave: '27' },
    { tipo: '', texto: 'Ocho', fondo: 'verde', clave: '28' },
    { tipo: '', texto: 'Nueve', fondo: 'rojo', clave: '29' },
    { tipo: '', texto: 'Diez', fondo: 'gris', clave: '30' },
    { tipo: '', texto: 'Uno', fondo: 'amarillo', clave: '31' },
    { tipo: '', texto: 'Dos', fondo: 'azul', clave: '32' },
    { tipo: '', texto: 'Tres', fondo: 'verde', clave: '33' },
    { tipo: '', texto: 'Cuatro', fondo: 'rojo', clave: '34' },
    { tipo: '', texto: 'Cinco', fondo: 'gris', clave: '35' },
    { tipo: '', texto: 'Seis', fondo: 'amarillo', clave: '36' },
    { tipo: '', texto: 'Siete', fondo: 'azul', clave: '37' },
    { tipo: '', texto: 'Ocho', fondo: 'verde', clave: '38' },
    { tipo: '', texto: 'Nueve', fondo: 'rojo', clave: '39' },
    { tipo: '', texto: 'Diez', fondo: 'gris', clave: '40' },
    { tipo: '', texto: 'Uno', fondo: 'amarillo', clave: '41' },
    { tipo: '', texto: 'Dos', fondo: 'azul', clave: '42' },
    { tipo: '', texto: 'Tres', fondo: 'verde', clave: '43' },
    { tipo: '', texto: 'Cuatro', fondo: 'rojo', clave: '44' },
    { tipo: '', texto: 'Cinco', fondo: 'gris', clave: '45' },
    { tipo: '', texto: 'Seis', fondo: 'amarillo', clave: '46' },
    { tipo: '', texto: 'Siete', fondo: 'azul', clave: '47' },
    { tipo: '', texto: 'Ocho', fondo: 'verde', clave: '48' },
    { tipo: '', texto: 'Nueve', fondo: 'rojo', clave: '49' },
    { tipo: '', texto: 'Diez', fondo: 'gris', clave: '50' }]
  return (
    <>
      <StyledTabla cantceldas="diez">
      {ContenidoCeldas.map((ContenidoCelda) => (
          <StyledCelda tipo={ContenidoCelda.tipo} fondo={ContenidoCelda.fondo} key={ContenidoCelda.clave}>
            {ContenidoCelda.texto}
          </StyledCelda>
      ))}
          </StyledTabla>
    </>
  )
}
export default TablaViewer
