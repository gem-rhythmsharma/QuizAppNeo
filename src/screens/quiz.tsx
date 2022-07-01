import React, { useEffect, useState } from "react";
import { Quiz_data } from "../data/quizData";
import {
  View,
  Text,
  StyleSheet,
  Touchable,
  TouchableOpacity,
  ScrollView,
} from "react-native";

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
    let arr = [...Quiz_data[quesNo-1].Incorect_Ans];
    arr.push(Quiz_data[quesNo-1].CorrectAns);
    arr = shuffleArray(arr);
    setOptions(arr);
  };
  useEffect(() => {
    generateOptions();
  },[quesNo]);

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
        <TouchableOpacity style={styles.endBtn}>
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
          Q{quesNo}. {Quiz_data[quesNo-1].Ques}
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
});

export default Quiz;
