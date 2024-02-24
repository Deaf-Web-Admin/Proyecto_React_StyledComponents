import styled from 'styled-components'

const DivList = styled.div`
width:1035px;
height:auto;
display:flex;
flex-direction:row;
flex-wrap:wrap;
align-items:center;
justify-content:center;
`
const DivItem = styled.div`
border-bottom-width: 1px;
border-bottom-style: solid;
border-bottom-color: var(--general100);
height:50px;
display:flex;
align-items:center;
margin:0px;
gap:${(props) =>
  props.contenido === 'user'
  ? '15px'
  : '0px'
  };
justify-content:${(props) =>
  props.contenido === 'user'
  ? 'flex-start'
  : 'Center'
  };
  font-weight:${(props) =>
    props.contenido === 'user'
    ? '600'
    : '300'
    };
  background:${(props) =>
  props.tipo === 'Encabezado'
  ? 'var(--general40)'
  : 'white'
  };
  width:${(props) =>
    props.tamano === 'big'
    ? '600px'
    : '140px'
    };
    & img{height:40px;}
  }`

export { DivList, DivItem }
