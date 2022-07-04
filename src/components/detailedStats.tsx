import { View, Text, StyleSheet } from "react-native";

const DetailedStats = ({ data,index }: any) => {
  console.log(data);
  return (
    <View>
      <Text style={{ left: 26, color: "#666262", fontSize: 20, marginTop: 20 }}>
        Q{index+1}.{data.ques}?
      </Text>
      {data.correctAns == data.userAns ? (
        <View
          style={{
            backgroundColor: "#D8FEE6",
            width: "80%",
            height: 72,
            borderRadius: 8,
            left: 26,
            justifyContent: "center",
            marginTop: 20,
          }}
        >
          <Text style={{ color: "#21272E", marginLeft: 30, fontSize: 20 }}>
            {data.correctAns}
          </Text>
        </View>
      ) : (
        <View>
          <View
            style={{
              backgroundColor: "#D8FEE6",
              width: "80%",
              height: 72,
              borderRadius: 8,
              left: 26,
              justifyContent: "center",
              marginTop: 20,
            }}
          >
            <Text style={{ color: "#21272E", marginLeft: 30, fontSize: 20 }}>
              {data.correctAns}
            </Text>
          </View>
          <View
            style={{
              backgroundColor: "#FEDDDD",
              width: "80%",
              height: 72,
              borderRadius: 8,
              left: 26,
              justifyContent: "center",
              marginTop: 20,
            }}
          >
            <Text style={{ color: "#21272E", marginLeft: 30, fontSize: 20 }}>
              {data.userAns}
            </Text>
          </View>
        </View>
      )}
    </View>
  );
};

const styles = StyleSheet.create({});

export default DetailedStats;
