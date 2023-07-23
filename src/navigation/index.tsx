import {
  NavigationContainer,
  DefaultTheme,
  DarkTheme,
} from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { FC, useEffect } from 'react';
import * as React from 'react';
import { useColorScheme } from 'react-native';
import 'react-native-gesture-handler';
import { isMountedRef, navigationRef } from '~core/utils/NavigationUtil';
import { ScreensName } from '~theme/styles/Strings';

import AppStack from './stacks/AppStack';

const RootStack = createStackNavigator();

const navOptionHandler = () => ({
  headerShown: false,
});

// const navHeaderHandler = () => ({
//   headerBackTitleVisible: false,
//   headerStyle: {
//     backgroundColor: theme.colors.primary,
//   },
//   headerTintColor: theme.colors.white,
//   headerTitleStyle: {
//     fontFamily: FontFamilyName.MontserratBold,
//     fontWeight: 'bold',
//     fontSize: 20,
//     lineHeight: 20.47,
//   },
// });

const RootStackNavigator: FC = () => {
  const scheme = useColorScheme();

  useEffect(() => {
    isMountedRef.current = true;
    return () => (isMountedRef.current = false);
  }, []);

  return (
    <NavigationContainer
      ref={navigationRef}
      theme={scheme === 'dark' ? DarkTheme : DefaultTheme}>
      <RootStack.Navigator
        initialRouteName={ScreensName.AppScreen}
        screenOptions={navOptionHandler}>
        <RootStack.Screen
          name={ScreensName.AppScreen}
          component={AppStack}
          options={navOptionHandler}
        />
      </RootStack.Navigator>
    </NavigationContainer>
  );
};

export default RootStackNavigator;
