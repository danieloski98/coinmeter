import React from "react";
import Box from "@/components/Box";
import { Text, View } from "react-native";
import { Image } from "expo-image";
import CustomText from "@/components/CustomText";
import ButtonWrapper from "@/components/ButtonWrapper";
import { Feather } from "@expo/vector-icons";
import * as SecureStore from "expo-secure-store";
import { router } from "expo-router";
import Storage_Keys from "@/utils/storagekeys";
import { PermissionStatus, getPermissionsAsync } from "expo-notifications";

export default function Index() {
  async function getNotificationPermissionStatus() {
    const { status } = await getPermissionsAsync();
    return status;
  }
  const handleNavigate = React.useCallback(async () => {
    const status = await getNotificationPermissionStatus();
    console.log(status);
    if (status === "granted") {
      router.push("dashboard");
    } else {
      router.push("notification");
    }
  }, []);
  return (
    <Box flex={1} backgroundColor={"mainBackgroundColor"}>
      <Box
        flex={0.6}
        style={{
          backgroundColor: "#62D6EE",
        }}
      >
        <Image
          source={require("../assets/images/Illustration.png")}
          contentFit="contain"
          style={{ width: "100%", height: "100%" }}
        />
      </Box>
      <Box
        flex={0.4}
        backgroundColor={"mainBackgroundColor"}
        alignItems={"center"}
      >
        <Image
          source={require("../assets/images/emmilogo.png")}
          contentFit="contain"
          style={{ width: 66, height: 27, marginTop: 40, marginBottom: 20 }}
        />

        <CustomText variant={"subheader"} fontSize={36} textAlign={"center"}>
          Track exchange rates, convert currencies
        </CustomText>

        <CustomText
          variant={"body"}
          color="disabledTextColor"
          textAlign={"center"}
          marginTop={"s"}
          style={{ width: "70%" }}
        >
          Access up-to-date buy and sell rates for both fiat and
          cryptocurrencies.
        </CustomText>
        <Box height={20} />
        <ButtonWrapper onPress={handleNavigate} width={133} height={48}>
          <Box
            flex={1}
            flexDirection={"row"}
            justifyContent={"center"}
            alignItems={"center"}
          >
            <CustomText variant="body" style={{ color: "black" }}>
              Continue
            </CustomText>
            <Feather
              name="arrow-right"
              size={20}
              color="black"
              style={{ marginTop: 3, marginLeft: 5 }}
            />
          </Box>
        </ButtonWrapper>
      </Box>
    </Box>
  );
}
