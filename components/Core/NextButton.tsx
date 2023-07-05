import { View, Text, TouchableOpacity } from "react-native";
import React from "react";
import { Ionicons } from "@expo/vector-icons";

const NextButton = ({ onPress }: { onPress: () => void }) => {
  return (
    <TouchableOpacity
      onPress={onPress}
      activeOpacity={0.8}
      className="w-12 h-12 bg-primary justify-center rounded-full ml-auto items-center"
    >
      <Ionicons name="arrow-forward" color="white" size={25} />
    </TouchableOpacity>
  );
};

export default NextButton;
