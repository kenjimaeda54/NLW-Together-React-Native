
import React,{useState} from 'react';
import { View, Text } from 'react-native';
import { Container, ViewHeader,ViewContent,ListMatch } from "./styles";
import { useNavigation } from "@react-navigation/native"
import ButtonAdd from '../../components/button-add';
import Profile from '../../components/profile';
import CategorySelected from '../../components/category-select';
import ListHeader from '../../components/list-header';
import Appointment from '../../components/appointment';
import ListSplit from '../../components/list-split';


const HomeScreen = () => {
  const [categorySelected, setCategorySelected] = useState('');
  const navigation = useNavigation();

  const appointments = [
    {
      id: '1',
      guild: {
        id: '1',
        name: 'Lendários',
        icon: null,
        owner: true
      },
      category: '1',
      date: '22/06 às 20:40h',
      description: 'É hoje que vamos chegar ao challenger sem perder uma partida da md10'      
    },
    {
      id: '2',
      guild: {
        id: '1',
        name: 'Lendários',
        icon: null,
        owner: true
      },
      category: '1',
      date: '22/06 às 20:40h',
      description: 'É hoje que vamos chegar ao challenger sem perder uma partida da md10'      
    },
    
  ]

  const handleCategorySelected = (categoryId:string) =>{
    categoryId === categorySelected? setCategorySelected('') : setCategorySelected(categoryId)
  }
   
  const handleAppointmentDetails = () => navigation.navigate("AppointmentDetails");
  
  const handleAppointCreate = () => navigation.navigate("AppointmentCreate"); 

  return (
    <Container>
      <ViewHeader>
        <Profile />
        <ButtonAdd rippleColor="#fff"  onPress={handleAppointCreate} />
      </ViewHeader>
      <CategorySelected 
         setCategory={handleCategorySelected}
         categorySelected={categorySelected}
      />
      <ViewContent>
        <ListHeader 
           title="Partidas Agendadas"
           subtitles="6"
        />
        <ListMatch 
            data={appointments}
            keyExtractor={(item:string | any) => item.id }
            renderItem={({item}:any)   => (
              <Appointment data={item}
                
               onPress={handleAppointmentDetails}
              
              />
            )}
            ItemSeparatorComponent={()=> <ListSplit /> } 
            showsHorizontalScrollIndicator={false} 
        /> 

      </ViewContent>
    </Container>
  )
}

export default HomeScreen
