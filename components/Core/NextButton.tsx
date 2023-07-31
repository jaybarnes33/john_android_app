import { TouchableOpacity } from "react-native";
import React from "react";
import { Ionicons } from "@expo/vector-icons";

const NextButton = ({ onPress }: { onPress: () => void }) => {
  return (
    <TouchableOpacity
      onPress={onPress}
      activeOpacity={0.8}
      className="w-14 h-14 bg-primary justify-center rounded-full ml-auto mt-16 items-center relative z-[-1]"
    >
      <Ionicons name="arrow-forward" color="white" size={29} />
    </TouchableOpacity>
  );
};

export default NextButton;
