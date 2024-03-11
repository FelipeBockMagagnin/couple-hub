import { useContext } from "react";
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import FontAwesome from '@expo/vector-icons/FontAwesome';

//Pages
import HomeScreen from '../screens/HomeScreen'
import SettingsScreen from '../screens/SettingsScreen'
import ProfileScreen from '../screens/ProfileScreen'
import SignInScreen from '../screens/SignInScreen'
import ShoppingListScreen from '../screens/ShoppingListScreen'
import TodoListScreen from '../screens/TodoListScreen'

import AuthContext from "../contexts/auth";

import colors from '../styles/Colors'

export default function AppRoutes() {

  const Stack = createNativeStackNavigator();
  const Tab = createBottomTabNavigator();
  const { signed, user } = useContext(AuthContext);

  return (
    <NavigationContainer>
      <Stack.Navigator  initialRouteName="SignIn" screenOptions={{
        headerShown: false,
        contentStyle: { backgroundColor: colors.dark_green }
      }}>
        <>
          <Stack.Screen name="SignIn" component={SignInScreen} />
          <Stack.Screen name="Settings" component={SettingsScreen} />
          <Stack.Screen name="Home" component={HomeScreen} />
          <Stack.Screen name="Profile" component={ProfileScreen} />
          <Stack.Screen name="ShoppingList" component={ShoppingListScreen} />
          <Stack.Screen name="TodoList" component={TodoListScreen} />
        </>
      </Stack.Navigator>
    </NavigationContainer>
  );
}