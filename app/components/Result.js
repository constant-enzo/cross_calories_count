import React from 'react';
import {Text, View, StyleSheet} from 'react-native';

export default class Result extends React.Component {
  constructor(props){
    super(props);
  }


  render(){
    return (
      <View >
        <Text style={styles.text}> Résultat : </Text>
        <View style={styles.frame}>
          <View style={styles.second_frame}>
            <Text>Votre dépense calorique: </Text>
            <Text> {Math.ceil(this.props.calories)} kcal </Text>
          </View>
        </View>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  frame:{
    marginLeft:10,
    marginRight:10,
    margin:10,
    borderWidth: 2
  },
  second_frame:{
    marginLeft:10,
    marginRight:10,
    margin:10,
  },
  text:{
    color:'white',
    fontSize: 20,
    fontWeight: 'bold',
    textAlign: 'center'
  }
  
});