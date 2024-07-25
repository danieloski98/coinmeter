import Box from "../Box";
import CustomText from "../CustomText";

interface IProps {
  icon: JSX.Element;
  title: string;
  subTitle: string;
}

export default function NotificationItemCard({
  icon,
  title,
  subTitle,
}: IProps) {
  return (
    <Box
      width={"100%"}
      height={"auto"}
      flexDirection={"row"}
      justifyContent={"flex-start"}
      alignItems={"flex-start"}
      marginBottom={"m"}
    >
      <Box justifyContent={"flex-start"}>{icon}</Box>
      <Box marginLeft={"l"}>
        <CustomText variant={"subheader"} fontSize={18}>
          {title}
        </CustomText>
        <CustomText
          style={{ width: "72%" }}
          variant={"body"}
          color={"disabledTextColor"}
          marginTop={"s"}
        >
          {subTitle}
        </CustomText>
      </Box>
    </Box>
  );
}
