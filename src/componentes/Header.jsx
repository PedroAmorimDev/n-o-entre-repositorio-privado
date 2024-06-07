import {Cabeca, Logo, Lista, Buttons, Paragraph, Span} from '../styles/Cabeca'

const Header = ({sobre, calculadora, provas}) =>{
return (
     <Cabeca>
          <Logo><Span>QUE</Span>ST.</Logo>
          <Lista>
               <Paragraph  href='/sobre'   >{sobre}</Paragraph>
               <Paragraph>{calculadora}</Paragraph>
               <Paragraph href='/provas'>{provas}</Paragraph>
          </Lista>
          <Buttons>Sing up</Buttons>
     </Cabeca>
)
}

export default Header