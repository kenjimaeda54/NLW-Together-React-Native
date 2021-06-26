import React,{ReactNode} from 'react';
import { Theme } from '../../global/theme';
import { BorderlessButton  } from "react-native-gesture-handler";
import { useNavigation } from "@react-navigation/native";
import { Feather } from "@expo/vector-icons"
import { View } from 'react-native';
import{TextTitle,ContainerLinear} from "./style"

interface IHeaderProps{
    action?:ReactNode;
    title:string;
}

const Header:React.FC<IHeaderProps> = ({action,title}) => {
    const {secondary100,secondary40,heading} = Theme.colors;  
    const navigation = useNavigation()

    const  handleGoBack = () => navigation.goBack();

    return (
         <ContainerLinear
           colors={[
               secondary100,
               secondary40,
           ]}
         
         > 
         <BorderlessButton onPress={handleGoBack} >
            <Feather 
              name="arrow-left"
              size={24}
              color={heading}
            
            /> 
        </BorderlessButton> 
            <TextTitle>
             {title}
            </TextTitle> 
            {action &&
              <View>
                  {action}
              </View>  

            }
        </ContainerLinear>
    )
}

export default Header;
