import React from "react";
import { Dimensions,  StyleSheet, View, Text, TextInput} from "react-native";

export default class PressableCircleInput extends React.Component {
  constructor(props){
    super(props);
    this.state = {
    text: ''
    };
  }
  
 
  handleInputChange = (text) => {
    // function to control user input => remove character from string if not a number
    if (/^\d+$/.test(text) || text === '') {
      this.setState({
        text: text
      });
      console.log("ok")
      kg_value=text
      if(kg_value==""){
        kg_value="0"
      }

      
      console.log("sending "+kg_value+ " to props")  
      this.props.action(kg_value)
    }
    
    
  }
  
  render() {
    return (
        <View
        style={styles.container}
        behavior={Platform.OS === "ios" ? "padding" : "height"}
        >
          <View style = {styles.circleShapeView}>
            <TextInput style={styles.circleText} 
            keyboardType="number-pad" 
            maxLength={3}
            onChangeText={this.handleInputChange}
            value={this.state.text}
            />
            <Text style={styles.text}> KG </Text>
          </View>
        </View>
  );
  }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        margin: 10
      },
    circleShapeView: {
        borderRadius: Math.round(Dimensions.get('window').width + Dimensions.get('window').height) / 2,
        width: Dimensions.get('window').width * 0.7,
        height: Dimensions.get('window').width * 0.7,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor:'gray'
    },
    text: {
        color:'white',
        fontSize: 30,
        fontWeight: 'bold'
    },
    circleText: {
      color:'white',
      fontSize: 90,
      fontWeight: 'bold'
  }
});
