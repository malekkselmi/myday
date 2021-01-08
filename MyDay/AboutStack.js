import {createStackNavigator} from 'react-navigation-stack'
import About from './About'
import React from 'react'
import Header from './Header'

const screens = {
About : {
    screen : About,
    navigationOptions :({navigation}) => {
        return {
            headerTitle : () => <Header navigation={navigation} title='About MyDay'/>
        }
    }
} 
}
const AboutStack = createStackNavigator(screens , {
    defaultNavigationOptions : {
        headerTintColor:'white',
        headerStyle : {backgroundColor:'black' , height:60}
    }
})
export default AboutStack