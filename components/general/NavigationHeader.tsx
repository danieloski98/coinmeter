import { TouchableOpacity } from "react-native-gesture-handler";
import Box from "../Box";
import { Image } from "expo-image";
import { Feather } from "@expo/vector-icons";
import { useTheme } from "@shopify/restyle";
import { Theme } from "@/theme";
import { router } from "expo-router";

export default function NavigationHeader() {
  const theme = useTheme<Theme>();
  return (
    <Box
      width={"100%"}
      height={40}
      flexDirection={"row"}
      justifyContent={"space-between"}
      marginTop={"3xl"}
      alignItems={"center"}
    >
      <TouchableOpacity
        onPress={() => router.back()}
        style={{
          width: 30,
          height: 30,
          borderRadius: 30,
          justifyContent: "center",
          alignItems: "center",
          backgroundColor: theme.colors.secondaryBackgroundColor,
        }}
      >
        <Feather
          name="arrow-left"
          size={20}
          color={theme.colors.primaryColor}
        />
      </TouchableOpacity>
      <Image
        source={require("../../assets/images/darklogo.png")}
        contentFit="contain"
        style={{ width: 66, height: 38 }}
      />
      <Box />
    </Box>
  );
}
