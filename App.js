 import React from 'react';
 import { View } from 'react-native';
 import AlbumList from './src/components/AlbumList';
 import Header from './src/components/Header';

 const App = () => (
   <View style={{flex: 1}}>
       <Header headerText = {'Albums'}/>
       <AlbumList/>
   </View> 
 );
 export default App;