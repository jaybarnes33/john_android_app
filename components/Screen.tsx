import { View, Text } from "react-native";
import React, { ReactNode } from "react";
import { SafeAreaView } from "react-native-safe-area-context";

const Screen = ({ children }: { children: ReactNode }) => {
  return <SafeAreaView className="bg-white flex-1">{children}</SafeAreaView>;
};

export default Screen;
