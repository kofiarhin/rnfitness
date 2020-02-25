import { createAppContainer, createSwitchNavigator } from "react-navigation";
import { createBottomTabNavigator } from "react-navigation-tabs";
import { createStackNavigator } from "react-navigation-stack"

// screens
import React from "react";
import HomeScreen from "./src/components/screens/home";
import LoginScreen from "./src/components/screens/login"
import LandingScreen from "./src/components/screens/landing"

import FontAwesome from "react-native-vector-icons/FontAwesome"


const MainNav = createBottomTabNavigator({
    Home: {
        screen: HomeScreen,
        navigationOptions: ({ navigation }) => ({
            tabBarIcon: ({ focused, tintColor }) => (
                <FontAwesome name="bandcamp" size={30} color={tintColor} />
            )
        })
    },
    Login: {
        screen: LoginScreen
    }
}, {
    tabBarOptions: {
        showLabel: false
    }
}
)

const NavStack = createSwitchNavigator({

    Landing: {
        screen: LandingScreen,
    },
    Home: {
        screen: MainNav
    }

})

export default createAppContainer(NavStack);