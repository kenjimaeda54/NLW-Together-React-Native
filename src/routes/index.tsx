import React from 'react'
import { NavigationContainer } from "@react-navigation/native" ;
import { useAth } from "../hooks/auth"
import AthRoutes from './ath.routes'
import Sign from '../screen/sign-in';


const Routes = () => {
   const { user }  = useAth();

    return (
        <NavigationContainer>
           {user.id?  <AthRoutes/>   :  <Sign/>  }      
        </NavigationContainer>  
    );
}
export default Routes;
