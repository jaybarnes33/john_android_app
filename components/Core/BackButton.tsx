import { View, Text, Pressable } from "react-native";
import React from "react";
import { Ionicons } from "@expo/vector-icons";
import { useRouter } from "expo-router";

const BackButton = () => {
  const router = useRouter();
  return (
    <Pressable onPress={() => router.back()}>
      <Ionicons name="chevron-back" size={24} />
    </Pressable>
  );
};

export default BackButton;
