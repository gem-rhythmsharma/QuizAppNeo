import { useEffect, useState } from "react";
import {
  Image,
  TouchableOpacity,
  StyleSheet,
  View,
  Text,
  ScrollView,
  Modal,

} from "react-native";
import CategoryCard from "../components/categoryCard";
const Home = ({ navigation }: any) => {
  let [modalVis, setModalVis] = useState(true);
  let [quizConfirmModal, setQuizConfirmModal] = useState(false);

  useEffect(() => {
    setTimeout(function () {
      setModalVis(false);
    }, 1000);
  }, []);

  function startQuizModal(value: any) {
    setQuizConfirmModal(value);
  }


  return (
    <View style={styles.container}>
      {modalVis && (
        <Modal visible={modalVis} style={styles.flashModal}>
          <Image source={require("../../assets/Splash.png")}></Image>
        </Modal>
      )}
      {quizConfirmModal && (
        <Modal visible={quizConfirmModal} transparent={true}>
          <View style={styles.confirmQuizModal}>
            <View style={styles.quizConfirmModalContainer}>
              <Image
                style={{
                  height: 100,
                  position: "absolute",
                  top: -40,
                  left: 130,
                }}
                source={require("../../assets/confirmSmiley.png")}
                resizeMode="contain"
              />
              <TouchableOpacity
                onPress={() => {
                  setQuizConfirmModal(false);
                }}
              >
                <Image
                  style={{
                    height: 25,
                    width: 25,
                    position: "absolute",
                    right: 20,
                    top: 15,
                  }}
                  source={{
                    uri: "https://cdn-icons-png.flaticon.com/128/753/753345.png",
                  }}
                  resizeMode="contain"
                />
              </TouchableOpacity>
              <Text
                style={{
                  color: "#69A6FF",
                  fontWeight: "500",
                  fontSize: 20,
                  marginTop: 70,
                  alignSelf: "center",
                }}
              >
                Can i explain the rules first ?{" "}
              </Text>
              <Text
                style={{
                  fontSize: 18,
                  padding: 10,
                  backgroundColor: "#fff",
                  height: 60,
                  width: "90%",
                  marginTop: 20,
                  marginLeft: 20,
                  borderRadius: 20,
                }}
              >
                Attempting all questions is mandatory before closing any
                particular quiz.
              </Text>
              <Text
                style={{
                  fontSize: 18,
                  padding: 10,
                  backgroundColor: "#fff",
                  height: 80,
                  width: "90%",
                  marginTop: 20,
                  marginLeft: 20,
                  borderRadius: 20,
                }}
              >
                For your convinience, you can choose to skip any question and
                review them later before submitting the quiz response.
              </Text>
              <Text
                style={{
                  fontSize: 18,
                  padding: 10,
                  backgroundColor: "#fff",
                  height: 40,
                  width: "90%",
                  marginTop: 20,
                  marginLeft: 20,
                  borderRadius: 20,
                }}
              >
                No negative marking for incorrect answers.
              </Text>
              <TouchableOpacity style={styles.finalStartBtn} onPress={() => {
                navigation.navigate("Quiz");
              }}>
                <Text style={{ color: "#fff", fontSize: 20 }}>
                  Start Your Quiz
                </Text>
              </TouchableOpacity>
            </View>
          </View>
        </Modal>
      )}
      <View style={styles.header}>
        <View style={styles.UserImage}>
          <Image
            style={{
              height: 80,
              width: 80,
            }}
            source={{
              uri: "https://cdn-icons-png.flaticon.com/128/3135/3135715.png",
            }}
            resizeMode="contain"
          />
        </View>
        <View style={styles.welcomeBar}>
          <View style={styles.welcomeText}>
            <Text style={{ fontSize: 15, paddingTop: 45, color: "#F8F8F8" }}>
              Welcome Back,
            </Text>
            <Text
              style={{ fontSize: 30, color: "#FFFFFF", fontWeight: "bold" }}
            >
              Quiz for you
            </Text>
          </View>
          <TouchableOpacity style={styles.closeBtn}>
            <Image
              style={{
                height: 25,
                width: 25,
                // borderRadius: 5,
              }}
              source={{
                uri: "https://cdn-icons-png.flaticon.com/128/753/753345.png",
              }}
              resizeMode="contain"
            />
          </TouchableOpacity>
        </View>
      </View>
      <Image
        style={{ height: 70, width: "100%", position: "absolute", top: 115 }}
        source={require("../../assets/wave.png")}
        resizeMode="contain"
      />
      <ScrollView>
        <Text
          style={{
            fontSize: 20,
            fontWeight: "bold",
            color: "#666262",
            margin: 20,
          }}
        >
          Your Dashboard
        </Text>
        <View style={styles.dashboard}>
          <TouchableOpacity style={[styles.dashboardBox]}>
            <Image
              style={{
                height: 50,
                width: 50,
              }}
              source={{
                uri: "https://cdn-icons-png.flaticon.com/128/32/32223.png",
              }}
              resizeMode="contain"
            />
            <Text
              style={{ color: "#666262", fontWeight: "bold", marginTop: 5 }}
            >
              View history
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={[styles.dashboardBox]}
            onPress={() => {
              navigation.navigate("Leaderboard");
            }}
          >
            <Image
              style={{
                height: 50,
                width: 50,
              }}
              source={{
                uri: "https://cdn-icons-png.flaticon.com/128/1426/1426758.png",
              }}
              resizeMode="contain"
            />
            <Text
              style={{ color: "#666262", fontWeight: "bold", marginTop: 5 }}
            >
              Leaderboard
            </Text>
          </TouchableOpacity>
        </View>
        <Text
          style={{
            fontSize: 20,
            fontWeight: "bold",
            color: "#666262",
            margin: 20,
          }}
        >
          Quiz Categories
        </Text>
        <View style={styles.quizContainer}>
          <CategoryCard startQuizModal={startQuizModal} />
          <CategoryCard startQuizModal={startQuizModal} />
        </View>

        <View style={styles.footer}>
          <Text
            style={{
              fontWeight: "bold",
              color: "#666262",
              fontSize: 22,
              marginTop: 50,
              marginLeft: 20,
            }}
          >
            Are you ready to get to the{"\n"}top of the
            <Text style={{ color: "#69A6FF" }}> leaderboards ?</Text>
          </Text>
          <Text
            style={{
              color: "#634A4A",
              fontSize: 17,
              marginLeft: 20,
              marginVertical: 10,
            }}
          >
            Attemp any quiz that you feel like
          </Text>
          <Text
            style={{
              color: "#634A4A",
              fontSize: 17,
              marginLeft: 20,
              marginVertical: 10,
            }}
          >
            Answer questions in any order{"\n"}within the time limit.{" "}
          </Text>
          <Text
            style={{
              color: "#634A4A",
              fontSize: 17,
              marginLeft: 20,
              marginVertical: 10,
            }}
          >
            Collect points and climb the{"\n"}leaderboard !{" "}
          </Text>
          <Image
            style={{
              height: 320,
              width: "100%",
              position: "absolute",
              top: 40,
              overflow: "hidden",
              zIndex: -2,
            }}
            source={require("../../assets/footerImg.png")}
            resizeMode="contain"
          />
        </View>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    height: "100%",
    width: "100%",
    backgroundColor: "#ffffff",
  },
  header: {
    paddingTop: 27,
    height: "20%",
    width: "100%",
    flexDirection: "row",
    backgroundColor: "#69A6FF",
  },
  UserImage: {
    width: "25%",
    justifyContent: "center",
    alignItems: "center",
    marginLeft: 25,
  },
  welcomeBar: {
    flexDirection: "row",
    width: "80%",
    marginLeft: 10,
  },
  welcomeText: {
    width: "55%",
  },
  closeBtn: {
    width: "27%",
    direction: "rtl",
    height: "23%",
    marginTop: 20,
    paddingLeft: 40,
  },
  dashboard: {
    flexDirection: "row",
    height: "11%",
    width: "100%",
    alignItems: "center",
    paddingLeft: 10,
  },
  dashboardBox: {
    height: 110,
    width: 110,
    borderWidth: 5,
    borderColor: "#fff",
    borderRadius: 15,
    justifyContent: "center",
    alignItems: "center",
    marginRight: 10,
    backgroundColor: "#EBF9FE",
  },
  quizContainer: {
    width: "100%",
    alignItems: "center",
    paddingTop: 10,
  },
  footer: {
    height: 330,
  },
  flashModal: {
    height: "100%",
    width: "100%",
    backgroundColor: "green",
  },
  confirmQuizModal: {
    backgroundColor: "#000000aa",
    height: "100%",
    width: "100%",
  },
  quizConfirmModalContainer: {
    height: "50%",
    width: "100%",
    position: "absolute",
    bottom: 0,
    backgroundColor: "#EBF9FE",
    borderTopEndRadius: 40,
    borderTopStartRadius: 40,
  },
  finalStartBtn: {
    height: 40,
    width: "60%",
    backgroundColor: "#69A6FF",
    justifyContent: "center",
    alignItems: "center",
    alignSelf: "center",
    borderRadius: 10,
    marginTop: 20,
  },
});

export default Home;
