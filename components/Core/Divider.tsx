import { View } from "react-native";
import React from "react";
import { AntDesign } from "@expo/vector-icons";
import Text from "./Typography";
import Colors from "../../constants/Colors";
const Divider = ({ title }: { title: string }) => {
  return (
    <View className="bg-accent2 my-6 flex-row justify-between items-center py-2 px-6 box-border h-16">
      <Text color={Colors.light.textheadsub} size="lg">
        {title}
      </Text>
      <AntDesign name="exclamationcircleo" size={20} color="gray" />
    </View>
  );
};

export default Divider;
