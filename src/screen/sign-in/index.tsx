import React from 'react';
import { Theme } from '../../global/theme';
import { useAth } from "../../hooks/auth"
import illustrutation from "../../assets/illustration.png"
import ButtonIcon from '../../components/button-icon/button-icon';
import { Alert,ActivityIndicator } from 'react-native';
import { 
   Container, 
   ImageBackGround, 
   Title, 
   Subtitles,
   Content 
} from "./styles";

const Sign = () => {
  const {handleSign,loading } = useAth();
 
  const handleSignIn = async () =>{
     try{
       
      await handleSign();

     }catch(error:any){
        Alert.alert(error); 
     }

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
            {
               loading?
                
               <ActivityIndicator  color={Theme.colors.primary} />  
               :
               <ButtonIcon rippleColor="#fff"  onPress={handleSignIn}  title="Entrar com discord" />
            }
           
         </Content>
      </Container>
   );
}
export default Sign;
