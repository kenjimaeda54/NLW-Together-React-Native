import React from 'react'
import { ImageProfile} from "./style"

const GuildIcon = () => {
    const uri = 'https://gamerssuffice.com/wp-content/uploads/2019/11/How-to-add-bots-to-discord-500x405.jpg';
    return (
       <ImageProfile 
        source={{uri}}
        resizeMode="cover" 
       />
    )
}

export default GuildIcon
