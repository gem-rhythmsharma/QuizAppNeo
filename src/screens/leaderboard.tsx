import { useEffect } from "react";
import { StyleSheet, Text, View, Image, ScrollView, BackHandler } from "react-native";
import LeaderBoardCard from "../components/leaderBoardCard";

let Leaderboard = ({ navigation }: any) => {
  useEffect(() => {
    const backbuttonHander = () => {
      navigation.navigate("Home");
      return true;
    };
    BackHandler.addEventListener("hardwareBackPress", backbuttonHander);
  });
  return (
    <View style={{ backgroundColor: "#67A4FE", height: "100%", width: "100%" }}>
      <Image
        source={require("../../assets/leaderboardBackground.png")}
        style={{
          height: "100%",
          width: "100%",
          zIndex: -5,
          position: "absolute",
          top: 40,
        }}
      />
      <Text
        style={{
          fontSize: 35,
          alignSelf: "center",
          color: "#F9F9F9",
          marginTop: 70,
          fontWeight: "700",
        }}
      >
        Leaderboard
      </Text>
      <View style={styles.imageContainer}>
        <Image
          source={{
            uri: "https://www.bpimaging.com/assets/uploads/2015/02/business-portrait-photography-ford-executive.jpg",
          }}
          style={{
            height: "90%",
            width: "90%",
            alignSelf: "center",
            borderRadius: 100,
            zIndex: 5,
          }}
          resizeMode="center"
        />
      </View>
      <View style={styles.userContainer}>
        <Image
          source={require("../../assets/centerScoreCard.png")}
          resizeMode="contain"
          style={{
            height: 80,
            width: 240,
            position: "absolute",
            top: -35,
            zIndex: 2,
            alignSelf: "center",
          }}
        />
        <Image
          source={require("../../assets/scoreCardSupport.png")}
          resizeMode="contain"
          style={{
            height: 60,
            width: 80,
            position: "absolute",
            top: -20,
            zIndex: 1,
            left: 40,
          }}
        />
        <Image
          source={require("../../assets/scoreCardSupport.png")}
          resizeMode="contain"
          style={{
            height: 60,
            width: 80,
            position: "absolute",
            top: -20,
            zIndex: 1,
            right: 40,
            transform: [{ rotate: "180deg" }],
          }}
        />
        <Text
          style={{
            fontSize: 23,
            color: "#858383",
            position: "absolute",
            top: -13,
            alignSelf: "center",
            zIndex: 5,
          }}
        >
          Your{"  "}
          <Text style={{ fontWeight: "bold", color: "#09101D" }}> 500 pts</Text>
          {"   "}
          Score
        </Text>
        <ScrollView>
          <LeaderBoardCard />
          <LeaderBoardCard />
          <LeaderBoardCard />
          <LeaderBoardCard />
          <LeaderBoardCard />
          <LeaderBoardCard />
          <LeaderBoardCard />
        </ScrollView>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  imageContainer: {
    height: 140,
    width: 140,
    alignSelf: "center",
    backgroundColor: "#FFE55D",
    borderRadius: 75,
    marginTop: 50,
    zIndex: 4,
    justifyContent: "center",
  },
  userContainer: {
    height: "65%",
    backgroundColor: "#fff",
    borderTopStartRadius: 50,
    borderTopEndRadius: 50,
    marginTop: 15,
    paddingTop: 70,
  },

});

export default Leaderboard;
