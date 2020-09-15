 import React from 'react';
 import { View } from 'react-native';
 import AlbumList from './src/components/AlbumList';
 import Header from './src/components/Header';

 const App = () => (
   <View>
       <Header headerText = {'Albums'}/>
       <AlbumList/>
   </View> 
 );
 export default App;