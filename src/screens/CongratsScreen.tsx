import React, { useState, useEffect } from "react";
import {
    View,
    Image,
    Text,
    TouchableOpacity,
    Modal,
    StyleSheet,
    Dimensions,
    BackHandler,
    ImageBackground
} from "react-native";
const { height, width } = Dimensions.get("screen");
const backgroundImage = require("../../assets/congratsbg.png");
const CongratsScreen = ({ navigation, }: any) => {
    return (
        <View style={styles.container}>
            <ImageBackground source={backgroundImage}
                style={styles.background}>
                <View style={styles.congratsview}>
                    <View
                        style={{
                            height: height / 6.5,
                            top: height / 50,
                        }}>
                        <Image source={require("../../assets/congratsimage1.png")}
                            style={{
                                position: "absolute",
                                width: height / 5.206,
                                height: height / 5.206,
                                alignItems: "center",
                                alignSelf: "center",
                            }}></Image>
                        <Image source={require("../../assets/congratsimage5.png")}
                            style={{
                                position: "absolute",
                                alignSelf: "center",
                                // marginVertical: height / 65.7,
                                top: height / 65.6,
                                right: "8%",
                                zIndex: 1,
                            }}></Image>
                        <Image source={require("../../assets/congratsimage7.png")}
                            style={{
                                position: "absolute",
                                alignSelf: "center",
                                // marginVertical: height / 65.7,
                                top: height / 65.6,
                                left: "8%",
                                zIndex: 1,
                            }}></Image>
                        <Image source={require("../../assets/congratsimage4.png")}
                            style={{
                                position: "absolute",
                                alignSelf: "center",
                                // marginVertical: height / 65.7,
                                top: height / 220.6,
                                left: "8%"
                            }}></Image>

                        <Image source={require("../../assets/congratsimage6.png")}
                            style={{
                                position: "absolute",
                                alignSelf: "center",
                                // marginVertical: height / 65.7,
                                top: height / 220.6,
                                right: "8%"
                            }}></Image>
                        <Image source={require("../../assets/congratsimage2.png")}
                            style={{
                                position: "absolute",
                                width: height / 7.718,
                                height: height / 7.718,
                                alignSelf: "center",
                                alignItems: "center",
                                top: height / 35,
                                zIndex: 1
                            }}></Image>
                        <Image source={require("../../assets/congratsimage3.png")}
                            style={{
                                position: "absolute",
                                width: height / 9.545,
                                alignSelf: "center",
                                height: height / 9.545,
                                marginVertical: height / 65.7,
                                borderRadius: 100,
                                top: height / 38.6,
                                zIndex: 1
                            }}></Image>
                        <Image source={require("../../assets/blast3.png")}
                            style={{
                                position: "absolute",
                                alignSelf: "center",
                                top: height / 68.6,
                                left: "47%",
                            }}>
                        </Image>
                        <Image source={require("../../assets/blast2.png")}
                            style={{
                                position: "absolute",
                                alignSelf: "center",
                                top: height / 15.6,
                                left: "37%",
                            }}>
                        </Image>
                        <Image source={require("../../assets/triangle.png")}
                            style={{
                                position: "absolute",
                                alignSelf: "center",
                                top: height / 10.6,
                                left: "42%",
                            }}>
                        </Image>
                        <Image source={require("../../assets/Star1.png")}
                            style={{
                                position: "absolute",
                                alignSelf: "center",
                                top: height / 6.3,
                                left: "25%",
                            }}>
                        </Image>
                        <Image source={require("../../assets/Star2.png")}
                            style={{
                                position: "absolute",
                                alignSelf: "center",
                                top: height / 10.9,
                                right: "30%",
                            }}>
                        </Image>
                        <Image source={require("../../assets/circle.png")}
                            style={{
                                position: "absolute",
                                alignSelf: "center",
                                top: height / 5.5,
                                right: "25%",
                            }}>
                        </Image>
                        <Image source={require("../../assets/blast.png")}
                            style={{
                                position: "absolute",
                                alignSelf: "center",
                                top: height / 25.5,
                                right: "42%",
                            }}>
                        </Image>
                        <Image source={require("../../assets/blast4.png")}
                            style={{
                                position: "absolute",
                                alignSelf: "center",
                                top: height / 20.5,
                                right: "25%",
                            }}>
                        </Image>
                        <Text style={{ top: height / 15, zIndex: 1, fontWeight: "bold", color: "#FFFFFF", fontSize: 18 }}>+500</Text>
                        <Text style={{ top: height / 15, zIndex: 1, fontSize: 14, fontWeight: "400", color: "#FFFFFF" }}>Points</Text>
                    </View>
                    <Text style={{ top: "12%", color: '#666262', fontSize: 16, fontWeight: "bold" }}>You have completed the quiz !</Text>
                    <Text style={{ top: "15%", color: '#634A4A', fontSize: 12, fontWeight: "300", }}>Thank you for taking time to participate Now let us see how you have performed in this quiz</Text>
                    <View style={{ flexDirection: "row", justifyContent: "space-evenly", width: "100%", height: "12%", top: "35%" }}>
                        <View style={styles.correct}><Text style={{ top: "10%" }}>Correct</Text><Text style={{ top: "13%" }}>5</Text></View>
                        <View style={styles.incorrect}><Text style={{ top: "10%" }}>Incorrect</Text><Text style={{ top: "13%" }}>5</Text></View>
                    </View>
                    <View style={{ flexDirection: "column", justifyContent: "space-evenly", width: "100%", height: "30%", alignItems: "center", top: "23%" }}>
                        <TouchableOpacity onPress={() => navigation.navigate("ViewAnswers")} style={styles.viewstats}><Text style={{ color: "#FFFFFF" }}>View Detailed Stats</Text></TouchableOpacity>
                        <TouchableOpacity style={styles.goback} onPress={() => navigation.navigate("Home")}><Text style={{ color: "#69A6FF" }}>Go to homepage</Text></TouchableOpacity>
                    </View>
                </View>

            </ImageBackground>
        </View>
    )
};
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#ffffff",
    },
    background: {
        width: "100%",
        height: "100%",
    },
    congratsview: {
        alignItems: "center",
        // justifyContent: "center",
        top: "15%",
        backgroundColor: "#ffffff",
        width: "80%",
        height: "70%",
        left: "10%",
        borderRadius: 10
    },
    goback: {
        borderRadius: 8,
        width: "80%",
        alignItems: 'center',
        height: "30%",
        borderColor: "#69A6FF",
        justifyContent: "center",
        borderWidth: 1
    },
    viewstats: {
        backgroundColor: "#69A6FF",
        borderRadius: 8,
        width: "80%",
        alignItems: 'center',
        height: "30%",
        justifyContent: "center"
    },
    correct: {
        backgroundColor: "#D8FEE6",
        borderRadius: 10,
        width: "35%",
        alignItems: 'center'
    },
    incorrect: {
        backgroundColor: "#FEDDDD",
        borderRadius: 10,
        width: "35%",
        alignItems: "center"
    },
})
export default CongratsScreen;