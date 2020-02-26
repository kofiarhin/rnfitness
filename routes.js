import { createAppContainer, createSwitchNavigator } from "react-navigation";
import { createBottomTabNavigator } from "react-navigation-tabs";
import { createStackNavigator } from "react-navigation-stack"

// screens
import React from "react";
import HomeScreen from "./src/components/screens/home";
import LoginScreen from "./src/components/screens/login"
import LandingScreen from "./src/components/screens/landing"
import WorkoutScreen from "./src/components/screens/workout";
import ChartScreen from "./src/components/screens/chart";
import ProfileScreen from "./src/components/screens/profile";

// fonts
import FontAwesome from "react-native-vector-icons/FontAwesome"
import Fontisto from "react-native-vector-icons/Fontisto"


const MainNav = createBottomTabNavigator({
    Home: {
        screen: HomeScreen,
        navigationOptions: ({ navigation }) => ({
            tabBarIcon: ({ focused, tintColor }) => (
                <FontAwesome name="bandcamp" size={30} color={tintColor} />
            )
        })
    },
    Workout: {
        screen: WorkoutScreen,
        navigationOptions: ({ navigation }) => ({
            tabBarIcon: ({ focused, tintColor }) => (
                <FontAwesome name="street-view" size={30} color={tintColor} />
            )
        })
    },
    Chart: {
        screen: ChartScreen,
        navigationOptions: ({ navigation }) => ({
            tabBarIcon: ({ focused, tintColor }) => (
                <Fontisto name="pie-chart-2" size={30} color={tintColor} />
            )
        })
    },
    Profile: {
        screen: ProfileScreen,
        navigationOptions: ({ navigation }) => ({
            tabBarIcon: ({ focused, tintColor }) => (
                <FontAwesome name="user" size={30} color={tintColor} />
            )
        })
    }
}, {
    tabBarOptions: {
        showLabel: false,
        style: {
            backgroundColor: "black",
            height: 70
        },
        activeTintColor: '#3F83B5'
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