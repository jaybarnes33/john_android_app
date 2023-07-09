import {
  View,
  Text,
  Touchable,
  TouchableOpacity,
  ScrollView,
} from "react-native";
import React from "react";
import Typography from "../Core/Typography";
import { Ionicons } from "@expo/vector-icons";
import Colors from "../../constants/Colors";

const Item = () => {};
const TabTwo = () => {
  return (
    <View className="h-full">
      <ScrollView className="-ml-6 w-screen">
        {new Array(7).fill(0).map((_, i) => (
          <View
            className="flex-row justify-between bg-white border-y border-gray-300 w-screen  mb-2 h-12 items-center px-6"
            key={i}
          >
            <View className="flex-row w-full justify-between">
              <Typography color={Colors.light.textsub}>1.</Typography>
              <Typography color={Colors.light.textsub}>Holder</Typography>

              <Ionicons
                name="chevron-forward"
                size={23}
                color={Colors.light.textsub}
              />

              {/* </View>
          <View className="flex-row w-[50%] justify-center items-center"> */}
              <Typography color={Colors.light.textsub}>Holder</Typography>
              <TouchableOpacity>
                <Ionicons
                  name="chevron-down"
                  size={23}
                  color={Colors.light.textsub}
                />
              </TouchableOpacity>
            </View>
          </View>
        ))}
      </ScrollView>
      <TouchableOpacity
        activeOpacity={0.7}
        className="bg-primary  w-16 h-16 rounded-full justify-center items-center absolute right-6 bottom-0"
      >
        <Ionicons name="add" size={24} color="white" />
      </TouchableOpacity>
    </View>
  );
};

export default TabTwo;
