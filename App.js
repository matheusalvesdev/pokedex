import { StatusBar } from 'expo-status-bar';
import { View } from 'react-native';

import Routes from './src/routes/routes';
import stylesApp from './src/styles/app';

export default function App() {
  return (
    <View style={stylesApp.container}>
      <Routes />
      <StatusBar style="auto" />
    </View>
  );
}
