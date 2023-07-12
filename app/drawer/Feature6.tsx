import { ScrollView, TouchableOpacity, View } from "react-native";
import React from "react";

import Typography from "../../components/Core/Typography";

import Input from "../../components/Core/Feature6/Input";
import { Ionicons } from "@expo/vector-icons";

const Feature6 = () => {
  return (
    <ScrollView className="h-full bg-white mt-1 p-6">
      <View>
        {new Array(7).fill(0).map((_, i) => (
          <View className="flex-row items-center" key={i}>
            <Typography>{i + 1}. &nbsp;</Typography>
            <Input />
          </View>
        ))}
      </View>
      <TouchableOpacity
        activeOpacity={0.7}
        className="bg-primary  w-16 h-16 rounded-full justify-center items-center absolute right-6 bottom-0"
      >
        <Ionicons name="add" size={24} color="white" />
      </TouchableOpacity>
    </ScrollView>
  );
};

export default Feature6;
