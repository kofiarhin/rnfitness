import React, { Component } from 'react'
import { Text, View } from 'react-native'
import mainStyles from "../../../styles";

export default class workout extends Component {
    render() {
        return (
            <View style={mainStyles.container}>
                <Text> Workout Screen </Text>
            </View>
        )
    }
}
