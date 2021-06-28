import React,{useState} from 'react';
import { View,Text, Alert  } from 'react-native';
import { BorderlessButton } from "react-native-gesture-handler"
import { Container,ViewUser,Greeting,UserName,Mensagem} from './style';
import { useAth } from "../../hooks/auth"
import Avatar from '../avatar';



const Profile:React.FC = () => {
   const { user,randomPhrases,handleSignOut } = useAth();
   
   const handleLogout = () =>{
     Alert.alert('Sair','Deseja sair',
     [
       {
         text:'Cancelar',
         style:'cancel'

       },
       { 
         text:'Sair?',
         onPress: () => handleSignOut(),
          
       }
     ])
   }
   
    return (
        <Container>
           <BorderlessButton onPress={handleLogout} >
              <Avatar uriImg={user.avatar} />
           </BorderlessButton>   
           <View>  
             <ViewUser>
               <Greeting>
                   Ola,
               </Greeting>    
               <UserName>
                  {user.firstName}
               </UserName> 
           </ViewUser>
               <Mensagem> {randomPhrases}  </Mensagem>         
           </View>    
        </Container>
    )
}

export default Profile;
