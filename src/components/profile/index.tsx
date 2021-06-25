import React from 'react';
import { View, Text } from 'react-native';
import { Container,ViewUser,Greeting,UserName,Mensagem } from './style';
import Avatar from '../avatar';

const Profile = () => {
    return (
        <Container>
           <Avatar uriImg="http://github.com/kenjimaeda54.png" />
           <View>  
             <ViewUser>
               <Greeting>
                   Ola,
               </Greeting>    
               <UserName>
                  Ricardo
               </UserName> 
           </ViewUser>
               <Mensagem> Hoje e dia de vitoria  </Mensagem>       
           </View>          
        </Container>
    )
}

export default Profile;
