import React,{useState,useEffect} from 'react'
import Guild, { IGuildProps } from '../../components/guild'
import ListSplit from '../../components/list-split'
import Loading from '../../components/loader'
import api from '../../services/api'
import { ListGuild,Container } from "./style"

interface IGuildsProps{
  guildSelected:(guild: IGuildProps  )=>void 
}

const Guilds:React.FC<IGuildsProps> = ({guildSelected}) => {
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
        }      
      </Container>  
    )
}
export default Guilds;
