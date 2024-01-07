import { View, Text, Pressable } from "react-native";
import React, { Dispatch, SetStateAction, useState } from "react";
import { Ionicons } from "@expo/vector-icons";
import Colors from "../../../constants/Colors";
import Typography from "../Typography";
import { FlatList, TextInput } from "react-native-gesture-handler";
import { countries } from "./data";

export interface Country {
  name: string;
  flag: string;
  phone: string;
  code: string;
}

const CountrySelector = ({
  selected,
  setSelected,
}: {
  selected: Country;
  setSelected: Dispatch<SetStateAction<Country>>;
}) => {
  const [show, setShow] = useState(false);
  const [data, setData] = useState<Country[]>(countries);

  const handleSelect = (country: Country) => {
    setSelected(country);
    setData(countries);
    setShow(!show);
  };
  return (
    <>
      <Pressable
        className="px-2 py-2 justify-between flex-row items-center w-full mb-1  border border-gray-200 rounded focus:outline-blue-500 h-11"
        onPress={() => setShow(true)}
      >
        <Typography
          classes="flex-1"
          color={!selected.name ? Colors.light.textsub : "black"}
        >
          {selected.name || "Country"}{" "}
        </Typography>
        <Ionicons
          name="chevron-forward"
          color={Colors.light.textsub}
          size={24}
        />
      </Pressable>
      {show && (
        <View className="h-screen mt-24 flex-1 bg-white  px-6 absolute -left-6    -top-[200%]   z-[9] w-screen  ">
          <View className="flex-row border border-gray-600 rounded-md mt-5 py-2 items-center ">
            <TextInput
              placeholder="Search Country"
              className="px-3  text-base"
              onChangeText={(text) =>
                setData(
                  countries.filter((item) =>
                    item.name.toLowerCase().includes(text.toLowerCase())
                  )
                )
              }
            />
          </View>

          <FlatList
            data={data}
            renderItem={({ item }) => (
              <Pressable
                className="mt-5 flex-row items-center pb-4 border-b border-gray-200"
                key={item.code}
                onPress={() => handleSelect(item)}
              >
                <View className="flex-row space-x-10 items-center">
                  <View className="flex-row space-x-4 w-14  items-center">
                    <Text> {item.flag}</Text>
                    <Text>{item.phone}</Text>
                  </View>

                  <Text> {item.name}</Text>
                </View>
              </Pressable>
            )}
            keyExtractor={(country) => country.code}
          />
        </View>
      )}
    </>
  );
};

export default CountrySelector;
