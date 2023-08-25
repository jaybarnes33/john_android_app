import { ScrollView, TouchableOpacity, View } from "react-native";
import React from "react";

import Typography from "../../components/Core/Typography";

import Input from "../../components/Core/Feature6/Input";
import { Ionicons } from "@expo/vector-icons";

const Feature6 = () => {
  return (
    <View className="h-screen bg-white mt-1 p-6 ">
      <ScrollView>
        {new Array(7).fill(0).map((_, i) => (
          <View className="flex-row items-center" key={i}>
            <Typography>{i + 1}. &nbsp;</Typography>
            <Input />
          </View>
        ))}
      </ScrollView>
      <TouchableOpacity
        activeOpacity={0.7}
        className="bg-primary flex  w-16 h-16 rounded-full justify-center items-center mt-7"
      >
        <Ionicons name="add" size={24} color="white" />
      </TouchableOpacity>
    </View>
  );
};

export default Feature6;
