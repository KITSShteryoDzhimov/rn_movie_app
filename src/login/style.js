const React = require("react-native");

const { StyleSheet } = React;

export default {

containerView: {
  flex: 1,
},
loginScreenContainer: {
  flex: 1,
          justifyContent: 'space-between',
},
logoText: {
  fontSize: 33,
  fontWeight: "800",
  marginTop:  40,
  marginBottom: 55,
  textAlign: 'center',
},
loginFormView: {
  flex: 1
},
userLabelText: {
  fontSize: 18,
  fontWeight: "800",
  textAlign: 'left',
  marginLeft: 15,
},
passwordLabelText: {
  fontSize: 18,
  fontWeight: "800",
  textAlign: 'left',
  marginLeft: 15,
},
loginFormTextInput: {
  height: 43,
  fontSize: 14,
  borderRadius: 5,
  borderWidth: 1,
  borderColor: '#eaeaea',
  backgroundColor: '#fafafa',
  paddingLeft: 10,
  marginLeft: 15,
  marginRight: 15,
  marginTop: 5,
  marginBottom: 5,

},
loginButton: {
  backgroundColor: '#3897f1',
  borderRadius: 5,
  height: 45,
  marginTop: 10,
},
forgotButton: {
  height: 45,
  marginTop: 150,
  backgroundColor: 'transparent',
},
tcText: {
  fontSize: 13,
  fontWeight: "400",
  marginTop:  30,
  marginBottom: 15,
  textAlign: 'left',
},
sectionHeader: {
    paddingTop: 2,
    paddingLeft: 10,
    paddingRight: 10,
    paddingBottom: 2,
    fontSize: 14,
    fontWeight: 'bold',
    backgroundColor: 'rgba(247,247,247,1.0)',
  },
item: {
  padding: 10,
  fontSize: 18,
  height: 44,
},
};
