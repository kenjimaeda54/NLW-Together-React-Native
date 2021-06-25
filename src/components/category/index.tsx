import React  from 'react'
import { SvgProps } from "react-native-svg";
import {RectButton ,RectButtonProps } from "react-native-gesture-handler"
import {Container,ViewContent,TextTitle,ViewChecked} from "./style";
import { Theme } from '../../global/theme';

interface ICategoryProps extends RectButtonProps {
    title:string;
    icon: React.FC<SvgProps>;
    checked: boolean;
    hasCheckBox?: boolean;

}

const Category:React.FC<ICategoryProps> = ({
  checked =false,
  title,
  hasCheckBox = false,
  icon:Icon, /*renomeando svg é em maiúsculo semanticamente chaves da interface e minúsculo */
  ...rest
}) => {
    const {secondary40 ,secondary50,secondary70,secondary85 } = Theme.colors;
    return (
      <RectButton  style={{height: 150}} {...rest}>
          <Container
              colors={[
                secondary50,
                secondary70, 
              ]}
            >
           <ViewContent
               checked={checked} 
               colors={[
                   checked?  secondary85 : secondary50,secondary40
               ]}
               
           >{
             hasCheckBox &&
             <ViewChecked  checked={checked}  /> 
           }   

              <Icon  width="48" height="48" />
              <TextTitle>
                  {title}
                </TextTitle> 
            </ViewContent>
          </Container>
      </RectButton>     
    )
}

export default Category
