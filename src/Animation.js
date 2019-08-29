import React, { useState, useRef } from "react";
import { StyleSheet, View } from "react-native";
import {
  useTransition,
  useSpring,
  useChain,
  config,
  animated
} from "react-spring/native";
import { styles } from "./styles";

const AnimatedView = animated(View);

export function Animation() {
  const [open, set] = useState(false);

  const springRef = useRef();

  const { size, opacity, bg } = useSpring({
    ref: springRef,
    config: config.stiff,
    from: { size: "20%", bg: "gray" },
    to: {
      size: open ? "100%" : "20%",
      bg: open ? "white" : "gray"
    }
  });

  useChain([springRef], [0, open ? 0.1 : 0.1]);

  return (
    <>
      <View style={styles.Global} />
      <AnimatedView
        style={[
          styles.Container,
          { width: size, height: size, backgroundColor: bg }
        ]}
        onClick={() => set(open => !open)}
      >
        {open && <View />}
      </AnimatedView>
    </>
  );
}
