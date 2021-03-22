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
      this.props.action(text)
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
            autoFocus={true}
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
        backgroundColor:'darkgray'
    },
    text: {
        color:'white',
        fontSize: 30,
        fontWeight: 'bold',
        
    },
    circleText: {
      color:'white',
      fontSize: 90,
      fontWeight: 'bold',

  }
});
