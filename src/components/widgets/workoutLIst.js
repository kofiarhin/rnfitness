import React, { Component } from "react";
import {

    View,
    Text,
    ScrollView,
    ImageBackground,
    StyleSheet,
    TouchableOpacity
} from "react-native";
import LinearGradient from "react-native-linear-gradient";
import mainStyles from "../../../styles";

import daily1 from "../../../assets/daily1.jpg"
import daily2 from "../../../assets/daily2.jpg"
import daily3 from "../../../assets/daily3.jpg"


class WorkoutList extends Component {

    render() {

        return <View style={{
            marginTop: 20,
            height: 300,
        }}>

            <View>
                <View style={{
                    flexDirection: "row",
                    justifyContent: "space-between",
                    padding: 10,
                    alignItems: "center",
                    marginBottom: 30
                }}>
                    <Text style={[mainStyles.text, { fontSize: 30 }]}>Daily Workout</Text>
                    <TouchableOpacity>
                        <Text style={mainStyles.text}> View All</Text>
                    </TouchableOpacity>
                </View>
            </View>
            <ScrollView horizontal>

                {/* workout unit */}

                <TouchableOpacity>

                    <View style={styles.workoutUnit}>
                        <ImageBackground source={daily3} style={{
                            flex: 1
                        }}>

                            <LinearGradient
                                start={{ x: 0.1, y: .6 }} end={{ x: 0.1, y: 1 }}
                                locations={[0, 9]}
                                colors={['rgba(0,0,0,.1)', 'rgba(0,0,0,1)']} style={{ position: 'absolute', top: 0, left: 0, right: 0, bottom: 0, flexDirection: 'row', borderRadius: 10, }} >
                                <View style={{
                                    position: "absolute",
                                    top: "70%",
                                    padding: 10
                                }}>
                                    <Text style={[styles.text, { fontSize: 18, marginBottom: 10 }]}> How To Grow Bigger Arms </Text>
                                    <Text style={styles.text}>All the Techniques</Text>
                                </View>
                            </LinearGradient>


                        </ImageBackground>
                    </View>
                </TouchableOpacity>

                {/*  end workout unit */}


                {/* workout unit */}

                <TouchableOpacity>

                    <View style={styles.workoutUnit}>
                        <ImageBackground source={daily2} style={{
                            flex: 1
                        }}>

                            <LinearGradient
                                start={{ x: 0.1, y: .6 }} end={{ x: 0.1, y: 1 }}
                                locations={[0, 9]}
                                colors={['rgba(0,0,0,.1)', 'rgba(0,0,0,1)']} style={{ position: 'absolute', top: 0, left: 0, right: 0, bottom: 0, flexDirection: 'row', borderRadius: 10, }} >
                                <View style={{
                                    position: "absolute",
                                    top: "70%",
                                    padding: 10
                                }}>
                                    <Text style={[styles.text, { fontSize: 18, marginBottom: 10 }]}> How To Grow Bigger Arms </Text>
                                    <Text style={styles.text}>All the Techniques</Text>
                                </View>
                            </LinearGradient>


                        </ImageBackground>
                    </View>
                </TouchableOpacity>

                {/*  end workout unit */}


                {/* workout unit */}

                <TouchableOpacity>

                    <View style={styles.workoutUnit}>
                        <ImageBackground source={daily1} style={{
                            flex: 1
                        }}>

                            <LinearGradient
                                start={{ x: 0.1, y: .6 }} end={{ x: 0.1, y: 1 }}
                                locations={[0, 9]}
                                colors={['rgba(0,0,0,.1)', 'rgba(0,0,0,1)']} style={{ position: 'absolute', top: 0, left: 0, right: 0, bottom: 0, flexDirection: 'row', borderRadius: 10, }} >
                                <View style={{
                                    position: "absolute",
                                    top: "70%",
                                    padding: 10
                                }}>
                                    <Text style={[styles.text, { fontSize: 18, marginBottom: 10 }]}> How To Grow Bigger Arms </Text>
                                    <Text style={styles.text}>All the Techniques</Text>
                                </View>
                            </LinearGradient>


                        </ImageBackground>
                    </View>
                </TouchableOpacity>

                {/*  end workout unit */}


                {/* workout unit */}

                <TouchableOpacity>

                    <View style={styles.workoutUnit}>
                        <ImageBackground source={daily2} style={{
                            flex: 1
                        }}>

                            <LinearGradient
                                start={{ x: 0.1, y: .6 }} end={{ x: 0.1, y: 1 }}
                                locations={[0, 9]}
                                colors={['rgba(0,0,0,.1)', 'rgba(0,0,0,1)']} style={{ position: 'absolute', top: 0, left: 0, right: 0, bottom: 0, flexDirection: 'row', borderRadius: 10, }} >
                                <View style={{
                                    position: "absolute",
                                    top: "70%",
                                    padding: 10
                                }}>
                                    <Text style={[styles.text, { fontSize: 18, marginBottom: 10 }]}> How To Grow Bigger Arms </Text>
                                    <Text style={styles.text}>All the Techniques</Text>
                                </View>
                            </LinearGradient>


                        </ImageBackground>
                    </View>
                </TouchableOpacity>

                {/*  end workout unit */}

            </ScrollView>
        </View>
    }
}

const styles = StyleSheet.create({
    workoutUnit: {
        height: "100%",
        width: 250,
        backgroundColor: "blue",
        marginRight: 20
    },
    text: {

        color: 'white'
    }
})

export default WorkoutList;