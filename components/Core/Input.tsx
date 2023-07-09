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
  placeholder,
  onChange,
  field,
  textarea,
}: {
  label: string;
  field: string;
  onChange: Dispatch<SetStateAction<unknown>>;
  placeholder?: string;
  textarea?: boolean;
}) => {
  const [focused, setFocused] = useState(false);
  return (
    <View
      className={clsx([
        "border mt-5 mb-1 py-1 px-2 relative border-gray-200 rounded",
        focused && "border-primary h-full",
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
        className="h-7"
        onChangeText={(text) =>
          onChange((prev: Record<string, string>) => ({
            ...prev,
            [field]: text,
          }))
        }
        // onFocus={() => setFocused(true)}
        // onBlur={() => setFocused(false)}
      />
    </View>
  );
};

export default Input;
