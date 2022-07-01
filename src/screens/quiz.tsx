import React, { useEffect, useState } from "react";
import { Quiz_data } from "../data/quizData";
import {
  View,
  Text,
  StyleSheet,
  Touchable,
  TouchableOpacity,
  ScrollView,
  BackHandler,
  Pressable,
  Dimensions,
  Modal,
} from "react-native";
const { height, width } = Dimensions.get("screen");
import { FontAwesome } from "@expo/vector-icons";

function shuffleArray(array: any) {
  for (let i = array.length - 1; i >= 1; i--) {
    let j = Math.floor(Math.random() * (i + 1)); // 0 <= j <= i
    let temp = array[j];
    array[j] = array[i];
    array[i] = temp;
  }
  return array;
}

let Quiz = () => {
  let [quesNo, setQuesNo] = useState(1);
  let [currentTime, setCurrentTime] = useState(5 * 60);
  let [selected, setSelected] = useState(false);
  let [options, setOptions] = useState(["a", "b", "c", "d"]);

  let generateOptions = () => {
    let arr = [...Quiz_data[quesNo - 1].Incorect_Ans];
    arr.push(Quiz_data[quesNo - 1].CorrectAns);
    arr = shuffleArray(arr);
    setOptions(arr);
  };
  useEffect(() => {
    generateOptions();
  }, [quesNo]);

  useEffect(() => {
    setTimeout(() => {
      setCurrentTime(currentTime - 1);
    }, 1000);
  });

  let clkPrevious = () => {
    if (quesNo > 1) {
      setQuesNo(quesNo - 1);
      generateOptions();
    }
  };
  let clkSkip = () => {
    if (quesNo < 10) {
      setQuesNo(quesNo + 1);
      generateOptions();
    }
  };
  const [showWarning, SetshowWarning] = useState(false);
  const alert = () => {
    SetshowWarning(true);
  };
  const showWarningfalse = () => {
    SetshowWarning(false);
  };
  useEffect(() => {
    const backbuttonHander = () => {
      alert()
      return true;
    };
    BackHandler.addEventListener("hardwareBackPress", backbuttonHander);
  });
  return (
    <View style={styles.container}>
      <View style={styles.topBar}>
        <TouchableOpacity style={{ marginLeft: 20, alignSelf: "center" }}>
          <Text style={{ fontSize: 25, color: "#FFFFFF" }}>{"<"}</Text>
        </TouchableOpacity>

        <Text
          style={{
            fontSize: 20,
            color: "#FFFFFF",
            alignSelf: "center",
            marginLeft: 40,
          }}
        >
          {Math.floor(currentTime / 60) < 10
            ? "0" + Math.floor(currentTime / 60)
            : Math.floor(currentTime / 60)}
          :{currentTime % 60 < 10 ? "0" + (currentTime % 60) : currentTime % 60}
        </Text>
        <TouchableOpacity style={styles.endBtn} onPress={() => alert()}>
          <Text style={{ fontSize: 15, color: "#FFFFFF", alignSelf: "center" }}>
            End
          </Text>
        </TouchableOpacity>
      </View>
      <View style={styles.timeline}>
        <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
          {Array.from(Array(10), (e, i) => {
            return (
              <React.Fragment key={i}>
                <TouchableOpacity style={styles.timelineBtn}>
                  <Text style={{ color: "#ffffff", fontSize: 20 }}>
                    {i + 1}
                  </Text>
                </TouchableOpacity>
                {quesNo == i + 1 && (
                  <TouchableOpacity style={styles.timelineBtnHover}>
                    <Text style={{ fontSize: 20 }}>{i + 1}</Text>
                  </TouchableOpacity>
                )}
              </React.Fragment>
            );
          })}
        </ScrollView>
      </View>
      <View style={styles.questionContainer}>
        <Text style={{ margin: 20, fontSize: 14, color: "#5F656C" }}>
          Question. {quesNo}/10
        </Text>
        <Text style={{ marginLeft: 20, fontSize: 22, fontWeight: "600" }}>
          {" "}
          Q{quesNo}. {Quiz_data[quesNo - 1].Ques}
        </Text>
        {options.map((e) => {
          return (
            <TouchableOpacity
              key={e.toString()}
              style={styles.optionBtn}
              onPress={() => {
                setSelected(true);
              }}
            >
              <Text style={{ fontSize: 22, alignSelf: "flex-start" }}>
                A. {e}
              </Text>
              {selected && (
                <TouchableOpacity style={styles.optionBtnHover}>
                  <Text style={{ fontSize: 22, alignSelf: "flex-start" }}>
                    A. {e}
                  </Text>
                </TouchableOpacity>
              )}
            </TouchableOpacity>
          );
        })}
        {/* <TouchableOpacity
          style={styles.optionBtn}
          onPress={() => {
            setSelected(true);
          }}
        >
          <Text style={{ fontSize: 22, alignSelf: "flex-start" }}>
            A. Bhopal
          </Text>
          {selected && (
            <TouchableOpacity style={styles.optionBtnHover}>
              <Text style={{ fontSize: 22, alignSelf: "flex-start" }}>
                A. Bhopal
              </Text>
            </TouchableOpacity>
          )}
        </TouchableOpacity>
        <TouchableOpacity style={styles.optionBtn}>
          <Text style={{ fontSize: 22, alignSelf: "flex-start" }}>
            A. Bhopal
          </Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.optionBtn}>
          <Text style={{ fontSize: 22, alignSelf: "flex-start" }}>
            A. Bhopal
          </Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.optionBtn}>
          <Text style={{ fontSize: 22, alignSelf: "flex-start" }}>
            A. Bhopal
          </Text>
        </TouchableOpacity> */}
        <View style={styles.bottomTab}>
          <TouchableOpacity style={styles.previosBtn} onPress={clkPrevious}>
            <Text>Previous</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.skipBtn} onPress={clkSkip}>
            <Text style={{ color: "#F8C67C" }}>Skip</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.saveAndNextBtn}>
            <Text style={{ color: "#FFF9F9" }}>Save and Next</Text>
          </TouchableOpacity>
        </View>
      </View>
      {
        showWarning && (
          <View style={styles.body}>
            <Modal
              visible={showWarning}
              transparent
              onRequestClose={() => showWarningfalse()}
            >
              <View style={styles.centered_view}>
                <View style={styles.warning_modal}>
                  <View style={styles.modal_heading}>
                    <FontAwesome
                      name="exclamation-circle"
                      style={{
                        color: "white",
                        fontSize: 20,
                        alignItems: "center",
                        justifyContent: "center",
                        top: "30%",
                      }}
                    ></FontAwesome>
                    <Text allowFontScaling={false} style={styles.textheading}>
                      Confirm Exit
                    </Text>
                  </View>
                  <View style={[styles.modal_body]}>
                    <Text allowFontScaling={false} style={styles.text}>
                      Are you sure you want to end the quiz ?
                    </Text>
                    <View
                      style={{
                        justifyContent: "flex-end",
                        flexDirection: "row",
                      }}
                    >
                      <Pressable onPress={() => console.log("hello")}>
                        <View style={styles.textYes}>
                          <Text
                            allowFontScaling={false}
                            style={{
                              alignSelf: "center",
                              color: "white",
                              fontWeight: "bold",
                            }}
                          >
                            YES
                          </Text>
                        </View>
                      </Pressable>
                      <Pressable onPress={() => showWarningfalse()}>
                        <View style={styles.textNo}>
                          <Text
                            allowFontScaling={false}
                            style={{
                              alignSelf: "center",
                              color: "grey",
                              fontWeight: "bold",
                            }}
                          >
                            NO
                          </Text>
                        </View>
                      </Pressable>
                    </View>
                  </View>
                </View>
              </View>
            </Modal>
          </View>
        )
      }
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#69A6FF",
    height: "100%",
    width: "100%",
  },
  topBar: {
    flexDirection: "row",
    justifyContent: "space-between",
    height: "5%",
    marginTop: 40,
  },
  endBtn: {
    height: "60%",
    width: "15%",
    backgroundColor: "#E46566",
    marginRight: 20,
    alignSelf: "center",
    borderRadius: 10,
    justifyContent: "center",
  },
  timeline: {
    marginTop: 10,
    height: "8%",
    width: "100%",
    paddingLeft: 10,
  },
  timelineBtn: {
    height: "70%",
    width: 50,
    alignSelf: "center",
    borderWidth: 1,
    borderColor: "#ffffff",
    borderRadius: 60,
    marginRight: 20,
    justifyContent: "center",
    alignItems: "center",
  },
  timelineBtnHover: {
    height: "70%",
    width: 50,
    position: "absolute",
    alignSelf: "center",
    borderRadius: 60,
    marginRight: 20,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#ffffff",
  },
  questionContainer: {
    height: "82%",
    width: "100%",
    borderRadius: 50,
    backgroundColor: "#ffffff",
    marginTop: 10,
  },
  optionBtn: {
    height: "8%",
    width: "80%",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,

    elevation: 5,
    marginLeft: 30,
    marginTop: 30,
    justifyContent: "center",
    paddingLeft: 10,
    borderRadius: 10,
    backgroundColor: "#ffffff",
  },
  optionBtnHover: {
    position: "absolute",
    height: "100%",
    width: "103%",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    paddingLeft: 10,
    elevation: 5,
    justifyContent: "center",
    borderRadius: 10,
    backgroundColor: "#EBF9FE",
    borderWidth: 1,
    borderColor: "#69A6FF",
  },
  bottomTab: {
    flexDirection: "row",
    position: "absolute",
    bottom: 30,
    height: "5%",
    width: "100%",
    justifyContent: "space-evenly",
  },
  previosBtn: {
    height: "100%",
    width: "20%",
    borderWidth: 1,
    borderColor: "#69A6FF",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 10,
  },
  skipBtn: {
    height: "100%",
    width: "20%",
    borderWidth: 1,
    borderColor: "#F8C67C",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 10,
  },
  saveAndNextBtn: {
    height: "100%",
    width: "35%",
    backgroundColor: "#69A6FF",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 10,
  },
  body: {
    flex: 1,
    backgroundColor: "#ffffff",
    alignItems: "center",
  },
  centered_view: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#00000099",
  },
  warning_modal: {
    width: "86%",
    height: height / 4.5,
    backgroundColor: "#ffffff",
    borderRadius: 7,
  },
  modal_heading: {
    overflow: "hidden",
    position: "relative",
    width: "100%",
    backgroundColor: "#498BEA",
    borderRadius: 7,
    borderBottomLeftRadius: 0,
    borderBottomRightRadius: 0,
    height: "30%",
    paddingLeft: "5%",
    justifyContent: "center",
  },
  modal_body: {
    margin: "5%",
  },
  text: {
    flexDirection: "row",
    color: "#000000",
    fontSize: width / 26,
    fontFamily: "Montserrat",
  },
  textheading: {
    color: "white",
    fontSize: width / 18,
    fontFamily: "Montserrat",
    marginLeft: "10%",
    bottom: "16%",
  },
  textYes: {
    fontSize: width / 22,
    margin: "5%",
    marginRight: 20,
    marginBottom: "0%",
    fontFamily: "Montserrat",
    borderWidth: 2,
    borderColor: "#498BEA",
    backgroundColor: "#498BEA",
    color: "white",
    fontWeight: "bold",
    borderRadius: 4,
    height: height / 21.5,
    width: width / 5.8,
    justifyContent: "center",
    alignContent: "center",
  },
  textNo: {
    position: "relative",
    fontSize: width / 22,
    marginTop: "7%",
    color: "grey",
    fontFamily: "Montserrat",
    backgroundColor: "#fff",
    borderWidth: 2,
    borderColor: "#498BEA",
    height: height / 21.5,
    width: width / 5.8,
    fontWeight: "bold",
    borderRadius: 4,
    alignSelf: "center",
    justifyContent: "center",
  },
});

export default Quiz;
