import styled from 'styled-components'

const DivNav = styled.div`
width:310px;
height:auto;
margin:3px;
border:0px;
height:auto;
display:flex;
flex-direction:column;
flex-wrap:nowrap;
align-items:center;
justify-content:center;
background:${(props) =>
  props.modo === 'night'
  ? 'var(--general90)'
  : 'white'
  };
`

const DivNavItem = styled.div`
border-radius:5px;
width:300px;
border:0px;
display:flex;
flex-direction:row;
margin:2px;

align-items:${(props) =>
props.disabled === 'disabled'
? 'flex-end'
: 'center'};

font-style:${(props) =>
  props.disabled === 'disabled'
  ? 'italic'
  : 'normal'};

height:${(props) =>
  props.disabled === 'disabled'
  ? '40px'
  : '30px'};

color:${(props) =>
    props.disabled === 'disabled'
    ? 'var(--general80)'
    : 'var(--general100)'};
  
  &:hover{
  color:${(props) =>
    props.modo === 'night'
    ? 'white'
    : 'var(--general30)'};
  background:${(props) =>
    props.modo === 'night'
    ? 'white'
    : 'var(--primary90)'
    }
}}`
const DivIcon = styled.div`
width:25px;
height:25px;
background-image: url('./Icons/home.svg');
background-repeat: no-repeat;
background-size: 20px;
`
export { DivNav, DivNavItem, DivIcon }
