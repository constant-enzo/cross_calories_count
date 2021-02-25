import React from "react";
import { Text, View, Button, StyleSheet, KeyboardAvoidingView, TouchableWithoutFeedback, Keyboard, SafeAreaView } from "react-native";
import PressableCircleInput from "../components/PressableCircleInput"
import GlobalStyles from '../../GlobalStyles';

export default class StartScreen extends React.Component {
  constructor(props){
    super(props);

    this.handler = this.handler.bind(this)
    this.state = {
      kg_value: ''
    };
  }

  handler(text){
    this.setState({
      kg_value:text
    })
  }
  render () {
    const { navigation } = this.props;
    
    return (
      <SafeAreaView style={GlobalStyles.droidSafeArea}>
        <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
          <KeyboardAvoidingView 
        behavior={Platform.OS === "ios" ? "padding" : null}
        style={styles.container}
        >
            <View style={{flex:5}}>
              <View style={styles.topPadding} >
                <Text style={styles.text}>Bienvenue !</Text>
                <Text style={styles.text}>Entrer votre masse afin d'affiner les estimations</Text>
              </View>
              <PressableCircleInput
                action={this.handler}
              />
            </View>
            <View style={{flex:2}}>
              <Button disabled={!this.state.kg_value} title="go" onPress={() => navigation.navigate('CrossActivitySelection',{kg: this.state.kg_value}) }/>
              <Text style={[styles.text,styles.topPadding]}>Ignorer...</Text>
            </View>
          </KeyboardAvoidingView>
        </TouchableWithoutFeedback>
      </SafeAreaView>
    );
  }
}



const styles = StyleSheet.create({
    container:{
      flex:1
    },
    text: {
        color:'white',
        fontSize: 20,
        fontWeight: 'bold',
        textAlign: 'center'
      },
    topPadding : {
        paddingTop : 30
    }
  
});