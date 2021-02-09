import React from "react";
import { View, Text,  StyleSheet, KeyboardAvoidingView, SafeAreaView, FlatList } from "react-native";
import GlobalStyles from '../../GlobalStyles';
import Result from "../components/Result"
import ActivitySetting from "../components/ActivitySetting"
export default class CrossActivityInputScreen extends React.Component {
  constructor(props){
    super(props);
    const {  selections }  = this.props.route.params;
    this.handleSelection= this.handleSelection.bind(this)
    this.state={
      selections: selections,
      dict: {}
    };
    console.log("selections:" +this.state.selections)
  }

  handleSelection(name,intensity){
    console.log(name,intensity)
    this.state.dict[name]=intensity
    console.log(this.state.dict)
  }


  render () {
    return (
    <SafeAreaView style={GlobalStyles.droidSafeArea}>
        <KeyboardAvoidingView 
        behavior={Platform.OS === "ios" ? "padding" : null} style={styles.container}>
            <Text style={[styles.text,styles.title]}>Compteur Calorique</Text>
            <FlatList 
              data={this.state.selections}
              renderItem={({item}) => <ActivitySetting name={item} update={this.handleSelection} />}
            />
            <View style={styles.result}>
                <Result/>
            </View>
        </KeyboardAvoidingView>
    </SafeAreaView>
    );
  }
}



const styles = StyleSheet.create({
    container:{
        flex:1
      },
      text:{
        color:'white',
        fontSize: 20,
        fontWeight: 'bold',
        textAlign: 'center'
      },
      title:{
        margin:10
      },
      result:{

      }

});