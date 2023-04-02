import * as React from 'react';
import {
  View,
  Button,
  FlatList,
  TouchableHighlight,
  Dimensions,
  Text,
} from 'react-native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {NavigationContainer, useNavigation} from '@react-navigation/native';
import Animated from 'react-native-reanimated';
import HomeScreen from './src/screens/HomeScreen';
import DetailScreen from './src/screens/detailScreen';

const Stack = createNativeStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{headerShown: false}}>
        <Stack.Screen name="Screen1" component={HomeScreen} />
        <Stack.Screen name="Screen2" component={DetailScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
