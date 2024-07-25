import React from "react";
import { Pressable } from "react-native";
import Box from "../Box";
import CustomText from "../CustomText";
import { useTheme } from "@shopify/restyle";
import { Theme } from "@/theme";

export default function Tabbar({
  onPress,
}: {
  onPress: (tab: number) => void;
}) {
  const [tab, setTab] = React.useState(1);
  const theme = useTheme<Theme>();

  const handlePress = React.useCallback(
    (tab: number) => {
      setTab(tab);
      onPress(tab);
    },
    [tab],
  );
  return (
    <Box
      width={129}
      height={40}
      borderRadius={13}
      overflow={"hidden"}
      backgroundColor={"secondaryBackgroundColor"}
      flexDirection={"row"}
    >
      <Pressable
        onPress={() => handlePress(1)}
        style={{
          flex: 1,
          justifyContent: "center",
          alignItems: "center",
          borderRadius: 13,
          backgroundColor:
            tab === 1 ? theme.colors.primaryColor : "transparent",
        }}
      >
        <CustomText
          variant={"subheader"}
          fontSize={18}
          color={tab === 1 ? "black" : "disabledTextColor"}
        >
          Buy
        </CustomText>
      </Pressable>
      <Pressable
        onPress={() => handlePress(2)}
        style={{
          flex: 1,
          justifyContent: "center",
          alignItems: "center",
          borderRadius: 13,
          backgroundColor:
            tab === 2 ? theme.colors.primaryColor : "transparent",
        }}
      >
        <CustomText
          variant={"subheader"}
          color={tab === 2 ? "black" : "disabledTextColor"}
          fontSize={18}
        >
          Sell
        </CustomText>
      </Pressable>
    </Box>
  );
}
