import styled from 'styled-components'

const DivTabla = styled.div`
width:${(props) =>
props.cantceldas === 'dos'
? '208px'
: props.cantceldas === 'tres'
? '309px'
: props.cantceldas === 'cuatro'
? '410px'
: props.cantceldas === 'cinco'
? '512px'
: props.cantceldas === 'seis'
? '614px'
: props.cantceldas === 'siete'
? '716px'
: props.cantceldas === 'ocho'
? '818px'
: props.cantceldas === 'nueve'
? '920px'
: props.cantceldas === 'diez'
? '1022px'
: '106px'
};
border:1px solid Black;
height:auto;
display:flex;
flex-direction:row;
flex-wrap:wrap;
align-items:center;
justify-content:center;
`

const StyledTabla = ({ children, cantceldas }) => {
  return (<DivTabla cantceldas={cantceldas}>
        {children}
        </DivTabla>)
}

const DivCelda = styled.div`
width:100px;
text-align:${(props) =>
props.tipo === 'Encabezado'
? 'Center'
: 'Left'
};
font-weight:${(props) =>
  props.tipo === 'Encabezado'
  ? '600'
  : '300'
  };

border:1px solid Black;
height:25px;
margin:1px;
background:${(props) =>
  props.fondo === 'amarillo'
  ? 'var(--yellow40)'
  : props.fondo === 'rojo'
  ? 'var(--red40)'
  : props.fondo === 'azul'
  ? 'var(--primary40)'
  : props.fondo === 'verde'
  ? 'var(--green40)'
  : props.fondo === 'gris'
  ? 'var(--general40)'
  : 'white'
  };
  &:hover{
    background:${(props) =>
      props.fondo === 'amarillo'
      ? 'var(--yellow60)'
      : props.fondo === 'rojo'
      ? 'var(--red60)'
      : props.fondo === 'azul'
      ? 'var(--primary60)'
      : props.fondo === 'verde'
      ? 'var(--green60)'
      : props.fondo === 'gris'
      ? 'var(--general60)'
      : 'white'
      };
  }`

const StyledCelda = ({ children, tipo, fondo }) => {
  return (<DivCelda tipo={tipo} fondo={fondo}>
        {children}
        </DivCelda>)
}

export { StyledTabla, StyledCelda }
