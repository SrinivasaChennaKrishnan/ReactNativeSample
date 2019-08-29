import React, { useState, useRef } from "react";
import { View } from "react-native";
import { Animation } from "./Animation.js";

export class App extends React.Component {
  render() {
    return (
      <View>
        <Animation />
      </View>
    );
  }
}
