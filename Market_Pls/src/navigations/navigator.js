import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import Login from './src/components/Login';
import Register from './src/components/Register';

const stackNavigatorOptions = {
  headerShown: false,
};

const AppNavigator = createStackNavigator(
  {
    Login: {screen: Login},
    Register: {screen: Register},
  },
  {
    defaultNavigationOptions: stackNavigatorOptions,
  },
);

export default NavigationContainer(AppNavigator);
