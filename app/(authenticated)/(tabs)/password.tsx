import Animated, {
  useAnimatedStyle,
  useSharedValue,
} from "react-native-reanimated";
import { useState } from "react";
import * as Haptics from "expo-haptics";
import { useRouter } from "expo-router";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { SafeAreaView } from "react-native-safe-area-context";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";

import Colors from "@/constants/Colors";

const Page = () => {
  const [code, setCode] = useState<number[]>([]);
  const codeLength = Array(6).fill(0);
  const router = useRouter();
  const offset = useSharedValue(0);

  const style = useAnimatedStyle(() => {
    return {
      transform: [{ translateX: offset.value }],
    };
  });

  const onNumberPress = (number: number) => {
    Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Light);
    setCode([...code, number]);
  };

  const numberBackspace = () => {
    Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Light);
    setCode(code.slice(0, -1));
  };

  const handleSubmit = async () => {
    if (code.length === 6) {
      await AsyncStorage.setItem("user-password", code.join(""));
      setCode([]);
      router.replace("/(authenticated)/(tabs)/home");
    }
  };
  const handleRemove = async () => {
    await AsyncStorage.removeItem("user-password");
  };

  return (
    <SafeAreaView>
      <Text style={styles.greeting}>Set Password</Text>

      <Animated.View style={[styles.codeView, style]}>
        {codeLength.map((_, index) => (
          <View
            key={index}
            style={[
              styles.codeEmpty,
              {
                backgroundColor: code[index]
                  ? Colors.primary
                  : Colors.lightGray,
              },
            ]}
          />
        ))}
      </Animated.View>

      <View style={styles.numbersView}>
        <View style={{ flexDirection: "row", justifyContent: "space-between" }}>
          {[1, 2, 3].map((number) => (
            <TouchableOpacity
              key={number}
              onPress={() => onNumberPress(number)}
            >
              <Text style={styles.number}>{number}</Text>
            </TouchableOpacity>
          ))}
        </View>

        <View style={{ flexDirection: "row", justifyContent: "space-between" }}>
          {[4, 5, 6].map((number) => (
            <TouchableOpacity
              key={number}
              onPress={() => onNumberPress(number)}
            >
              <Text style={styles.number}>{number}</Text>
            </TouchableOpacity>
          ))}
        </View>
        <View style={{ flexDirection: "row", justifyContent: "space-between" }}>
          {[7, 8, 9].map((number) => (
            <TouchableOpacity
              key={number}
              onPress={() => onNumberPress(number)}
            >
              <Text style={styles.number}>{number}</Text>
            </TouchableOpacity>
          ))}
        </View>
        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <View style={{ minWidth: 26 }}>
            {code.length === 6 && (
              <TouchableOpacity onPress={handleSubmit}>
                <Text style={styles.number}>OK</Text>
              </TouchableOpacity>
            )}
          </View>

          <TouchableOpacity onPress={() => onNumberPress(0)}>
            <Text style={styles.number}>0</Text>
          </TouchableOpacity>

          <View style={{ minWidth: 26 }}>
            {code.length > 0 && (
              <TouchableOpacity onPress={numberBackspace}>
                <Text style={styles.number}>
                  <MaterialCommunityIcons
                    name="backspace-outline"
                    size={26}
                    color="black"
                  />
                </Text>
              </TouchableOpacity>
            )}
          </View>
        </View>

        <TouchableOpacity onPress={handleRemove}>
          <Text
            style={{
              alignSelf: "center",
              color: Colors.primary,
              fontWeight: "500",
              fontSize: 18,
            }}
          >
            remove password
          </Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  greeting: {
    fontSize: 24,
    fontWeight: "bold",
    marginTop: 80,
    alignSelf: "center",
  },
  codeView: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    gap: 20,
    marginVertical: 60,
  },
  codeEmpty: {
    width: 20,
    height: 20,
    borderRadius: 10,
  },
  numbersView: {
    marginHorizontal: 80,
    gap: 60,
  },
  number: {
    fontSize: 32,
  },
});
export default Page;
