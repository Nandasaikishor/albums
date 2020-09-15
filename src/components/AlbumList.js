 import React, { Component, useState } from 'react';
import { View,Text } from 'react-native';   
class AlbumList extends Component {      
  state = { albums: [] } 
  componentDidMount() {
    fetch('https://rallycoding.herokuapp.com/api/music_albums')
      .then((response) => response.json())
      .then((json) => this.setState({albums : json})); 
  }
 

   
  render() { 
    console.log(this.state);
    return(
      <View><Text>Album list Component</Text></View>
    );
  }  
}

export default AlbumList;