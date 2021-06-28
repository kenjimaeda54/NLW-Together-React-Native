import React,{useState,useEffect} from 'react';
import { BorderlessButton } from "react-native-gesture-handler"
import { Fontisto  } from "@expo/vector-icons"
import { Theme } from '../../global/theme';
import { useRoute } from '@react-navigation/native';
import { Alert,Platform,Share } from "react-native"
import Background from '../../components/background';
import Header from "../../components/header";
import Banner from "../../assets/banner.png";
import * as Linking from "expo-linking"

import { 
     BannerIgm,
     ViewContent,
     TextTitle,
     TextSubTitle,
     ListMember,
     ViewFooter
} from  "./style"
import Member, { IMemberProps } from '../../components/menber';
import ListHeader from '../../components/list-header';
import ListSplit from '../../components/list-split';
import ButtonIcon from '../../components/button-icon/button-icon';
import { IAppointmentProps } from '../../components/appointment';
import api from '../../services/api';
import Loading from '../../components/loader';

interface IRoutes {
   guildSelected: IAppointmentProps;
}

interface IWidget{
   id:string,
   members:IMemberProps[],
   presence_count: string,
   name:string,
   instant_invite: string,

}

const AppointmentDetails = () => {
  const route = useRoute(); 
  const { guildSelected } = route.params as IRoutes;
  /* recebendo as rotas,fiz uma tipagem, para garantir ao
  type script quem é guidSelected*/ 
  const [widget,setWidget ]  = useState<IWidget>({} as IWidget);
  const [loading,setLoading] = useState(true);
  
  const fetchWidget = async () =>{
   try {
      const response = await api.get(`/guilds/${guildSelected.guild.id}/widget.json`); 
      setWidget(response.data) 

   } catch {
     Alert.alert("Você precisa verificar o widget ")
   }      
   finally{
       setLoading(false);
   }

  }
  
  useEffect(()=>{
   fetchWidget()
  },[])
   
  const shareGuild = () =>{
   const message = Platform.OS === 'ios'?
   `Junte-se a nos ${guildSelected.guild.name}`
   :
   widget.instant_invite
   Share.share({
      message,
      url:widget.instant_invite,
   })}
  
   const handleGoServer = () => Linking.openURL(widget.instant_invite);

    return (
      <Background>
          <Header 
            title="Detalhes"
            action={
               guildSelected.guild.owner &&
               <BorderlessButton onPress={shareGuild} >
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
                  <TextTitle> {guildSelected.guild.name}   </TextTitle>
                  <TextSubTitle> 
                     {guildSelected.description} </TextSubTitle>  
               </ViewContent>   
            </BannerIgm>

            {loading? 
              <Loading />

            :
              <React.Fragment>
                 <ListHeader   
                   title="Jogadores"
                   subtitles={`Total ${widget.members.length}`}            
                 />
              <ListMember 
                  data={widget.members? widget.members : []  }
                  /*preciso determinar que meu members e vetor */
                  /*lembrando que flatlist so carrega vetores */                       
                  keyExtractor={(item:any)=> item.id}
                  renderItem={({item}:any)=> <Member data={item} />}
                  ItemSeparatorComponent={()=> <ListSplit /> }
                  showsVerticalScrollIndicator={false}
              />            
              </React.Fragment>

            }

            {guildSelected.guild.owner&&


             <ViewFooter>
               <ButtonIcon 
                  title="Entrar na partida"
                  onPress={handleGoServer}
               />
             </ViewFooter>
            }

      </Background>
    )
};

export default AppointmentDetails;
