import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {useState} from 'react';
import {SCREEN} from '@enums';
import * as ui from '@modules';
import {enableScreens} from 'react-native-screens';
import {NavigationContainer} from '@react-navigation/native';
import BottomTabNavigation from './BottomTabNaviigation';
enableScreens();

const Stack = createNativeStackNavigator();
const screenOptionStyle = {headerShown: false};

export const AuthNavigation = () => {
  return (
    <Stack.Navigator
      // initialRouteName={SCREEN.OnBoarding}
      screenOptions={screenOptionStyle}>
      <Stack.Screen name={SCREEN.OnBoarding} component={ui.OnBoardingScreen} />
      <Stack.Screen name={SCREEN.Login} component={ui.LoginScreen} />
      <Stack.Screen
        name={SCREEN.Regestraton}
        component={ui.RegestrationScreen}
      />
      <Stack.Screen
        name={SCREEN.Forgotpassword}
        component={ui.ForgotPasswordScreen}
      />
      <Stack.Screen name={SCREEN.Verify} component={ui.VerificationScreen} />
    </Stack.Navigator>
  );
};

export const AppNavigation = () => {
  return (
    <Stack.Navigator
      // initialRouteName="Bottom_Tab"
      screenOptions={screenOptionStyle}>
      <Stack.Screen name="Bottom_Tab" component={BottomTabNavigation} />
      <Stack.Screen name={SCREEN.Language} component={ui.LanguageScreen} />
      <Stack.Screen name={SCREEN.Persnol} component={ui.PersnoldataScreen} />
      <Stack.Screen name={SCREEN.ExtraCard} component={ui.ExtracardScreen} />
    </Stack.Navigator>
  );
};

export const RootNavigation = () => {
  const [user, setUser] = useState(true);
  return (
    <NavigationContainer>
      {user ? <AppNavigation /> : <AuthNavigation />}
    </NavigationContainer>
  );
};
