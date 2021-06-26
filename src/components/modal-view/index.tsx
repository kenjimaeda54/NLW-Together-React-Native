import React,{ReactNode} from 'react'
import { Modal, ModalProps,TouchableWithoutFeedback } from 'react-native'
import Background from '../background'
import {ViewOverlay,ViewContent,ViewBar} from './style'

interface IModalViewProps extends ModalProps{
    children:ReactNode /*todos os filhos do react */
    handleCloseModal:() => void;
}

const ModalView:React.FC<IModalViewProps> = ({children,handleCloseModal,...rest}) => (
    <Modal
        transparent
        animationType="slide"
        statusBarTranslucent /* vai fazer modal cobrir tudo,restante deixando claro  */
        {...rest}
    >
     <TouchableWithoutFeedback onPress={()=> handleCloseModal()} >
       <ViewOverlay>
        <ViewContent>
          <Background>
             <ViewBar /> 
              {children}
          </Background>
        </ViewContent>
       </ViewOverlay>
     </TouchableWithoutFeedback>    
    </Modal>
)
export default ModalView
