import { StyleSheet } from "react-native";

export const StylesProduct = StyleSheet.create({
  inputContainer:{
    flexDirection:"row",
    alignItems:"center",
    width:"100%",
    justifyContent:"space-around"
  },
  input:{
    borderWidth:4,
    paddingHorizontal:10,
    paddingVertical:5,
    width:150
  },

  modalContainer:{
    flex:1,
    alignItems:"center",
    justifyContent:"center"
  },
  modalContent:{
    width:"80%",
    borderWidth:2,
    padding:10,
    gap:10
  },
  modalText:{
    textAlign:"center"
  }

  
});
