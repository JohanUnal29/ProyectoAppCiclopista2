import { StyleSheet } from "react-native";
import { colors } from "../src/global/colors";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FFFFFF",
    alignItems: "center",
    justifyContent: "center",
  },

  buttonContainer: {
    backgroundColor: "blue",
    padding: 10,
    borderRadius: 5,
  },
  buttonText: {
    color: "white",
    textAlign: "center",
  },
  goBack:{
    width:"100%",
    backgroundColor:colors.green1,
    padding:10,
    paddingStart:40
   }
});
