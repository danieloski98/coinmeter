import Box from "@/components/Box";
import AssetCard from "@/components/general/AssetCard";
import { FlatList } from "react-native-gesture-handler";

const data = [1, 2, 34, 5, 6, 7, 8];

export default function SellPage() {
  return (
    <Box flex={1} marginTop={"m"}>
      <FlatList data={data} renderItem={({ item }) => <AssetCard />} />
    </Box>
  );
}
