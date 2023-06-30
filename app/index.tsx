import {
  View,
  Text,
  TouchableOpacity,
  ScrollView,
  Switch,
  SafeAreaView,
  Platform,
} from "react-native";
import { AntDesign } from "@expo/vector-icons";

import React from "react";
import Input from "../components/Core/Input";
import Button from "../components/Core/Button";
import Colors from "../constants/Colors";
import Divider from "../components/Core/Divider";
import Selector from "../components/Core/Selector";
import clsx from "clsx";
import { useRouter } from "expo-router";

const main = () => {
  const router = useRouter();
  return (
    <SafeAreaView className="bg-light">
      <ScrollView className="bg-neutral-50 mt-1">
        <View className="pt-4 px-6">
          <Input label="Placeholder" placeholder="Hey" required />
          <View className="my-3 flex-row  justify-between">
            <Button
              text="select sources"
              onPress={() => router.push("Source")}
            />
            <Button
              text="select destinations"
              onPress={() => console.log(`pressed`)}
            />
          </View>
        </View>
        <View className="px-6 ">
          <View className="pt-4">
            <Text className="text-lg">Place holder: </Text>
            <Text className="text-neutral-700">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum
              omnis consectetur dolorum error laudantium, repellat tempore
              eveniet dolores praesentium ullam! Possimus autem perferendis
              provident atque at in corrupti numquam minima.
            </Text>
          </View>
          <View className="pt-4">
            <Text className="text-lg ">Place holder: </Text>
            <Text className="text-neutral-700">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum
              omnis consectetur dolorum error laudantium, repellat tempore
              eveniet dolores praesentium ullam! Possimus autem perferendis
              provident atque at in corrupti numquam minima.
            </Text>
          </View>
        </View>

        <View>
          <Divider title="Feature 1" />
          <View className="gap-3">
            {new Array(5).fill(1).map((item, i) => (
              <View
                className={clsx([
                  "flex-row  items-center justify-between px-6 h-6",
                ])}
                key={i}
              >
                <Text>Place holder</Text>
                <Switch
                  className={clsx([
                    Platform.OS === "ios" && "scale-75",
                    Platform.OS === "android" && "scale-110",
                  ])}
                  value={i % 2 === 0 && true}
                  thumbColor="white"
                  trackColor={{ false: "#eee", true: Colors.light.primary }}
                />
              </View>
            ))}
          </View>
        </View>
        <View>
          <Divider title="Feature 2" />
          <View className="flex-row flex-wrap   px-6">
            {new Array(6).fill(1).map((item, i) => (
              <Selector text="Place Holder" key={i} isSelected={i % 5 == 0} />
            ))}
          </View>
        </View>
        <View>
          <Divider title="Feature 3" />
          <View className="flex-row flex-wrap  px-6">
            {new Array(6).fill(1).map((item, i) => (
              <Selector
                key={i}
                text={"Place Holder"}
                isSelected={i % 3 === 0}
              />
            ))}
          </View>
        </View>
        <View>
          <Divider title="Feature 4" />

          <View className="flex-row items-center justify-between px-6">
            <Text>Place holder</Text>
            <View className="flex-row gap-7 items-center">
              <TouchableOpacity>
                <AntDesign name="caretleft" size={20} color="gray" />
              </TouchableOpacity>
              <Text>0</Text>
              <TouchableOpacity>
                <AntDesign name="caretright" size={20} color="gray" />
              </TouchableOpacity>
            </View>
          </View>
        </View>
        <View className="bg-neutral-100 mt-4  py-10 px-16">
          <TouchableOpacity className="bg-primary p-2  items-center  shadow-2xl rounded">
            <Text className="text-white text-lg">Place holder</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default main;
