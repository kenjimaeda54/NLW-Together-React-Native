import React from 'react';
import { Container, ImageBackGround, Title, Subtitles,Content } from "./styles";
import { Theme } from '../../global/theme';
import { useNavigation } from '@react-navigation/core';
import illustrutation from "../../assets/illustration.png"
import ButtonIcon from '../../components/button-icon/button-icon';


const Sign = () => {
   const navigation = useNavigation()

   const handleSignIn = () =>{
       
      navigation.navigate("Home")

   }

   return (
      <Container>
         <ImageBackGround source={illustrutation}   />
         <Content accessible >
            <Title style={{fontFamily: Theme.fonts.title700,lineHeight:40  }}  >
               Conecte-se {`\n`}
               e organize suas {`\n`}
               jogatinas
            </Title>    
            <Subtitles style={{fontFamily: Theme.fonts.text400,lineHeight:25 }} > 
              Crie grupos para jogar seus games favoritos com seus amigos
            </Subtitles>
            <ButtonIcon rippleColor="#fff"  onPress={handleSignIn}  title="Entrar com discord" />
         </Content>
      </Container>
   );
}
export default Sign;
