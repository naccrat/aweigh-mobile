import React from "react";
import Svg, { G, Path, Defs, ClipPath } from "react-native-svg";

export const SwitchIcon = props => (
  <Svg width={24} height={24} fill="none" {...props}>
    <G
      fillRule="evenodd"
      opacity={0.8}
      stroke="#000"
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <Path d="M19 3l3 3-3 3" />
      <Path d="M7 9v-.333c0-.708.328-1.386.911-1.886.584-.5 1.375-.781 2.2-.781H22M17 15v-.333A2.667 2.667 0 0 0 14.333 12H12M7 9v.333A2.667 2.667 0 0 0 9.667 12H12M5 21l-3-3 3-3" />
      <Path d="M17 15v.333c0 .708-.328 1.386-.911 1.886-.584.5-1.375.781-2.2.781H2" />
    </G>
  </Svg>
);
