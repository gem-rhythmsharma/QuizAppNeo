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
import DetailedStats from "../components/detailedStats";
const { height, width } = Dimensions.get("screen");

const ViewAnswers = ({ navigation, route }: any) => {
  const QuizData = route.params.data;

  return (
    <View style={{ backgroundColor: "#FFFEFE", flex: 1 ,width:"100%"}}>
      <View
        style={{
          flexDirection: "row",
          left: 26,
          marginTop: "10%",
          height: 40,
          width: "88%",
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        <Text style={{fontSize:15,fontWeight:"bold",}}>Detailed Stats</Text>
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
      <View style={{ height: "88%" ,width:"100%",}}>
        <ScrollView showsVerticalScrollIndicator={false}>
          {QuizData.map((e: any,index:any) => {
            return <DetailedStats key={index} data={e} index={index} />;
          })}
        </ScrollView>
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  secondmargin: {
    borderBottomColor: "#EBEEF2",
    borderBottomWidth: 1,
    width: width / 0.85,
  },
});
export default ViewAnswers;
