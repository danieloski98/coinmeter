import React from "react";
import Box from "@/components/Box";
import ButtonWrapper from "@/components/ButtonWrapper";
import CustomText from "@/components/CustomText";
import Header from "@/components/dashboard/Header";
import Tabbar from "@/components/general/Tabbar";
import { Theme } from "@/theme";
import { useTheme } from "@shopify/restyle";
import { Image } from "expo-image";
import { router } from "expo-router";
import BuyPage from "@/Views/Dashboard/Buy";
import SellPage from "@/Views/Dashboard/Sell";

export default function Dashboard() {
  const [tab, setTab] = React.useState(1);
  const theme = useTheme<Theme>();
  return (
    <Box flex={1} backgroundColor={"mainBackgroundColor"}>
      <Box flex={1} paddingHorizontal={"m"} paddingTop={"2xl"}>
        <Box width={"100%"}>
          <Image
            source={require("../assets/images/darklogo.png")}
            contentFit="contain"
            style={{ width: 66, height: 27 }}
          />
        </Box>

        <Header />
        <Box height={30} />
        <Tabbar onPress={(tab) => setTab(tab)} />

        <Box flex={1}>
          {tab === 1 && <BuyPage />}
          {tab === 2 && <SellPage />}
        </Box>
      </Box>

      {/* BUTTON */}

      <ButtonWrapper
        onPress={() => router.push("calculator")}
        width={"100%"}
        height={64}
        backgroundColor={theme.colors.primaryColor}
        borderRadius={0}
      >
        <Box flex={1} justifyContent={"center"} alignItems={"center"}>
          <CustomText variant={"body"} color={"black"} fontSize={18}>
            Use Calculator
          </CustomText>
        </Box>
      </ButtonWrapper>
    </Box>
  );
}
