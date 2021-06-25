
import React from 'react';
import { createStackNavigator  } from "@react-navigation/stack";
import Sign from '../screen/sign-in';
import HomeScreen from '../screen/home';


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
        <Screen name="SignIn" component={Sign}  />
        <Screen name="Home" component={HomeScreen}  />            
    </Navigator>     
);

export default AthRoutes
