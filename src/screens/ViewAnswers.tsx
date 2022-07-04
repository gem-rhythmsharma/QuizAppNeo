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
} from "react-native";
import { ScrollView } from "react-native-gesture-handler";
const { height, width } = Dimensions.get("screen");

const ViewAnswers = ({ navigation, }: any) => {
    return (
        <View style={{ backgroundColor: "#FFFEFE", flex: 1, }}>
            <View style={{ flexDirection: "row", left: 26, marginTop: "10%", height: 40, width: "88%", alignItems: "center", justifyContent: "space-between" }}>
                <Text>Detailed Stats</Text>
                <TouchableOpacity onPress={() => navigation.goBack()}>
                    <Image
                        style={{
                            height: 25,
                            width: 25,
                        }}
                        source={{
                            uri: "https://cdn-icons-png.flaticon.com/128/753/753345.png",
                        }}
                        resizeMode="contain"
                    />
                </TouchableOpacity>
            </View>
            <View style={styles.secondmargin} />
            <View style={{ height: "88%" }}>
                <ScrollView showsVerticalScrollIndicator={false}>
                    <Text style={{ left: 26 }}>Q1.What is correct answer?</Text>
                    <View style={{ backgroundColor: "#D8FEE6", width: "80%", height: 72, alignItems: "center", justifyContent: "center", borderRadius: 8, left: 26 }}>
                        <Text>Delhi</Text>
                    </View>
                    <View style={{ backgroundColor: "#FEDDDD", width: "80%", height: 72, alignItems: "center", justifyContent: "center", borderRadius: 8, left: 26 }}>
                        <Text>hyd</Text>
                    </View>
                    <Text style={{ left: 26 }}>Q1.What is correct answer?</Text>
                    <View style={{ backgroundColor: "#D8FEE6", width: "80%", height: 72, alignItems: "center", justifyContent: "center", borderRadius: 8, left: 26 }}>
                        <Text>Delhi</Text>
                    </View>
                </ScrollView></View>
        </View>
    )
}
const styles = StyleSheet.create({
    secondmargin: {
        borderBottomColor: "#EBEEF2",
        borderBottomWidth: 1,
        width: width / 0.85,
    },
})
export default ViewAnswers;