import { View, Text, Dimensions } from "react-native";
import React from "react";
import { AntDesign } from "@expo/vector-icons";

const Divider = ({ title }: { title: string }) => {
  const width = Dimensions.get("window").width;
  return (
    <View
      className="bg-gray-100 mb-3 flex-row justify-between items-center py-2 px-5 box-border"
      style={{ width: width }}
    >
      <Text className="text-lg text-neutral-800">{title}</Text>
      <AntDesign name="exclamationcircleo" size={20} color="gray" />
    </View>
  );
};

export default Divider;
