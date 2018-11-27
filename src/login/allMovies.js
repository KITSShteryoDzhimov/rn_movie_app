import React, { Component } from "react";

import styles from "./style";
import {Keyboard, Text, View, TextInput, TouchableWithoutFeedback, Alert, KeyboardAvoidingView, SectionList} from 'react-native';
import { Button } from 'react-native-elements';


import AllMoviesScreen from './allMovies'

const appId = "1047121222092614"

export default class ForgottenScreen extends Component {
  static navigationOptions = {
    title: 'All Movies',
  };
  render() {
    const { navigate } = this.props.navigation;
    return (
      <KeyboardAvoidingView style={styles.containerView} behavior="padding">

      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <View style={styles.loginScreenContainer}>
          <View style={styles.loginFormView}>
            <SectionList
              sections={[
                {title: 'G', data: ['Game of Thrones']},
                {title: 'P', data: ['Predator', 'Post', 'Parallel worlds']},
              ]}
              renderItem={({item}) =>
                  <Text style={styles.item}
                  onPress={() =>
                    navigate('MovieDetailsScreen', { name: 'first movie' })
                  }>{item}</Text>}
              renderSectionHeader={({section}) => <Text style={styles.sectionHeader}>{section.title}</Text>}
              keyExtractor={(item, index) => index}
            />
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

}
