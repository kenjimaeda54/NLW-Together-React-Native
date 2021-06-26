import React,{ReactNode} from 'react'
import { Modal, ModalProps } from 'react-native'
import Background from '../background'
import {ViewOverlay,ViewContent,ViewBar} from './style'

interface IModalViewProps extends ModalProps{
    children:ReactNode /*todos os filhos do react */
}

const ModalView:React.FC<IModalViewProps> = ({children,...rest}) => (
    <Modal
        transparent
        animationType="slide"
        {...rest}
    >
    <ViewOverlay>
        <ViewContent>
          <Background>
             <ViewBar /> 
              {children}
          </Background>
        </ViewContent>
    </ViewOverlay>
    </Modal>
)
export default ModalView
