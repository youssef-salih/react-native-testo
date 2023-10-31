import { View, Text } from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";

export default function Login() {
  return (
    <SafeAreaView>
      <View className="flex items-center h-screen">
        <Text className="text-center text-3xl capitalize font-bold">login</Text>
        <View></View>
      </View>
    </SafeAreaView>
  );
}
