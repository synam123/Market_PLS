/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import 'react-native-gesture-handler';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import Login from './src/components/Login';
import Register from './src/components/Register';

const Stack = createStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Login"
          component={Login}
          options={{title: 'Đăng nhập'}}
        />
        <Stack.Screen
          name="Register"
          component={Register}
          options={{title: 'Đăng ký'}}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};


export default App;

// export default class App extends React.Component {
//   render(){
//     return(
//       <AppNavigator/>
//     )
//   }
// };

