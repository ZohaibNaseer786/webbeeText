import { createDrawerNavigator } from '@react-navigation/drawer';
// import { createStackNavigator } from '@react-navigation/stack';
import { FC } from 'react';
import * as React from 'react';
import DashBoard from '~screens/dashboard';
import ManageCatalog from '~screens/manageCatelog';
import { ScreensName, Strings } from '~theme/styles/Strings';

// const AppStack = createStackNavigator();
const Drawer = createDrawerNavigator();

// const navOptionHandler = () => ({
//   headerShown: false,
// });

const drawerScrees = [
  {
    title: Strings.DashBoard,
    name: ScreensName.DashBoardScreen,
    screenComponent: DashBoard,
  },
  {
    title: Strings.ManageCatagory,
    name: ScreensName.ManageCatagoryScreen,
    screenComponent: ManageCatalog,
  },
];

const AppScreenStack: FC = () => {
  return (
    <Drawer.Navigator initialRouteName={ScreensName.DashBoardScreen}>
      {drawerScrees.map(item => (
        <Drawer.Screen
          options={{
            title: item?.title,
          }}
          key={item.name}
          name={item.name}
          component={item.screenComponent}
        />
      ))}
    </Drawer.Navigator>
  );
};

export default AppScreenStack;
