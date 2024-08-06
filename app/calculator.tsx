import Box from "@/components/Box";
import ButtonWrapper from "@/components/ButtonWrapper";
import TextField from "@/components/Calculator/TextField";
import CustomText from "@/components/CustomText";
import NavigationHeader from "@/components/general/NavigationHeader";
import Tabbar from "@/components/general/Tabbar";
import { ACTIVE_TAB } from "@/enum/Tab";
import { calculatorTabAtom, currenciesAtom } from "@/state/currencies";
import { Theme } from "@/theme";
import { formatCurrency } from "@/utils/formatcurrency";
import { currencyMark } from "@/utils/utils";
import { Feather } from "@expo/vector-icons";
import { useTheme } from "@shopify/restyle";
import { useAtom, useAtomValue } from "jotai";
import moment from "moment";
import React from "react";
import { KeyboardAvoidingView } from "react-native";

export default function Calculator() {
  const [tab, setTab] = useAtom(calculatorTabAtom);
  const [currency1, setCurrency1] = React.useState("0");
  const [currency2, setCurrency2] = React.useState("0");
  const [currency1Name, setCurrency1Name] = React.useState<"usd"|"ngn"|"bitcoin"|"thai baht">("usd");
  const [currency2Name, setCurrency2Name] = React.useState<"usd"|"ngn"|"bitcoin"|"thai baht">("ngn");
  
  const currencies = useAtomValue(currenciesAtom);

  // calculation functions
  const dollarValForConvertedCurrency = React.useCallback(() => {
    if (tab === ACTIVE_TAB.BUY) {
      return currencies.filter((item) => item.name === currency2Name)[0].buyPrice;
    } else {
      return currencies.filter((item) => item.name === currency2Name)[0].sellPrice;
    }
  }, [currency2Name, currency1Name, tab]);

  const currency1DollarValue = React.useCallback(() => {
    if (tab === ACTIVE_TAB.BUY) {
      return currencies.filter((item) => item.name === currency1Name)[0].buyPrice;
    } else {
      return currencies.filter((item) => item.name === currency1Name)[0].sellPrice;
    }
  }, [currency2Name, currency1Name, tab]);

  const calculate = React.useCallback(() => {
      let inUsd;
      inUsd = Number(currency1) / currency1DollarValue();
      return (inUsd * dollarValForConvertedCurrency()).toFixed(6);
  }, [currency1, currency1Name, currency2Name, currency1DollarValue, dollarValForConvertedCurrency]);


  const theme = useTheme<Theme>();
  return (
    <KeyboardAvoidingView
      style={{
        flex: 1,
      }}
    >
      <Box
        flex={1}
        backgroundColor={"mainBackgroundColor"}
        paddingHorizontal={"s"}
      >
        <NavigationHeader />
        <Box height={20} />
        <CustomText variant={"subheader"} fontSize={24}>
          Currency Conversion
        </CustomText>

        <CustomText variant={"body"} color={"disabledTextColor"} fontSize={16}>
          Quick and easy currency conversion at your fingertips
        </CustomText>
        <Box height={20} />
        <Tabbar onPress={(val) => setTab(val as 1|2)} />

        <Box marginTop={"m"} position={"relative"}>
          <Box
            width={35}
            height={35}
            borderRadius={30}
            backgroundColor={"primaryColor"}
            position={"absolute"}
            left={"45%"}
            top={"40%"}
            zIndex={20}
            justifyContent={"center"}
            alignItems={"center"}
          >
            <Feather name="arrow-down" size={25} color={"white"} />
          </Box>
          <TextField isFocused value={currency1} onChange={(val) => setCurrency1(val)} name={currency1Name} setName={(val) => setCurrency1Name(val)} />
          <Box height={5} />
          <TextField value={calculate() as any} onChange={(val) => setCurrency2(val)} name={currency2Name} setName={(val) => setCurrency2Name(val)} isDisabled />
        </Box>

        <Box
          marginVertical={"m"}
          flexDirection={"row"}
          alignItems={"center"}
          justifyContent={"space-between"}
        >
          <CustomText variant={"body"} color={"disabledTextColor"}>
            last update: {moment(currencies.filter((item) => item.name === currency2Name)[0].updatedAt).fromNow()}
          </CustomText>

          <CustomText variant={"body"} color={"primaryColor"}>
            $1 = {currencyMark(currency2Name)}{dollarValForConvertedCurrency().toFixed(6)}
          </CustomText>
        </Box>

      </Box>
    </KeyboardAvoidingView>
  );
}
