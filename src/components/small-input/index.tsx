import React from 'react';
import {InputContainer } from "./style";
import { TextInputProps } from "react-native"


const SmallInput:React.FC<TextInputProps> = ({...rest}) =>  (
         <InputContainer 
           keyboardType="numeric"
           {...rest}
         />
    );


export default SmallInput
