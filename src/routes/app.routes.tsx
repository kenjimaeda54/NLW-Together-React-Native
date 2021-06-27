
import React from 'react';
import { createStackNavigator  } from "@react-navigation/stack";
import Sign from '../screen/sign-in';
import HomeScreen from '../screen/home';
import AppointmentDetails from '../screen/appoint-details';
import AppointmentCreate from '../screen/appoint-create';

const {Navigator,Screen  } = createStackNavigator();

const AthRoutes = () =>( 
    <Navigator
      headerMode="none"
      screenOptions={{
          cardStyle:{
              backgroundColor:'transparent',
          }
      }}   
      
    >
        <Screen name="Home" component={HomeScreen}  />
        <Screen name="AppointmentDetails" component={AppointmentDetails} />  
        <Screen name="AppointmentCreate" component={AppointmentCreate} />            
    </Navigator>     
);

export default AthRoutes
