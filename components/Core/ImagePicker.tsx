import { View } from "react-native";
import React, { Dispatch, SetStateAction, useState } from "react";
import { TouchableOpacity } from "react-native-gesture-handler";
import Typography from "./Typography";
import * as ImagePick from "expo-image-picker";

const ImagePicker = ({
  label,
  name,
  onSelect,
}: {
  label: string;
  name: string;
  onSelect: Dispatch<SetStateAction<Record<string, string>>>;
}) => {
  const [img, setImg] = useState<string>();
  const pickImage = async () => {
    // No permissions request is necessary for launching the image library
    let result = await ImagePick.launchImageLibraryAsync({
      mediaTypes: ImagePick.MediaTypeOptions.All,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });

    if (!result.canceled) {
      onSelect((prev) => ({ ...prev, [name]: result.assets![0].uri }));
      setImg(result.assets![0].uri);
    }
  };
  return (
    <TouchableOpacity
      className="relative flex-row p-4 bg-[#f6f6f6] justify-between items-stretch "
      activeOpacity={0.8}
      onPress={pickImage}
    >
      <Typography color={"#cdcdcd"}>{!img ? label : "selected"}</Typography>
      <View className="bg-white  -mr-4 p-4 -my-4 shadow-lg  rounded-r">
        <Typography>Browse</Typography>
      </View>
    </TouchableOpacity>
  );
};

export default ImagePicker;
