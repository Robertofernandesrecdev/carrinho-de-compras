// retirar a statusbar  -> import { StatusBar } from 'expo-status-bar';



import { StatusBar } from 'react-native';
import { NavigationContainer} from '@react-navigation/native'

import Routes from './src/Routes';
import  CartProvider from './src/contexts/CartContext'

/* retirar a <View> e colocar a NavigationContainer
e o <Text> 
*/
export default function App() {
  return (
    <NavigationContainer>
      <CartProvider>
          <StatusBar backgroundColor="#FAFAFA" barStyle="dark-content" />
          <Routes />
      </CartProvider>  
    </NavigationContainer>
  );
}

/*const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
*/