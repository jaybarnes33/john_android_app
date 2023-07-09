import { View, Text, ScrollView, TextInput } from "react-native";
import React, { useState } from "react";
import Typography from "../Core/Typography";
import { FocusInput } from "../Core/Input";
import clsx from "clsx";
import Colors from "../../constants/Colors";

const TabOne = () => {
  const [text, setText] = useState({
    focused: false,
    value: "",
  });
  return (
    <View className="flex-1 bg-white h-screen">
      <ScrollView horizontal className="gap-4 max-h-[70px]">
        {new Array(10).fill(0).map((_, i) => (
          <View
            className="px-5 py-3 border border-gray-300 h-[45px] rounded-xl"
            key={i}
          >
            <Typography>Place holder</Typography>
          </View>
        ))}
      </ScrollView>
      <View
        className={clsx([
          "border mt-5 mb-1 py-1 mx-2 relative h-24    border-gray-200 rounded",
          text.focused && "border-primary",
        ])}
      >
        <View className="px-3 -mt-2 absolute mx-2 bg-white">
          <Typography
            size="xs"
            color={!text.focused ? Colors.light.textsub : Colors.light.primary}
          >
            Place holder
          </Typography>
        </View>
        <TextInput
          multiline
          numberOfLines={7}
          keyboardType="default"
          onChangeText={(text) => setText((prev) => ({ ...prev, value: text }))}
          onFocus={() => setText((text) => ({ ...text, focused: true }))}
          onBlur={() => setText((text) => ({ ...text, focused: false }))}
        />
      </View>
    </View>
  );
};

export default TabOne;
