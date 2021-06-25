import React from 'react';
import { Container,ImageProfile } from "./style";
import { Theme } from '../../global/theme';

interface IAvatarProps {
    uriImg: string;
}

const Avatar:React.FC<IAvatarProps> = ({uriImg}) => {
    const { secondary50,secondary70  } = Theme.colors;
    
    return (
        <Container
          colors={[secondary50,secondary70]}        
        >
          <ImageProfile source={{uri: uriImg}}/>

        </Container>
    )
}
export default Avatar
