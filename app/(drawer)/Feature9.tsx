import { ScrollView, TouchableOpacity, View } from "react-native";
import React from "react";

import Typography from "../../components/Core/Typography";

import Input from "../../components/Core/Feature6/Input";
import { Ionicons } from "@expo/vector-icons";

const Feature6 = () => {
  return (
    <View className="h-screen bg-white mt-1 p-6 ">
      <TouchableOpacity
        className="bg-primary  py-[14px] w-full items-center justify-center  shadow-2xl rounded-md border border-primary"
        activeOpacity={0.8}
      >
        <Typography color={"white"} capitalize size="sm">
          Holder
        </Typography>
      </TouchableOpacity>
      <View className="py-6">
        <Typography size="lg" bold>
          Place holder 1:
        </Typography>
        <Typography size="md">
          Placeholder,Placeholder,Placeholder,Placeholder,Placeholder,Placeholder,Placeholder,Placeholder,Placeholder,Placeholder,Placeholder,Placeholder,Placeholder,Placeholder,
        </Typography>
      </View>
    </View>
  );
};

export default Feature6;
