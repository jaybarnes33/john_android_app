import { ScrollView, TouchableOpacity, View } from "react-native";
import React from "react";

import Typography from "../../components/Core/Typography";

import Input from "../../components/Core/Feature6/Input";
import { Feather, Ionicons } from "@expo/vector-icons";
import { TextInput } from "react-native-gesture-handler";
import Button from "../../components/Core/Button";
import { FocusInput } from "../../components/Core/Input";

const Feature8 = () => {
  return (
    <View className="h-screen bg-white mt-1 p-6 ">
      <View className="flex-row mb-6 justify-between ">
        <View className="flex-row w-[47%] border border-[#bbbbbb] rounded p-4 items-center justify-between">
          <TextInput placeholder="Place Holder ..." className="text-[14px]" />
          <Feather name="chevron-right" color={"#bbbbbb"} />
        </View>
        <View className="flex-row w-[47%] border border-[#bbbbbb] rounded p-4 items-center justify-between">
          <TextInput placeholder="Place Holder ..." className="text-[14px]" />
          <Feather name="chevron-right" color={"#bbbbbb"} />
        </View>
      </View>
      <View className="flex-row mb-6 border border-[#bbbbbb] rounded p-4 items-center justify-between">
        <TextInput placeholder="Place Holder ..." className="text-[14px]" />
        <Feather name="chevron-right" color={"#bbbbbb"} />
      </View>

      <View className="flex-row mb-6 justify-between ">
        <FocusInput
          label="Start ID"
          placeholder="Input Here"
          onChange={() => console.log("hey")}
        />
        <FocusInput
          label="Start ID"
          placeholder="Input Here"
          onChange={() => console.log("hey")}
        />
      </View>
      <TouchableOpacity
        className="bg-primary  py-[14px] w-full items-center justify-center  shadow-2xl rounded-md border border-primary"
        activeOpacity={0.8}
      >
        <Typography color={"white"} capitalize size="sm">
          Holder
        </Typography>
      </TouchableOpacity>
    </View>
  );
};

export default Feature8;
