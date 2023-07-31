import { View, Text, Pressable } from "react-native";
import React, { Dispatch, SetStateAction, useState } from "react";
import { Ionicons } from "@expo/vector-icons";
import Colors from "../../../constants/Colors";
import Typography from "../Typography";
import { ScrollView, TextInput } from "react-native-gesture-handler";
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
        <View className="h-screen flex-1 bg-white -left-6 px-6 absolute  -mt-[100%] py-24  z-[9] w-screen  ">
          <View className="flex-row border-b pb-2 items-center ">
            <Ionicons name="search" size={15} />
            <TextInput
              placeholder="Country"
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

          <ScrollView>
            {data.map((country) => (
              <Pressable
                className="mt-5 flex-row "
                key={country.code}
                onPress={() => handleSelect(country)}
              >
                <Typography>
                  {country.flag} &nbsp; {country.phone.replace("+", "")}{" "}
                  {country.name}
                </Typography>
              </Pressable>
            ))}
          </ScrollView>
        </View>
      )}
    </>
  );
};

export default CountrySelector;
