
import React,{ ReactNode } from 'react'
import { LinearGradient } from 'expo-linear-gradient';
import {Theme} from "../../global/theme"

interface IBackgroundProps{
    children: ReactNode //são todos filhos de React
}

const Background:React.FC<IBackgroundProps> = ({children}) => {
  const { secondary80,secondary100} = Theme.colors;
 
    return (
         <LinearGradient 
           style={{flexGrow:1}}
           colors={[
            secondary80,
            secondary100,
           ]}
        >
         {children}
        </LinearGradient>    
    )
}

export default Background;
