import {createStackNavigator} from 'react-navigation-stack'
import Home from './Home'
import ReviewDetails from './ReviewDetails'
import React from 'react'
import Header from './Header'

const screens = {
Home : {
    screen : Home,
    navigationOptions : ({navigation}) => {
        return {
            headerTitle : () => <Header navigation={navigation} title='MyDay' />
        }
    }
} ,
ReviewDetails : {
    screen : ReviewDetails,
    navigationOptions : {
        title : 'TaskDetail'
    }
}
}
const HomeStack = createStackNavigator(screens , {
    defaultNavigationOptions : {
        headerTintColor:'white',
        headerStyle : {backgroundColor:'black' , height:75}
    }
})
export default HomeStack