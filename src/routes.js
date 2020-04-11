import { createAppContainer } from 'react-navigation'
import { createStackNavigator  } from 'react-navigation-stack'

import Main from './screens/Main'
import Profile from './screens/Profile'

const Routes = createAppContainer(
    createStackNavigator({
        Main:{
            screen: Main,
            navigationOptions: {
                title: 'DevRadar',
            }
        },
        Profile: {
            screen: Profile,
            navigationOptions: {
                title: 'Perfil no GitHub',
            }
        }
    },
    {
        defaultNavigationOptions: {
            headerStyle: {
                backgroundColor: '#7159c1',

            },
            headerTintColor: '#fff',
            headerBackTitleVisible: false,
        }
    }
    )
) 

export default Routes