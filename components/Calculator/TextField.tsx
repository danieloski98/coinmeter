import { TextInput } from "react-native-gesture-handler";
import Box from "../Box";
import { Image } from "expo-image";
import CustomText from "../CustomText";
import { currencyMark, getImage } from "@/utils/utils";
import CurrencyList from "./CurrenyList";
import React from "react";
import { formatCurrency } from "@/utils/formatcurrency";

export default function TextField({ value, onChange, name, setName, isDisabled = false}: {
  value: string;
  onChange: (value: string) => void;
  name: "usd"|"ngn"|"bitcoin"|"thai baht",
  setName: (val: "usd"|"ngn"|"bitcoin"|"thai baht") => void,
  isDisabled?: boolean;
}) {
  const [showModal, setShowModal] = React.useState(false);

  return (
    <Box
      width={"100%"}
      height={80}
      backgroundColor={"secondaryBackgroundColor"}
      borderRadius={10}
      flexDirection={"row"}
      justifyContent={"space-between"}
      alignItems={"center"}
      paddingHorizontal={"s"}
    >
      <CurrencyList visible={showModal} onClose={() => setShowModal(false)} setValue={(val) => setName(val as any)} />
      <Box flex={0.3} flexDirection={"row"} alignItems={"center"}>
        <Image
          source={getImage(name)}
          contentFit="contain"
          style={{ width: 30, height: 30, borderRadius: 20 }}
        />
        <CustomText onPress={() => setShowModal(true)} fontSize={18} marginLeft={"s"} variant={"subheader"}>
          {name.toUpperCase()}
        </CustomText>
        <Image
          source={require("../../assets/images/expand.png")}
          contentFit="contain"
          style={{ width: 20, height: 20 }}
        />
      </Box>

      <Box
        flex={0.7}
        height={"100%"}
        flexDirection={"row"}
        justifyContent={"flex-end"}
        alignItems={"center"}
        minWidth={40}
        maxWidth={220}
      >
        {!isDisabled && <CustomText variant={"subheader"} fontSize={isDisabled ? 20:20}>{currencyMark(name)}</CustomText>}
        {!isDisabled && (
          <TextInput
            value={value}
            onChangeText={(val) => onChange(val)}
            keyboardType="number-pad"
            style={{
              fontFamily: "SF_Medium",
              fontSize: 25,
              color: "white",
            }}
            placeholderTextColor={"white"}
          />
        )}
        {isDisabled && (
          <CustomText variant={"subheader"}  style={{
            fontFamily: "SF_Medium",
            fontSize: 18,
            color: "white",
            marginRight: 10,
          }}>{formatCurrency(parseFloat(value), currencyMark(name))}</CustomText>
        )}
      </Box>
    </Box>
  );
}
