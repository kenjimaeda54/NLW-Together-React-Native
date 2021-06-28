import React from 'react'
import {Container, ImageProfile} from "./style"
import Discord from "../../assets/discord.svg";
const {CDN_IMAGE} = process.env;
interface IGuildIcon {
    guildId: string,
    guildIcon: string | null,
}

const GuildIcon:React.FC<IGuildIcon> = ({guildId,guildIcon}) => {
    const uri = `${CDN_IMAGE}/icons/${guildId}/${guildIcon}.png`

     return (
      <Container>
       {guildId? 
          <ImageProfile 
            source={{uri}}
            resizeMode="cover" 
          />
          :
          <Discord 
             width='48'
             height="48"
          /> 

       }
      </Container>         
    )
}

export default GuildIcon
