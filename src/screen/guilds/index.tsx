import React,{useState,useEffect} from 'react'
import { FlatList } from "react-native";
import Guild, { IGuildProps } from '../../components/guild'
import ListSplit from '../../components/list-split'
import Loading from '../../components/loader'
import api from '../../services/api'
import { Container } from "./style"

interface IGuilds{
  guildSelected:(guild: IGuildProps  )=>void;

}

const Guilds:React.FC<IGuilds> = ({guildSelected}) => {
    const [dataGuild,setDataGuild] = useState<IGuildProps[]>([]);
    const [loading,setLoading] = useState(true);
  
    const loadGuild = async () =>{
      try{
         const loadGuild = await api.get('/users/@me/guilds');  
         setDataGuild(loadGuild.data)
         setLoading(false);
      }catch(error){
        
        alert(error);
      }
    }
     useEffect(()=>{
      loadGuild()
     },[])
   

    return (
      <Container>  
         {loading?
           <Loading/>
           :
           <FlatList  
           data={dataGuild}
           keyExtractor={ item => item.id}
           renderItem={({item} )=> 
            <Guild
            onPress={()=>guildSelected(item)}
            data={item} /> }
           showsVerticalScrollIndicator={false}
           ItemSeparatorComponent={()=> <ListSplit/> } 
           ListHeaderComponent={()=> <ListSplit />  } 
           contentContainerStyle={{paddingBottom:68,paddingTop:104}}
           /*aplicando paddingTop minha lista começa com 104  e conforme rola */ 
           /* some o espaço  */  
           style={{width:'100%'}}
        />
        }      
      </Container>  
    )
}
export default Guilds;
