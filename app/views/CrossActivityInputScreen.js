import React from "react";
import { View, Text,  StyleSheet, KeyboardAvoidingView, SafeAreaView, FlatList } from "react-native";
import GlobalStyles from '../../GlobalStyles';
import Result from "../components/Result"
import ActivitySetting from "../components/ActivitySetting"
import data from "../assets/data/data.json"

export default class CrossActivityInputScreen extends React.Component {
  constructor(props){
    super(props);
    const {  selections, kg }  = this.props.route.params;

    this.handleSelection= this.handleSelection.bind(this)
    this.state={
      selections: selections,
      dict: {},
      calories:0,
      kg: kg
    };
  }

  handleSelection(name,time,intensity){
    this.state.dict[name]=[time,intensity]
    this.calculateCalories()
  }

  
  calculateCalories(){
    
    calories=0
    kg = this.state.kg
    console.log("kg:"+kg)
    for (var name in this.state.dict) {
      time=this.state.dict[name][0]
      intensity=this.state.dict[name][1]
      met=this.findMET(name,intensity)
      calories+=met*kg*(time/60)
    }
    this.setState({calories: calories})
  }
  

  findMET(name,intensity){
    met=data[name][intensity]
    return met
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
              keyExtractor={(item, index) => index.toString()}
            />
            <View style={styles.result}>
                <Result calories={this.state.calories}/>
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