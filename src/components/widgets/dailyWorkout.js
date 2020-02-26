import React, { Component } from 'react'
import { Text, View, StyleSheet, ImageBackground, TouchableOpacity } from 'react-native';
import daily1 from "../../../assets/daily1.jpg";
import mainStyles from "../../../styles";
import FontAwesome from "react-native-vector-icons/FontAwesome";

class dailyWorkout extends Component {

    componentDidMount() {


    }
    render() {
        return (
            <View style={{
                width: "100%",
                height: 400,
                backgroundColor: "black"
            }}>
                <ImageBackground source={daily1} style={{
                    height: "100%"
                }}>
                    {/* content */}
                    <View style={styles.content}>

                        <View style={{
                            marginBottom: 60
                        }}>
                            <TouchableOpacity style={{
                                backgroundColor: "white",
                                marginTop: 30,
                                width: 300,
                                paddingVertical: 20
                            }}>
                                <Text style={[mainStyles.text, { textAlign: "center" }]}> Workout of the Day </Text>
                            </TouchableOpacity>
                        </View>

                        <View style={{
                            padding: 20
                        }}>

                            <Text style={[styles.text, mainStyles.text]}> February 22, 2020</Text>
                            <Text style={[styles.text, mainStyles.text]}> Rep Building</Text>

                            <TouchableOpacity style={{
                                backgroundColor: "white",
                                padding: 10,
                                width: 200,
                                marginBottom: 20

                            }}>
                                <Text style={[styles.text, mainStyles.text, { color: "black", textAlign: "center" }]}> Start Workout</Text>
                            </TouchableOpacity>
                            <View>

                                <View style={{
                                    flexDirection: "row"
                                }}>
                                    <FontAwesome name="heart" color="white" size={18} style={{ marginRight: 20 }} />
                                    <Text style={[styles.text]}> 244</Text>
                                </View>
                            </View>

                        </View>

                    </View>

                </ImageBackground>

            </View >
        )
    }
}

const styles = StyleSheet.create({

    text: {
        color: "white",
        fontFamily: "robotoRegular",
        marginBottom: 10
    }

})

export default dailyWorkout;