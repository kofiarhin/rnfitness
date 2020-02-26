import React, { Component } from 'react'
import { Text, View, TouchableOpacity, ScrollView } from 'react-native'
import mainStyles from "../../../styles";
import DailyWorkout from "../widgets/dailyWorkout";
import WorkoutList from "../widgets/workoutLIst";

export default class home extends Component {
    render() {
        return (
            <ScrollView>
                <View>
                    <DailyWorkout />


                    {/* workoout wrapper */}

                    <View style={{
                        marginTop: 20
                    }}>
                        <TouchableOpacity style={{
                            backgroundColor: "#3F83B5",
                            width: "80%",
                            alignSelf: "center",
                            padding: 30,
                            borderRadius: 50
                        }} onPress={() => this.props.navigation.navigate("Workout")}>
                            <Text style={[mainStyles.text, { textAlign: "center", color: "white" }]} >Workout Library</Text>
                        </TouchableOpacity>
                    </View>

                    {/* workout cta wrapper */}


                    {/* sample workouts */}

                    <WorkoutList />
                </View>
            </ScrollView>
        )
    }
}