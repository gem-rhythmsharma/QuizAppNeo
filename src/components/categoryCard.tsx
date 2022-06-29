import { TouchableOpacity, StyleSheet, View, Text } from "react-native";

let CategoryCard = ({ startQuizModal }: any) => {
  return (
    <View style={styles.boxContainer}>
      <View style={styles.logoIcon}>
        <Text>Logo</Text>
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
          Gemini Test
        </Text>
        <Text
          style={{
            fontSize: 13,
            color: "#5F656C",
            marginTop: 5,
            marginLeft: 10,
          }}
        >
          Duration :16 minutes
        </Text>
        <Text
          style={{
            fontSize: 13,
            color: "#5F656C",
            marginTop: 5,
            marginLeft: 10,
          }}
        >
          From : 26 Nov -16 dec
        </Text>

        <TouchableOpacity
          style={styles.startQuizBtn}
          onPress={() => {
            startQuizModal(true);
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
    backgroundColor: "aqua",
    justifyContent: "center",
    alignItems: "center",
  },
});

export default CategoryCard;
