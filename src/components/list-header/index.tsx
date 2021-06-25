import React from 'react'
import { View, Text } from 'react-native'
import {Container,TextTitle,TextSubtitles} from "./style"

interface IListHeaderProps{
    title:string;
    subtitles: string;
}

const ListHeader:React.FC<IListHeaderProps> = ({
    title,
    subtitles
}) => (
    <Container>
        <TextTitle>
            {title}
        </TextTitle>
        <TextSubtitles>
            {subtitles}
        </TextSubtitles>
    </Container>
);

export default ListHeader
