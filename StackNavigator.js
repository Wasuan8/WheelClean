import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Home, OnboardingScreen, PickUpScreen, CartScreen } from './screens';
import { TailwindProvider } from 'tailwindcss-react-native';
import AsyncStorage from "@react-native-async-storage/async-storage";
import { useEffect, useState } from 'react';
import LoginScreen from './screens/LoginScreen';
import RegisterScreen from './screens/RegisterScreen';
import ProfileScreen from './screens/ProfileScreen';
import OrderScreen from './screens/OrderScreen';

const Stack = createNativeStackNavigator();

const StackNavigator = () => {
  const [isFirstLaunch, setIsFirstLaunch] = useState(false);

  useEffect(() => {
    AsyncStorage.getItem("alreadyLaunced").then(value => {
      if (value === null) {
        AsyncStorage.setItem("alreadyLaunched", "true");
        setIsFirstLaunch(true);
      } else {
        setIsFirstLaunch(false);
      }
    });
  }, []);
 
  return (
    
      <TailwindProvider>
        <NavigationContainer>
          <Stack.Navigator>
         {!isFirstLaunch && ( 
            <Stack.Screen options={{ headerShown: false }} name="OnboardingScreen" component={OnboardingScreen} />
         )}
            <Stack.Screen options={{ headerShown: false }} name="LoginScreen" component={LoginScreen} />
            <Stack.Screen options={{ headerShown: false }} name="Home" component={Home} />
            <Stack.Screen options={{ headerShown: false }} name="PickUpScreen" component={PickUpScreen} />
            <Stack.Screen options={{ headerShown: false }} name="CartScreen" component={CartScreen} />
            <Stack.Screen options={{ headerShown: false }} name="RegisterScreen" component={RegisterScreen} />
            <Stack.Screen options={{ headerShown: false }} name="ProfileScreen" component={ProfileScreen} />
            <Stack.Screen options={{ headerShown: false }} name="OrderScreen" component={OrderScreen} />





          </Stack.Navigator>

        </NavigationContainer>
      </TailwindProvider>



  );
}


export default StackNavigator;

