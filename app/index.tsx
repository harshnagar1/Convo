import welcomeImage from "@/assets/images/welcome.png";
import "@/global.css";
import { Link } from "expo-router";
import React from "react";
import { Image, Text, TouchableOpacity, View } from "react-native";
import "react-native-reanimated";

const welcome_image = Image.resolveAssetSource(welcomeImage).uri;

const index = () => {
  const openLink = () => {};
  return (
    <View className="flex-1 bg-white ">
      <View className="flex-1 items-center justify-center bg-white-500">
        <Image
          className="w-[320px] h-[350px] my-20"
          source={{ uri: welcome_image }}
        />
        <View className="text-lg justify-center items-center">
          <Text className="font-bold text-black-500 text-3xl mx-5  ">
            Welcome to Convo
          </Text>

          <Text className="text-sm mx-8 my-5 justify-center items-center">
            Read Our{` `}
            <Text className="text-blue-400" onPress={openLink}>
              Privacy Policy
            </Text>{" "}
            . {'Tap "Agree & Continue" to accept the '}
            <Text className="text-blue-400" onPress={openLink}>
              Terms of Service
            </Text>
            .
          </Text>
        </View>
        <View className="justify-center items-center">
          <Link href={"/otp"}  replace asChild> 
            <TouchableOpacity>
              <Text className="text-2xl font-bold text-blue-400">
                Agree and Continue
              </Text>
            </TouchableOpacity>
          </Link>
        </View>
      </View>
    </View>
  );
};

export default index;
