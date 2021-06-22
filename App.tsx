import React from 'react';
import { SafeAreaView } from 'react-native';
import Sign from './src/screen/signIn';
import plataform from './src/global/plataform';

const App = () => {

  return (
    <SafeAreaView style={plataform.iosSafeArea} >
      <Sign />
    </SafeAreaView>

  )


}
export default App;

