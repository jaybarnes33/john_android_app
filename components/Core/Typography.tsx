import { View, Text, Platform } from "react-native";
import React, { ReactNode } from "react";
import clsx from "clsx";
import { sizes } from "../../constants/sizes";

const Typography = ({
  children,
  bold,
  color,
  size,
  capitalize,
  classes,
  center,
  uppercase,
}: {
  children: ReactNode;
  bold?: boolean;
  color?: string;
  classes?: string;
  size?: string;
  center?: boolean;
  capitalize?: boolean;
  uppercase?: boolean;
}) => {
  return (
    <Text
      maxFontSizeMultiplier={0}
      allowFontScaling={false}
      className={clsx([
        "font-main ",
        center && "text-center",
        capitalize && "capitalize",
        bold && "font-bolded",
        uppercase && "uppercase",
        size == "md" && "leading-6 tracking-[0.024px]",
        size == "sm" && "leading-5",
        classes && classes,
        Platform.OS === "android" && "scale-95",
      ])}
      style={{
        fontSize: size ? sizes[size as unknown as number] : sizes.md,
        color: color,
      }}
    >
      {children}
    </Text>
  );
};

export default Typography;
