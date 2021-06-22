import React from 'react';
import { StatusBar} from 'react-native';
import { Container, ImageBackGround, Title, Subtitles,Content } from "./styles";
import illustrutation from "../../assets/illustration.png"
import ButtonIcon from '../../components/button-icon/button-icon';


const Sign = () => {

   return (
      <Container>  
         <StatusBar
            barStyle="light-content"
            backgroundColor="transparent"
            translucent

         />
         <ImageBackGround source={illustrutation} resizeMode="stretch" />
         <Content>
            <Title>
               Conecte-se{`\n`}
               e organize suas{`\n`}
               jogatinas
            </Title>
            <Subtitles>Crie grupos para jogar seus game favoritos com seus amigos</Subtitles>
            <ButtonIcon  title="Entrar com Discord" activeOpacity={0.7}  />
         </Content>   
      </Container>
   );
}
export default Sign;
