import { View, TextInput } from "react-native";
import React from "react";
import Text from "./Typography";
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

export default Input;
