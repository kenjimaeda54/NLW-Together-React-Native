import React, { useState } from 'react';
import { RectButton } from "react-native-gesture-handler";
import { Feather } from "@expo/vector-icons"
import { Theme } from '../../global/theme';
import { Alert, Platform, ScrollView } from "react-native"
import { View } from 'react-native';
import { IGuildProps } from '../../components/guild';
import { Collection_Appointment } from '../../configs/database';
import { useNavigation } from '@react-navigation/core';
import CategorySelected from '../../components/category-select';
import Header from "../../components/header";
import SmallInput from '../../components/small-input';
import TextAreaInput from '../../components/text-area-input';
import Button from "../../components/button"
import ModalView from '../../components/modal-view';
import Guilds from '../guilds';
import GuildIcon from '../../components/guild-icon';
import uuid from "react-native-uuid"
import AsyncStorage from '@react-native-async-storage/async-storage';
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

const AppointCreate = () => {
  const navigation = useNavigation();
  const [category, setCategory] = useState('');
  const [openModalGuild,setOpenModalGuild] = useState(false);
  const [guild,setGuild] = useState<IGuildProps>({} as IGuildProps);
  const [day,setDay] = useState('');
  const [month,setMonth] = useState('');
  const [hour,setHour] = useState('');
  const [minute,setMinute] = useState('');
  const [description,setDescription] = useState('')
  
  const handleCategorySelected = (categoryId:string) =>{
   setCategory(categoryId)
  }
  
  const handleOpenGuild = () =>  setOpenModalGuild(true);
  
  const handleGuildSelected = (guild: IGuildProps )  =>{
     setGuild(guild)
     setOpenModalGuild(false);
    
  }

  const handleCloseModal = () => setOpenModalGuild(false);
   
   const handleSave = async () => {
      const newAppointment = {
         id: uuid.v4(),
         category,
         guild,
         date: `${day}/${month} as ${hour}:${minute}h `,
         description
      }
      if(category  === '' || day === '' || month === '' || hour === '' || minute === '' 
         || typeof category === 'undefined'){
           return Alert.alert('Aten????o','Precisa preencher os campos: hor??rio,data ?? categoria para agendar',
                [
                   { 
                     text:"OK",
                     style: 'cancel',
                     
                   }
                ]
           ) 
      }
      const fetchStorage = await AsyncStorage.getItem(Collection_Appointment);
      const appointment = fetchStorage? JSON.parse(fetchStorage) : [];
      /*com if tern??rio estou garantido que n??o vou sobrescrever valores
      que est??o salvos com essa chave  Collection_Appointment*/
     AsyncStorage.setItem(Collection_Appointment,JSON.stringify([
        ...appointment,
         newAppointment,
     ]));
     navigation.navigate('Home');
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
            categorySelected={category}
            hasCheckBox={true}
          />  
          <ViewForm>
            <RectButton onPress={handleOpenGuild} >
               <ViewContentButton>
                  {
                    guild.icon? 
                    <GuildIcon guildId={guild.id} guildIcon={guild.icon} /> 
                    : 
                    <ViewImg/>
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
             <View  >
               <TextLabel style={{marginBottom:10}} >
                 Dia e m??s
               </TextLabel>
               <ViewCalendar>
                  <SmallInput  
                     maxLength={2} /*m??ximo de car??cter */
                     onChangeText={setDay}
                  />
                  <TextDivide>
                    /
                  </TextDivide>
                  <SmallInput  
                     maxLength={2} /*m??ximo de car??cter */
                     onChangeText={setMonth}
                  />
               </ViewCalendar>   
             </View>
             <View>
               <TextLabel style={{marginBottom:10}} >
                  Hora ?? minuto
               </TextLabel>
               <ViewCalendar>
                  <SmallInput  
                     maxLength={2} /*m??ximo de car??cter */
                     onChangeText={setHour}
                  />
                  <TextDivide>
                    :
                  </TextDivide>
                  <SmallInput  
                     maxLength={2} /*m??ximo de car??cter */
                     onChangeText={setMinute}
                  />
               </ViewCalendar>   
             </View>
          </ViewTextInput>  
          <ViewTextInput>
             <TextLabel>
               Descri????o 
             </TextLabel>
             <TextCharacters>
                M??ximo 100 car??cteres
             </TextCharacters>
          </ViewTextInput>
          <TextAreaInput 
             multiline
             autoCorrect={false}
             numberOfLines={5}
             maxLength={100}
             onChangeText={setDescription}
          />
          <ViewFooter>
             <Button  
               title="Agendar"
               onPress={handleSave}
             />
          </ViewFooter> 
       </ScrollView>
       <ModalView  handleCloseModal={handleCloseModal}  visible={openModalGuild}   >
          <Guilds guildSelected={handleGuildSelected} />
       </ModalView>
     </KeyboardContainer>  
    )
};

export default AppointCreate;
