import { FC } from 'react';
import * as React from 'react';
import 'react-native-gesture-handler';
import { Provider as ThemeProvider } from 'react-native-paper';
import RootStack from '~navigation';

const App: FC = () => {
  return (
    <ThemeProvider>
      <RootStack />
    </ThemeProvider>
  );
};
export default App;
