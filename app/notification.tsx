import Box from "@/components/Box";
import CustomText from "@/components/CustomText";
import LinearGradientContainer from "@/components/general/LinearGradientContainer";
import { Image } from "expo-image";
import { Feather } from "@expo/vector-icons";
import theme from "@/theme";
import NotificationItemCard from "@/components/notifications/NotificationItemCard";
import ButtonWrapper from "@/components/ButtonWrapper";
import { Alert } from "react-native";
import * as SecureStore from "expo-secure-store";
import Storage_Keys from "@/utils/storagekeys";
import { router } from "expo-router";

const data: { title: string; subTitle: string; icon: JSX.Element }[] = [
  {
    title: "New Exchange Rate Alerts",
    subTitle: "Be the first to know when we update our exchange rates",
    icon: (
      <Feather name="bar-chart-2" size={20} color={theme.colors.primaryColor} />
    ),
  },
  {
    title: "Special Offers and Promotions",
    subTitle:
      "Receive updates on any special deals or discounts on exchange fees",
    icon: <Feather name="tag" size={20} color={theme.colors.primaryColor} />,
  },
  {
    title: "Important Service Updates",
    subTitle:
      "Receive critical updates about the app's functionality or new features",
    icon: <Feather name="tool" size={20} color={theme.colors.primaryColor} />,
  },
];

export default function Notification() {
  const handlePress = (accepted: boolean) => {
    if (accepted) {
      SecureStore.setItem(Storage_Keys.NOTIFICATION_ACCEPTED, "true");
    } else {
      SecureStore.setItem(Storage_Keys.NOTIFICATION_ACCEPTED, "false");
    }
    router.push("dashboard");
  };
  return (
    <LinearGradientContainer>
      <Box
        flex={1}
        padding={"m"}
        alignItems={"center"}
        backgroundColor={"mainBackgroundColor"}
      >
        <Box
          width={"100%"}
          height={40}
          justifyContent={"center"}
          alignItems={"center"}
        >
          <Image
            source={require("../assets/images/emmilogo.png")}
            contentFit="contain"
            style={{ width: 66, height: 27, marginTop: 80, marginBottom: 20 }}
          />
        </Box>

        <Box
          width={"100%"}
          height={80}
          justifyContent={"center"}
          alignItems={"center"}
          marginTop={"2xl"}
        >
          <Image
            source={require("../assets/images/noti.png")}
            contentFit="cover"
            style={{
              width: "100%",
              height: 75,
              marginTop: 40,
              marginBottom: 20,
            }}
          />
        </Box>

        <CustomText
          variant={"subheader"}
          fontSize={30}
          textAlign={"center"}
          marginTop={"xl"}
        >
          Turn on notifications
        </CustomText>
        <Box height={30} />
        {data.map((item, index) => (
          <NotificationItemCard {...item} key={index.toString()} />
        ))}
        <Box height={30} />
        <ButtonWrapper
          onPress={() => {
            Alert.alert(
              '"Emmi exchange" would like to send you notification',
              "Notifications may include alert, sounds, and icon badges. These can be configured in Settings ",
              [
                {
                  text: "Dont't Allow",
                  onPress: () => handlePress(false),
                  style: "destructive",
                },
                {
                  text: "Allow",
                  onPress: () => handlePress(true),
                  style: "default",
                },
              ],
            );
          }}
          width={186}
          height={48}
        >
          <Box flex={1} justifyContent={"center"} alignItems={"center"}>
            <CustomText variant={"body"} color="black" fontSize={18}>
              Allow notification
            </CustomText>
          </Box>
        </ButtonWrapper>

        <CustomText
          variant={"body"}
          color="bodyTextColor"
          fontSize={18}
          textDecorationLine={"underline"}
          marginTop={"l"}
          onPress={() => router.push("dashboard")}
        >
          Not Now
        </CustomText>
      </Box>
    </LinearGradientContainer>
  );
}
