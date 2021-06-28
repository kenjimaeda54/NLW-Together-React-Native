import React from 'react'
import { View} from 'react-native'
import {
    Container,
    TextName,
    ViewFooter,
    ViewStyle,
    TextStatus
} from "./style";
import Avatar from '../avatar'

export interface IMemberProps{
    id:string;
    username: string;
    avatar_url:string;
    status:string;
}

interface DataProps{
  
   data:IMemberProps 

}

const Member:React.FC<DataProps> = ({data}) => {
    const isOnline = data.status === 'disponível'

    return (
        <Container>
            <Avatar uriImg={data.avatar_url} />
            <View>
                 <TextName>
                   {data.username}
                 </TextName> 
                 <ViewFooter> 
                   <ViewStyle isOnline={isOnline} />
                   <TextStatus>
                    {isOnline? 'Disponível' : 'Ocupado'  }
                  </TextStatus> 
                </ViewFooter>
            </View>
        </Container>
    )
}

export default Member
