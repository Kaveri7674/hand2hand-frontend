import { StyleSheet } from "react-native";

export default StyleSheet.create({
  container: {
    flex: 1,
  },

  backButton: {
    position: "absolute",
    top: 40,
    left: 20,
    zIndex: 1,
  },

  inner: {
    flex: 1,
    justifyContent: "flex-start",
    paddingTop: 40,
    paddingHorizontal: 24,
  },

  welcome: {
    fontSize: 34,
    fontWeight: "700",
    color: "#fff",
    marginBottom: 6,
    textAlign: "center",
  },

  subtitle: {
    fontSize: 18,
    color: "rgba(255,255,255,0.95)",
    marginBottom: 20,
    textAlign: "center",
  },

  input: {
    width: "70%",
maxWidth: 420,
alignSelf: "center",
    borderWidth: 1,
    borderColor: "rgba(255,255,255,0.9)",
    borderRadius: 8,
    padding: 12,
    marginBottom: 12,
    color: "#fff",
    backgroundColor: "rgba(255,255,255,0.06)",

    // Web + Android focus reset
    outlineWidth: 0,
    outlineColor: "transparent",
    boxShadow: "none",
    underlineColorAndroid: "transparent",
  },

  passwordRow: {
    width: "70%",
maxWidth: 420,
alignSelf: "center",
    flexDirection: "row",
    alignItems: "center",
    borderWidth: 1,
    borderColor: "#fff",
    borderRadius: 8,
    paddingHorizontal: 12,
    height: 45,
    marginBottom: 15,
  },

  inputField: {
  flex: 1,
  color: "#fff",
  fontSize: 14,

  borderWidth: 0,

  outlineStyle: "none",
  outlineWidth: 0,
  outlineColor: "transparent",

  boxShadow: "none",
  backgroundColor: "transparent",

  underlineColorAndroid: "transparent",
  textContentType: "none",
},

  eyeButton: {
    paddingHorizontal: 5,
  },

  forgot: {
    alignSelf: "flex-end",
    marginTop: 8,
    marginBottom: 12,
    color: "#000",
    fontSize: 12,
  },

  button: {
    width: "70%",
maxWidth: 420,
alignSelf: "center",
    backgroundColor: "#fff",
    padding: 12,
    borderRadius: 8,
    alignItems: "center",
    marginTop: 6,
  },

  buttonText: {
    color: "#000",
    fontWeight: "700",
  },

  message: {
    marginTop: 12,
    color: "#fff",
    textAlign: "center",
  },

  signupRow: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    marginTop: 18,
    marginBottom: 20,
  },

  noAccount: {
    color: "#000",
    marginRight: 8,
  },

  signUpLink: {
    color: "#fff",
    fontWeight: "700",
  },
});