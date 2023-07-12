import { View, TextInput } from "react-native";
import React, { useState } from "react";
import Checkbox from "react-native-check-box";
import Colors from "../../../constants/Colors";
import Typography from "../Typography";

const Input = () => {
  const [checked, setChecked] = useState(false);
  return (
    <View className="flex-row justify-between  flex-1 space-x-2 my-3 items-center">
      <View className="flex-1 pb-1 flex-row border-b border-neutral-700">
        <TextInput
          placeholder="Place holder..."
          className="flex-1  text-[14px] "
        />
        <View className="flex-row items-center">
          <Checkbox
            checkedCheckBoxColor={Colors.light.primary}
            isChecked={checked}
            onClick={() => setChecked(!checked)}
          />
          <Typography color={Colors.light.textsub} size="sm" classes="ml-1">
            Holder
          </Typography>
        </View>
      </View>
    </View>
  );
};

export default Input;
