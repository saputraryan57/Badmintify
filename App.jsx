import { NavigationContainer } from '@react-navigation/native';
import Router from './src/navigation/Router';
import * as Animatable from "react-native-animatable";

export default function App() {
  return (
    <NavigationContainer>
      <Router />
    </NavigationContainer>
  );
}
