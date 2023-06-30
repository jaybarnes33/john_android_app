import { View, Text, TextInput } from "react-native";
import React from "react";

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
      <Text>
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
