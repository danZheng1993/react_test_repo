import { createStackNavigator, createAppContainer } from 'react-navigation'
import LoginContainer from '../containers/login/LoginContainer'
import SignContainer from '../containers/sign/SignContainer'
import HomeContainer from '../containers/home/HomeContainer'
import UpdatePassword from '../containers/update/UpdatePassword'
import SendCode from '../containers/update/SendCode'
import ResetCode from '../containers/update/ResetCode'

const AppStackNavigator = createStackNavigator(
    {
        login: LoginContainer,
        sign: SignContainer,
        home: HomeContainer,
        sendcode: SendCode,
        resetcode: ResetCode,
        update: UpdatePassword
    }, {
        headerMode: 'none',
        initialRouteName: 'login',
    }
)

const AppNavigation = createAppContainer(AppStackNavigator)

export default AppNavigation