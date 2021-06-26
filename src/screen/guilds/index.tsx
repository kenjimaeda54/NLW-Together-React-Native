import React from 'react'
import { View, Text } from 'react-native'
import Guild, { IGuildProps } from '../../components/guild'
import ListSplit from '../../components/list-split'
import { ListGuild,Container } from "./style"



interface IGuildsProps{
  guildSelected:(guild: IGuildProps  )=>void 
}


const Guilds:React.FC<IGuildsProps> = ({guildSelected}) => {
    const dataGuild =[
    {
        id:'1',
        name:'Lendários',
        icon:null,
        owner: true,
            
    },
    {
        id:'2',
        name:'Imaginários',
        icon:'img.png',
        owner: true,
    },
  
   ]

    return (
      <Container>  
        <ListGuild 
           data={dataGuild}
           keyExtractor={(item:any)=> item.id}
           renderItem={({item}:any)=> 
            <Guild
            onPress={()=>guildSelected(item)}
            data={item} /> }
           showsVerticalScrollIndicator={false}
           ItemSeparatorComponent={()=> <ListSplit/> } 
           ListHeaderComponent={()=> <ListSplit />  } 
           contentContainerStyle={{paddingBottom:68,paddingTop:104}}
           /*aplicando paddingTop minha lista começa com 104  e conforme rola */ 
           /* some o espaço  */  
        />
      </Container>  
    )
}

export default Guilds
