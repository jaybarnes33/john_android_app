import { View, Text } from "react-native";
import React from "react";
import Typography from "../../components/Core/Typography";
import { ScrollView, TextInput } from "react-native-gesture-handler";
import Button from "../../components/Core/Button";
import AccordionListItem from "../../components/Accordion/AccordionItem";
import { MaterialCommunityIcons } from "@expo/vector-icons";

const Feature5 = () => {
  return (
    <ScrollView className="flex-1  mt-1 bg-white">
      <View className="bg-white p-6">
        <View className="flex-row justify-between">
          {new Array(3).fill(0).map((_, i) => (
            <Typography size="md">holder</Typography>
          ))}
        </View>
        <View className="flex flex-row  items-stretch my-6 py-3 border border-gray-300 ">
          <View className="bg-white shadow w-4/12 -my-3 justify-center items-center">
            <Typography color="#7b7b7b">Monday</Typography>
          </View>
          <TextInput
            className="border border-x pl-2 -my-3 w-4/12 border-[#ededed]"
            placeholder="00:00"
            placeholderTextColor={"#7b7b7b"}
          ></TextInput>
          <TextInput
            className="pl-2"
            placeholder="00:00"
            placeholderTextColor={"#7b7b7b"}
          ></TextInput>
        </View>
        <View className="items-center">
          <Button text="Holder" onPress={() => console.log("first")} />
        </View>
      </View>

      <View>
        {new Array(5).fill(0).map((_, i) => (
          <AccordionListItem
            key={i}
            title={<Typography classes="flex-1">Holder</Typography>}
          >
            <View>
              {new Array(4).fill(0).map((_, i) => (
                <View className="flex-row w-screen p-6 border-y bg-[#f7f7f7] border-[#dedede] justify-between items-center">
                  <Typography>Starting at 13:00</Typography>
                  <Typography>Stopping at 13:00</Typography>

                  <MaterialCommunityIcons
                    name="close-circle"
                    className="ml-auto"
                    size={16}
                    color={"#ff6a6a"}
                  />
                </View>
              ))}
            </View>
          </AccordionListItem>
        ))}
      </View>
    </ScrollView>
  );
};

export default Feature5;
