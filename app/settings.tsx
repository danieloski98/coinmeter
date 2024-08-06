import Box from "@/components/Box";
import CustomText from "@/components/CustomText";
import NavigationHeader from "@/components/general/NavigationHeader";
import { Feather } from "@expo/vector-icons";
import { Switch } from "react-native-gesture-handler";
import { router } from "expo-router";
import React from "react";
import { useTheme } from "@shopify/restyle";
import { Theme } from "@/theme";

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
          action={() => setCheked((prev) => !prev)}
        />
        <Items
          header="Data Sources and Disclaimers"
          body="At Emmi Exchange, we strive for transparency in our data and operations."
          type="NAVIGATION"
          action={() => setCheked((prev) => !prev)}
        />

        <Items
          header="App Version"
          body="0.1"
          type="NONE"
          action={() => setCheked((prev) => !prev)}
        />
      </Box>
    </Box>
  );
}
