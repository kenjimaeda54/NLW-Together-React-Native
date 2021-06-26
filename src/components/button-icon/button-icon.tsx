import React from 'react';
import { Image } from 'react-native';
import {  RectButton,RectButtonProps } from "react-native-gesture-handler"
import { ContentImg, Title,Button } from "./styles";
import Discord from "../../assets/discord.png";
import { Theme } from '../../global/theme';

interface IButtonIcon extends RectButtonProps{
    title:string
}

const ButtonIcon:React.FC<IButtonIcon> = ({title, ...props}:IButtonIcon):JSX.Element => {

    return (

        <Button   
            {...props}
        >
         <ContentImg>
            <Image  source={Discord} />
         </ContentImg>    
            <Title>
                {title}
            </Title>
        </Button>
    );
}

export default ButtonIcon;
