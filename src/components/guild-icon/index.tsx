import React from 'react'
import { View, Text,Image } from 'react-native'
import { ImageProfile} from "./style"

const GuildIcon = () => {
    const uri = 'https://gamerssuffice.com/wp-content/uploads/2019/11/How-to-add-bots-to-discord-500x405.jpg';
    return (
       <ImageProfile 
        source={{uri:uri}}
        resizeMode="cover" 
       />
    )
}

export default GuildIcon
