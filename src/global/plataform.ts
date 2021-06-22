import { StyleSheet, Platform } from "react-native";

export default StyleSheet.create({
  iosSafeArea: {
    flex: 1,
    marginTop: Platform.OS === "android" ? 40 : 0,
  },
});
