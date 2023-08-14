/* eslint-disable prettier/prettier */
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeView from './pages/home/home_view';
import DetailView from './pages/detail/detail_view';

const Stack = createNativeStackNavigator();
const App = () => {
  return (<NavigationContainer>
    <Stack.Navigator>
      <Stack.Screen name="STORE" component={HomeView} />
      <Stack.Screen name="PRODUCT DETAIL" component={DetailView} />
    </Stack.Navigator>
  </NavigationContainer>);
};

export default App;
