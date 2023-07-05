import { View, TextInput } from "react-native";
import React, { Dispatch, SetStateAction, useState } from "react";
import Text from "./Typography";
import Typography from "./Typography";
import clsx from "clsx";
import Colors from "../../constants/Colors";
const Input = ({
  label,
  placeholder,

  required,
}: {
  label: string;
  placeholder: string;
  required: boolean;
}) => {
  return (
    <View>
      <Text bold size="sm">
        {label} {required && "*"}
      </Text>
      <TextInput
        className="border-b py-2 border-neutral-500"
        placeholder={placeholder}
      />
    </View>
  );
};

export const FocusInput = ({
  label,
  placeholder,
  onChange,
}: {
  label: string;
  onChange: Dispatch<SetStateAction<{ country: string; phone: string }>>;
  placeholder?: string;
}) => {
  const [focused, setFocused] = useState(false);
  return (
    <View
      className={clsx([
        "border mt-5 mb-1 py-1 px-2 relative border-gray-200 rounded",
        focused && "border-primary",
      ])}
    >
      <View className="px-3 -mt-2 absolute mx-2 bg-white">
        <Typography
          size="xs"
          color={!focused ? Colors.light.textsub : Colors.light.primary}
        >
          {label}
        </Typography>
      </View>
      <TextInput
        onChangeText={(text) => onChange((prev) => ({ ...prev, phone: text }))}
        onFocus={() => setFocused(true)}
        onBlur={() => setFocused(false)}
      />
    </View>
  );
};

export default Input;
