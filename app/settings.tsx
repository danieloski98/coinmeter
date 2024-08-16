import Box from "@/components/Box";
import CustomText from "@/components/CustomText";
import NavigationHeader from "@/components/general/NavigationHeader";
import { Feather } from "@expo/vector-icons";
import { Switch } from "react-native-gesture-handler";
import { router } from "expo-router";
import React from "react";
import { useTheme } from "@shopify/restyle";
import { Theme } from "@/theme";
import * as Notifications from "expo-notifications";
import * as Linking from "expo-linking";
import { Alert } from "react-native";

interface ItemProps {
  type: "SWITCH" | "NAVIGATION" | "NONE";
  route?: string;
  action?: () => void;
  isCheck?: boolean;
  header: string;
  body: string;
}

const Items = ({ type, route, action, header, body, isCheck }: ItemProps) => {
  const theme = useTheme<Theme>();
  const handlePress = () => {
    if (type === "NAVIGATION") {
      router.push(route as string);
    }
  };
  return (
    <Box
      width={"100%"}
      minHeight={60}
      flexDirection={"row"}
      justifyContent={"space-bewteen"}
      alignItems={"center"}
      marginBottom={"xl"}
    >
      <Box flex={0.8}>
        <CustomText variant={"subheader"} fontSize={20} onPress={handlePress}>
          {header}
        </CustomText>
        <CustomText variant={"body"} color={"disabledTextColor"}>
          {body}
        </CustomText>
      </Box>

      <Box alignItems={"center"} flex={0.2}>
        {type === "SWITCH" && action && (
          <Switch
            value={isCheck}
            thumbColor={isCheck ? theme.colors.primaryColor : "#f4f3f4"}
            onValueChange={() => action()}
          />
        )}
        {type === "NAVIGATION" && (
          <Feather name="chevron-right" size={25} color={"white"} />
        )}
      </Box>
    </Box>
  );
};

export default function Settings() {
  const [check, setCheked] = React.useState(false);

  React.useEffect(() => {
    checkNotificationPermissions();
  }, []);

  async function checkNotificationPermissions() {
    const { status } = await Notifications.getPermissionsAsync();
    if (status === "granted") {
      setCheked(true);
    } else {
      setCheked(false);
    }
  }

  const togglePermission = React.useCallback(async () => {
    let status;
    if (check) {
      Alert.alert(
        "Notification",
        "You are about to turn off notifications meaning you won't get notified of important changes when they happen ",
        [
          {
            isPreferred: true,
            text: "Proceed",
            onPress: () => {
              Linking.openSettings();
            },
            style: "destructive",
          },
          { isPreferred: true, text: "Cancel", style: "default" },
        ]
      );
    } else {
      // request the permission
      const { status: newStatus } =
        await Notifications.requestPermissionsAsync();
      status = newStatus;
      if (status === "granted") {
        setCheked(true);
      } else {
        setCheked(false);
      }
    }
  }, [check]);
  return (
    <Box
      flex={1}
      backgroundColor={"mainBackgroundColor"}
      paddingHorizontal={"s"}
    >
      <NavigationHeader />
      <Box marginTop={"m"}>
        <Items
          header="Notification"
          body="Toggle off to stop receiving notification from us "
          type="SWITCH"
          isCheck={check}
          action={() => togglePermission()}
        />
        <Items
          header="Data Sources and Disclaimers"
          body="At Emmi Exchange, we strive for transparency in our data and operations."
          type="NAVIGATION"
          route="/disclaimer"
          action={() => router.push("/disclaimer")}
        />

        <Items
          header="App Version"
          body="1.0"
          type="NONE"
          action={() => setCheked((prev) => !prev)}
        />
      </Box>
    </Box>
  );
}
