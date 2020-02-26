import React, { Component } from 'react'
import {
    Text,
    View,
    Button,
    StyleSheet,
    ImageBackground,
    TouchableOpacity
} from 'react-native'
import mainStyles from "../../../styles";
import bg from "../../../assets/landingBg.png"

class Landing extends Component {

    componentDidMount() {


        //for dev purpose --- redirect to home page

        setTimeout(() => this.props.navigation.navigate("Home"), 1000)
    }
    render() {
        return (
            // conatiner
            <View style={{
                flex: 1,
                backgroundColor: "black"
            }}>
                <ImageBackground source={bg} style={{
                    flex: 1
                }}>


                    {/* button wrapper */}
                    <View style={styles.btnWrapper}>
                        {/* explore btn */}
                        <TouchableOpacity style={mainStyles.btn}>
                            <Text style={mainStyles.btnText}>Explore More</Text>
                        </TouchableOpacity>

                        {/* slug  */}
                        <Text style={[mainStyles.text, { color: "white", textAlign: "center" }]}> Explore More Workouts </Text>
                    </View>

                </ImageBackground>
            </View>
        )
    }
}

const styles = StyleSheet.create({

    btnWrapper: {
        position: "absolute",
        top: "70%",
        left: 0,
        right: 0,
        paddingHorizontal: 20
    },
    slug: {
        fontSize: 20,
        color: 'white',
        textAlign: "center"
    },
    text: {
        fontFamily: "robotoBold"
    }
})

export default Landing;