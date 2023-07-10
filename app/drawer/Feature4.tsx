import { View, TouchableOpacity, ActivityIndicator, Image } from "react-native";
import React, { useState } from "react";

import Typography from "../../components/Core/Typography";

import ImagePicker from "../../components/Core/ImagePicker";

const Feature4 = () => {
  const [images, setImages] = useState<Record<string, string>>({
    logo: "",
    bg: "",
  });
  const [loading, setLoading] = useState(false);
  const [preview, setPreview] = useState(false);
  const handlePress = () => {
    setLoading(true);
    setTimeout(() => setLoading(false), 1000);
    setPreview(true);
  };
  return (
    <View className="flex-1 p-6 bg-white mt-1">
      <View className="mb-6">
        <ImagePicker
          label="Click to input background"
          onSelect={setImages}
          name="bg"
        />
      </View>
      <ImagePicker
        label="Click to input logo"
        onSelect={setImages}
        name="logo"
      />
      <View className="py-6 flex-row justify-between">
        <View className="items-start justify-start w-[33.333%] border-b border-[#cdcdcd] mr-2 pb-2">
          <Typography color={"#cdcdcd"}>Top</Typography>
        </View>
        <View className="items-start justify-start w-[33.333%] border-b border-[#cdcdcd] mr-2 pb-2">
          <Typography color={"#cdcdcd"}>Right</Typography>
        </View>
        <View className="items-start justify-start w-[33.333%] border-b border-[#cdcdcd] mr-2 pb-2">
          <Typography color={"#cdcdcd"}>Size</Typography>
        </View>
      </View>
      <View className="items-center">
        <TouchableOpacity
          className="bg-primary py-3 px-4 rounded-md "
          activeOpacity={0.7}
          onPress={handlePress}
        >
          {!loading ? (
            <Typography color="white">Placeholder</Typography>
          ) : (
            <View className="flex-row">
              <Typography color="white">
                Please wait... <ActivityIndicator color="white" />
              </Typography>
            </View>
          )}
        </TouchableOpacity>
      </View>
      {preview && (
        <View className="mt-6">
          <Image source={{ uri: images.logo }} className="h-72 rounded" />
        </View>
      )}
    </View>
  );
};

export default Feature4;
