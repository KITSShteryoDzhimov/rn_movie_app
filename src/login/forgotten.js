import React, { Component } from "react";

import styles from "./style";
import {Keyboard, Text, View, TextInput, TouchableWithoutFeedback, Alert, KeyboardAvoidingView} from 'react-native';
import { Button } from 'react-native-elements';


const appId = "1047121222092614"

export default class ForgottenScreen extends Component {

  render() {
    return (
      <KeyboardAvoidingView style={styles.containerView} behavior="padding">

      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <View style={styles.loginScreenContainer}>
          <View style={styles.loginFormView}>
            <Text style={styles.userLabelText}>Email: </Text>
            <TextInput placeholder="me@abv.bg" placeholderColor="#c4c3cb" style={styles.loginFormTextInput} />
            <Button
              buttonStyle={styles.loginButton}
              onPress={() => this.onLoginPress()}
              title="Reset password"
            />
            <Text style={styles.userLabelText}>By submitting your mail we'll reset your password'</Text>
          </View>
        </View>
      </TouchableWithoutFeedback>
      </KeyboardAvoidingView>
    );
  }

  componentDidMount() {
  }

  componentWillUnmount() {
  }

  onLoginPress() {
    Alert.alert("Email was sent for resetting your password!");
//    onLoginFinished={
//      (error, result) => {
//        if (error) {
//          alert("Login failed with error: " + error.message);
//        } else if (result.isCancelled) {
//          alert("Login was cancelled");
//        } else {
//          alert("Login was successful with permissions: " + result.grantedPermissions)
//        }
//      }
//    }
  }



}
