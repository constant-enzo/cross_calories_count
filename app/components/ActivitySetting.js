import React from 'react';
import {Text, View, StyleSheet, Image, TextInput, TouchableOpacity} from 'react-native';
import images from "../assets/images/images"

export default class ActivitySetting extends React.Component {
  
    constructor(props){
      super(props)
      this.handler1=this.handler1.bind(this)
      this.handler2=this.handler2.bind(this)
      this.handler3=this.handler3.bind(this)
      this.state = {
        bgColor1:"gray",
        bgColor2:"gray",
        bgColor3:"gray"
      }
    }

    handler1(){
      if(this.state.bgColor1==="gray"){
        this.setState({bgColor1:"white"})
        this.setState({bgColor2:"gray"})
        this.setState({bgColor3:"gray"})
        this.props.update(this.props.name,1)
      }
    //unselected
    else{
        this.setState({bgColor1:"gray"})
      }
    }
    handler2(){
      if(this.state.bgColor2==="gray"){
        this.setState({bgColor2:"white"})
        this.setState({bgColor1:"gray"})
        this.setState({bgColor3:"gray"})
        this.props.update(this.props.name,2)
      }
    //unselected
    else{
        this.setState({bgColor2:"gray"})
      }
    }
    handler3(){
      if(this.state.bgColor3==="gray"){
        this.setState({bgColor3:"white"})
        this.setState({bgColor1:"gray"})
        this.setState({bgColor2:"gray"})
        this.props.update(this.props.name,3)
      }
    //unselected
    else{
        this.setState({bgColor3:"gray"})
      }
    }
    render(){
    return (
      
      <View>
        <Text style={styles.title}>{this.props.name}</Text>
        <View style={styles.container}>
            <View style={styles.image_container} >
                <Image
                style={styles.image}
                source={images[this.props.name]}
                />
            </View>
            <View style={styles.input_container}>
                <View>
                    <Text style={styles.text}>Intensité</Text>
                </View>
                <View style={styles.box_container}>
                    <TouchableOpacity onPress={this.handler1}>
                        <View style={[styles.square,{backgroundColor:this.state.bgColor1}]}>
                            <Text styte={styles.text}>Faible</Text>
                        </View>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={this.handler2}>
                        <View style={[styles.square,{backgroundColor:this.state.bgColor2}]}>
                            <Text styte={styles.text}>Moyenne</Text>
                        </View>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={this.handler3}>
                        <View style={[styles.square,{backgroundColor:this.state.bgColor3}]}>
                            <Text styte={styles.text}>Haute</Text>
                        </View>
                    </TouchableOpacity>
                    
                </View>
                    <View style={styles.time_container}>
                        <Text style={[styles.text,{textAlign:'left',flex:1, marginLeft:10}]}>Durée:</Text>
                        <TextInput 
                        style={{flex:3}}
                        keyboardType="number-pad" 
                        maxLength={3}
                        />
                        <Text style={[styles.text,{textAlign:'right',flex:1, marginRight:10}]}>mins</Text>
                    </View>
              </View>
          </View>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex:1,
    flexDirection:'row',
    margin:10
  },
  image_container:{
    flex:2,
    backgroundColor:"red"
  },
  image:{
    flex: 1,
    width: null,
    height: null,
    resizeMode: 'contain'
  },
  input_container:{
    flexDirection:'column',
    flex:7,
    backgroundColor:'blue'
  },
  input_title:{
    flex:0
  },
  text:{
    color:'white',
    fontSize: 15,
    fontWeight: 'bold',
    textAlign: 'center'
  },
  title:{
    color:'white',
    fontSize: 20,
    fontWeight: 'bold',
    textAlign: 'center'
  },
  square: {
    width: 100,
    height: 100,
    alignItems:'center',
    justifyContent:'center'
  },
  box_container:{
    flexDirection:'row',
    margin:10,
    justifyContent:"space-evenly"
  },
  time_container:{
    flexDirection:'row',
    justifyContent:'space-around',
    flex:1,
    flexWrap:'wrap'
  }
  
});