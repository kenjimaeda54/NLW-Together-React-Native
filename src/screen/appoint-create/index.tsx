import React, { useState } from 'react';
import { RectButton } from "react-native-gesture-handler";
import { Feather } from "@expo/vector-icons"
import CategorySelected from '../../components/category-select';
import Header from "../../components/header";
import { Theme } from '../../global/theme';
import { Platform, ScrollView } from "react-native"
import {
  ViewForm,
  ViewContentButton,
  ViewImg,
  ViewText,
  TextLabel,
  ViewTextInput,
  ViewCalendar,
  TextDivide,
  TextCharacters,
  KeyboardContainer,
  ViewFooter
} from "./style"
import { View } from 'react-native';
import SmallInput from '../../components/small-input';
import TextAreaInput from '../../components/text-area-input';
import Button from "../../components/button"
import ModalView from '../../components/modal-view';
import Guilds from '../guilds';
import { IGuildProps } from '../../components/guild';
import GuildIcon from '../../components/guild-icon';

const AppointCreate = () => {
  const [categorySelected, setCategorySelected] = useState('');
  const [openModalGuild,setOpenModalGuild] = useState(false);
  const [guild,setGuild] = useState<IGuildProps>({} as IGuildProps)
  
  const handleCategorySelected = (categoryId:string) =>{
    categoryId === categorySelected? setCategorySelected('') : setCategorySelected(categoryId)
  }
  
  const handleOpenGuild = () =>  setOpenModalGuild(true);
  
  const handleGuildSelected = (guild: IGuildProps )  =>{
     setGuild(guild)
     setOpenModalGuild(false);
    
  }
   
    return (
    <KeyboardContainer
       behavior= {
         Platform.OS === 'ios'? 'padding' : 'height'
       }
    >
      <ScrollView> 
          <Header 
            title="Detalhes"
            />
          <TextLabel
           style={{marginVertical:10, marginHorizontal:23}}
          
          > 
          Categoria  </TextLabel>  
          <CategorySelected 
            setCategory={handleCategorySelected}
            categorySelected={categorySelected}
            hasCheckBox={true}
          />  
          <ViewForm>
            <RectButton onPress={handleOpenGuild} >
               <ViewContentButton>
                  {
                    
                    guild.icon? <GuildIcon /> : <ViewImg/>

                  }
                  <ViewText>
                     <TextLabel>
                       {
                          
                        guild.name? guild.name : 'Selecione o servidor'  
   
                       } 
                        
                     </TextLabel>
                  </ViewText>  
                  <Feather 
                     name="chevron-right"
                     color={Theme.colors.heading}
                     size={18}
                  />
               </ViewContentButton>           
            </RectButton>  
          </ViewForm> 
          <ViewTextInput>
             <View>
               <TextLabel>
                 Dia e mês
               </TextLabel>
               <ViewCalendar>
                  <SmallInput  
                     maxLength={2} /*máximo de carácter */
                  />
                  <TextDivide>
                    /
                  </TextDivide>
                  <SmallInput  
                     maxLength={2} /*máximo de carácter */
                  />
               </ViewCalendar>   
             </View>
             <View>
               <TextLabel>
                  Hora é minuto
               </TextLabel>
               <ViewCalendar>
                  <SmallInput  
                     maxLength={2} /*máximo de carácter */
                  />
                  <TextDivide>
                    :
                  </TextDivide>
                  <SmallInput  
                     maxLength={2} /*máximo de carácter */
                  />
               </ViewCalendar>   
             </View>
          </ViewTextInput>  
          <ViewTextInput>
             <TextLabel>
               Descrição 
             </TextLabel>
             <TextCharacters>
                Máximo 100 carácteres
             </TextCharacters>
          </ViewTextInput>
          <TextAreaInput 
             multiline
             autoCorrect={false}
             numberOfLines={5}
             maxLength={100}
          />
          <ViewFooter>
             <Button  
               title="Agendar"
             />
          </ViewFooter> 
       </ScrollView>
       <ModalView  visible={openModalGuild}   >
          <Guilds guildSelected={handleGuildSelected} />
       </ModalView>
     </KeyboardContainer>  
    )
};

export default AppointCreate;
