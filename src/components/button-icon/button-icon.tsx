import React from 'react';
import {TouchableOpacity, TouchableOpacityProps,Image } from 'react-native';
import { ContentImg, Title } from "./styles";
import Discord from "../../assets/discord.png";
import { Theme } from '../../global/theme';

interface IButtonIconProps extends TouchableOpacityProps  {
    title:string,
}




const ButtonIcon: React.FC<IButtonIconProps> = ({ title, ...rest}:IButtonIconProps):JSX.Element => {

    return (

        <TouchableOpacity
        style={{ width:'100%',  
        height: 56,
        backgroundColor: Theme.colors.primary,
        borderRadius:8,
        flexDirection:'row',
        alignItems:'center', 
          
        }}          
            {...rest}

        >
        <ContentImg>
            <Image source={Discord} />
        </ContentImg>
            <Title>
                {title}
            </Title> 
        </TouchableOpacity>
    );
}

export default ButtonIcon;
