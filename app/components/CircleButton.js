import React from 'react';
import { Dimensions, View, StyleSheet, TouchableOpacity, Alert } from 'react-native';

export default class CircleButton extends React.Component {
  render(){
  
      return (
        <View style={styles.container}>
          <TouchableOpacity
            style = {styles.button}
            onPress = {this.props.onPress}
            disabled={this.props.disabled}
          >
            {this.props.children}
          </TouchableOpacity>
        </View>
      )
    }
}

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
    margin: 10
  },
  button: {
    backgroundColor: 'gray',
    justifyContent: 'center',
    alignContent: 'center',
    borderWidth: 3,
    borderRadius: Math.round(Dimensions.get('window').width + Dimensions.get('window').height) / 2,
    width: Dimensions.get('window').width * 0.2,
    height: Dimensions.get('window').width * 0.2,
  },
});