import moment from "moment";
import Box from "../Box";
import CustomText from "../CustomText";
import { TouchableOpacity } from "react-native-gesture-handler";
import { Feather } from "@expo/vector-icons";
import { useTheme } from "@shopify/restyle";
import { Theme } from "@/theme";

export default function Header() {
  const theme = useTheme<Theme>();
  return (
    <Box
      width={"100%"}
      flexDirection={"row"}
      justifyContent={"space-between"}
      marginTop={"m"}
    >
      <Box>
        <CustomText variant={"subheader"}>Today's Rate</CustomText>
        <CustomText
          variant={"body"}
          color={"disabledTextColor"}
          marginTop={"s"}
        >
          {moment().toDate().toDateString()}
        </CustomText>
      </Box>

      <TouchableOpacity
        style={{
          width: 40,
          height: 40,
          borderRadius: 20,
          justifyContent: "center",
          alignItems: "center",
          backgroundColor: theme.colors.secondaryBackgroundColor,
        }}
      >
        <Feather
          name="more-horizontal"
          size={20}
          color={theme.colors.primaryColor}
        />
      </TouchableOpacity>
    </Box>
  );
}
