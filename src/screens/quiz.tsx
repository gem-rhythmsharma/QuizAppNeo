import React, { useEffect, useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
  BackHandler,
  Pressable,
  Dimensions,
  Modal,
  Image,
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


let Quiz = ({ navigation, route }: any) => {
  const param = route.params;
  let Quiz_data = param.Questionare;
  let [quesNo, setQuesNo] = useState(1);
  let [currentTime, setCurrentTime] = useState(5 * 60);
  let [selected, setSelected] = useState([]);
  let [options, setOptions] = useState(["a", "b", "c", "d"]);
  let [showWarning, SetshowWarning] = useState(false);
  let [quesStatus, setQuesStatus] = useState([]); // 0-> Unanswered 1-> Flag 2-> answered
  let [stats, setstats] = useState([]);
  let [noOptionSelected, setNoOptionSelected] = useState(false);
  let [ref, setRef] = useState<any>(null);
  let [dataSourceCords, setDataSourceCords] = useState<any>([]);
  let [scrollToIndex, setScrollToIndex] = useState(0);

  useEffect(() => {
    generateOptions();
    setScrollToIndex(quesNo - 1);
    scrollHandler();
  }, [quesNo]);

  useEffect(() => {
    generateQuesStatus();
  }, []);

  useEffect(() => {
    setTimeout(() => {
      setCurrentTime(currentTime - 1);
    }, 1000);
  });

  useEffect(() => {
    const backbuttonHander = () => {
      alert();
      return true;
    };
    BackHandler.addEventListener("hardwareBackPress", backbuttonHander);
  });

  const alert = () => {
    SetshowWarning(true);
  };
  
  const showWarningfalse = () => {
    SetshowWarning(false);
  };

  let generateOptions = () => {
    let arr = [...Quiz_data[quesNo - 1].Incorect_Ans];
    arr.push(Quiz_data[quesNo - 1].CorrectAns);
    arr = shuffleArray(arr);
    setOptions(arr);
  };

  let generateQuesStatus = () => {
    let arr: any = [];
    for (let i = 0; i < 10; i++) {
      arr.push(0);
    }
    setQuesStatus(arr);
  };

  const scrollHandler = () => {
    if (dataSourceCords.length > scrollToIndex) {
      ref.scrollTo({
        x: dataSourceCords[scrollToIndex - 1],
        y: 0,
        animated: true,
      });
    }
  };

  let clkPrevious = () => {
    if (quesNo > 1) {
      setQuesNo(quesNo - 1);
      generateOptions();
    }
  };

  let clkSkip = () => {
    if (quesNo < 10) {
      if (quesStatus[quesNo - 1] != 2) {
        let arr: any = quesStatus;
        arr[quesNo - 1] = 1;
        setQuesStatus(arr);
      }
      setQuesNo(quesNo + 1);
    }
  };

  let clkSaveAndNext = () => {
    if (selected[quesNo - 1] == undefined) {
      setNoOptionSelected(true);
    } else {
      let arr: any = quesStatus;
      arr[quesNo - 1] = 2;
      let arr2: any = stats;
      arr2[quesNo - 1] = {
        ques: Quiz_data[quesNo].Ques,
        correctAns: Quiz_data[quesNo].CorrectAns,
        userAns: selected[quesNo - 1],
      };
      setQuesStatus(arr);
      setQuesNo(quesNo + 1);
      setNoOptionSelected(false);
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.topBar}>
        <TouchableOpacity
          style={{ marginLeft: 20, alignSelf: "center" }}
          onPress={() => {
            navigation.navigate("Home");
          }}
        >
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
        <ScrollView
          horizontal={true}
          showsHorizontalScrollIndicator={false}
          ref={(ref) => {
            setRef(ref);
          }}
        >
          {Array.from(Array(10), (e, i) => {
            return (
              <TouchableOpacity
                key={i}
                style={styles.timelineBtn}
                onPress={() => {
                  setQuesNo(i);
                }}
                onLayout={(event) => {
                  const layout = event.nativeEvent.layout;
                  dataSourceCords[i] = layout.x;
                  setDataSourceCords(dataSourceCords);
                }}
              >
                <Text style={{ color: "#ffffff", fontSize: 20 }}>{i + 1}</Text>
                {quesNo == i + 1 ? (
                  <TouchableOpacity
                    style={styles.timelineBtnHover}
                    onPress={() => {
                      setQuesNo(i + 1);
                    }}
                  >
                    <Text style={{ fontSize: 20 }}>{i + 1}</Text>
                  </TouchableOpacity>
                ) : quesStatus[i] == 2 ? (
                  <TouchableOpacity
                    style={styles.timelineBtnEmpty}
                    onPress={() => {
                      setQuesNo(i + 1);
                    }}
                  >
                    <Text style={{ color: "#ffffff", fontSize: 20 }}>
                      {i + 1}
                    </Text>
                    <View style={styles.tickBtn}>
                      <Image
                        style={{
                          height: "70%",
                          width: "70%",
                        }}
                        source={{
                          uri: "https://cdn-icons-png.flaticon.com/128/1828/1828643.png",
                        }}
                        resizeMode="contain"
                      />
                    </View>
                  </TouchableOpacity>
                ) : quesStatus[i] == 1 ? (
                  <TouchableOpacity
                    style={styles.timelineBtnHoverFlag}
                    onPress={() => {
                      setQuesNo(i + 1);
                    }}
                  >
                    <Text style={{ color: "#ffffff", fontSize: 20 }}>
                      {i + 1}
                    </Text>
                  </TouchableOpacity>
                ) : (
                  <TouchableOpacity
                    key={i}
                    style={styles.timelineBtnEmpty}
                    onPress={() => {
                      setQuesNo(i + 1);
                    }}
                  >
                    <Text style={{ color: "#ffffff", fontSize: 20 }}>
                      {i + 1}
                    </Text>
                  </TouchableOpacity>
                )}
              </TouchableOpacity>
            );
          })}
        </ScrollView>
      </View>
      <View style={styles.questionContainer}>
        <View style={styles.questionTabContainer}>
          <Text style={{ fontSize: 14, color: "#5F656C", alignSelf: "center" }}>
            Question. {quesNo}/10
          </Text>
          <TouchableOpacity style={styles.skipBtn} onPress={clkSkip}>
            <Text style={{ color: "#F8C67C" }}>Skip</Text>
          </TouchableOpacity>
        </View>
        <Text style={{ marginLeft: 20, fontSize: 22, fontWeight: "600" }}>
          {" "}
          Q{quesNo}. {Quiz_data[quesNo - 1].Ques}
        </Text>
        {noOptionSelected && (
          <View style={styles.notSelected}>
            <Image
              style={{
                height: "80%",
                width: "15%",
              }}
              source={{
                uri: "https://cdn-icons.flaticon.com/png/128/5932/premium/5932058.png?token=exp=1656760500~hmac=d9303476abd1e2a05ffc8485945f58a0",
              }}
              resizeMode="contain"
            />
            <Text style={{ color: "#ffffff" }}>
              Please select an option to proceed to next question
            </Text>
          </View>
        )}

        {options.map((e) => {
          return (
            <TouchableOpacity
              key={e.toString()}
              style={styles.optionBtn}
              onPress={() => {
                let arr: any = selected;
                arr[quesNo - 1] = e;
                setSelected(arr);
              }}
            >
              <Text style={{ fontSize: 22, alignSelf: "flex-start" }}>
                A. {e}
              </Text>
              {selected[quesNo - 1] == e && (
                <TouchableOpacity style={styles.optionBtnHover}>
                  <Text style={{ fontSize: 22, alignSelf: "flex-start" }}>
                    A. {e}
                  </Text>
                </TouchableOpacity>
              )}
            </TouchableOpacity>
          );
        })}
        <View style={styles.bottomTab}>
          <TouchableOpacity style={styles.previosBtn} onPress={clkPrevious}>
            <Text>Previous</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.saveAndNextBtn}
            onPress={() => {
              clkSaveAndNext();
            }}
          >
            <Text style={{ color: "#FFF9F9" }}>Save and Next</Text>
          </TouchableOpacity>
        </View>
      </View>
      {showWarning && (
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
      )}
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
  tickBtn: {
    height: "50%",
    width: "50%",
    borderRadius: 20,
    backgroundColor: "#ffffff",
    position: "absolute",
    top: -8,
    right: -4,
    justifyContent: "center",
    alignItems: "center",
  },
  timelineBtn: {
    height: "70%",
    width: 50,
    alignSelf: "center",
    borderRadius: 60,
    marginRight: 20,
    justifyContent: "center",
    alignItems: "center",
  },
  timelineBtnEmpty: {
    height: "100%",
    width: "100%",
    position: "absolute",
    alignSelf: "center",
    borderRadius: 60,
    marginRight: 20,
    justifyContent: "center",
    alignItems: "center",
    borderWidth: 1,
    borderColor: "#ffffff",
  },
  timelineBtnHover: {
    height: "100%",
    width: 50,
    position: "absolute",
    alignSelf: "center",
    borderRadius: 60,
    marginRight: 20,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#ffffff",
  },
  timelineBtnHoverFlag: {
    height: "100%",
    width: "100%",
    position: "absolute",
    alignSelf: "center",
    borderRadius: 60,
    marginRight: 20,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#F8C67C",
  },
  questionTabContainer: {
    height: 50,
    width: "90%",
    flexDirection: "row",
    alignSelf: "center",
    justifyContent: "space-between",
    margin: 20,
    padding: 10,
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
    width: "40%",
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
    width: "40%",
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
  notSelected: {
    height: "5%",
    width: "90%",
    borderRadius: 10,
    backgroundColor: "#E46566",
    alignSelf: "center",
    flexDirection: "row",
    justifyContent: "flex-start",
    alignItems: "center",
    marginTop: 10,
  },
});

export default Quiz;
