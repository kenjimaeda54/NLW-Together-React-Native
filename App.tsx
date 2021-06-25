import React from 'react';
import { SafeAreaView  } from "react-native-safe-area-context";
import { useFonts,Inter_400Regular,Inter_500Medium  } from "@expo-google-fonts/inter"
import { Rajdhani_500Medium, Rajdhani_700Bold  } from "@expo-google-fonts/rajdhani"
import { StatusBar } from 'react-native';
import AppLoading from 'expo-app-loading';
import Background from './src/components/background';
import Routes from './src/routes';


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
      <Routes />
      </SafeAreaView>
    </Background>

  )


}
export default App;

