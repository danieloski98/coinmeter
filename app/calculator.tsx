import Box from "@/components/Box";
import CustomText from "@/components/CustomText";

export default function Calculator() {
  return (
    <Box flex={1} backgroundColor={"mainBackgroundColor"}>
      <CustomText variant={"header"}>Calculator</CustomText>
    </Box>
  );
}
