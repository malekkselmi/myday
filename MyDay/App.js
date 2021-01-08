import { StatusBar } from 'expo-status-bar';
import React , {useState} from 'react';
import Home from './Home'
import * as Font from 'expo-font'
import { AppLoading } from 'expo';
import Navigator from './DrawerNav'

const getFonts = () => Font.loadAsync({
  regular : require('./assets/fonts/Nunito-Regular.ttf') ,
  bold : require('./assets/fonts/Nunito-Bold.ttf')
 }) 

export default function App() {
 const [fontsLoades , setFontsLoaded] = useState(false)  
if(fontsLoades) {
  return (
    <Navigator />
   );
}
 else {
   return(
   <AppLoading
    startAsync={getFonts}
    onFinish = {() => setFontsLoaded(true) } /> 

   )
 } 
}

