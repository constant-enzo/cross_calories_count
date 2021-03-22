import React from 'react';
import {Text, View, StyleSheet} from 'react-native';

export default class Result extends React.Component {
  constructor(props){
    super(props);
  }


  render(){
    return (
      <View >
        
        <View style={styles.frame}>
  
            <Text style={styles.text}> Dépense calorique : </Text>
            <Text style={styles.text}> {Math.ceil(this.props.calories)} kcal </Text>
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
    borderWidth: 3,
  },
  text:{
    color:'white',
    fontSize: 20,
    fontWeight: 'bold',
    textAlign: 'center'
  },
  text_title:{
    color:'white',
    fontSize: 10,
    fontWeight: 'bold',
  }
});