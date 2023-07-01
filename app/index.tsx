import {
  View,
  TouchableOpacity,
  ScrollView,
  Text,
  SafeAreaView,
} from "react-native";
import { AntDesign } from "@expo/vector-icons";
import Typography from "../components/Core/Typography";
import React from "react";
import Input from "../components/Core/Input";
import Button from "../components/Core/Button";
import Colors from "../constants/Colors";
import Divider from "../components/Core/Divider";
import Selector from "../components/Core/Selector";
import clsx from "clsx";
import { useRouter } from "expo-router";
import Switch from "../components/Core/Switch";

const main = () => {
  const router = useRouter();
  return (
    <SafeAreaView className="bg-light">
      <ScrollView className="bg-neutral-50 mt-1">
        <View className="pt-6 px-6">
          <Input label="Place holder" placeholder="Place holder" required />
          <View className="my-6 flex-row  justify-between">
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
        <View className="px-6">
          <View>
            <Typography size="lg" color={Colors.light.texthead}>
              Place holder :{" "}
            </Typography>
            <Typography size="md" color={Colors.light.textsub}>
              Placeholder,Placeholder,Placeholder,Placeholder,Placeholder,Placeholder,Placeholder,Placeholder,Placeholder,Placeholder,Placeholder,Placeholder,Placeholder,Placeholder,
            </Typography>
          </View>
          <View className="pt-6">
            <Typography size="lg" color={Colors.light.texthead}>
              Place holder :{" "}
            </Typography>
            <Typography color={Colors.light.textsub} size="md">
              Placeholder,Placeholder,Placeholder,Placeholder,Placeholder,Placeholder,Placeholder,Placeholder,Placeholder,Placeholder,Placeholder,Placeholder,Placeholder,Placeholder,
            </Typography>
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
                <Typography size="md" color={Colors.light.textsub}>
                  Place holder
                </Typography>

                <Switch />
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
          <View className="flex-row flex-wrap   px-6">
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

          <View className="flex-row items-center pb-6 justify-between px-6">
            <Typography>Place holder</Typography>
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
        <View className="bg-neutral-100 py-7 px-16">
          <TouchableOpacity className="bg-primary py-3  items-center  shadow-2xl rounded">
            <Typography size="lg" color="white">
              Place holder
            </Typography>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default main;
