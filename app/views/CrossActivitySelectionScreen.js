import React from "react";
import { Text, View, Button, ScrollView, StyleSheet, KeyboardAvoidingView, SafeAreaView, TouchableOpacity } from "react-native";
import { Tooltip } from 'react-native-elements';
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

  renderElement(){

    const { navigation } = this.props;

    if(this.state.selections_array.length=== 0)
       return (
      <Tooltip containerStyle={{backgroundColor:"#a9a9a9"}} pointerColor={"#a9a9a9"} popover={<Text>Sélectionner au moins une activité</Text>} withOverlay={false} >
        <TouchableOpacity style={styles.disabledSubmit} disabled={true}>
          <Text style={styles.submitText}> Suivant </Text>
        </TouchableOpacity>
      </Tooltip>
      )
    return (
      <TouchableOpacity style={styles.submit} onPress={() => navigation.navigate('CrossActivityInput',{selections: this.state.selections_array, kg: this.state.kg}) }>
        <Text style={styles.submitText}> Suivant </Text>
      </TouchableOpacity>
    )
 }

  render () {

    

    return (
    <SafeAreaView style={GlobalStyles.droidSafeArea}>
        <KeyboardAvoidingView 
        behavior={Platform.OS === "ios" ? "padding" : null} style={styles.container}>
            <View style={styles.topPadding}>
                <Text style={styles.text}>Sélectionner une ou plusieurs activités</Text>
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
              { this.renderElement() }
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
    },
    disabledSubmit: {
      marginRight:40,
      marginLeft:40,
      marginTop:10,
      paddingTop:20,
      paddingBottom:20,
      backgroundColor:'#a9a9a9',
      borderRadius:15,
      marginBottom:15,
    },
    submit : {
      marginRight:40,
      marginLeft:40,
      marginTop:10,
      paddingTop:20,
      paddingBottom:20,
      backgroundColor:'#00bfff',
      borderRadius:15,
      marginBottom:15

    },
    submitText:{
      color:'#fff',
      textAlign:'center',
      fontSize:20
  }
});