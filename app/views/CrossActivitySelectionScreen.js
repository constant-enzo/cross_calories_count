import React from "react";
import { Text, View, Button, ScrollView, StyleSheet, KeyboardAvoidingView, SafeAreaView } from "react-native";
import GlobalStyles from '../../GlobalStyles';
import ActivitySelector from "../components/ActivitySelector";
import CircleButton from "../components/CircleButton";

export default class CrossActivitySelectionScreen extends React.Component {
  constructor(props){
    super(props);
    const { kg } = this.props.route.params;
    this.handler = this.handler.bind(this)
    this.state = {
      selections_array: [],
      kg: kg
    };
  }

  handler(text){
    if(this.state.selections_array.includes(text)){
      this.state.selections_array = this.state.selections_array.filter(e => e !== text);
    }
    else{
      this.state.selections_array.push(text)
    }
    //temporary method to update component
    this.setState({selections_array: this.state.selections_array})
  }
  render () {

    const { navigation } = this.props;

    return (
    <SafeAreaView style={GlobalStyles.droidSafeArea}>
        <KeyboardAvoidingView 
        behavior={Platform.OS === "ios" ? "padding" : null} style={styles.container}>
            <View style={styles.topPadding}>
                <Text style={styles.text}>Select one or more activity</Text>
            </View>
            <ScrollView style={styles.activities}>
                <View style={styles.activities_row}>
                    <ActivitySelector name="bicycling" update={this.handler}/>
                    <ActivitySelector name="ropeJumping" update={this.handler}/>
                </View>
                
                <View style={styles.activities_row}>
                    <ActivitySelector name="boxing" update={this.handler}/>
                    <ActivitySelector name="weightLifting" update={this.handler}/>
                </View>
                {/*
                <View style={styles.activities_row}>
                    <ActivitySelector showname="Biking" name="Tennis" update={this.handler}/>
                    <ActivitySelector showname="Biking" name="Running" update={this.handler}/>
                </View>
                <View style={styles.activities_row}>
                    <ActivitySelector showname="Biking" name="Football" update={this.handler}/>
                    <ActivitySelector showname="Biking" name="Basketball" update={this.handler}/>
                </View>
                <View style={styles.activities_row}>
                    <ActivitySelector showname="Biking" name="Rugby" update={this.handler}/>
                    <ActivitySelector showname="Biking" name="Hockey" update={this.handler}/>
                </View>
                */}
            </ScrollView>
            <View>
                <CircleButton
                onPress={() => navigation.navigate('CrossActivityInput',{selections: this.state.selections_array, kg: this.state.kg})}
                disabled={this.state.selections_array.length=== 0? true : false}
                >
                    <Text>Go!</Text>
                </CircleButton>
            </View>
        </KeyboardAvoidingView>
    </SafeAreaView>
    );
  }
}



const styles = StyleSheet.create({
    activities:{
      flex:1,
      flexDirection:"column",
      marginTop:10
    },
    activities_row:{
      flex:1,
      flexDirection:"row",
      justifyContent:"space-evenly"
    },
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
        paddingTop : 20
    },
    center:{
      alignItems:'center',
      justifyContent:'center'
    }
});