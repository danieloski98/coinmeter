import { PropsWithChildren } from "react";
import { LinearGradient as LG } from "expo-linear-gradient";

export default function LinearGradientContainer({
  children,
}: {} & PropsWithChildren) {
  return (
    <LG
      colors={["#62D6EE4F", "#5ECCE332", "#387A8800"]}
      locations={[0.41, 0.41, 0.1]}
      style={{
        flex: 1,
      }}
    >
      {children}
    </LG>
  );
}
