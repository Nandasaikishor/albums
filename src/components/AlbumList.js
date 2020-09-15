 import React, { Component } from 'react';
import { ScrollView } from 'react-native';   
import AlbumDetail from './AlbumDetail';
class AlbumList extends Component {      
  state = { albums: [] } 
  componentDidMount() {
    fetch('https://rallycoding.herokuapp.com/api/music_albums')
      .then((response) => response.json())
      .then((json) => this.setState({albums : json})); 
  }
 
  renderAlbums(){
  return  this.state.albums.map(album => <AlbumDetail key = {album.title} album = {album}/>); 
  }
   
  render() {  
    return(
      <ScrollView>
      {this.renderAlbums()}
      </ScrollView>
    );
  }  
}

export default AlbumList;