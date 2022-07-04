import { TouchableOpacity, StyleSheet, View, Text,Image } from "react-native";

let CategoryCard = ({ startQuizModal,data }: any) => {
  let month=["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"]
  return (
    <View style={styles.boxContainer}>
      <View style={styles.logoIcon}>
        <Image
          style={{
            height: "100%",
            width: "100%",
          }}
          source={{
            uri: data.logoUrl,
          }}
          resizeMode="contain"
        />
      </View>
      <View>
        <Text
          style={{
            fontSize: 20,
            fontWeight: "bold",
            marginTop: 10,
            marginLeft: 10,
          }}
        >
          {data.Topic}
        </Text>
        <Text
          style={{
            fontSize: 13,
            color: "#5F656C",
            marginTop: 5,
            marginLeft: 10,
          }}
        >
          Duration :{data.Time} minutes
        </Text>
        <Text
          style={{
            fontSize: 13,
            color: "#5F656C",
            marginTop: 5,
            marginLeft: 10,
          }}
        >
          From : {data.TimePeriod.start.split("-")[0]}{" "}
          {month[data.TimePeriod.start.split("-")[1] - 1]} -
          {data.TimePeriod.end.split("-")[0]}{" "}
          {month[data.TimePeriod.end.split("-")[1] - 1]}
        </Text>

        <TouchableOpacity
          style={styles.startQuizBtn}
          onPress={() => {
            startQuizModal(true,data.Id);
            // setQuizConfirmModal(true);
          }}
        >
          <Text>Start Quiz</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  boxContainer: {
    height: 150,
    width: "90%",
    flexDirection: "row",
    padding: 10,
    borderRadius: 10,
    backgroundColor: "white",
    marginBottom: 20,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.3,
    shadowRadius: 4.65,

    elevation: 8,
  },
  startQuizBtn: {
    width: 150,
    height: 25,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 10,
    margin: 5,
    backgroundColor: "#fff",
    borderWidth: 1,
    borderColor: "black",
  },
  logoIcon: {
    margin: 10,
    height: 100,
    width: 100,
    justifyContent: "center",
    alignItems: "center",
  },
});

export default CategoryCard;
