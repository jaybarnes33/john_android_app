import {
  Pressable,
  Touchable,
  TouchableOpacity,
  Button as ButtonMain,
} from "react-native";
import React from "react";
import Typography from "./Typography";
import Colors from "../../constants/Colors";

const Button = ({ text, onPress }: { text: string; onPress: () => void }) => {
  return (
    <TouchableOpacity
      className="bg-primary  py-[14px] w-[49%] items-center justify-center  shadow-2xl rounded-md border border-primary"
      onPress={onPress}
      activeOpacity={0.8}
    >
      <Typography color={"white"} capitalize size="sm">
        {text}
      </Typography>
    </TouchableOpacity>
  );
};

export default Button;
