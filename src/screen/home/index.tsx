import React,{useState,useCallback } from 'react';
import { Container, ViewHeader,ListMatch,ModalLogout } from "./styles";
import { useNavigation,useFocusEffect } from "@react-navigation/native";
import {Collection_Appointment, Collection_User} from "../../configs/database";
import {Text} from "react-native";
import Appointment, { IAppointmentProps } from '../../components/appointment';
import ButtonAdd from '../../components/button-add';
import Profile from '../../components/profile';
import CategorySelected from '../../components/category-select';
import ListHeader from '../../components/list-header';
import ListSplit from '../../components/list-split';
import AsyncStorage from '@react-native-async-storage/async-storage';
import Loading from '../../components/loader';
import Background from '../../components/background';

const HomeScreen = () => {
  const [category, setCategorySelected] = useState('');
  const [appointments,setAppointments] = useState<IAppointmentProps[]>([]);
  const [loading,setLoading] = useState(true);
  const [invertedList,setInvertedList] = useState(false)
  const navigation = useNavigation();
  
  const handleList = () =>{
     appointments.length >= 5 && setInvertedList(true)
  }
  

  const handleCategorySelected = (categoryId:string) =>{
    categoryId === category? setCategorySelected('') : setCategorySelected(categoryId)
  }
   
  const handleAppointmentDetails = (guildSelected:IAppointmentProps ) => 
  navigation.navigate("AppointmentDetails",{guildSelected});
  /*passando parâmetros via rotas */

  const handleAppointCreate = () => navigation.navigate("AppointmentCreate"); 
  
  const handleLoadStorage = async () =>{
    const response  =  await AsyncStorage.getItem(Collection_Appointment);
    const fetchAppointment:IAppointmentProps[] = response? JSON.parse(response) : [];
    /* e preciso tipa AppointmentProps como [] ou senão seria possível fazer map
    e percorrer no objeto */
    if(category){
      const filterGuild =  fetchAppointment.filter(value=> value.category === category)
      setAppointments(filterGuild);
    }else{
      setAppointments(fetchAppointment);
    }
    setLoading(false);
    
  }
    /*useFocus e ideal quando desejo  retorna a tela é a mesma
    seja novamente montada,useEfect não faz isso*/
    useFocusEffect(useCallback(()=>{
      handleLoadStorage()
    },[category]));
  return (
    <Container>
      <ViewHeader>
        <Profile  />
        <ButtonAdd rippleColor="#fff"  onPress={handleAppointCreate} />
      </ViewHeader>
      <CategorySelected 
         setCategory={handleCategorySelected}
         categorySelected={category}       
      />
      {loading? 
      <Loading />
        :
        <React.Fragment> 
        <ListHeader 
           title="Partidas Agendadas"
           subtitles={`Total ${appointments.length}`}
        />
        {/*lista precisa estar fora de uma view para funcionar bem */} 
        <ListMatch 
            data={appointments} 
            keyExtractor={(item: any) => item.id }
            inverted={invertedList}
            renderItem={({item}:any)   => (
              <Appointment data={item}                
               onPress={() =>  handleAppointmentDetails(item)}
              />
            )}
            ItemSeparatorComponent={()=> <ListSplit /> } 
            showsHorizontalScrollIndicator={false} 
            contentContainerStyle={invertedList&&{paddingTop:69}}
            /* contentContainerStyle aplico estilo interno na lista */
            showsVerticalScrollIndicator={false}
        />
        </React.Fragment>   
        
      }
  
    </Container>
  )
}

export default HomeScreen
