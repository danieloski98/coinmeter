import Box from "@/components/Box";
import CustomText from "@/components/CustomText";
import AssetCard from "@/components/general/AssetCard";
import CustomAssetCard from "@/components/general/CustomAssetsCard";
import { ICurrency } from "@/types/Currency";
import { FlatList } from "react-native-gesture-handler";

export default function BuyPage({ data }: { data: ICurrency[] }) {
  return (
    <Box flex={1} marginTop={"m"}>
      <FlatList
        contentContainerStyle={{ paddingBottom: 100 }}
        data={[
          ...data.filter((item) => item.isDefault === true),
          ...data.filter((item) => item.isDefault === false),
        ]}
        renderItem={({ item, index }) => (
          <>
            {index + 1 === data.length && (
              <>
                <AssetCard item={item} type="BUY" />
                <CustomAssetCard
                  baht={data.filter((item) => item.name === "thai baht")[0]}
                  ngn={data.filter((item) => item.name === "ngn")[0]}
                  type="BUY"
                />
                {/* <CustomText variant="header" marginTop="m">
                  This is the Last item
                </CustomText> */}
              </>
            )}
            {index + 1 !== data.length && (
              <>
                <AssetCard item={item} type="BUY" />
              </>
            )}
          </>
        )}
      />
    </Box>
  );
}
