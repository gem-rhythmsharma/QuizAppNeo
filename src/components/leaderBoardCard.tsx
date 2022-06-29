import { Image, TouchableOpacity, StyleSheet, View, Text } from "react-native";

let LeaderBoardCard = () => {
  return (
    <View style={styles.scoreCard}>
      <View style={styles.rank}>
        <Text
          style={{
            color: "#fff",
            alignSelf: "center",
            fontSize: 25,
            fontWeight: "bold",
          }}
        >
          1
        </Text>
      </View>
      <Image
        source={{
          uri: "https://www.bpimaging.com/assets/uploads/2015/02/business-portrait-photography-ford-executive.jpg",
        }}
        style={{
          height: 50,
          width: 50,
          marginLeft: 30,
          borderRadius: 40,
        }}
        resizeMode="center"
      />
      <Text
        style={{
          fontSize: 15,
          marginVertical: 7,
          marginLeft: 10,
          fontWeight: "700",
        }}
      >
        Rhythm Sharma {"\n"}{" "}
        <Text style={{ color: "#5F656C" }}>Department</Text>
      </Text>
      <Text
        style={{
          fontSize: 20,
          marginVertical: 13,
          color: "#09101D",
          marginLeft: 30,
        }}
      >
        500 pts
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  scoreCard: {
    height: 60,
    width: "80%",
    backgroundColor: "#FFFFFF",
    flexDirection: "row",
    alignSelf: "center",
    borderRadius: 10,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowOpacity: 0.27,
    shadowRadius: 4.65,
    elevation: 6,
    marginBottom: 40,
  },
  rank: {
    height: 40,
    width: 40,
    backgroundColor: "#F8C67C",
    position: "absolute",
    top: 10,
    left: -20,
    borderRadius: 10,
    justifyContent: "center",
  },
});

export default LeaderBoardCard;
