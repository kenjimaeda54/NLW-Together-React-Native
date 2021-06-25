import React from 'react';
import { Image } from 'react-native';
import {  RectButton,RectButtonProps } from "react-native-gesture-handler"
import { ContentImg, Title } from "./styles";
import Discord from "../../assets/discord.png";
import { Theme } from '../../global/theme';

interface IButtonIcon extends RectButtonProps{
    title:string
}

const ButtonIcon:React.FC<IButtonIcon> = ({title, ...props}:IButtonIcon) => {

    return (

        <RectButton 
            style={{
                width:'100%',  
                height: 56,
                backgroundColor: Theme.colors.primary,
                borderRadius:8,
                flexDirection:'row',
                alignItems:'center', 
                  
            }}

            
            {...props}
        
        >
         <ContentImg>
            <Image  source={Discord} />
         </ContentImg>    
            <Title>
                {title}
            </Title>
        </RectButton>
    );
}

export default ButtonIcon;
