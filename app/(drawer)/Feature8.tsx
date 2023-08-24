import { ScrollView, TouchableOpacity, View } from "react-native";
import React from "react";

import Typography from "../../components/Core/Typography";

import Input from "../../components/Core/Feature6/Input";
import { Ionicons } from "@expo/vector-icons";

const Feature8 = () => {
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
    </View>
  );
};

export default Feature8;
