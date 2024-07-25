import { PropsWithChildren } from "react";
import { DimensionValue } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";

interface IProps {
  width?: DimensionValue;
  height?: DimensionValue;
  backgroundColor?: string;
  borderRadius?: number;
  onPress: () => void;
}

export default function ButtonWrapper({
  width = 100,
  height = 38,
  backgroundColor = "white",
  borderRadius = 50,
  onPress,
  children,
}: IProps & PropsWithChildren) {
  return (
    <TouchableOpacity
      onPress={() => onPress()}
      style={{
        width,
        height,
        borderRadius: borderRadius,
        backgroundColor,
      }}
    >
      {children}
    </TouchableOpacity>
  );
}
