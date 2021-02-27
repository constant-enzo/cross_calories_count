import React from "react";
import { StyleSheet, View, Text, Image, TouchableOpacity} from "react-native";
import images from "../assets/images/images"
import data_names from "../assets/data/data_names.json"

export default class ActivitySelector extends React.Component {
  constructor(props){
    super(props);
    this.handler = this.handler.bind(this)
    this.state = {
        bgColor:"gray"
    }
  }
  //handles color feedback to represent a selected activity
  handler() {
      //selected
    if(this.state.bgColor==="gray"){
        this.setState({bgColor:"white"})
    }
    //unselected
    else{
        this.setState({bgColor:"gray"})
    }
    this.props.update(this.props.name)
  }

  render() {
    return (        
        <View style={styles.activity_container}>
            <TouchableOpacity onPress={this.handler}>
                <Image
                style={[styles.square,{backgroundColor:this.state.bgColor}]}
                source={images[this.props.name]}
                />
            </TouchableOpacity>
            <Text style={styles.activity_name}>{data_names[this.props.name]}</Text>
        </View>
  );
  }
}

const styles = StyleSheet.create({
    activity_container:{
        alignItems:"center",
        margin:10
    },
    square: {
        width: 130,
        height: 130,
        justifyContent:"center",
        alignItems:"center",
    },
    image:{
        flex: 1,
        width: null,
        height: null,
        resizeMode: 'contain'
    },
    activity_name:{
        color:"white",
        fontSize:20
    },
});
