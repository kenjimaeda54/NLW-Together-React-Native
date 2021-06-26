import React from 'react';
import { RectButtonProps } from "react-native-gesture-handler"
import {  Title,ButtonView } from "./styles";


interface IButtonIcon extends RectButtonProps{
    title:string
}

const Button:React.FC<IButtonIcon> = ({title, ...props}:IButtonIcon) => {

    return (

        <ButtonView   
            {...props}
        > 
            <Title>
                {title}
            </Title>
        </ButtonView>
    );
}

export default Button;
