import React, { Component } from 'react'
import { Text, View } from 'react-native'
import mainStyles from "../../../styles";
import DailyWorkout from "../widgets/dailyWorkout";

export default class home extends Component {
    render() {
        return (
            <View>
                <DailyWorkout />
                <Text> Home Screen </Text>
            </View>
        )
    }
}