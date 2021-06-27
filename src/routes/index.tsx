import React from 'react'
import { NavigationContainer } from "@react-navigation/native" ;
import { useAth } from "../hooks/auth";
import Sign from '../screen/sign-in';
import AppRoutes from './app.routes';


const Routes = () => {
   const { user }  = useAth();

    return (
        <NavigationContainer>
           {user.id?  <AppRoutes/>   :  <Sign/>  }      
        </NavigationContainer>  
    );
}
export default Routes;
