import React from 'react';
import Background from '../../components/background';
import Header from "../../components/header";
import Banner from "../../assets/banner.png"
import { BorderlessButton } from "react-native-gesture-handler"
import { Fontisto  } from "@expo/vector-icons"
import { Theme } from '../../global/theme';
import { 
     BannerIgm,
     ViewContent,
     TextTitle,
     TextSubTitle,
     ListMember,
     ViewFooter
} from  "./style"
import Member from '../../components/menber';
import ListHeader from '../../components/list-header';
import ListSplit from '../../components/list-split';
import ButtonIcon from '../../components/button-icon/button-icon';

const AppointmentDetails = () => {
  const member =[
     {
      id:"1", 
      username:"Ricardo",
      status:"disponível",
      avatar_url: "https://github.com/kenjimaeda54.png"
     
     },
     {
      id:"2", 
      username:"Rafael",
      status:"ocupado",
      avatar_url: "https://github.com/kenjimaeda54.png"
     },
  ]


    return (
      <Background>
          <Header 
            title="Detalhes"
            action={
               <BorderlessButton>
                    <Fontisto
                       name="share"
                       color={Theme.colors.primary}
                       size={24}                  
                    />   
               </BorderlessButton>
            }
            />
            <BannerIgm  
               source={Banner}
               
            >
               <ViewContent>
                  <TextTitle> Lendários   </TextTitle>
                  <TextSubTitle> 
                     É hoje que vamos chegar ao challenger 
                     sem perder uma partida da md10 </TextSubTitle>  
               </ViewContent>   
            </BannerIgm>
            <ListHeader   
               title="Jogadores"
               subtitles="total3"
               
            />
            <ListMember 
              data={member}
              keyExtractor={(item:any)=> item.id}
              renderItem={({item}:any)=> <Member data={item} />}
              ItemSeparatorComponent={()=> <ListSplit /> }
              showsVerticalScrollIndicator={false}
             />
             <ViewFooter>
               <ButtonIcon 
                  title="Entrar na partida"
               />
             </ViewFooter>

      </Background>
    )
};

export default AppointmentDetails;
