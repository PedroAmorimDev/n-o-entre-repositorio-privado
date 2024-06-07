import { Caixa, LogoBox, BoxDireita, Textos, DivTextos, Aabout } from "../styles/Box"
import icon from '../assets/about.svg'
const Box = ({ paragrafo1 }) => {
     return (
          <>
               <Caixa>

                    <LogoBox>
                         QUEST.
                    </LogoBox>
                    <BoxDireita>
                         <DivTextos style={{width:"700px"}}>
                              <Textos style={{fontSize:"30px"}}>{paragrafo1}</Textos>
                              <Aabout href="./sobre"><img src={icon} alt="" /></Aabout>
                         </DivTextos>
                         <DivTextos style={{marginBottom:'60px', width:'300px'}}>
                              <Textos>Explore o poder do aprendizado prático e alcance seu potencial máximo!</Textos>
                         </DivTextos>
                    </BoxDireita>
               </Caixa>
          </>
     )
}

export default Box