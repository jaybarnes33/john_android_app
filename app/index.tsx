import { View, TouchableOpacity, Pressable, Image } from "react-native";
import React, { useState } from "react";
import Screen from "../components/Screen";
import { Ionicons } from "@expo/vector-icons";
import Typography from "../components/Core/Typography";
import Colors from "../constants/Colors";
import Button from "../components/Core/Button";
import clsx from "clsx";
import { useRouter } from "expo-router";

const index = () => {
  const steps = [
    {
      title: "Why us?",
      text: "Fastest platform online delivering messages",
    },
    {
      title: "Why us?",
      text: "Fastest platform online delivering messages",
    },
    {
      title: "Why us?",
      text: "Fastest platform online delivering messages",
    },
  ];
  console.log("hey");
  const router = useRouter();

  const [current, setCurrent] = useState(0);
  return (
    <View className="bg-white h-screen">
      <View className="justify-center h-[85vh]">
        {current !== 0 && (
          <TouchableOpacity
            className="absolute top-0 left-5 mt-14"
            onPress={() => setCurrent((current) => current - 1)}
          >
            <Ionicons name="chevron-back" size={24} />
          </TouchableOpacity>
        )}

        <View className="px-20 gap-y-2 mt-[90%]">
          <Typography
            size="xl"
            color={Colors.light.primary}
            bold
            center
            capitalize
          >
            {steps[current].title}
          </Typography>
          <Typography size="sm" center>
            {steps[current].text}
          </Typography>
          <View className="my-4 flex-row justify-center gap-3">
            {steps.map((_, i) => (
              <TouchableOpacity
                key={i}
                onPress={() => setCurrent(i)}
                className={clsx([
                  "w-2 h-2 rounded-full",
                  current === i ? "bg-primary" : "bg-neutral-300",
                ])}
              ></TouchableOpacity>
            ))}
          </View>
        </View>

        <View className="items-center mt-auto space-y-3">
          {current !== 2 ? (
            <>
              <Button
                text="Next"
                onPress={() => setCurrent((current) => current + 1)}
              />
              <Pressable>
                <Typography color={Colors.light.primary}>Skip</Typography>
              </Pressable>
            </>
          ) : (
            <Button text="Start" onPress={() => router.push("Auth")} />
          )}
        </View>
      </View>
      <Image
        className="absolute bottom-0 w-full left-0"
        source={require("../assets/images/onboarding.png")}
      />
    </View>
  );
};

export default index;
