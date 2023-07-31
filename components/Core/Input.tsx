import { View, TextInput } from "react-native";
import React, { Dispatch, SetStateAction, useState } from "react";

import Typography from "./Typography";
import clsx from "clsx";
import Colors from "../../constants/Colors";
import { AntDesign } from "@expo/vector-icons";
const Input = ({
  label,
  placeholder,
  value,
  onChange,
  required,
}: {
  label: string;
  value: string;
  onChange: Dispatch<SetStateAction<{ inputValue: string }>>;
  placeholder: string;
  required: boolean;
}) => {
  return (
    <View>
      <Typography
        bold
        size="sm"
        color={!value ? Colors.light.danger : "#1a1a1a"}
      >
        {label} {required && "*"}
      </Typography>
      <TextInput
        className="border-b py-2 border-neutral-500"
        placeholder={placeholder}
        onChangeText={(text) =>
          onChange((prev) => ({ ...prev, inputValue: text }))
        }
      />
      {!value && (
        <View className="mt-2 items-center flex-row ">
          <AntDesign
            name="exclamationcircleo"
            size={14}
            color={Colors.light.danger}
          />
          <Typography size="sm" classes="mx-2" color={Colors.light.danger}>
            Value is required
          </Typography>
        </View>
      )}
    </View>
  );
};

export const FocusInput = ({
  label,

  onChange,
  field,
  side,
}: {
  label: string;
  field: string;
  onChange: Dispatch<SetStateAction<string>>;
  placeholder?: string;
  textarea?: boolean;
  side?: string;
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
      <View className="flex-row items-center">
        <View className="pl-2">
          <Typography>{side}</Typography>
        </View>
        <TextInput
          className="h-8 flex-1  border-gray-300 mx-2 px-2 font-main"
          onChangeText={(text) => onChange(text)}
          keyboardType="numeric"
          onFocus={() => setFocused(true)}
          onBlur={() => setFocused(false)}
        />
      </View>
    </View>
  );
};

export default Input;
