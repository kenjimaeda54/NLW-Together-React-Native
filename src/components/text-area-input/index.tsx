import React from 'react';
import {InputContainer } from "./style";
import { TextInputProps } from "react-native"


const TextAreaInput:React.FC<TextInputProps> = ({...rest}) =>  (
         <InputContainer
           textAlignVertical="top" 
           {...rest}
         />
    );


export default TextAreaInput
