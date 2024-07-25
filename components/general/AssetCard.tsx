import Box from "../Box";
import { Image } from "expo-image";
import CustomText from "../CustomText";
import moment from "moment";

export default function AssetCard() {
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
            <Image
              source={require("../../assets/images/nigeria.png")}
              contentFit="contain"
              style={{ width: 20, height: 20 }}
            />
          </Box>
          <CustomText variant={"subheader"} fontSize={18}>
            USD/NGN
          </CustomText>
        </Box>

        <Box marginTop={"m"}>
          <CustomText variant={"header"} fontSize={30}>
            $200.00
          </CustomText>
          <CustomText
            variant={"body"}
            fontSize={14}
            color={"disabledTextColor"}
          >
            Last updated: {moment().toDate().toDateString()}
          </CustomText>
        </Box>
      </Box>
      <Box flex={0.4}>
        <Image
          source={require("../../assets/images/coin3.png")}
          contentFit="contain"
          style={{ width: "100%", height: "100%" }}
        />
      </Box>
    </Box>
  );
}
