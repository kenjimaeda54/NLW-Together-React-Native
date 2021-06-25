import React from 'react'
import { RectButton,RectButtonProps} from "react-native-gesture-handler"
import { Theme } from '../../global/theme'
import {
    Container,
    ViewContent,
    ViewHeader,
    TextTitle,
    TextCategory,
    ViewFooter,
    ViewDataInfo,
    TextDate,
    ViewPlayerInfo,
    TextPlayer,
} from "./style"
import { CategoryList } from '../../util/category'
import GuildIcon from '../guild-icon'
import CalendarSvg from '../../assets/calendar.svg'
import Player from "../../assets/player.svg"


export interface IGuildProps {
    id: string;
    name:string;
    icon: null;
    owner: boolean;
 
}

export interface IAppointmentProps{
    id: string;
    guild: IGuildProps;
    category: string;
    date: string;
    description: string;
}

interface Data extends RectButtonProps  {
 data: IAppointmentProps; 

}

const Appointment:React.FC<Data> = ({data,...rest}) => {
   const [category] =  CategoryList.filter(item=>  item.id === data.category )
   const { owner } = data.guild;
   const {primary, on  } = Theme.colors;

    return (
        <RectButton {...rest}  >
           <Container>
               <GuildIcon />  
               <ViewContent>
                  <ViewHeader>
                     <TextTitle>
                        {data.guild.name}
                     </TextTitle>    
                     <TextCategory>
                        {category.title}
                     </TextCategory>
                  </ViewHeader>
                  <ViewFooter>
                      <ViewDataInfo>
                         <CalendarSvg width="22" height="25"  /> 
                         <TextDate>
                             {data.date}
                         </TextDate>
                      </ViewDataInfo>
                      <ViewPlayerInfo>
                         <Player fill={ owner ? primary : on  } />
                         <TextPlayer  owner={owner} >
                             {owner? 'Anfitrião': 'Visitante'} 
                         </TextPlayer>
                      </ViewPlayerInfo>
                  </ViewFooter>    
               </ViewContent>       
           </Container>
        </RectButton>
    )
}

export default Appointment
