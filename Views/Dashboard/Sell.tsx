import Box from "@/components/Box";
import AssetCard from "@/components/general/AssetCard";
import CustomAssetCard from "@/components/general/CustomAssetsCard";
import { ICurrency } from "@/types/Currency";
import { FlatList } from "react-native-gesture-handler";

const data = [1, 2, 34, 5, 6, 7, 8];

export default function SellPage({ data }: { data: ICurrency[] }) {
  return (
    <Box flex={1} marginTop={"m"}>
      <FlatList
        data={[
          ...data.filter((item) => item.isDefault === true),
          ...data.filter((item) => item.isDefault === false),
        ]}
        renderItem={({ item, index }) => (
          <>
            {index + 1 === data.length && (
              <>
                <AssetCard item={item} type="SELL" />
                <CustomAssetCard
                  baht={data.filter((item) => item.name === "thai baht")[0]}
                  ngn={data.filter((item) => item.name === "ngn")[0]}
                  type="SELL"
                />
              </>
            )}
            {index + 1 !== data.length && (
              <>
                <AssetCard item={item} type="SELL" />
              </>
            )}
          </>
        )}
      />
    </Box>
  );
}
