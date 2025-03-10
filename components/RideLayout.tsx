import BottomSheet, {
  BottomSheetScrollView,
  BottomSheetView,
} from "@gorhom/bottom-sheet";
import { router } from "expo-router";
import React, { useRef, useState } from "react";
import {
  ActivityIndicator,
  Image,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import { GestureHandlerRootView } from "react-native-gesture-handler";

import DriverMap from "@/components/DriverMap";
import { icons } from "@/constants";

const RideLayout = ({
  title,
  snapPoints,
  children,
}: {
  title: string;
  snapPoints?: string[];
  children: React.ReactNode;
}) => {
  const bottomSheetRef = useRef<BottomSheet>(null);
  const [isMapLoading, setIsMapLoading] = useState(true);

  return (
    <GestureHandlerRootView className="flex-1">
      <View className="flex-1 bg-white">
        <View className="flex flex-col h-screen">
          <View className="flex flex-row absolute z-10 top-16 items-center justify-start px-5">
            <TouchableOpacity onPress={() => router.back()}>
              <View className="w-10 h-10 bg-white rounded-full items-center justify-center">
                <Image
                  source={icons.backArrow}
                  resizeMode="contain"
                  className="w-6 h-6"
                />
              </View>
            </TouchableOpacity>
            <Text className="text-xl font-JakartaSemiBold ml-5">
              {title || "Go Back"}
            </Text>
          </View>

          <DriverMap setIsMapLoading={setIsMapLoading} />
          {isMapLoading && (
            <View className="flex justify-center items-center h-full">
              <ActivityIndicator size="large" color="#000" />
            </View>
          )}
        </View>

        {!isMapLoading && (
          <BottomSheet
            ref={bottomSheetRef}
            snapPoints={snapPoints || ["40%", "85%"]}
            index={0}
          >
            {title === "Choose a Driver" ? (
              <BottomSheetView
                style={{
                  flex: 1,
                  padding: 20,
                }}
              >
                {children}
              </BottomSheetView>
            ) : (
              <BottomSheetScrollView
                style={{
                  flex: 1,
                  padding: 20,
                }}
              >
                {children}
              </BottomSheetScrollView>
            )}
          </BottomSheet>
        )}
      </View>
    </GestureHandlerRootView>
  );
};

export default RideLayout;
