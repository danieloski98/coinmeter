import React from "react";
import Box from "../Box";
import { Image } from "expo-image";
import CustomText from "../CustomText";
import moment from "moment";
import { getRandomInt } from "@/utils/randomnumber";
import { ICurrency } from "@/types/Currency";
import { formatCurrency } from "@/utils/formatcurrency";
import { getImage } from "@/utils/utils";


const coins = [
  require("../../assets/images/coin.png"),
  require("../../assets/images/coin2.png"),
  require("../../assets/images/coin3.png"),
];

export default function AssetCard({ item, type }: { item: ICurrency, type: 'BUY'|'SELL' }) {
  const [num, setNumber] = React.useState(getRandomInt(0, 2));
  return (
    <Box
      width="100%"
      height={150}
      borderRadius={16}
      borderWidth={1}
      marginBottom={"m"}
      backgroundColor={"cardBgColor"}
      style={{ borderColor: "#111B2B" }}
      flexDirection={"row"}
      padding={"s"}
    >
      <Box flex={0.6} justifyContent={"center"}>
        <Box flexDirection={"row"}>
          <Box position={"relative"}>
            { item.name.toUpperCase() !== "USD" ?
              <Image
              source={getImage(item.name as any)}
              contentFit="contain"
              style={{ width: 20, height: 20 }}
            />: null}

            <Image
              source={require("../../assets/images/us.png")}
              contentFit="contain"
              style={{
                width: 20,
                height: 20,
                position: "absolute",
                right: -12,
              }}
            />
          </Box>
          <CustomText variant={"subheader"} fontSize={18} marginLeft={"m"}>
            {item.name.toUpperCase() !== "USD" ? item.name.toUpperCase() + "/USD" : "USD"}
          </CustomText>
        </Box>

        <Box marginTop={"m"}>
          <CustomText variant={"header"} fontSize={30}>
            {type === 'BUY' ? formatCurrency(item.buyPrice):formatCurrency(item.sellPrice)}
          </CustomText>
          <CustomText
            variant={"body"}
            fontSize={14}
            color={"disabledTextColor"}
          >
            Last updated: {moment(item.updatedAt).fromNow()}
          </CustomText>
        </Box>
      </Box>
      <Box flex={0.4}>
        <Image
          source={coins[num]}
          contentFit="contain"
          style={{ width: "100%", height: "100%" }}
        />
      </Box>
    </Box>
  );
}
