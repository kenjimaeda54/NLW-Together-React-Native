import React from 'react'
import { ActivityIndicator } from 'react-native'
import { Theme } from '../../global/theme'
import {Container,Mensagem} from "./style"

const Loading = () => (
    <Container>
        <ActivityIndicator color={Theme.colors.primary} size="large" />
        <Mensagem>Carregando...</Mensagem>
    </Container>

)

export default Loading
