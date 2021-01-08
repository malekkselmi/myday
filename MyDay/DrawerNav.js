import {createDrawerNavigator} from 'react-navigation-drawer'
import {createAppContainer} from 'react-navigation'
import HomStack from './HomeStack'
import AboutStack from './AboutStack'

const rootDrawerNavigation = createDrawerNavigator({
Home : {
    screen : HomStack
},
About : {
    screen : AboutStack
}
})

export default createAppContainer(rootDrawerNavigation)
