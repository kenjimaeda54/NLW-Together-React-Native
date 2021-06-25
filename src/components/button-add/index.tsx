import React from 'react'
import { MaterialCommunityIcons   } from "@expo/vector-icons"
import { RectButton, RectButtonProps } from "react-native-gesture-handler"
import { Theme } from '../../global/theme'



const ButtonAdd:React.FC<RectButtonProps> = ({...rest}) => (
    <RectButton  {...rest}  

    style={{
            height: 48,
            width: 48,
            backgroundColor: Theme.colors.primary,
            borderRadius: 8,
            alignItems: 'center',
            justifyContent: 'center'

    }}
    
    >
        <MaterialCommunityIcons  name="plus" size={24} color={Theme.colors.heading} />
    </RectButton>

)   
export default ButtonAdd
