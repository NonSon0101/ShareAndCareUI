import "react-native-gesture-handler";
import {
  DrawerContentScrollView,
  DrawerItemList,
  createDrawerNavigator,
} from "@react-navigation/drawer";

import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import {
  HomeScreen,
  LoginScreen,
  SignUpScreen,
  WelcomeScreen,
} from "./screens";
import * as screens from "./screens";
import MenuComponent from "./components/MenuComponent";

const Stack = createNativeStackNavigator();
const Drawer = createDrawerNavigator();

export const CustomDrawer = (props) => {
  return (
    <DrawerContentScrollView>
      <MenuComponent />
      <DrawerItemList {...props} />
    </DrawerContentScrollView>
  );
};

function Auth() {
  <Stack.Navigator>
    <Stack.Screen
      name="Welcome"
      component={screens.WelcomeScreen}
      options={{ headerShown: false }}
    />
    <Stack.Screen
      name="Login"
      component={screens.LoginScreen}
      options={{ headerShown: false }}
    />
    <Stack.Screen
      name="SignUp"
      component={screens.SignUpScreen}
      options={{ headerShown: false }}
    />
  </Stack.Navigator>;
}

function HomeMenu() {
  return (
    <Drawer.Navigator drawerContent={(props) => <CustomDrawer {...props} />}>
      <Drawer.Screen
        name="Home"
        component={screens.HomeScreen}
        options={{ headerShown: false, drawerPosition: "right" }}
      />
      <Drawer.Screen
        name="Account"
        component={screens.AccountScreen}
        options={{ headerShown: false, drawerPosition: "right" }}
      />
      <Drawer.Screen
        name="Friend"
        component={screens.FriendScreen}
        options={{ headerShown: false, drawerPosition: "right" }}
      />
      <Drawer.Screen
        name="Cart"
        component={screens.CartScreen}
        options={{ headerSxhown: false, drawerPosition: "right" }}
      />
      <Drawer.Screen
        name="Level"
        component={screens.LevelScreen}
        options={{ headerShown: false, drawerPosition: "right" }}
      />
      <Drawer.Screen
        name="Revenue"
        component={screens.RevenueScreen}
        options={{ headerShown: false, drawerPosition: "right" }}
      />
      <Drawer.Screen
        name="Map"
        component={screens.MapScreen}
        options={{ headerShown: false, drawerPosition: "right" }}
      />
    </Drawer.Navigator>
  );
}

function HomeStack() {
  return (
    <Stack.Navigator
      initialRouteName="HomeMenu"
      screenOptions={{ gestureEnabled: false }}
    >
      <Stack.Screen
        name="HomeMenu"
        component={HomeMenu}
        options={{ headerShown: false }}
      />

      <Stack.Screen
        name="Home"
        component={screens.HomeScreen}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="Profile"
        component={screens.ProfileScreen}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="Map"
        component={screens.MapScreen}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="Product"
        component={screens.ProductScreen}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="Message"
        component={screens.MessageScreen}
        options={{ headerShown: false }}
      />
    </Stack.Navigator>
  );
}

export default function App() {
  return (
    <NavigationContainer>
      <HomeStack />
    </NavigationContainer>
  );
}
