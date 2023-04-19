import {useColorScheme} from 'react-native';
import {ThemeProvider} from 'styled-components';
import {StackMain} from 'navigation';
import {darkTheme, lightTheme} from 'theme';

function App(): JSX.Element {
  const isDarkMode = useColorScheme() === 'dark';
  return (
    <ThemeProvider theme={isDarkMode ? darkTheme : lightTheme}>
      <StackMain />
    </ThemeProvider>
  );
}

export default App;
