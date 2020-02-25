import React, { Component } from 'react'
import { Text, View, Button } from 'react-native'

export default class landing extends Component {
    render() {
        return (
            <View>
                <Text style={{
                    fontSize: 30,
                    marginVertical: 30,
                    textAlign: "center"
                }}> Landing Screen </Text>
                <Button title="Go to home" onPress={() => this.props.navigation.navigate("Home")} />
            </View>
        )
    }
}
