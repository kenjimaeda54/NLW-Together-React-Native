import React from 'react';
import { View, Text } from 'react-native';
import { Container,ViewUser,Greeting,UserName,Mensagem } from './style';
import { useAth } from "../../hooks/auth"
import Avatar from '../avatar';

const Profile = () => {
   const { user,randomPhrases } = useAth()

    return (
        <Container>
           <Avatar uriImg={user.avatar} />
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
