import React from 'react';
import { View, Image } from 'react-native';

import Texto1 from './src/Texto1';
import Texto2 from './src/Texto2';
import Texto3 from './src/Texto3';

const App = () => {
  return (
    <View>
      <Texto1 />
      <Texto2 />
      <Texto3 />
      <Image source={require('./src/captura')} />
    </View>
  );
};

export default App;
