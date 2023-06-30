import { View, Text, TouchableOpacity } from "react-native";
import React from "react";

const Button = ({ text, onPress }: { text: string; onPress: () => void }) => {
  return (
    <TouchableOpacity
      className="bg-primary p-3 w-[49%] items-center  shadow-2xl rounded"
      onPress={onPress}
    >
      <Text className="text-white capitalize">{text}</Text>
    </TouchableOpacity>
  );
};

export default Button;
