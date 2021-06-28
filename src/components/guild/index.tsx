import React from 'react';
import { TouchableOpacityProps, View } from 'react-native';
import {ButtonContainer,ViewContent,TextName,TextOwner } from "./style";
import { Feather } from "@expo/vector-icons"
import GuildIcon from '../guild-icon';
import { Theme } from '../../global/theme';

export interface IGuildProps{
  id:string;
  name:string;
  icon: string | null;
  owner: boolean
}

interface IDataProps extends  TouchableOpacityProps{
  data: IGuildProps; 
}

const Guild:React.FC<IDataProps> = ({data,...rest}) => {
   /*cuidado componentes puros são filhos não passam propriedades */
   return (
      <ButtonContainer
          activeOpacity={0.7}
          {...rest}
      >
     <GuildIcon guildId={data.id} guildIcon={data.icon}   />    
      <ViewContent>
          <View>
          <TextName>
              {data.name  }
          </TextName> 
          <TextOwner>
              {data.owner? 'Admin' : 'Convidado'}
          </TextOwner>
          </View>
     </ViewContent>
      <Feather 
          name="chevron-right"
          color={Theme.colors.heading}
          size={24}
      />
   </ButtonContainer>
   )
}
export default Guild
