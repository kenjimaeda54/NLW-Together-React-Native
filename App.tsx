import React from 'react';
import { SafeAreaView  } from "react-native-safe-area-context";
import { useFonts,Inter_400Regular,Inter_500Medium  } from "@expo-google-fonts/inter"
import { Rajdhani_500Medium, Rajdhani_700Bold  } from "@expo-google-fonts/rajdhani"
import { StatusBar,LogBox } from 'react-native';
import  {AuthProvider} from "./src/hooks/auth"
import AppLoading from 'expo-app-loading';
import Background from './src/components/background';
import Routes from './src/routes';

LogBox.ignoreLogs(['Expected style "paddingTop: 29.090909957885742" to contain units'])

const App = () => {
  const [loading] = useFonts({
    Inter_400Regular,
    Inter_500Medium,
    Rajdhani_500Medium,
    Rajdhani_700Bold,
  })

  if(!loading){
  
   return <AppLoading />

  }

  return (
    <Background >
      <SafeAreaView  style={{flex:1}} >
           <StatusBar
           barStyle="light-content"
           backgroundColor="transparent"
           translucent        
         /> 
      <AuthProvider>
        <Routes />
      </AuthProvider>   
      </SafeAreaView>
    </Background>

  )


}
export default App;

