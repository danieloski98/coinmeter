import Box from "@/components/Box";
import AssetCard from "@/components/general/AssetCard";
import { ICurrency } from "@/types/Currency";
import { FlatList } from "react-native-gesture-handler";

const data = [1, 2, 34, 5, 6, 7, 8];

export default function BuyPage({ data }: { data: ICurrency[]}) {
  return (
    <Box flex={1} marginTop={"m"}>
      <FlatList data={[...data.filter((item) => item.isDefault === true), ...data.filter((item) => item.isDefault === false)]} renderItem={({ item }) => <AssetCard item={item} type="BUY" />} />
    </Box>
  );
}
