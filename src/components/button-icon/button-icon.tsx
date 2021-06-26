import React from 'react';
import { Image } from 'react-native';
import { RectButtonProps } from "react-native-gesture-handler"
import { ContentImg, Title,Button } from "./styles";
import Discord from "../../assets/discord.png";


interface IButtonIcon extends RectButtonProps{
    title:string
}

const ButtonIcon:React.FC<IButtonIcon> = ({title, ...props}:IButtonIcon) => {

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
